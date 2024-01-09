class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.innerHTML = `
            <header id="top">
            <div class="header">
            <a href="index.html">
                <img class="logo" src="images/logo/logo-black.png"/>
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
                <div id="hamburger-menu" class="hamburger-menu">
                    <a href="mob-hamburger.html">
                        <img class="menu-icon" src="images/icons/menu_icons/menu.png" alt="Hamburger Menu" />
                    </a>
                </div>
            </nav>
        </header>
    `;
    }
      
}

customElements.define("header-component", Header);
