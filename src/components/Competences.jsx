import React, { useEffect, useRef } from 'react';

const Competences = () => {
    const skillRef = useRef([]);

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
            { threshold: 0.2 }
        );

        skillRef.current.forEach(skill => observer.observe(skill));
    }, []);

    return (
        <section id="Competences" style={{ display: 'none' }}>
            <h2 className="section-title degrade e-size">Compétences</h2>
            <div className="skills-container">
            <div ref={(el) => skillRef.current[2] = el} className="skill">
                    <h3>Big data et IA</h3>
                    <p>Récupération, transformation et stockage de données.</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
                <div ref={(el) => skillRef.current[0] = el} className="skill">
                    <h3>Dev front-end</h3>
                    <p>Création de sites et applications web, responsive et accessibles.</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
                <div ref={(el) => skillRef.current[1] = el} className="skill">
                    <h3>Dev back-end</h3>
                    <p>Développement web, gestion de bases de données, programmation orientée objet.</p>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Competences;
