WITH ServiceData AS (
    SELECT 
        s.Id AS ServiceId,
        s.Type,
        s.ServiceNumber,
        s.StartDate,
        s.EndDate,
        s.IsEmergency,
        s.CaseId,
        s.ProjectId,
        s.UnitCost AS amount,
        s.ServiceCategoryId,
        s.Notes,
        -- Consolidated CASE statement for product_category_id
        CASE sc.Name
            WHEN N'تجهيز عروسة' THEN N'All/CM/تجهيز عروسة'
            WHEN N'سلة غذائية' THEN N'All/CM/غذاء'
            WHEN N'عملية جراحية' THEN N'All/CM/عملية جراحية'
            WHEN N'جهاز تعويضي' THEN N'All/CM/جهاز تعويضي'
            WHEN N'كفالة صحية' THEN N'All/CM/كفالة صحية'
            WHEN N'مشروع صغير' THEN N'All/CM/مشروع صغير'
            WHEN N'سداد دين' THEN N'All/CM/سداد دين'
            WHEN N'دفع ايجار' THEN N'All/CM/دفع ايجار'
            WHEN N'ترميم منزل' THEN N'All/CM/مسكن'
            WHEN N'كفالة يتيم' THEN N'All/CM/كفالة يتيم'
            WHEN N'كسوة' THEN N'All/CM/كسوة'
            WHEN N'أغطية' THEN N'All/CM/اغطية'
            WHEN N'أسقف' THEN N'All/CM/مسكن'
            WHEN N'كفالة تعليمية' THEN N'All/CM/كفالة تعليمية'
            WHEN N'مفروشات' THEN N'All/CM/مستلزمات مسكن'
            WHEN N'جهاز كهربائي' THEN N'All/CM/مستلزمات مسكن'
            WHEN N'وصلة مياه' THEN N'All/CM/مسكن'
            WHEN N'اعانة مالية' THEN N'All/CM/اعانة مالية'
            WHEN N'لحوم أضاحي' THEN N'All/CM/غذاء'
            WHEN N'اطعام' THEN N'All/CM/غذاء'
            WHEN N'شنط مدرسية' THEN N'All/CM/كفالة تعليمية'
            WHEN N'مستلزمات مسكن' THEN N'All/CM/مستلزمات مسكن'
            ELSE CASE 
                WHEN sc.Name IN (N'كرتونة غذائية', N'كرتونة غذائية2', N'كرتونة غذائية 1') THEN N'All/CM/غذاء'
                ELSE ''
            END
        END AS product_category_id,
        sc.Name AS category_name,
        s.Type AS product_id_raw,
        DATEDIFF(MONTH, s.StartDate, s.EndDate) + 1 AS TotalMonths
    FROM Services s
    LEFT JOIN ServiceCategories sc ON s.ServiceCategoryId = sc.Id
    WHERE s.ServiceNumber > 0
        AND s.StartDate IS NOT NULL
        AND s.EndDate IS NOT NULL
        AND s.StartDate <= s.EndDate
        AND (s.IsDeleted = 'FALSE' OR s.IsDeleted IS NULL)
        AND s.IsEmergency = 'TRUE' -- Apply emergency filter early
),
AllFeedbacks AS (
    SELECT 
        f.ServiceId,
        f.FeedbackStatusId,
        f.UnitsNumber,
        f.ActualCost,
        f.Notes,
        f.OperationNumber,
        f.CreationTime,
        f.AccreditationDate,
        f.LastModifierUserId,
        f.CreatorUserId,
        -- Corrected implementation date calculation
        CASE
            WHEN f.IplementationDate IS NULL THEN f.CreationTime
            WHEN f.IplementationDate = '1444-10-16 00:00:00.0000000' THEN f.CreationTime
            WHEN f.IplementationDate = '0001-01-01' THEN f.AccreditationDate
            WHEN YEAR(f.IplementationDate) IN (23, 2033, 223, 2003) THEN DATEFROMPARTS(2023, MONTH(f.IplementationDate), DAY(f.IplementationDate))
            WHEN YEAR(f.IplementationDate) = 202 THEN DATEFROMPARTS(2022, MONTH(f.IplementationDate), DAY(f.IplementationDate))
            WHEN YEAR(f.IplementationDate) IN (204, 24, 224, 2924) THEN DATEFROMPARTS(2024, MONTH(f.IplementationDate), DAY(f.IplementationDate))
            ELSE f.IplementationDate
        END AS CorrectedImplementationDate,
        ROW_NUMBER() OVER (
            PARTITION BY f.ServiceId 
            ORDER BY 
                CASE
                    WHEN f.IplementationDate IS NULL THEN f.CreationTime
                    WHEN f.IplementationDate = '1444-10-16 00:00:00.0000000' THEN f.CreationTime
                    WHEN f.IplementationDate = '0001-01-01' THEN f.AccreditationDate
                    WHEN YEAR(f.IplementationDate) IN (23, 2033, 223, 2003) THEN DATEFROMPARTS(2023, MONTH(f.IplementationDate), DAY(f.IplementationDate))
                    WHEN YEAR(f.IplementationDate) = 202 THEN DATEFROMPARTS(2022, MONTH(f.IplementationDate), DAY(f.IplementationDate))
                    WHEN YEAR(f.IplementationDate) IN (204, 24, 224, 2924) THEN DATEFROMPARTS(2024, MONTH(f.IplementationDate), DAY(f.IplementationDate))
                    ELSE f.IplementationDate
                END
        ) AS FeedbackRank
    FROM Feedbacks f
    WHERE (f.IsDeleted = 'FALSE' OR f.IsDeleted IS NULL)
),
FeedbackCount AS (
    SELECT 
        ServiceId,
        COUNT(*) AS TotalFeedbacks
    FROM AllFeedbacks
    GROUP BY ServiceId
),
ServiceWithMaxCount AS (
    SELECT 
        sd.*,
        COALESCE(fc.TotalFeedbacks, 0) AS TotalFeedbacks,
        CASE 
            WHEN COALESCE(fc.TotalFeedbacks, 0) > sd.ServiceNumber 
            THEN COALESCE(fc.TotalFeedbacks, 0)
            ELSE sd.ServiceNumber
        END AS MaxCount
    FROM ServiceData sd
    LEFT JOIN FeedbackCount fc ON sd.ServiceId = fc.ServiceId
),
-- Optimized recursive CTE with better structure
MonthSequence AS (
    SELECT 
        ServiceId,
        Type,
        ServiceNumber,
        StartDate,
        EndDate,
        IsEmergency,
        CaseId,
        ProjectId,
        amount,
        ServiceCategoryId,
        Notes,
        product_category_id,
        category_name,
        product_id_raw,
        TotalMonths,
        TotalFeedbacks,
        MaxCount,
        StartDate AS CurrentMonth,
        1 AS ServiceCounter
    FROM ServiceWithMaxCount
    
    UNION ALL
    
    SELECT 
        ms.ServiceId,
        ms.Type,
        ms.ServiceNumber,
        ms.StartDate,
        ms.EndDate,
        ms.IsEmergency,
        ms.CaseId,
        ms.ProjectId,
        ms.amount,
        ms.ServiceCategoryId,
        ms.Notes,
        ms.product_category_id,
        ms.category_name,
        ms.product_id_raw,
        ms.TotalMonths,
        ms.TotalFeedbacks,
        ms.MaxCount,
        CASE 
            WHEN ms.ServiceCounter + 1 = ms.ServiceNumber THEN ms.EndDate
            WHEN DATEADD(MONTH, ms.ServiceCounter, ms.StartDate) <= ms.EndDate 
                THEN DATEADD(MONTH, ms.ServiceCounter, ms.StartDate)
            ELSE DATEADD(MONTH, ms.ServiceCounter % ms.TotalMonths, ms.StartDate)
        END AS CurrentMonth,
        ms.ServiceCounter + 1 AS ServiceCounter
    FROM MonthSequence ms
    WHERE ms.ServiceCounter < ms.MaxCount
)
-- Final SELECT with optimizations
SELECT 
    '__export__.res_case_20240519_' + c.CaseNumber AS [External ID],
    ms.product_category_id,
    TRIM(ss.value) AS product_id,
    CAST(ms.CurrentMonth AS DATE) AS expected_date,
    'Normal' AS implementation_type,
    -- Simplified project name mapping
    CASE p.Name
        WHEN N'رمضان 2025' THEN 'Ramdan 2025'
        WHEN N'صناع الحياة مصر' THEN 'Basic Need'
        WHEN N'رزق حلال' THEN 'Rizq Halal Team'
        WHEN N'مشروع دار وسلامة' THEN 'Dar W Salama Project Team'
        WHEN N'مشروع دشنا' THEN 'Deshna Project'
        WHEN N'مشروع ساويرس' THEN 'Sawiris Project'
        WHEN N'مشروع قفط' THEN 'Qift Project'
        WHEN N'فرصة ' THEN 'Forsa'
        WHEN N'عيشة وهوية' THEN 'Aisha w Hawiya'
        WHEN N'المواطنة' THEN 'Mowatana'
        WHEN N'المساعدات الانسانية' THEN 'Humanitarian Assistance Team'
        ELSE ''
    END AS execution_team_ids,
    CASE
        WHEN ms.IsEmergency = 'TRUE' 
            AND (af.LastModifierUserId IN (1, 13, 94, 101, 102, 104) OR af.LastModifierUserId IS NULL) 
            AND (af.CreatorUserId IN (1, 13, 94, 101, 102, 104) OR af.CreatorUserId IS NULL) 
            AND (af.OperationNumber = '' OR af.OperationNumber IS NULL)
        THEN 'Emergency Team'
        ELSE ''
    END AS IsEmergency,
    af.UnitsNumber AS quantity,
    ms.amount * af.UnitsNumber AS amount,
    'Self' AS implementation_receiver,
    af.ActualCost AS actual_amount,
    CASE 
        WHEN af.ActualCost IS NOT NULL 
        THEN af.ActualCost / (LEN(ms.product_id_raw) - LEN(REPLACE(ms.product_id_raw, ',', '')) + 1)
        ELSE NULL
    END AS actual_amount_per_product,
    CAST(af.CorrectedImplementationDate AS DATE) AS done_date,
    af.CreationTime,
    CASE 
        WHEN af.ServiceId IS NOT NULL AND af.FeedbackStatusId IN (1, 2, 11, 33, 35, 36, 37, 38) THEN 'done'
        WHEN af.ServiceId IS NOT NULL AND af.FeedbackStatusId IN (9, 10, 24, 34, 39, 40, 41, 42, 43, 44) THEN 'postpone'
        WHEN af.ServiceId IS NOT NULL AND af.FeedbackStatusId IN (3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 40, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66) THEN 'rejected'
        ELSE 'draft'
    END AS state,
    ms.Type,
    CASE 
        WHEN af.FeedbackStatusId IS NOT NULL THEN fs.Name + ' ' + af.Notes
        ELSE ms.Notes
    END AS notes
FROM MonthSequence ms
CROSS APPLY STRING_SPLIT(ms.product_id_raw, ',') ss
INNER JOIN Cases c ON ms.CaseId = c.Id
LEFT JOIN Projects p ON ms.ProjectId = p.Id
LEFT JOIN AllFeedbacks af ON ms.ServiceId = af.ServiceId AND ms.ServiceCounter = af.FeedbackRank
LEFT JOIN FeedbackStatuses fs ON af.FeedbackStatusId = fs.Id
WHERE 
    (af.ServiceId IS NULL OR af.FeedbackStatusId IS NOT NULL) -- Ensure valid feedback or no feedback
    AND (
        (p.Name = N'صناع الحياة مصر' AND af.FeedbackStatusId IN (1, 2, 11, 33, 35, 36, 37, 38))
        OR (p.Name = N'رمضان 2025' AND af.FeedbackStatusId IN (1, 2, 11, 33, 35, 36, 37, 38))
        OR (p.Name NOT IN (N'صناع الحياة مصر', N'رمضان 2025'))
    )
OPTION (MAXRECURSION 0);