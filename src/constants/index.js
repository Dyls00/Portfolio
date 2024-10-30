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
        id: "ecole",
        title: "Écoles",
    },
    {
        id: "compétences",
        title: "Mes compétences",
    },
    {
        id: "ce-que-je-fais",
        title: "Ce que je fais ?",
    },
    {
        id: "Contact",
        title: "Contact",
    },
];

export const images = [
    "/images/accueil/Estiam_CD18_02.jpg",
    "/images/accueil/Estiam_CD18_05.jpg",
    "/images/accueil/Estiam_CD18_12.jpg",
    "/images/accueil/Estiam_CD18_15.jpg",
    "/images/accueil/Estiam_CD18_17.jpg"
];

export const phoneNumber = "+33 7 00 00 00 00";

export const email = "johane-arlis.nsangouakanda@estiam.com";

export const footerLinks = [
    {
        title: "/ Pages",
        links: [    
            { name: "Accueil", href: "/#Home" },
            { name: "À propos", href: "/#Missions" },
            { name: "Mes études", href: "/#Event" },
            { name: "Écoles", href: "/#Ecole" },
        ],
    },
    {
        title: "/ Pages",
        links: [
            { name: "Mes compétences", href: "/#Presentation" },
            { name: "Ce que je fais ?", href: "/#Ecole" },
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