export async function grabHomePageImages(url) {
    let data = await fetch(url)
    data = await data.json()
    let homePageIntroImageURL = data.acf.intro_image.url;
    let homePageIntroImageAltText = data.acf.intro_image.alt;
    let homePageIntroImageElement = document.querySelector('.homePageImage')
    homePageIntroImageElement.setAttribute('src', homePageIntroImageURL)
    homePageIntroImageElement.setAttribute('alt', homePageIntroImageAltText)

}


export async function grabHomePageText(url) {
    let data = await fetch(url)
    data = await data.json()
    let homePageIntroHeadlineText = data.acf.intro_headline;
    let homePageIntroHeadlineTextElement = document.querySelector('.introCTA__header')
    homePageIntroHeadlineTextElement.innerText = homePageIntroHeadlineText;

    let homePageIntroCopyText = data.acf.intro_copy;
    let homePageIntroCopyTextElement = document.querySelector('.introCTA__paragraph')
    homePageIntroCopyTextElement.innerText = homePageIntroCopyText;

    let homePageIntroButtonText = data.acf.intro_button.title;
    let homePageIntroButtonURL = data.acf.intro_button.url;
    let homepageIntroButtonTarget = data.acf.intro_button.target;
    let homePageIntroButtonTextElement = document.querySelector('.ctaButton__link')

    homePageIntroButtonTextElement.innerText = homePageIntroButtonText;
    homePageIntroButtonTextElement.setAttribute('href', homePageIntroButtonURL )
    homePageIntroButtonTextElement.setAttribute('target', homepageIntroButtonTarget )

    let homePagePerksHeadlineText = data.acf.perks_headline;
    let homePagePerksHeadlineElement = document.querySelector('.perksCopy__header')
    let homePagePerksCopyText = data.acf.perks_copy;
    let homePagePerksCopyElement = document.querySelector('.perksCopy__paragraph')

    homePagePerksHeadlineElement.innerText = homePagePerksHeadlineText
    homePagePerksCopyElement.innerText = homePagePerksCopyText

    let perksListElement = document.querySelector('.perksCopy__list')
    let perksListItemData = data.acf.perks_repeater;
    perksListItemData.forEach(listItem => {
        let listItemText = listItem.perk_title;
        let listItemElement = `
        <li class="perksCopy__item">
        ${listItemText}
        </li>
        `  
        perksListElement.innerHTML += listItemElement
    })
}

