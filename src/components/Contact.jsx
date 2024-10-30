import { phoneNumber } from '../constants';
import { email } from '../constants';

const Contact = () => {

  return (
  <section id="Contact">
    <div class="outer-container">
      <div class="section-contact"></div>
        <div class="contact-subtitle">
          <h2>VOUS VOULEZ RENCONTREZ UN JEUNE TALENT ? CONTACTEZ MOI</h2><br />
          Actuellement à la recherche d'une opportunité d'alternance, je suis intéressée par les postes en : <br />
        <div class="jobs">
          <h2 className="move"> DÉVELOPPEMENT • DATA • GESTION DE PROJET </h2>
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