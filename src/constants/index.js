import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const navLinks = [
    {
        id: "Who",
        title: "À propos",
    },
    {
        id: "Etudes",
        title: "Mes études",
    },
    {
        id: "Ecole",
        title: "Écoles",
    },
    {
        id: "Competences",
        title: "Compétences",
    },
    {
        id: "Realisations",
        title: "Mes réalisations",
    },
    {
        id: "Contact",
        title: "Contact",
    },
];

export const images = [
    "/images/carroussel/image1.jpg",
    "/images/carroussel/image2.jpg",
    "/images/carroussel/image3.jpg",
    "/images/carroussel/image4.jpg",
    "/images/carroussel/image5.jpg",
    "/images/carroussel/image6.jpg",
    "/images/carroussel/image7.jpg",
    "/images/carroussel/image8.jpg",
    "/images/carroussel/image9.jpg"
];

export const phoneNumber = "+33 7 53 09 43 94";

export const email = "johane-arlis.nsangouakanda@estiam.com";

export const footerLinks = [
    {
        title: "/ Pages",
        links: [    
            { name: "Accueil", href: "/#Launcher" },
            { name: "À propos", href: "/#Who" },
            { name: "Mes études", href: "/#Etudes" },
            { name: "Écoles", href: "/#Ecole" },
        ],
    },
    {
        title: "/ Pages",
        links: [
            { name: "Compétences", href: "/#Competences" },
            { name: "Mes réalisations", href: "/#Realisations" },
            { name: "Contact", href: "/#Contact" },
        ],
    },
    {
        title: "/ Légal",
        links: [
            { name: "Mentions légales", href: "/mentions-legales" },
        ],
    },
    {
        title: "/ Informations de l'école",
        links: [
            { name: "Campus Lahitolle, Salle d'Armes, 7 Rue Michel Marest, 18000 Bourges", href: "https://www.google.com/maps/search/?api=1&query=Campus+Lahitolle,+Salle+d'Armes,+7+Rue+Michel+Marest,+18000+Bourges" },
            { name: "Envoyer un mail", href: "mailto:bourges@estiam.com" },
            { name: "+33 2 48 27 15 15", href: "tel:+33248271515" },
        ],
    },
];

export const socialLinks = [
    {
        href: "https://www.linkedin.com/in/johane-nsangouakanda-2a7060256/",
        icon: faLinkedin,
        label: "Discord community",
    },
    {
        href: "https://github.com/Dyls00",
        icon: faGithub,
        label: "Github page",
    },
    {
        href: "https://www.instagram.com/estiamofficiel/",
        icon: faInstagram,
        label: "Instagram page",
    },
];