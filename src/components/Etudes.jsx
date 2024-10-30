import image from '../assets/76210387.png';

const Etudes = () => {

  return (
    <section id="Etudes">
        <div className="e-box">
          <div className="e-col-1"></div>
          <div className="e-col-2"></div>
          <div className="e-col-3">
            <div>
              <img src={image} alt="Description de l'image" className="m-class" />
            </div>
            <div className="mon-text">
              <h2 className='e-size'><strong className='degrade'>Mon projet professionnel</strong> dans la <strong className='degrade'>tech</strong></h2>
              <p>Je suis spécialisé dans le développement web, et j'ai travaillé avec différents frameworks et outils tels que React, Angular, et Node.js. J'ai également développé des applications mobiles avec Flutter et React Native.</p>
              <p>J'ai également travaillé avec des outils de gestion de versions, telles que Git et GitHub, pour gérer mes projets et collaborer avec mes collègues.</p>
            </div>
          </div>   
        </div>
</section>

  );
};

export default Etudes;