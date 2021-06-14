import grabNav from './grabNav.js'

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

grabNav('https://doggiedayplay.000webhostapp.com/wp-json/menus/v1/menus/primary')