import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header class="masthead mb-auto">
        <div class="inner">
          <div class="logo">
            <a class="link" href="#main">
              <img src="./infinix.png" alt="Logo" width="180px"/>
            </a>
          </div>
          <nav class="nav nav-masthead justifier-content-center">
            <a class="nav-link active" href="#who">QUI SUIS-JE</a>
            <a class="nav-link" href="">ÉTUDES</a>
            <a class="nav-link" href="">ÉCOLE</a>
            <a class="nav-link" href="">CE QUE JE FAIS ?</a>
            <a class="nav-link" href="">COMPÉTENCES</a>
            <a class="nav-link" href="#contact">RÉSEAUX SOCIAUX</a>
            <a class="nav-link" href="#contact">CONTACT</a>
            <a class="nav-link" href="#contact">A PROPOS</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;