class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>        
                nav {
                    display: flex;
                    padding: 0.5rem;
                }
                
                nav ul {
                    display: flex;
                    list-style: none;
                }
                
                nav ul li {
                    padding-left: 1.5rem;
                    list-style: none;
                }
                
                .logo {
                    width: 3rem;
                    padding: 0.5rem;
                }

                .dropdown-menu {
                    display: none;
                    position: absolute;
                    width: auto;
                    padding: 0.5rem;
                    background-color: #ffffff50;
                    border-radius: 5px;
                }

                nav ul li div ul li {
                    padding-left: 0;
                }

                .dropdown-bg {
                    padding-top: 0.5rem;
                }

                .dropdown-menu li {
                    padding: 0.2rem;
                    white-space: nowrap;
                }

                .dropdown:hover .dropdown-menu {
                    display: block;
                }

            </style>

            <header id="top">
            <div>
            <a href="index.html">
                <img class="logo" src="images/logo/K White.png" />
            </a>
            </div>
            <nav>
                <ul>
                    <li>
                    <a href="index.html">Home</a>
                    </li>
                    <li>
                    <a href="about.html">About</a>
                    </li>
                    <li class="dropdown">
                        <a href="#">Work</a>
                        <div class="dropdown-bg">
                            <ul class="dropdown-menu">
                                <li><a href="talktomaple.html">Talk to Maple</a></li>
                                <li><a href="atonce.html">At Once</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
        `;
  }
}

customElements.define("header-component", Header);
