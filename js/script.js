import grabNav, {skipLink} from './grabNav.js'
import grabHamburger, {toggleMenu, hamburgerOpenIcon, hamburgeCloseIcon, loadMenuIconElement} from './grabHamburger.js'
import { grabHomePageImages, grabHomePageText } from './homepage.js'
import loadTestimonials from './loadTestimonials.js'
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


// build out the nav
grabNav('http://tylerfleming.dev/wp-json/menus/v1/menus/primary')
grabHamburger('http://tylerfleming.dev/wp-json/wp/v2/media')
toggleMenu()
skipLink()



// get the current page and run the right function to grab the data for that page
const currentPage = document.body.classList[0]

// run the scripts based upon the current page
switch(currentPage) {
    case 'homepage':
    grabHomePageImages('http://tylerfleming.dev//wp-json/acf/v3/pages/37')
    grabHomePageText('http://tylerfleming.dev//wp-json/acf/v3/pages/37')
    loadTestimonials('http://tylerfleming.dev//wp-json/acf/v3/pages/37')
    break;

    case 'aboutpage':
        console.log('about page')
    break;

    case 'servicespage':

    break;

    case 'contactpage':

    break;

}
