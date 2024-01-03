class Featured extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>        
            .work {
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }
              
              .work h2 {
                font-size: 2.5rem;
              }
              
              .project-tile-block {
                display: flex;
                justify-content: center;
              }
              
              .project-tile-block a:hover {
                text-decoration: none;
              }
              
              .project-tile h3, 
              .view-more-tile h3,
              .project-tile p,
              .project-tile li {
                font-size: 1rem;
                text-align: left;
                line-height: normal;
                margin: 1rem rem;
              }
              
              .project-tile h3 {
                font-size: 1.5rem;
                margin: 1rem;
              }
              
              .project-tile p {
                margin: 1rem;
              }
              
              .project-tile, .view-more-tile {
               display: flex;
               position: relative;
               flex-direction: column;
               justify-content: space-between;
               margin: 1rem;
               border: black solid 1px;
               border-radius: 5px;
               overflow: hidden;
               transition: 400ms;
              }
              
              .project-type-tag {
                width: fit-content;
                border-radius: 2px;
                background-color:#F7FF9F;
                position: absolute;
                left: -1rem;
                top: 0.1rem;
              }
              
              .project-tile .sub-heading {
               padding: 0.8rem 1rem;
               font-size: 0.9rem;
              }
              
              .project-tile:hover, .view-more-tile:hover {
                transform: scale(1.05);
              }
              
              .project-tile img, .view-more-tile img {
                height: 100%;
                width: 100%;
                object-fit: cover;
              }
              
              .tag-block {
                margin-bottom: 1rem;
              }
              
              .tag-section li {
                margin: 0.5rem 1rem;
                display: flex;
                flex-wrap: wrap;
              }
              
              .tag-section li ul {
                border: black 1px solid;
                border-radius: 5px;
                padding: 0.3rem 0.5rem;
                margin: 0 0.5rem 0.5rem 0;
              }
              
              .tag-section li ul:hover {
                animation: colourful-tile 3s alternate infinite;
              }
              
              .technologies li ul{
                background-color: black;
                color: white;
              }
              
              .technologies li ul:hover {
                color: black;
              }
            </style>

            <section class="work featured">

                <!-- Start Project Block -->
                <div class="project-tile-block">

                <!-- Project Tile Component -->
                <div class="project-tile">
                    <a href="talktomaple.html">
                    <div class="link-wrapper">
                        <p class="project-type-tag sub-heading">Case Study</p>
                        <img
                        class="project-tile-image"
                        src="images/projects/talktomaple/0_maple_hero.jpg"
                        alt="Project: Talk to Maple"
                        />
                        <h3 class="project-tile-heading">Talk to Maple</h3>
                        <p>Designing a gamified, A.I. powered journalling experience</p>

                        <!-- Tile Tag Block -->
                        <div class="tag-block">

                        <!-- Tag Section -->
                        <div class="tag-section summary">
                            <li>
                            <ul>
                                Low Code
                            </ul>
                            <ul>
                                Mobile
                            </ul>
                            <ul>
                                Startup Accelerator
                            </ul>
                            </li>
                        </div>

                        <!-- Tag Section -->
                        <div class="tag-section technologies">
                            <li>
                            <ul>
                                Flutterflow
                            </ul>
                            <ul>
                                Xano
                            </ul>
                            <ul>
                                Firebase
                            </ul>
                            <ul>
                                Open AI
                            </ul>
                            <ul>
                                Figma
                            </ul>
                            <ul>
                                Canva
                            </ul>
                            </li>
                        </div>
                        </div>
                    </div></a
                    >
                </div>

                <!-- Project Tile Component -->
                <div class="project-tile">
                    <a href="atonce.html">
                    <div class="link-wrapper">
                        <p class="project-type-tag sub-heading">Case Study</p>
                        <img
                        class="project-tile-image"
                        src="images/projects/atonce/0_atonce_hero.jpg"
                        alt="Project: At Once"
                        />
                        <h3 class="project-tile-heading">At Once</h3>
                        <p>Re-designing At Once's marketplace listing upload feature</p>

                        <!-- Tile Tag Block -->
                        <div class="tag-block">

                        <!-- Tag Section -->
                        <div class="tag-section summary">
                            <li>
                            <ul>
                                UX Design
                            </ul>
                            <ul>
                                Web App
                            </ul>
                            <ul>
                                Client Project
                            </ul>
                            </li>
                        </div>

                        <!-- Tag Section -->
                        <div class="tag-section technologies">
                            <li>
                            <ul>
                                Miro
                            </ul>
                            <ul>
                                Figma
                            </ul>
                            <ul>
                                Canva
                            </ul>
                            </li>
                        </div>
                        </div>
                    </div>
                    </a>
                </div>
                </div>

                <!-- End Project Block -->
            </section>
        `;
      }
  }

  customElements.define('featured-component', Featured);

