export async function grabServicesPageImages(url) {
    let data = await fetch(url)
    data = await data.json()
    let servicesPageServicesData = data.acf.services_repeater
    let servicesPageServicesContainerElement = document.querySelector('.servicesGrid')
    servicesPageServicesData.forEach(service => {
        let serviceName = service.service_name;
        let servicePhotoURL = service.service_photo.url
        let servicePhotoAltText = service.service_photo.alt
        let servicePhotoElement = 
        `<div class="service">
        <img src="${servicePhotoURL}" alt="${servicePhotoAltText}">
        <div class="service__name">${serviceName}</div>
        </div>`

        servicesPageServicesContainerElement.innerHTML += servicePhotoElement
    });
 

}


export async function grabServicesPageText(url) {
    let data = await fetch(url)
    data = await data.json()
    
    let servicesPageIntroHeadLineText = data.acf.services_headline
    let servicesPageIntroHeadLineElement = document.querySelector('.servicesHeadline')
    let servicesPageIntroCopyText = data.acf.services_copy
    let servicesPageIntroCopyTextElement = document.querySelector('.servicesParagraph')

    servicesPageIntroHeadLineElement.innerText = servicesPageIntroHeadLineText
    servicesPageIntroCopyTextElement.innerText = servicesPageIntroCopyText

    let servicesPageButtonLinkText = data.acf.services_button.title
    let servicesPageButtonLinkURL = data.acf.services_button.url
    let servicesPageButtonLinkTarget = data.acf.services_button.target
    let servicesPageButtonLinkElement = document.querySelector('.ctaButton__link')

    servicesPageButtonLinkElement.setAttribute('href', servicesPageButtonLinkURL)
    servicesPageButtonLinkElement.setAttribute('rel', 'noreferrer')
    servicesPageButtonLinkElement.setAttribute('target', 'servicesPageButtonLinkTarget')
    servicesPageButtonLinkElement.innerText = servicesPageButtonLinkText

}
