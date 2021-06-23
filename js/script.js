import grabNav, {skipLink} from './grabNav.js'
import grabHamburger, {resetMenu, toggleMenu, hamburgerOpenIcon, hamburgeCloseIcon, loadMenuIconElement} from './grabHamburger.js'
import { grabHomePageImages, grabHomePageText } from './homePage.js'
import { grabAboutPageImages, grabAboutPageText } from './aboutPage.js'
import { grabServicesPageImages, grabServicesPageText } from './servicesPage.js'
import grabContactPageText from './contactPage.js'
import loadTestimonials from './loadTestimonials.js'
import grabFooter from './grabFooter.js'

// build out the nav
grabNav('https://tylerfleming.dev/wp-json/menus/v1/menus/primary')
grabHamburger('https://tylerfleming.dev/wp-json/wp/v2/media')
toggleMenu()
skipLink()

const bodyClass = document.body.classList[0]

    switch(bodyClass) {
        case 'homepage':
            grabHomePageImages('https://tylerfleming.dev/wp-json/acf/v3/pages/37')
            grabHomePageText('https://tylerfleming.dev/wp-json/acf/v3/pages/37')
            loadTestimonials('https://tylerfleming.dev/wp-json/acf/v3/pages/37')
            grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')
            // resetMenu()
            
        break;

        case 'aboutpage':
            grabAboutPageImages('https://tylerfleming.dev/wp-json/acf/v3/pages/86')
            grabAboutPageText('https://tylerfleming.dev/wp-json/acf/v3/pages/86')
            grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')
            // resetMenu()

        break;

        case 'servicespage':
            grabServicesPageImages('https://tylerfleming.dev/wp-json/acf/v3/pages/125')
            grabServicesPageText('https://tylerfleming.dev/wp-json/acf/v3/pages/125')
            grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')
            // resetMenu()

        break;

        case 'contactpage':
            grabContactPageText('https://tylerfleming.dev/wp-json/acf/v3/pages/156')
            grabFooter('https://tylerfleming.dev/wp-json/acf/v3/options/options')
            // resetMenu()

        break;

    }






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