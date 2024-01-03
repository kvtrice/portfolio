class Scroll extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>        
                .top-bottom-arrows {
                    z-index: 1;
                    position: fixed;
                    right: 2rem;
                    bottom: 2rem;
                    display: flex;
                    flex-direction: column;
                    border: black 1px solid;
                    border-radius: 8px;
                }
                
                .top-bottom-arrows div {
                    border-radius: 8px;
                    background-color: white;
                    transition: 400ms;
                }
                
                .top-bottom-arrows .top {
                    border-radius: 8px 8px 0px 0px;
                }
                
                .top-bottom-arrows .bottom {
                    border-radius: 0px 0px 8px 8px;
                }
                
                .top-bottom-arrows div:hover {
                    background-color: #E9E1FD;
                }
                
                .top-bottom-arrows img {
                    height: 2.5rem;
                    transition: 400ms;
                    padding: 0.5rem;
                    z-index: 1;
                }
                
                .top-bottom-arrows img:hover {
                    transform: scale(1.3);
                    z-index: 1;
                }
            </style>

            <div class="top-bottom-arrows">
                <div class="top">
                <a href="#top">
                    <img
                    src="/images/icons/social_icons/handdrawn/top.png"
                    alt="Arrow to top of screen"
                    />
                </a>
                </div>
                <div class="bottom">
                <a href="#bottom">
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

