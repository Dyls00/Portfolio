import { phoneNumber } from '../constants';
import { email } from '../constants';

const Contact = () => {

  return (
  <section id="Contact" style={{ display: 'none' }}>
    <div class="outer-container">
      <div class="section-contact"></div>
        <div class="contact-subtitle">
        <p className='contact-s e-size'>Contact</p>
          <p className='contact-t'><strong className='degrade'>VOUS VOULEZ RENCO</strong>NTREZ UN JEUNE TALENT ? <strong className='degrade'>CONTACTEZ MOI</strong></p>
          Actuellement à la recherche d'une opportunité d'alternance, je suis intéressée par les postes en : <br />
        <div class="jobs">
          <p className='contact-t'> DÉVELOPPEMENT <strong className='degrade'>• DATA •</strong> GESTION DE PROJET</p>
        </div>
      </div>

      <div class="sticky">
        <div className="col-1">
          <div class="card">
            <div class="border"></div>
            <div class="content">
              <div class="logo"><a href={`mailto:${email}`}>
                <div class="logo1">
                <i class='fas fa-at fcolor'></i>
                </div>
                <div class="logo2">
                  <p className='fcolor send'>envoi</p>
                </div>
                <span class="trail"></span>
              </a></div>
              <span class="logo-bottom-text">un mail</span>
            </div>
            <span class="bottom-text">nsangouakanda</span>
          </div>
        </div>
        <div className="col-2">
          <div class="phoneContainer"><a href={`tel:${phoneNumber.replace(/\s+/g, '')}`}>
            <div class="screen">
              <div class="camera"></div>
                <div class="appsContainer">
                    <div class="widgets">
                        <div class="one"></div>
                        <div class="two"></div>
                    </div>
                    <div class="menuBar">
                        <div class="twoApp"></div>
                        <div class="twoApp"></div>
                        <div class="twoApp"></div>
                        <div class="twoApp"></div>
                    </div>
                </div>
              </div>
              </a>
            </div>
        </div>
        <div className="col-3">
          <div className="map-container">
          <svg viewBox="0 0 500 500" className="map-background">
            <rect style={{ fill: "#f5f0e5" }} width={500} height={500} />
            <path
              style={{ fill: "#90daee" }}
              d="M0,367.82c5.83-4.39,14.42-10.16,25.59-15.34,4.52-2.09,43.19-19.51,79.55-11.93,36.1,7.52,35.75,32.55,78.41,60.23,46.34,30.06,109.47,41.21,123.32,22.1,11.95-16.49-22.61-41.92-13.66-84.6,4.85-23.1,22.33-50.71,47.73-58.52,42.42-13.05,78.83,39.45,102.84,23.86,15.81-10.26.01-32.87,22.73-74.43,5.8-10.62,11.65-21.15,11.93-36.93.28-15.69-5.63-26.64-7.95-32.39-6.66-16.45-6.21-45.15,28.84-98.55.23,146.23.46,292.46.69,438.69H0v-132.18Z"
            />
          </svg>
          <div className="map-cities">
            <div
              style={{ transform: "translate(82px, 1px)" }}
              className="map-city"
            >
              <div className="map-city__label">
                <span className="map-city__sign">Ile de France</span>
              </div>
            </div>
            <div
              style={{ transform: "translate(155px, 88px)" }}
              className="map-city"
            >
              <div className="map-city__label">
                <span className="map-city__sign anim anim-grow">Auvergne Rhones Alpes</span>
              </div>
            </div>
            <div style={{ transform: "translate(13px, 76px)" }} className="map-city">
              <div className="map-city__label">
                <span className="map-city__sign anim anim-slidein">Centre Val de Loire</span>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  );
};

export default Contact;