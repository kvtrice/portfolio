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
                }
                
                .logo {
                    width: 3rem;
                    padding: 0.5rem
                }

                .dropdown-menu {
                    display: none;
                    position: absolute;
                    background-color: #fff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
                <li class="drop-down">
                    <a href="work.html">Work</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Talk to Maple</a></li>
                        <li><a href="#">At Once</a></li>
                    </ul>
                </li>
            </ul>
            </nav>
        </header>
        `;
      }
  }

  customElements.define('header-component', Header);

