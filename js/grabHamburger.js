export let hamburgerOpenIcon;
export let hamburgeCloseIcon;

async function grabHamburger(url) {

    let data = await fetch(url)
    let hamburgerIcons = await data.json()
    hamburgerIcons.forEach(icon => {
        if (icon.slug == "hamburger-closed") {
            hamburgerOpenIcon = icon.source_url
        } else if (icon.slug == "hamburger-opened") {
            hamburgeCloseIcon = icon.source_url
        }
    });

    let mobileMenuButton = document.querySelector('#menuToggle')
    let mobileMenuIcon = document.createElement('img')
    mobileMenuIcon.setAttribute('src', hamburgerOpenIcon);
    mobileMenuIcon.setAttribute('id', 'menuIcon');
    mobileMenuButton.append(mobileMenuIcon);
}

export function toggleMenu() {
    const hamburgerMenu = document.querySelector('#menuToggle')
    let navigationLinksContainer = document.querySelector('.navigation__links')
    let navigationList = document.querySelector('.navigation__list')
    hamburgerMenu.addEventListener('click', () => {
        if ( hamburgerMenu.getAttribute('aria-pressed') === 'false' ) {
            hamburgerMenu.setAttribute('aria-pressed', true)
            let hamburgerIcon = loadMenuIconElement()
            hamburgerIcon.setAttribute('src', hamburgeCloseIcon)
            navigationLinksContainer.classList.add('open')
            navigationList.classList.add('open')
            let navigationListItem = [...document.querySelectorAll('.navigation__item')]
            navigationListItem.forEach(listItem => {
                listItem.classList.add('open')
            })
        } else if ( hamburgerMenu.getAttribute('aria-pressed') === 'true' ) {
            hamburgerMenu.setAttribute('aria-pressed', false)
            let hamburgerIcon = loadMenuIconElement()
            hamburgerIcon.setAttribute('src', hamburgerOpenIcon)
            navigationLinksContainer.classList.remove('open')
            navigationList.classList.remove('open')
            let navigationListItem = [...document.querySelectorAll('.navigation__item')]
            navigationListItem.forEach(listItem => {
                listItem.classList.remove('open')
            })
        }
    })
}


export function loadMenuIconElement() { 
    return document.querySelector('#menuIcon')
}

export default grabHamburger