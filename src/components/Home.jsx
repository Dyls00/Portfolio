

const Home = () => {

    // Fonction pour afficher certains éléments (ton code original)
   /* const isOpen = () => {
        document.getElementById('who').style.display = 'block';
        document.getElementById('contact').style.display = 'block';
        document.getElementById('footer').style.display = 'block';
    };*/

    return (
        <section id="launcher" className="overflow-y-hidden">
           <div className="H-head flex flex-col items-start justify-center min-h-screen pl-5">
                <div className="head mb-5">
                    <p className="cree">Bienvenue sur le <strong className="">PORTFOLIO</strong> de 
                    <div className="word-animation">
                        <span className="nom">NSANGOUAKANDA</span>
                        <span className="prenom-1">JOHANE</span>
                        <span className="prenom-2">ARLIS</span>
                    </div></p>
                    <p className="creer">Étudiant en Bachelor Informatique,</p>
                    <p className="creer">Spécialisé en développement d'applications.</p>
                    <p className="creer">Pour en savoir plus sur mes compétences,</p> 
                    <p className="creer">Merci de cliquer ci-dessous.</p>
                </div>
                <button className="btn">Engagez un talent étudiant</button>
            </div>

        </section>
    );
};

export default Home;
