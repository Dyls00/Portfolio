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
                <div ref={(el) => refElements.current[0] = el} className="e-col-1"></div>
                <div ref={(el) => refElements.current[1] = el} className="e-col-2"></div>
                <div ref={(el) => refElements.current[2] = el} className="e-col-3">
                    <div ref={(el) => refElements.current[3] = el} className="image">
                        <img src={image} alt="Description de l'image" className="m-class" />
                    </div>
                    <div ref={(el) => refElements.current[4] = el} className="mon-text">
                        <h2 className="e-size">
                            <strong className="degrade">Mon ambition professionnel</strong> dans la <strong className="degrade">tech</strong>
                        </h2>
                        <p>Je suis spécialisé dans le développement web, et j'ai travaillé avec différents frameworks et outils tels que React, Symfony, et Node.js...</p>
                        <p>J'ai également travaillé avec des outils de gestion de versions, telles que Git et GitHub...</p>
                    </div>
                </div>   
            </div>
        </section>
    );
};

export default Etudes;
