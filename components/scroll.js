class Scroll extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="top-bottom-arrows">
                <div class="top">
                <a href="#" onclick="scrollToTop()">
                    <img
                    src="/images/icons/social_icons/handdrawn/top.png"
                    alt="Arrow to top of screen"
                    />
                </a>
                </div>
                <div class="bottom">
                <a href="#" onclick="scrollToBottom()">
                    <img
                    src="images/icons/social_icons/handdrawn/bottom.png"
                    alt="Arrow to bottom of screen"
                    />
                </a>
                </div>
            </div>
        `;
      }
  }

  customElements.define('scroll-component', Scroll);

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

