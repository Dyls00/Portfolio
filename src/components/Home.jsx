import React, { useState, useEffect } from 'react';
import { image } from '../constants';

const Home = () => {

    // Fonction pour afficher certains éléments (ton code original)
    const isOpen = () => {
        document.getElementById('who').style.display = 'block';
        document.getElementById('contact').style.display = 'block';
        document.getElementById('footer').style.display = 'block';
    };

    return (
        <section id="LAUNCHER">
             <div className="head">
                <p  className='portfolio'>PORTFOLIO</p>
              <p className='creer'>CONCU PAR JOHANE ARLIS NSANGOUAKANDA</p>
              <p className='cree'>DEVELOPPER AVEC REACTJS</p>
            </div>
            <button class="btn"> SAVOIR PLUS
            </button>
        </section>
    );
};

export default Home;
