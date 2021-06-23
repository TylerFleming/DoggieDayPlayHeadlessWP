import grabNav, {skipLink} from './grabNav.js'
import grabHamburger, {toggleMenu, hamburgerOpenIcon, hamburgeCloseIcon, loadMenuIconElement} from './grabHamburger.js'
import { grabHomePageImages, grabHomePageText } from './homePage.js'
import { grabAboutPageImages, grabAboutPageText } from './aboutPage.js'
import { grabServicesPageImages, grabServicesPageText } from './servicesPage.js'
import grabContactPageText from './contactPage.js'
import loadTestimonials from './loadTestimonials.js'
import grabFooter from './grabFooter.js'
import barba from '@barba/core'
import barbaCss from '@barba/css'
import barbaPrefetch from '@barba/prefetch'

// build out the nav
grabNav('https://tylerfleming.dev/wp-json/menus/v1/menus/primary')
grabHamburger('https://tylerfleming.dev/wp-json/wp/v2/media')
toggleMenu()
skipLink()

barba.use(barbaPrefetch);

barba.use(barbaCss)

barba.hooks.beforeEnter( (data) => {
    // run the scripts based upon the current page
    switch(data.next.namespace) {
        case 'homepage':
        grabHomePageImages('https://tylerfleming.dev/wp-json/acf/v3/pages/37')
        grabHomePageText('https://tylerfleming.dev/wp-json/acf/v3/pages/37')
        loadTestimonials('https://tylerfleming.dev/wp-json/acf/v3/pages/37')
        grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')

        break;

        case 'aboutpage':
            grabAboutPageImages('https://tylerfleming.dev/wp-json/acf/v3/pages/86')
            grabAboutPageText('https://tylerfleming.dev/wp-json/acf/v3/pages/86')
            grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')

        break;

        case 'servicespage':
            grabServicesPageImages('https://tylerfleming.dev/wp-json/acf/v3/pages/125')
            grabServicesPageText('https://tylerfleming.dev/wp-json/acf/v3/pages/125')
            grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')
            
        break;

        case 'contactpage':
            grabContactPageText('https://tylerfleming.dev/wp-json/acf/v3/pages/156')
            grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')

        break;

    }
})


barba.init({
    transitions: [
        {
            name: 'cover',
            to: {
                namespace: ['homepage', 'aboutpage', 'servicespage', 'contactpage']
            },
            leave() {},
            enter() {}
        }
    ]
})





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
