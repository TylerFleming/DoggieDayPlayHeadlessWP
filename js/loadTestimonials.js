async function loadTestimonials(url) {
    let data = await fetch(url);
    data = await data.json();
    let testimonialsData = data.acf.testimonial_repeater;
    let idCounter = 1;
    testimonialsData.forEach(testimonial => {
        
        let copy = testimonial.testimonial_copy
        let owner = testimonial.testimonial_owner
        let dog = testimonial.testimonial_dog
        let testimonialContainer = document.querySelector('.testimonialContainer')
        let testimonialTemplate = `
        <div id="testimonial${idCounter}" class="testimonial">
        <p class="testimonial__copy">${copy}</p>

         <span class="testimonial__name">${owner} - Parent of ${dog}</span>
        </div>
        `

        testimonialContainer.innerHTML += testimonialTemplate;

        let testimonialNavContainer = document.querySelector('.testimonialNav')

        let testimonialNavButtonTemplate = `
        <div class="testimonialNav__button">
        <a class="testimonialNav__button__anchor" href="#testimonial${idCounter}">${idCounter}</a>
        </div> 
        `

        testimonialNavContainer.innerHTML += testimonialNavButtonTemplate;

        let testimonialAnchor = [...document.querySelectorAll('.testimonialNav__button__anchor')]
        testimonialAnchor.forEach(anchor => {
            
            anchor.addEventListener('click', (e) => {
                testimonialAnchor.forEach(anchor => {
                    anchor.classList.remove('active')
                })
                anchor.classList.add('active')
               let x = window.pageXOffset
               let y = window.pageYOffset
               window.addEventListener('scroll', () => {
                window.scrollTo(x, y)
               }, {once: true})
            })
        })

        idCounter++
    })
}



export default loadTestimonials
