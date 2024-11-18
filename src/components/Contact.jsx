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
        <div class="card contact-box phone">
          <i class="fas fa-mobile fcolor"></i>
          <div class="new-text"><a href={`tel:${phoneNumber.replace(/\s+/g, '')}`}>Un appel ?</a></div>
        </div>
        <div class="card contact-box email">
          <i class="fas fa-envelope fcolor"></i>
          <div class="new-text"><a href={`mailto:${email}`}>M'envoyer un mail</a></div>
        </div>
        <div class="card contact-box meet">
          <i class="fas fa-map-marker fcolor"></i>
          <div class="new-text">Ma mobilité ?</div>
        </div>
      </div>
    </div>
  </section>

  );
};

export default Contact;