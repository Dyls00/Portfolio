import { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <div class="flex">
                    <div role="list">
                        <script src="https://kit.fontawesome.com/6f94f70081.js" crossorigin="anonymous"></script>
                        <a target="_blank" class="inline-block mr-4" aria-label="twitter" href="https://github.com/Dyls00"><i class="fab fa-twitter"></i></a>
                        <a target="_blank" class="inline-block mr-4" aria-label="linkedin" href="https://www.linkedin.com/in/johane-nsangouakanda-2a7060256/"><i class="fab fa-linkedin-in"></i></a>
                        <a target="_blank" class="inline-block mr-4" aria-label="linkedin" href="https://www.youtube.com"><i class="fab fa-youtube"></i></a>
                        <a target="_blank" class="inline-block mr-4" aria-label="linkedin" href="https://www.facebook.com"><i class="fab fa-facebook"></i></a>
                    </div>
                </div>
                <br /><br />
                <div class="end">
                    <div class="dl-text-body">IN THE FUTURE OF AI WE TRUST</div><br />
                        <a class="dl-text" href="">legal information</a>
                        <a class="dl-text" href=""> - general conditions of use</a>
                        <a class="dl-text" href=""> - privacy policy</a><br /><br /><br />
                        INNOVATIVE AI COMPAGNY @ 2023<br />
                        all rights reserved
                </div>
            </div>);
}
}

export default Footer;