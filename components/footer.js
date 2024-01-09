class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="footer-wrapper">
                <footer id="bottom">
                    <div class="footer-flex">
                    <div class="footer-connect">
                        <h2 class="heading">Let's connect</h2>
                        <div class="social-images">
                        <a href="https://github.com/kvtrice" target="_blank"
                            ><img
                            src="images/icons/social_icons/github.png"
                            alt="Github"
                        /></a>
                        <a
                            href="https://www.linkedin.com/in/katmountford/"
                            target="_blank"
                            ><img
                            src="images/icons/social_icons/linkedin.png"
                            alt="LinkedIn"
                        /></a>
                        <a href="mailto:katricemountford@gmail.com" target="_blank"
                            ><img
                            src="images/icons/social_icons/email.png"
                            alt="Email"
                        /></a>
                        </div>
                    </div>
                    <div class="footer-nav-links">
                        <div class="footer-learn-more">
                        <h3 class="sub-heading">Learn more</h3>
                        <ul>
                            <li>
                            <a href="index.html">Home</a>
                            </li>
                            <li>
                            <a href="about.html">About</a>
                            </li>
                        </ul>
                        </div>
                        <div class="footer-my-work">
                        <h3 class="sub-heading">My work</h3>
                        <ul>
                            <li>
                            <a href="talktomaple.html">AI Journaling</a>
                            </li>
                            <li>
                            <a href="atonce.html">Marketplace Re-design</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="copyright">
                    <p>Copyright &copy; 2023 Kat Mountford</p>
                    </div>
                </footer>
            </div>
        `;
      }
  }

  customElements.define('footer-component', Footer);

