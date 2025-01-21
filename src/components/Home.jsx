const Home = () => {

    // Fonction pour afficher certains éléments (ton code original)
   const isOpen = () => {
    document.getElementById('Who').style.display = 'block';
    document.getElementById('Etudes').style.display = 'block';
    document.getElementById('Ecole').style.display = 'block';
    document.getElementById('Competences').style.display = 'block';
    document.getElementById('Realisations').style.display = 'block';
    document.getElementById('Contact').style.display = 'block';
    document.getElementById('Footer').style.display = 'block';    
    };

    return (
        <section id="Launcher" className="overflow-y-hidden bg-gradient">
          <div className="H-head flex flex-col items-start justify-center min-h-screen pl-5 text-white">
            <div className="head mb-5">
                <h1 className="h-text">BIENVENUE</h1>
              <p className="cree animate-fade-in"><strong>PORTFOLIO</strong> de
                <div className="word-animation animate-typewriter">
                  <span className="nom">NSANGOUAKANDA</span>
                  <span className="prenom-1">JOHANE</span>
                  <span className="prenom-2">ARLIS</span>
                </div>
              </p>
            <div className="heading">
                <p className="heading delay-1">Étudiant en Bachelor Informatique,</p>
                <p className="heading delay-2">Spécialisé en Big data et IA.</p>
                <p className="heading delay-3">Pour en savoir plus,</p>
                <p className="heading delay-4">Merci de cliquer ci-dessous.</p>
            </div>
            </div>
              <a className="btn-a" href="/#Who"><button className="btn pulse delay-5" onClick={isOpen}>Engagez un talent étudiant</button></a>
            </div>
        </section>
      );
    };

export default Home;
