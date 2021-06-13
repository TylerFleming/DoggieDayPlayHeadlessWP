async function grabPosts(url) {
    let data = await fetch(url);
     data = await data.json();
    let modifiedPost = data.map( post => post.content.rendered )
    modifiedPost.forEach(post => {
        let postDiv = document.createElement('div');
        postDiv.style.display = 'block'
        postDiv.innerHTML = post;
        document.body.append(postDiv)
    });
}

grabPosts('https://doggiedayplay.000webhostapp.com/wp-json/wp/v2/posts')

async function grabNav(url) {
    let data = await fetch(url)
    navItems = await data.json()
    navItems = navItems.items
    navItems.forEach(navItem => {
        let linkText = navItem.title;
        let linkURL = navItem.url;
        let link = document.createElement('a');
        link.innerText = linkText;
        link.setAttribute('href', linkURL)
        link.setAttribute('target', '_blank')
        document.body.append(link)
    });
}
grabNav('https://doggiedayplay.000webhostapp.com/wp-json/menus/v1/menus/primary')