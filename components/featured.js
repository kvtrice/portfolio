class Featured extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
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

