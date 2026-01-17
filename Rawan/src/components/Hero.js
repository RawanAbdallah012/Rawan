import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import './css/hero.css';

// Animated Background Component
const AnimatedBackground = () => {
    const [stats, setStats] = useState([
        { value: 0, target: 2847, label: 'Data Points', x: 15, y: 20 },
        { value: 0, target: 94, label: 'Accuracy %', x: 70, y: 15 },
        { value: 0, target: 156, label: 'Projects', x: 20, y: 70 },
        { value: 0, target: 89, label: 'Performance', x: 75, y: 65 }
    ]);

    const [chartData, setChartData] = useState(
        Array.from({ length: 12 }, (_, i) => ({
            value: Math.random() * 80 + 20,
            trend: Math.random() > 0.5 ? 'up' : 'down'
        }))
    );

    // Animate numbers
    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => prev.map(stat => ({
                ...stat,
                value: stat.value < stat.target 
                    ? Math.min(stat.value + Math.ceil(stat.target / 50), stat.target)
                    : stat.target
            })));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    // Animate chart data
    useEffect(() => {
        const interval = setInterval(() => {
            setChartData(prev => prev.map(item => ({
                value: Math.max(20, Math.min(100, item.value + (Math.random() - 0.5) * 15)),
                trend: Math.random() > 0.5 ? 'up' : 'down'
            })));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animated-bg">
            {/* Floating particles */}
            <div className="particles">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 10}s`
                    }} />
                ))}
            </div>

            {/* Animated chart bars */}
            <svg className="chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                {chartData.map((item, i) => (
                    <rect
                        key={i}
                        x={i * 8.5}
                        y={100 - item.value}
                        width="6"
                        height={item.value}
                        className={`chart-bar ${item.trend}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                    />
                ))}
            </svg>

            {/* Animated lines/connections */}
            <svg className="lines-svg" viewBox="0 0 100 100">
                <path d="M10,50 Q30,30 50,50 T90,50" className="animated-line line-1" />
                <path d="M20,70 Q40,50 60,70 T100,70" className="animated-line line-2" />
                <path d="M0,30 Q20,50 40,30 T80,30" className="animated-line line-3" />
            </svg>

            {/* Floating stats */}
            {stats.map((stat, i) => (
                <div key={i} className="floating-stat" style={{
                    left: `${stat.x}%`,
                    top: `${stat.y}%`,
                    animationDelay: `${i * 0.3}s`
                }}>
                    <div className="stat-value">{stat.value.toLocaleString()}</div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}

            {/* Grid overlay */}
            <div className="grid-overlay">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="grid-line" style={{ top: `${i * 12.5}%` }} />
                ))}
            </div>
        </div>
    );
};

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            title: "Exploratory Data Analysis (EDA)",
            description: "Identifying patterns, anomalies, and relationships in datasets."
        },
        {
            title: "Predictive Analytics",
            description: "Forecasting, classification, clustering."
        },
        {
            title: "A/B Testing & Experiment Design",
            description: "Designing, implementing, and analyzing controlled experiments to measure impact."
        },
        {
            title: "Data Mining",
            description: "Extracting insights from large datasets"
        },
        {
            title: "Data Storytelling",
            description: "Translating complex analytical findings into clear, compelling narratives for diverse audiences."
        },
        {
            title: "Statistical Analysis",
            description: "Applying statistical methods to derive meaningful insights from data."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="col-lg-9 col-md-9 col-12">
            <section className='hero'>
                <div className='row'>
                    <div className='col-lg-8 col-md-8 col-12'>
                        <div className='hero-content'>
                            <AnimatedBackground />
                            <div className='header'>
                                <h1> Professional</h1>
                                <div> <h2>  </h2> <h1> Data </h1></div>
                                <h1> Analyst </h1>
                            </div>

                            <div className="word">
                                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3v18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M7 14l4-4 3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="7" cy="14" r="1.5" fill="white"/>
                                    <circle cx="11" cy="10" r="1.5" fill="white"/>
                                    <circle cx="14" cy="13" r="1.5" fill="white"/>
                                    <circle cx="19" cy="8" r="1.5" fill="white"/>
                                </svg>
                                <h2> Extracting, cleaning, and transforming data into meaningful insights. </h2>
                            </div>
                        </div>
                    </div>
     
                    <div className='col-lg-4 col-md-4 col-12'>
                        <div className='hero-skills'>
                            <div className='skills-content'>
                                <p> 
                                As a data analyst, my expertise spans a variety of tools, techniques, and methodologies crucial for transforming raw data into actionable intelligence.
                                </p>

                                <div className='skills'>
                                    <div className='skill'>
                                        <h4> Python </h4>
                                    </div>

                                    <div className='skill'>
                                        <h4> SQL </h4>
                                    </div>

                                    <div className='skill'>
                                        <h4> Tableau </h4>
                                    </div>

                                    <div className='skill'>
                                        <h4> Microsoft Power BI </h4>
                                    </div>

                                    <div className='skill'>
                                        <h4> Microsoft Excel </h4>
                                    </div>

                                    <div className='skill'>
                                        <h4> Google Sheets </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="skills-slider">
                                <div className="slider">
                                    {slides.map((slide, index) => (
                                        <div 
                                            key={index}
                                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                                        >
                                            <h1>{slide.title}</h1>
                                            <p>{slide.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="slider-btn">
                                    <button onClick={prevSlide}> <FaArrowLeft /> </button>
                                    <button onClick={nextSlide}> <FaArrowRight /> </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </div>
    );
};

export default Hero;