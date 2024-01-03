class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>        
                .footer-wrapper { /* Extend background colour past the width of the content */
                    background-color: #E9E1FD;
                    border-top: black 1px solid;
                }
                
                footer {
                    padding-top: 2rem;
                    height: fit-content;
                    margin: 0 auto;
                }
                
                footer h3 {
                    font-size: 1.2rem;
                    font-weight: bold;
                }
                
                /* Social Connection section */
                .footer-connect h2 {
                    margin-bottom: 0.5rem;
                }
                
                .social-images img {
                    width: 4rem;
                }
                
                .footer-flex {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }
                
                .footer-nav-links {
                    display: flex;
                    flex-wrap: wrap;
                    text-align: left;
                    justify-content: space-between;
                }
                
                .footer-learn-more ul, .footer-my-work ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-learn-more, .footer-my-work {
                    margin-left: 4rem;
                }
                
                .footer-learn-more h3, .footer-my-work h3 {
                    padding-bottom: 1rem;
                }
                
                .footer-learn-more ul li, .footer-my-work ul li {
                    padding-bottom: 0.3rem;
                }
                
                footer p {
                    margin-top: 1rem;
                    padding-bottom: 2rem;
                    font-size: 0.75rem;
                }
            </style>

            <div class="footer-wrapper">
                <footer id="bottom">
                    <div class="footer-flex">
                    <div class="footer-connect">
                        <h2 class="heading">Let's connect</h2>
                        <div class="social-images">
                        <a href="https://github.com/kvtrice" target="_blank"
                            ><img
                            src="images/icons/social_icons/colour_handdrawn/githubround_colour_handdrawn.png"
                            alt="Github"
                        /></a>
                        <a
                            href="https://www.linkedin.com/in/katmountford/"
                            target="_blank"
                            ><img
                            src="images/icons/social_icons/colour_handdrawn/linkedin_colour_handdrawn.png"
                            alt="LinkedIn"
                        /></a>
                        <a href="mailto:katricemountford@gmail.com" target="_blank"
                            ><img
                            src="images/icons/social_icons/colour_handdrawn/email_colour_handdrawn.png"
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
                            <li>
                            <a href="work.html">Work</a>
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

