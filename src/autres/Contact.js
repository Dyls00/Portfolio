import { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <div class="outer-container">
                <div class="section-contact">                  
                </div>
                <div class="contact-subtitle">
                    <h2>DO YOU HAVE AN AI PROJECT? CONTACT US</h2><br />
                    INNOVATIVE AI is one of the founding companies of the MIAI institute, and a member of its steering committe. <br />
                        <div class="jobs">
                            <h2> STRATEGY • DESIGN • TEST • PRODUCTION </h2>
                        </div>
                </div>

                <div class="sticky">
                    <div class="card contact-box phone">
                        <i class="fas fa-mobile fcolor"></i><br />
                        <div class="new-text">+33 7 00 00 00 00</div>
                    </div>
                    <div class="card contact-box email">
                        <i class="fas fa-envelope fcolor"></i>
                        <div class="text new-text">innovativeai@toolk.com</div>
                    </div>
                    <div class="card contact-box meet">
                        <i class="fas fa-map-marker fcolor"></i>
                        <div class="text new-text">You want to meet us ?</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;