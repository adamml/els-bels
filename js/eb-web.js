/** ElsBels is a namespace for the web components used in the Els-Bels Boutique website */
var ElsBels = {
    /**
     * @function allHrefsAddTargetBlank targets the Document and sets the `target` of all light DOM `anchors` to `_blank`
     * 
     * @returns void
     */
    allHrefsAddTargetBlank: function (){
        Array.from(document.getElementsByTagName('a')).map(x => x.target = '_blank');
    },
    onloadhandler: function (){
        ElsBels.allHrefsAddTargetBlank();
    }
};

/** Represents the navigation elements for the Els-Bels Boutique website
 * 
 * #Element tag: `elsbels-navigation`
 * 
 * ## Attributes:
 *      - _page_: The page on which the element is included. Used to remove the
 *                link to the specified page from the navigation bar. Valid 
 *                values for `page are:
 *          - `about`
 *          - `calendar`
 *          - `contact`
 *          - `commissions`
 *          - `gallery`
 *          - `home`
 * 
 * The CSS exposes the following variables which can be styled by end users:
 * 
 *      --font-family
 *      --margin
 *      --padding
 *      --text-align
 *      --width
 */
customElements.define('elsbels-navigation', class extends HTMLElement {
    
    static get observedAttributes(){
        return ['page'];
    }
    
    constructor(){super();}

    connectedCallback(){
        const shadow = this.attachShadow({mode: 'open'});

        var __about = `<a href='./about.html'>About</a>`;
        var __calendar = `<a href='./upcoming-events.html'>Upcoming Events</a>`;
        var __commissions = `<a href='./commissions.html'>Commissions</a>`;
        var __contact = `<a href='./contact.html'>Contact</a>`;
        var __gallery = `<a href='./gallery.html'>Gallery</a>`;
        var __home = `<a href='./index.html'>Home</a>`;

        if(this.getAttribute("page")){
            switch(this.getAttribute("page").toLowerCase()){
                case 'about':
                    __about = 'About';
                    break;
                case 'calendar':
                    __calendar = 'Upcoming Events';
                    break;
                case 'commissions':
                    __commissions = 'Commissions';
                    break;
                case 'contact':
                    __contact = 'Contact';
                    break;
                case 'gallery':
                    __gallery = 'Gallery';
                    break;
                case 'home':
                    __home = 'Home';
                    break;
                default:
                    console.log(`Warning: Element: elsbels-navigation - Unexpected value in page attribute [${this.getAttribute("page")}]...`);
            }
        }

        shadow.innerHTML = `<style>
        .container{
            font-family: var(--font-family);
            margin: var(--margin);
            padding: var(--padding);
            text-align: var(--text-align);
            width: var(--width);
            font-weight: bold;
        }
        img{
            width: 10%;
            float: left;
            margin-left: 5%;
        }
        .after{ clear: both;}
        .navbar { 
            position: absolute;
            width: 100%;
            float: left;
            margin-top: 1.6%;
            transform: translate(-4%, 0);
        }
    </style>
    <div class="container">
        <img src="./img/WebLogo.png" alt="Els-Bels Boutique Logo" /><div class="navbar">${__home} | ${__about} | ${__gallery} | ${__commissions} | ${__calendar} | ${__contact}</span>
    </div>
    <div class="after></div>`;
    }
});

/** 
 * Represents the footer element for the Els-Bels Boutique website
 * 
 * All `anchor` elements have their `target` forced to be `_blank`
 * 
 * The CSS exposes the following variables which can be styled by end users:
 * 
 *      --font-family
 *      --margin
 *      --padding
 *      --text-align
 *      --width
 */
customElements.define('elsbels-footer', class extends HTMLElement {
    constructor(){super();}
    connectedCallback(){
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `<style>
        div {
            font-family: var(--font-family);
            margin: var(--margin);
            padding: var(--padding);
            text-align: var(--text-align);
            width: var(--width);
        }

        span{
            font-weight: bold;
        }
        </style>
        <div><img src="img/facebook-icon.png" class="fblogo" alt="Social media logo - Facebook" width="2%" />: <a href="https://www.facebook.com/ElsBelsBoutique/"><span>ElsBelsBoutique</span></a> | <img src="img/instagram-logo.jpg" alt="Social media logo - Instagram" width="2%">: <a href="https://www.instagram.com/elsbelsboutique"><span>elsbelsboutique</span></a></div>
        <div>&copy; Els-Bels Boutique 2021 - ${new Date().getFullYear()}. All rights reserved.`;
        /** Forces the anchor elements to have a target of `_blank` */
        Array.from(shadow.querySelectorAll("a")).map(x => x.target = '_blank');
    }
});

customElements.define('elsbels-contact', class extends HTMLElement {
    constructor(){super();}
    connectedCallback(){
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `
            <style>
                em {
                    font-weight: bold;
                }
            </style>
            <center>
            <em>E-mail</em>: <a href='&#109;ailto&#58;e%6&#67;s%62els%62outi&#113;&#117;e&#64;&#37;&#54;7ma&#37;69l&#46;&#99;om'>els&#98;el&#115;b&#111;&#117;&#116;i&#113;ue&#64;gmail&#46;c&#111;m</a><br/><br/>
            <em>Phone</em>: +353 862115271
            </center>
        `;
    }
});