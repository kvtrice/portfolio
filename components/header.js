class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header id="top">
            <div>
            <a href="index.html">
                <img class="logo" src="images/logo/K.png" />
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
                <li>
                <a href="work.html">Work</a>
                </li>
            </ul>
            </nav>
        </header>
        `;
      }
  }

  customElements.define('header-component', Header);

