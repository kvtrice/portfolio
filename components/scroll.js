class Scroll extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="top-bottom-arrows">
                <div class="top">
                <a href="#top">
                    <img
                    src="/images/icons/scroll_icons/scroll-up.png"
                    alt="Arrow to top of screen"
                    />
                </a>
                </div>
                <div class="bottom">
                <a href="#bottom">
                    <img
                    src="images/icons/scroll_icons/scroll-down.png"
                    alt="Arrow to bottom of screen"
                    />
                </a>
                </div>
            </div>
        `;
      }
  }

  customElements.define('scroll-component', Scroll);

