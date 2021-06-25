import grabNav, {skipLink} from './grabNav.js'
import grabHamburger, {resetMenu, toggleMenu, hamburgerOpenIcon, hamburgeCloseIcon, loadMenuIconElement} from './grabHamburger.js'
import { grabHomePageImages, grabHomePageText } from './homePage.js'
import { grabAboutPageImages, grabAboutPageText } from './aboutPage.js'
import { grabServicesPageImages, grabServicesPageText } from './servicesPage.js'
import grabContactPageText from './contactPage.js'
import loadTestimonials from './loadTestimonials.js'
import grabFooter from './grabFooter.js'
import barba from '@barba/core'
import { gsap } from 'gsap'
import { delay } from 'q'



barba.hooks.beforeEnter( data => {
    switch(data.next.namespace) {
        case 'homepage':
            grabHomePageImages('https://tylerfleming.dev/wp-json/acf/v3/pages/37')
            grabHomePageText('https://tylerfleming.dev/wp-json/acf/v3/pages/37')
            loadTestimonials('https://tylerfleming.dev/wp-json/acf/v3/pages/37')
            grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')
            resetMenu()
            
        break;

        case 'aboutpage':
            grabAboutPageImages('https://tylerfleming.dev/wp-json/acf/v3/pages/86')
            grabAboutPageText('https://tylerfleming.dev/wp-json/acf/v3/pages/86')
            grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')
            resetMenu()

        break;

        case 'servicespage':
            grabServicesPageImages('https://tylerfleming.dev/wp-json/acf/v3/pages/125')
            grabServicesPageText('https://tylerfleming.dev/wp-json/acf/v3/pages/125')
            grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')
            resetMenu()

        break;

        case 'contactpage':
            grabContactPageText('https://tylerfleming.dev/wp-json/acf/v3/pages/156')
            grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')
            resetMenu()

        break;
    } 
})


function pageTransition() {
    let tl = gsap.timeline()
    tl.to('.transition', {
    y: '100%',
    duration: 1.5,
    ease: "easeInOut"})

    tl.to('section', {
    opacity: 0,
    duration: 1.5,
    ease: "power1"
    }, "-=1.5")
}

function loadFooter() {
    gsap.fromTo('footer', {
        opacity: 0
    },
    {
        opacity: 1,
        duration: 0.5
    }
    )
}

function contentTransitionLeave() {
    pageTransition() 
}

function contentTransitionEnter() {
    gsap.fromTo("section", 
    {opacity: 0}, 
    {opacity: 1, duration: 2}
    )
}

barba.init({
    sync: true,

    transitions: [
        {
            async leave(data) {
                resetMenu()
                pageTransition()
                contentTransitionLeave()
                await delay(1550)
                const done = this.async()
                done()
            },

            async enter(data) {
                loadFooter()
                await delay(150)
                contentTransitionEnter()

            },
        }
    ]
})

// build out the nav
grabNav('https://tylerfleming.dev/wp-json/menus/v1/menus/primary')
grabHamburger('https://tylerfleming.dev/wp-json/wp/v2/media')
toggleMenu()
skipLink()



let resizeTimer
//When resizing the window only run the resize function once every 300ms and check to see if window width is greater than 768px then remove all the mobile navigation classes
window.addEventListener('resize', (event) => {
    clearTimeout(resizeTimer)

    resizeTimer = setTimeout(() => {
        if ( event.currentTarget.innerWidth > 768 ) {
            let hamburgerMenu = document.querySelector('#menuToggle')
            let navigationLinksContainer = document.querySelector('.navigation__links')
            let navigationList = document.querySelector('.navigation__list')        
            let navigationListItem = [...document.querySelectorAll('.navigation__item')]
            
            navigationListItem.forEach(listItem => {
                listItem.classList.remove('open')
            })
            
            navigationLinksContainer.classList.remove('open')
            navigationList.classList.remove('open')
            hamburgerMenu.setAttribute('aria-pressed', false)

        }

    }, 300);
})