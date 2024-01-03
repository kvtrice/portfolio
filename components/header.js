class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
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
