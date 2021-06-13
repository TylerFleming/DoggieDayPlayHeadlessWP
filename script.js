// async function grabPosts(url) {
//     let data = await fetch(url);
//      data = await data.json();
//     let modifiedPost = data.map( post => post.content.rendered )
//     modifiedPost.forEach(post => {
//         let postDiv = document.createElement('div');
//         postDiv.style.display = 'block'
//         postDiv.innerHTML = post;
//         document.body.append(postDiv)
//     });
// }

// grabPosts('https://doggiedayplay.000webhostapp.com/wp-json/wp/v2/posts')

async function grabNav(url) {
    const navList = document.querySelector('.navigation__list')
    let data = await fetch(url)
    navItems = await data.json()
    navItems = navItems.items
    navItems.forEach(navItem => {
        const linkElementParent = document.createElement('li')
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
grabNav('https://doggiedayplay.000webhostapp.com/wp-json/menus/v1/menus/primary')