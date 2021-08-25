let buttonsToForm = document.getElementsByClassName("btn");

for (let item of buttonsToForm) {
    item.addEventListener('click', (e)=> {
        let target = document.querySelector("#section-form");
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        e.preventDefault();
    })
}

AOS.init({
    once: false
});