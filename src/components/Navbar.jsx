import { useState } from 'react';
import { navLinks } from "../constants";
import logo from '../assets/infinix.png';
import logos from '../assets/infinix-2.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <nav className="violet-gradient fixed w-full z-20">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/#Home" className="">
                <img src={logos} className="h-12" alt="Logo infinix" />
            </a>
            <button
                onClick={toggleMenu}
                aria-label="Burger Menu"
                className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg lg:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                    <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                )}
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`} id="navbar-default">
                <ul className="flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 md:border-0">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`/#${link.id}`} className="block py-2 px-3 text-lg text-white hover:scale-105 transition rounded">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </nav>
    );
};

export default Navbar;