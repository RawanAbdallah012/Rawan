import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import './css/projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [cardImageIndices, setCardImageIndices] = useState({});
    const [showQuery, setShowQuery] = useState(false);

    const projects = [
        {
            id: 3,
            title: "Power BI Project",
            image: "/project-1.png",
            images: ["/project-1.png", "/project-2.png", "/project-3.png"],
            skills: ["Team Collaboration","Google Sheets","Apps Script","Power BI Service", "Data Modeling", "DAX"],
            description: `A comprehensive data pipeline project that demonstrates end-to-end data integration from Google Sheets to Power BI Service. This project showcases expertise in data extraction, transformation, and visualization by connecting Google Sheets as a data source, performing data cleaning and transformation operations in Power BI Desktop, and publishing interactive dashboards to Power BI Service for enterprise-wide accessibility and real-time data insights.

KEY FEATURES

Google Sheets Integration: Established seamless connection between Power BI and Google Sheets, enabling automatic data refresh using Power BI Service. Configured authentication and data source connections to pull data directly from cloud-based spreadsheets.

Data Cleaning & Transformation: Implemented comprehensive data cleaning workflows in Power BI Query Editor, including handling missing values, standardizing data formats, removing duplicates, and correcting data inconsistencies to ensure high-quality datasets ready for analysis.

Power BI Desktop Modeling: Developed sophisticated data models with proper relationships, hierarchies, and calculated measures using DAX (Data Analysis Expressions). Created time intelligence functions, aggregations, and advanced calculations for comprehensive business insights.

Power BI Service Deployment: Published interactive dashboards to Power BI Service, enabling cloud-based access, automated data refresh schedules, and sharing capabilities. Configured data gateways and refresh schedules to ensure team members always have access to the latest data.

TECHNICAL APPROACH

The project leveraged Power BI's native Google Sheets connector to establish real-time data connections, eliminating manual data export/import processes. Power Query Editor was utilized extensively for data transformation, applying advanced M language functions for complex data manipulations. The data model was optimized with proper relationships and star schema design principles. DAX was employed to create sophisticated calculations and time-based analytics. Finally, the solution was deployed to Power BI Service with configured refresh schedules and appropriate access permissions for secure enterprise-wide distribution.

BUSINESS IMPACT

This dashboard helps in tracking the performance of the team and the projects, enabling faster decision-making processes. The automated refresh schedules guarantee data accuracy and timeliness, while the cloud-based deployment in Power BI Service provides accessibility from any device, fostering a data-driven culture across the organization.`
        },
        {
            id: 2,
            title: "Data Analyst Jobs Analysis",
            image: "/data-analyst-jobs-1.png",
            images: ["/data-analyst-jobs-1.png", "/data-analyst-jobs-2.png", "/data-analyst-jobs-3.png"],
            skills: ["Pandas", "Matplotlib", "Numpy", "EDA", "GitHub"],
            description: `A comprehensive data analysis project that explores data analyst job opportunities from Glassdoor, providing valuable insights into the job market landscape. This project analyzes key metrics including salaries, company profiles, required skills, location trends, and industry demands to help job seekers and recruiters understand market dynamics and make data-driven career decisions.

GitHub Repository: https://github.com/RawanAbdallah/Data-Analyst-Jobs-Glassdoor

KEY FEATURES

Data Collection & Preprocessing: Gathered and cleaned job listing data from Glassdoor, ensuring data quality through systematic handling of missing values, duplicates, and inconsistent entries to create a reliable analysis dataset.

Exploratory Data Analysis: Conducted comprehensive EDA to uncover patterns in salary distributions across different locations, companies, and experience levels, identifying key factors that influence compensation in the data analyst field.

Market Trends Analysis: Analyzed emerging trends in required skills, popular tools and technologies, company size preferences, and geographic distribution of opportunities to provide actionable insights for career planning.

Automated Visualization: Leveraged AutoViz for automated exploratory data visualization, generating comprehensive charts and plots including salary distributions, skill frequency analysis, company rankings, and geographic heatmaps.

Statistical Insights: Performed statistical analysis to identify correlations between salary and various factors such as company size, location, required experience, and technical skills, revealing market patterns and compensation trends.

TECHNICAL APPROACH

The project utilized Python with Pandas for data manipulation and cleaning, ensuring high-quality datasets ready for analysis. AutoViz was employed for automated exploratory data visualization, generating comprehensive visual insights without manual coding. Statistical analysis techniques were applied to identify significant patterns and correlations in the job market data, providing a data-driven understanding of industry demands and compensation structures.

BUSINESS IMPACT

This analysis provides valuable insights for multiple stakeholders: job seekers can identify high-paying opportunities, in-demand skills, and optimal locations for their career goals; recruiters gain market intelligence on competitive salaries and skill requirements; and HR professionals can benchmark their offerings against market standards. The project empowers data-driven decision-making in career planning and talent acquisition strategies.`
        },
        {
            id: 1,
            title: "Credit Risk Dashboard",
            image: "/credit-risk-dashboard.png",
            skills: ["Power BI", "Python(Pandas)", "GitHub","Data Cleaning"],   
            description: `A comprehensive credit risk analysis project that leverages advanced data analytics to assess and predict loan default probabilities. This project involved analyzing a dataset of 32,581 loan applications to identify key risk factors and build an interactive Power BI dashboard for data-driven decision making.
GitHub Repository: https://github.com/RawanAbdallah/Credit-Risk
KEY FEATURES

Data Cleaning & Preprocessing: Handled missing values, identified and managed outliers using IQR methodology, and removed duplicate entries to ensure data quality.

Exploratory Data Analysis: Conducted univariate and bivariate analysis to uncover patterns and relationships in borrower characteristics, loan attributes, and default rates.

Statistical Insights: Analyzed correlations between variables including person age, income, employment length, loan amount, interest rates, and credit history length.

Advanced Visualizations: Created comprehensive visualizations using Python (Pandas, Matplotlib, Seaborn) and AutoViz for automated EDA, including distribution plots, correlation heatmaps, and categorical analysis.

Interactive Dashboard: Developed a professional Power BI dashboard that provides real-time insights into loan performance metrics, risk assessment, and borrower segmentation.

TECHNICAL APPROACH

The project employed statistical techniques to handle data quality issues, including median imputation for missing employment length values and systematic outlier detection for income and credit history variables. The analysis revealed critical insights about default patterns across different loan grades, borrower homeownership status, and loan intent categories.

BUSINESS IMPACT

This dashboard enables financial institutions to make informed lending decisions by identifying high-risk applicants, optimizing loan interest rates based on risk profiles, and improving overall portfolio management through data-driven risk assessment strategies.`
        },
        {
            id: 4,
            title: "Analysis and Reshape data using SQL",
            image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
            skills: ["SQL(CTE, Window function, Joins, String Functions)"],
            query: `WITH ServiceData AS (
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
OPTION (MAXRECURSION 0);`,
            description: `Clean and analyze data to extract organizational needs. Reshape data to match Odoo template.

KEY FEATURES

Data Cleaning & Analysis: Clean and analyze data to extract organizational needs, identifying key insights and patterns from raw datasets using advanced SQL techniques.

Data Reshaping: Reshape data to match Odoo template requirements, ensuring compatibility with the target system format and data model.

SQL Advanced Functions: Leveraged Common Table Expressions (CTEs), Window Functions, Joins, and String Functions to perform complex data transformations and aggregations efficiently.

TECHNICAL APPROACH

The project utilized advanced SQL capabilities including CTEs for organizing complex queries, Window Functions for analytical calculations and ranking operations, various Join types for combining data from multiple sources, and String Functions for data cleaning and formatting. The data transformation process ensured data integrity and compliance with Odoo's data model requirements.

BUSINESS IMPACT

This project enables organizations to efficiently transform and migrate data to Odoo ERP system, reducing manual data entry errors and ensuring data consistency. The automated SQL-based transformation process saves time and resources while maintaining data quality standards, supporting smooth system integration and improved operational efficiency.`
        }
    ];

    // Allow body scroll when modal is open (modal will be scrollable)
    useEffect(() => {
        // Don't lock body scroll - allow modal to scroll instead
        return () => {
            // Cleanup if needed
        };
    }, [selectedProject]);

    // Auto-switch images for projects with multiple images in modal
    useEffect(() => {
        if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
            setCurrentImageIndex(0);
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
            }, 4000); // Switch every 4 seconds

            return () => clearInterval(interval);
        } else {
            setCurrentImageIndex(0);
        }
    }, [selectedProject]);

    // Auto-switch images for project cards with multiple images
    useEffect(() => {
        // Initialize all indices
        const initialIndices = {};
        projects.forEach((project) => {
            if (project.images && project.images.length > 1) {
                initialIndices[project.id] = 0;
            }
        });
        setCardImageIndices(initialIndices);

        const intervals = {};
        
        projects.forEach((project) => {
            if (project.images && project.images.length > 1) {
                intervals[project.id] = setInterval(() => {
                    setCardImageIndices((prev) => {
                        const currentIndex = prev[project.id] !== undefined ? prev[project.id] : 0;
                        return {
                            ...prev,
                            [project.id]: (currentIndex + 1) % project.images.length
                        };
                    });
                }, 4000); // Switch every 4 seconds
            }
        });

        return () => {
            Object.values(intervals).forEach(interval => clearInterval(interval));
        };
    }, [projects]); // Include projects dependency

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setShowQuery(false);
    };

    const handleViewQuery = () => {
        setShowQuery(true);
    };

    const handleCloseQuery = () => {
        setShowQuery(false);
    };

    const handleBackdropClick = (e) => {
        // Only close if clicking directly on the overlay, not inside the modal
        if (e.target === e.currentTarget || e.target.classList.contains('project-modal-overlay')) {
            handleCloseModal();
        }
    };

    const handleModalClick = (e) => {
        // Prevent closing when clicking inside the modal
        e.stopPropagation();
    };

    return (
        <div className="col-lg-9 col-md-9 col-12">
            <div className="projects-section">
                <div className="projects-header">
                    <h2>OUR PROJECTS</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="project-card"
                            onClick={() => handleProjectClick(project)}
                        >
                            <div className="project-image-container">
                                {project.images && project.images.length > 1 ? (
                                    <img 
                                        src={project.images[cardImageIndices[project.id] || 0]} 
                                        alt={`${project.title} ${(cardImageIndices[project.id] || 0) + 1}`} 
                                        className="project-image project-image-slide"
                                    />
                                ) : (
                                    <img src={project.image} alt={project.title} className="project-image" />
                                )}
                                <div className="project-overlay">
                                    <div className="project-skills">
                                        {project.skills.map((skill, index) => (
                                            <span key={index} className="project-skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && selectedProject.description && (
                <div className="project-modal-overlay" onClick={handleBackdropClick}>
                    <div className="project-modal" onClick={handleModalClick}>
                        <button className="project-modal-close" onClick={handleCloseModal}>
                            <MdClose />
                        </button>
                        <div className="project-modal-content">
                            <div className="project-modal-header">
                                <h2>{selectedProject.title}</h2>
                                <div className="project-modal-skills">
                                    {selectedProject.skills.map((skill, index) => (
                                        <span key={index} className="project-modal-skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-modal-body">
                                {(() => {
                                    // Split description into intro (before KEY FEATURES) and main content (KEY FEATURES onwards)
                                    const sections = selectedProject.description ? selectedProject.description.split(/\n\n+/).filter(section => section && section.trim()) : [];
                                    const keyFeaturesIndex = sections.findIndex(section => {
                                        const trimmed = section.trim();
                                        const upperTrimmed = trimmed.toUpperCase();
                                        return trimmed === 'KEY FEATURES' || 
                                               (upperTrimmed === trimmed && trimmed.includes('KEY') && trimmed.includes('FEATURES'));
                                    });
                                    
                                    const introSections = keyFeaturesIndex > 0 ? sections.slice(0, keyFeaturesIndex) : [];
                                    const mainSections = keyFeaturesIndex >= 0 ? sections.slice(keyFeaturesIndex) : sections;
                                    
                                    const renderSection = (section, sectionIndex) => {
                                        const trimmedSection = section.trim();
                                        
                                        if (!trimmedSection || trimmedSection.length === 0) {
                                            return null;
                                        }
                                        
                                        // Check if section is a title (all uppercase, short, no lowercase letters, no punctuation)
                                        const hasNoLowerCase = !trimmedSection.match(/[a-z]/);
                                        const hasNoPunctuation = !trimmedSection.match(/[.,:;!?]/);
                                        const isTitle = trimmedSection === trimmedSection.toUpperCase() && 
                                                       hasNoLowerCase &&
                                                       hasNoPunctuation &&
                                                       trimmedSection.length >= 3 && 
                                                       trimmedSection.length <= 50;
                                        
                                        if (isTitle) {
                                            return <h3 key={sectionIndex} className="modal-section-title">{trimmedSection}</h3>;
                                        }
                                        
                                        // Split section into individual lines
                                        const lines = trimmedSection.split('\n')
                                            .map(line => line.trim())
                                            .filter(line => line && line.length > 0);
                                        
                                        if (lines.length === 0) {
                                            return null;
                                        }
                                        
                                        return (
                                            <div key={sectionIndex} style={{ marginBottom: '20px' }}>
                                                {lines.map((line, lineIndex) => {
                                                    if (!line || line.length === 0) {
                                                        return null;
                                                    }
                                                    
                                                    // Check if line matches feature item format: "Title: Description"
                                                    const colonIndex = line.indexOf(':');
                                                    if (colonIndex > 0 && colonIndex < 80) {
                                                        const beforeColon = line.substring(0, colonIndex).trim();
                                                        const afterColon = line.substring(colonIndex + 1).trim();
                                                        
                                                        // Check if afterColon is a URL
                                                        const urlPattern = /^https?:\/\/[^\s]+$/;
                                                        const isUrl = urlPattern.test(afterColon);
                                                        
                                                        // Only format as feature if it looks like "Title: Description"
                                                        if (beforeColon.length > 0 && 
                                                            beforeColon.length < 50 && 
                                                            afterColon.length > 10) {
                                                            return (
                                                                <p key={lineIndex} className="modal-feature-item" style={{ marginBottom: '12px', display: 'block' }}>
                                                                    <strong>{beforeColon}:</strong> {isUrl ? (
                                                                        <a href={afterColon} target="_blank" rel="noopener noreferrer" className="project-github-link">
                                                                            {afterColon}
                                                                        </a>
                                                                    ) : (
                                                                        afterColon
                                                                    )}
                                                                </p>
                                                            );
                                                        }
                                                    }
                                                    
                                                    // Check if entire line is a URL
                                                    const urlPattern = /^https?:\/\/[^\s]+$/;
                                                    if (urlPattern.test(line)) {
                                                        return (
                                                            <p key={lineIndex} className="modal-paragraph" style={{ marginBottom: '15px', display: 'block' }}>
                                                                <a href={line} target="_blank" rel="noopener noreferrer" className="project-github-link">
                                                                    {line}
                                                                </a>
                                                            </p>
                                                        );
                                                    }
                                                    
                                                    // Regular paragraph - always render this as fallback
                                                    return (
                                                        <p key={lineIndex} className="modal-paragraph" style={{ marginBottom: '15px', display: 'block' }}>
                                                            {line}
                                                        </p>
                                                    );
                                                })}
                                            </div>
                                        );
                                    };
                                    
                                    return (
                                        <>
                                            {/* Image Section: Image on left, Intro on right, Description below */}
                                            <div className="project-modal-image-section">
                                                {/* Top row: Image on left, Intro on right */}
                                                <div className="project-modal-image-row">
                                                    <div className="project-modal-image">
                                                        {selectedProject.images && selectedProject.images.length > 1 ? (
                                                            <>
                                                                <img 
                                                                    src={selectedProject.images[currentImageIndex]} 
                                                                    alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                                                                    className="project-modal-image-slide"
                                                                />
                                                                <div className="project-image-indicators">
                                                                    {selectedProject.images.map((_, index) => (
                                                                        <button
                                                                            key={index}
                                                                            className={`image-indicator ${index === currentImageIndex ? 'active' : ''}`}
                                                                            onClick={() => setCurrentImageIndex(index)}
                                                                            aria-label={`Go to image ${index + 1}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <img src={selectedProject.image} alt={selectedProject.title} />
                                                        )}
                                                    </div>
                                                    
                                                    {/* Intro text on right side of image */}
                                                    {introSections.length > 0 && (
                                                        <div className="project-modal-intro">
                                                            {introSections.map((section, index) => renderSection(section, index))}
                                                            {selectedProject.id === 4 && selectedProject.query && (
                                                                <button 
                                                                    className="view-query-button"
                                                                    onClick={handleViewQuery}
                                                                    style={{
                                                                        padding: '10px 24px',
                                                                        backgroundColor: '#007bff',
                                                                        color: 'white',
                                                                        border: 'none',
                                                                        borderRadius: '6px',
                                                                        cursor: 'pointer',
                                                                        fontSize: '15px',
                                                                        fontWeight: '500',
                                                                        marginTop: '20px',
                                                                        transition: 'all 0.3s ease',
                                                                        boxShadow: '0 2px 8px rgba(0, 123, 255, 0.3)'
                                                                    }}
                                                                >
                                                                    View Query
                                                                </button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {/* Description below (KEY FEATURES onwards) */}
                                                {mainSections.length > 0 && (
                                                    <div className="project-modal-description-wrapper">
                                                        <div className="project-modal-description">
                                                            {mainSections.map((section, index) => renderSection(section, index + introSections.length))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Query Modal */}
            {showQuery && selectedProject && selectedProject.id === 4 && selectedProject.query && (
                <div className="project-modal-overlay" onClick={handleCloseQuery}>
                    <div className="project-modal query-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90%', maxHeight: '90vh' }}>
                        <button className="project-modal-close" onClick={handleCloseQuery}>
                            <MdClose />
                        </button>
                        <div className="project-modal-content">
                            <div className="project-modal-header">
                                <h2>SQL Query</h2>
                            </div>
                            <div className="project-modal-body" style={{ padding: '20px', overflow: 'auto' }}>
                                <pre style={{
                                    backgroundColor: '#1e1e1e',
                                    color: '#d4d4d4',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    overflow: 'auto',
                                    fontSize: '13px',
                                    lineHeight: '1.6',
                                    fontFamily: "'Courier New', Courier, monospace",
                                    whiteSpace: 'pre-wrap',
                                    wordWrap: 'break-word',
                                    border: '1px solid #3c3c3c',
                                    maxHeight: '70vh',
                                    margin: 0
                                }}>
                                    <code style={{ color: '#d4d4d4' }}>{selectedProject.query}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;