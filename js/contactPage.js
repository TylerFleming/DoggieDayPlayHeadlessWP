 async function grabContactPageText(url) {
    let data = await fetch(url)
    data = await data.json()
    let contactPageIntroHeadLineText = data.acf.contact_headline
    let contactPageIntroHeadLineElement = document.querySelector('.contactHeadline')
    let contactPageIntroCopyText = data.acf.contact_copy
    let contactPageIntroCopyTextElement = document.querySelector('.contactParagraph')

    contactPageIntroHeadLineElement.innerText = contactPageIntroHeadLineText
    contactPageIntroCopyTextElement.innerText = contactPageIntroCopyText
}

export default grabContactPageText