import React, { useState, useEffect } from 'react';
import { images } from '../constants';

const Ecole = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const swipeRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const swipeLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section id="Ecole" className="flex flex-col items-center e-text" style={{ display: 'none' }}>
            <div className='i-size'>
                <h2 className='degrade e-size text-center mt-8'>École</h2>
                <p>L'Estiam, est une école qui forme des étudiants aux métiers du numérique. 
                    Ils proposent des cursus en développement web, data science et pleins d'autres spécialités liées à la tech. 
                    L'école met l'accent sur les projets concrets et des stages pour que les étudiants puissent acquérir de l'expérience.</p>
            </div>
            <div className="carroussel mt-6 w-[80%] mx-auto relative">
                <div id="controls-carousel" className="relative overflow-hidden rounded-lg">
                    <div className="h-[30rem] relative">
                        {images.map((image, index) => (
                            <div key={index} style={{ display: currentIndex === index ? 'block' : 'none' }}>
                                <img src={image} className="absolute w-full h-full object-cover" alt="Image présentation école" />
                            </div>
                        ))}

                    </div>
                </div>
                
                {/* Boutons de navigation 
                <div className="w-full flex justify-between items-center mt-4">
                    <button onClick={swipeLeft} className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400">
                        <svg className="w-4 h-4 text-black" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                    </button>
                    <button onClick={swipeRight} className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400">
                        <svg className="w-4 h-4 text-black" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    </button>
                </div>*/}
            </div>
        </section>
    );
};

export default Ecole;
