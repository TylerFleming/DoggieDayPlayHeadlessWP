import { delay } from 'q'


async function grabFooter(url) {
    let data = await fetch(url)
    data = await data.json()

    await delay(2000)
    let contactPhoneData = data.acf.contact_repeater[0]
    let contactLocationData = data.acf.contact_repeater[1]
    let contactElementContainer = document.querySelector('.footerContactLinks > ul')
    let contactPhoneElement = `
    <li><a href="tel:${contactPhoneData.contact_info}"><i class="fas fa-phone-alt"></i>${contactPhoneData.contact_info}</a></li>
    `
    let contactLocationElement = `
    <li><span><i class="fas fa-map-marker-alt"></i>${contactLocationData.contact_info}</span></li>
    `
    contactElementContainer.innerHTML += contactPhoneElement
    contactElementContainer.innerHTML += contactLocationElement


    let socialLinkData = data.acf.social_repeater
    let socialLinkElementContainer = document.querySelector('.footerSocialLinks > ul')
    socialLinkData.forEach(socialLink => {
      let socialLinkElement = `
      <li><a rel="noreferrer" target="${socialLink.social_link.target}" aria-label="${socialLink.social_link.title}" href="${socialLink.social_link.url}"><img alt="${socialLink.social_icon.alt}"src="${socialLink.social_icon.url}"></a></li>
      `
      socialLinkElementContainer.innerHTML += socialLinkElement

    });
}


export default grabFooter