import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './css/services.css';

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const services = [
        {
            id: 1,
            number: "01",
            title: "Data Analysis & Visualization",
            skills: [
                "Power BI Service & Power BI Desktop",
                "Data Modeling",
                "Collecting data from multiple sources",
                "Power Query & DAX",
                "Pandas & Numpy",
                "Matplotlib & Seaborn",
                "Statistical Analysis"
            ],
            description: "Transform complex datasets into actionable insights through advanced statistical analysis and compelling visual storytelling."
        },
        {
            id: 2,
            number: "02",
            title: "Business Intelligence",
            skills: [
                "Dashboard Development",
                "KPI Tracking",
                "Reporting Automation",
                "Domain Knowledge"
            ],
            description: "Build comprehensive BI solutions that empower data-driven decision making across your organization."
        },
        {
            id: 3,
            number: "03",
            title: "Predictive Analytics",
            skills: [
                "Machine Learning",
                "Forecasting Models",
                "Risk Assessment"
            ],
            description: "Leverage advanced algorithms to predict trends, identify opportunities, and mitigate risks before they impact your business."
        },
        {
            id: 4,
            number: "04",
            title: "Database Management",
            skills: [
                "SQL Optimization",
                "Advanced SQL Queries",
                "Data Warehousing",
                "ETL Processes"
            ],
            description: "Design and maintain robust database systems that ensure data integrity, accessibility, and optimal performance."

        },
        {
            id: 5,
            number: "05",
            title: "Data Pipeline",
            skills: [
                "Odoo",
                "Python",
                "GitHub",
                "API Integration",
                "Warehouse",
                "Team Collaboration",
               
            ],
            description: "Design Data Pipeline to Get data from Kobot then load it in datawarehouse and make it ready for Uploading to Odoo."
        },
        {
            id: 6,
            number: "06",
            title: "Sheets",
            skills: [
                "Google Sheets",
                "Excel"
               
            ],
            description: "Design and maintain Sheets to manage data and automate tasks."
        }
    ];

    return (
       <div className='col-lg-9 col-md-9 col-12'>
         <div className="services-section">
            <div className="services-header">
                <h2>My Skills</h2>
            </div>

            <div className="services-list">
                {services.map((service, index) => (
                    <div 
                        key={service.id} 
                        className={`service-item ${hoveredIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="service-left">
                            <span className="service-number">{service.number}</span>
                            <h3 className="service-title">{service.title}</h3>
                        </div>

                        <div className="service-middle">
                            {service.skills.map((skill, idx) => (
                                <div key={idx} className="service-skill">
                                    + {skill}
                                </div>
                            ))}
                        </div>

                        <div className="service-right">
                            <button className="service-arrow-btn">
                                <FaArrowRight />
                            </button>
                        </div>

                        {hoveredIndex === index && (
                            <div className="service-description">
                                {service.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="services-footer">
                <button className="view-all-btn">
                    VIEW ALL SERVICES
                    <span className="btn-arrow">
                        <FaArrowRight />
                    </span>
                </button>
            </div>
        </div>
       </div>
    );
};

export default Services;