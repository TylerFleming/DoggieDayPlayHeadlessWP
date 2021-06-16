async function grabNav(url) {
    const navList = document.querySelector('.navigation__list')
    let data = await fetch(url)
    navItems = await data.json()
    navItems = navItems.items
    navItems.forEach(navItem => {
        let linkElementParent = document.createElement('li')
        linkElementParent.classList.add('navigation__item')
        let linkText = navItem.title;
        let linkURL = navItem.url;
        let link = document.createElement('a');
        link.innerText = linkText;
        link.setAttribute('href', linkURL)
        link.setAttribute('target', '_blank')
        link.classList.add('navigation__link')
        linkElementParent.append(link)
        navList.append(linkElementParent)
    });
}

export function skipLink() {
    let skipLinkTrigger = document.querySelector('#logo')
    let skipLinkContainer = document.querySelector('.skipLink ')
    let skipLinkElement = document.querySelector('.skipLink__item')
    skipLinkTrigger.addEventListener('focus', () => {
        skipLinkContainer.classList.add('open')
    })
    skipLinkElement.addEventListener('blur', () => {
        skipLinkContainer.classList.remove('open')
    })
}

export default grabNav