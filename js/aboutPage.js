
export async function grabAboutPageImages(url) {
    let data = await fetch(url)
    data = await data.json()
    let aboutPageStaffMemberData = data.acf.staff_repeater
    let aboutPageStaffMemberContainerElement = document.querySelector('.staffGrid')
    aboutPageStaffMemberData.forEach(staffMember => {
        let staffMemberName = staffMember.staff_name;
        let staffMemberPhotoURL = staffMember.staff_photo.url
        let staffMemberPhotoAltText = staffMember.staff_photo.alt
        let staffMemberPhotoElement = 
        `<div class="staff">
        <img src="${staffMemberPhotoURL}" alt="staff member ${staffMemberPhotoAltText}" class="staff__img">
        <div class="staff__name">${staffMemberName}</div>
        </div>`

        aboutPageStaffMemberContainerElement.innerHTML += staffMemberPhotoElement
    });
 

}


export async function grabAboutPageText(url) {
    let data = await fetch(url)
    data = await data.json()
    
    let aboutPageIntroHeadLineText = data.acf.about_headline
    let aboutPageIntroHeadLineElement = document.querySelector('.aboutHeadline')
    let aboutPageIntroCopyText = data.acf.about_copy
    let aboutPageIntroCopyTextElement = document.querySelector('.aboutParagraph')

    aboutPageIntroHeadLineElement.innerText = aboutPageIntroHeadLineText
    aboutPageIntroCopyTextElement.innerText = aboutPageIntroCopyText

    let aboutPageIntroButtonLinkElement = document.querySelector('.ctaButton__link')
    let aboutPageIntroButtonLinkText = data.acf.about_button.title
    let aboutPageIntroButtonLinkURL = data.acf.about_button.url
    let aboutPageIntroButtonTarget = data.acf.about_button.target
    aboutPageIntroButtonLinkElement.innerText = aboutPageIntroButtonLinkText
    aboutPageIntroButtonLinkElement.setAttribute('href', aboutPageIntroButtonLinkURL)
    aboutPageIntroButtonLinkElement.setAttribute('target', aboutPageIntroButtonTarget)

    let aboutPageStaffHeadlineText = data.acf.staff_headline
    let aboutPageStaffCopyText = data.acf.staff_copy
    let aboutPageStaffHeadlineElement = document.querySelector('.aboutStaffHeadline')
    let aboutPageStaffCopyElement = document.querySelector('.aboutStaffParagraph')

    aboutPageStaffHeadlineElement.innerText = aboutPageStaffHeadlineText
    aboutPageStaffCopyElement.innerText = aboutPageStaffCopyText
}

