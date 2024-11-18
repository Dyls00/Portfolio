import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { footerLinks, socialLinks } from '../constants';

const Footer = () => {
    return (
        <section id="Footer" style={{ display: 'none' }}>
            <footer className="bg-dark-purple">
                <div className="mx-auto w-full">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                    {section.title}
                                </h2>
                                <ul className="text-white ">
                                    {section.links.map((link) => (
                                        <li className="mb-4 hover:text-orange" key={link.name}>
                                            <a href={link.href} className="hover:underline">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="px-4 py-6 bg md:flex md:items-center md:justify-between">
                        <span className="text-sm text-white sm:text-center">
                            © 2024 <a href="https://www.estiam.education/fr/nos-campus/bourges" className="text-white hover:text-orange hover:underline">Johane Arlis NSANGOUAKANDA</a>. Tous droits réservés.
                        </span>
                        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                            {socialLinks.map((social) => (
                                <a href={social.href} className="text-white hover:text-orange" target='_blank' key={social.label}>
                                    <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                                    <span className="sr-only">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;