import image from '../assets/Designer.jpeg';
import image1 from '../assets/Designer1.jpg';
import image2 from '../assets/Designer2.png';
import image3 from '../assets/Designer3.png';
import image4 from '../assets/Designer4.jpeg';
import image5 from '../assets/Designer5.png';

const Facts = () => {
    return (
        <section id="Realisations" style={{ display: 'none' }}>
            <h2 className='degrade e-size text-center mt-8 mb-10'>Mes réalisations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 ml-28 mb-10">
                <div class="card-t">
                    <img src={image5} alt="Description de l'image" className="m-4" />
                    <div class="card__content">
                        <p class="card__title">Data lake snowflake</p>
                        <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco.</p>
                        <button class="card__button secondary">Source Code</button>
                    </div>
                </div>
                <div class="card-t">
                    <img src={image3} alt="Description de l'image" className="m-4" />
                    <div class="card__content">
                        <p class="card__title">App web lechimerarium</p>
                        <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco.</p>
                        <button class="card__button secondary">Source Code</button>
                    </div>
                </div>
                <div class="card-t">
                   <img src={image} alt="Description de l'image" className="m-4" />
                   <div class="card__content">
                        <p class="card__title">Gestud</p>
                        <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco.</p>
                        <button class="card__button secondary">Source Code</button>
                    </div>
                </div>
                <div class="card-t">
                    <img src={image2} alt="Description de l'image" className="m-4" />  
                    <div class="card__content">
                        <p class="card__title">Site web BDE</p>
                        <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco.</p>
                        <button class="card__button secondary">Source Code</button>
                    </div>
                </div>
                <div class="card-t">
                    <img src={image1} alt="Description de l'image" className="m-4" />
                    <div class="card__content">
                        <p class="card__title">TaskIt</p>
                        <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco.</p>
                        <button class="card__button secondary">Source Code</button>
                    </div>
                </div>
                <div class="card-t">
                    <img src={image4} alt="Description de l'image" className="m-4" />
                    <div class="card__content">
                        <p class="card__title">Machine learning</p>
                        <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco.</p>
                        <button class="card__button secondary">Source Code</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Facts;