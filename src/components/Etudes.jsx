import React, { useEffect, useRef } from 'react';
import image from '../assets/76210387.png';

const Etudes = () => {
    const refElements = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.3}s`;
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        refElements.current.forEach((el) => observer.observe(el));
    }, []);

    return (
        <section id="Etudes" style={{ display: 'none' }}>
            <div className="e-box">
                <div ref={(el) => refElements.current[0] = el} className="e-col-1">
                    <h2 className="e1-size">Master
                        <strong className="degrade"> Big data & Intelligence Artificielle</strong>
                    </h2>
                    <h3><strong className="e3-size">Développement, coding, gaming, data & IoT</strong></h3>
                    <ul className="e-list e2-size">
                        <li>Software-defined data center administration</li>
                        <li>Dataviz</li>
                        <li>BI Programming - Python</li>
                        <li>Big Data and Analytics</li>
                        <li>Datalakes</li>
                        <li>Datawarehousing and ETL</li>
                        <li>Machine Learning</li>
                        <li>Data Science</li>
                    </ul>
                </div>
                <div ref={(el) => refElements.current[1] = el} className="e-col-2">
                    <h2 className="e1-size">Bachelor
                        <strong className="degrade"> Responsable de la protection des données des organisations</strong>
                    </h2>
                    <h3>
                        <strong className="e3-size">Développement, coding, gaming, data & IoT</strong>
                    </h3>
                    <ul className="e-list e2-size">
                        <li>DataOps</li>
                        <li>BI ETL & Datamart</li>
                        <li>NoSQL - MongoDB Advanced Analytics & Data Science</li>
                        <li>Machine Learning</li>
                        <li>Agile methods</li>
                        <li>Full Stack Development - Front & Back</li>
                    </ul>
                </div>
                <div ref={(el) => refElements.current[2] = el} className="e-col-3">
                    <div ref={(el) => refElements.current[3] = el} className="image">
                        <img src={image} alt="Description de l'image" className="m-class" />
                    </div>
                    <div ref={(el) => refElements.current[4] = el} className="mon-text">
                        <h2 className="e-size">
                            <strong className="degrade">Mon ambition professionnel</strong> dans la <strong className="degrade">tech</strong>
                        </h2>
                        <p className='e-text'>En cours de formation en Bachelor développement et data, j’aspire à me 
                        spécialiser dans les domaines du Big Data et de l’intelligence artificielle à 
                        travers un master en contrat d’apprentissage.
                        Ce parcours me permettra d’acquérir une 
                        expertise approfondie tout en participant activement au développement 
                        de solutions techniques ambitieuses et adaptées.</p>
                    </div>
                </div>   
            </div>
        </section>
    );
};

export default Etudes;
