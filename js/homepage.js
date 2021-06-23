export async function grabHomePageImages(url) {
    let data = await fetch(url)
    data = await data.json()
    let homePageIntroImageURL = data.acf.intro_image.url;
    let homePageIntroImageAltText = data.acf.intro_image.alt;
    let homePageIntroImageElement = document.querySelector('.homePageImage')
    homePageIntroImageElement.setAttribute('src', homePageIntroImageURL)
    homePageIntroImageElement.setAttribute('alt', homePageIntroImageAltText)

    let homePagePerksImageElement = document.querySelector('.perksImage > img')
    let homePagePerksImageURL = data.acf.perks_image.url
    let homepagePerksImageAltText = data.acf.perks_image.alt
    
    homePagePerksImageElement.setAttribute('src', homePagePerksImageURL)
    homePagePerksImageElement.setAttribute('alt', homepagePerksImageAltText)
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
    homePageIntroButtonTextElement.setAttribute('rel', 'noreferrer' )


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

    let homePageTestimonialHeaderElement = document.querySelector('.testimonialHeader');
    let homePageTestimonialHeaderText = data.acf.testimonial_headline

    homePageTestimonialHeaderElement.innerText = homePageTestimonialHeaderText

    let homePageCallToActionButtonTextElement = document.querySelector('#homeCallToAction > .ctaButton > .ctaButton__link')
    let homePageCallToActionText = data.acf.testimonial_cta_btn.title;
    let homePageCallToActionURL = data.acf.testimonial_cta_btn.url;
    let homePageCallToActionTarget = data.acf.testimonial_cta_btn.target;
    homePageCallToActionButtonTextElement.innerText = homePageCallToActionText;
    homePageCallToActionButtonTextElement.setAttribute('href', homePageCallToActionURL )
    homePageCallToActionButtonTextElement.setAttribute('target', homePageCallToActionTarget )
    homePageCallToActionButtonTextElement.setAttribute('rel', 'noreferrer' )
}

