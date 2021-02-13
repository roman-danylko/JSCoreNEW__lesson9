const headerBtn = document.querySelector('.header_btn');
const title = document.querySelector('.title');
const img = document.querySelector('.img');
const footerBtn = document.querySelector('.footer_btn');

let st = getComputedStyle(footerBtn);

headerBtn.addEventListener('click', () => {
    title.scrollIntoView({
        behavior: "smooth"
    })
})

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100 && window.scrollY <= 250){
        headerBtn.style.fontSize = `${window.scrollY/4}px`
        
    }else if(window.scrollY >= 250 && window.scrollY <= 350){
        title.style.left = `${window.scrollY - 250}px`
        title.style.width = `${window.scrollY}px`
        
    }else if(window.scrollY >= 350 && window.scrollY <= 500){
        img.style.right = `${window.scrollY - 350}px`
    }else if(window.scrollY >= 1000 && window.scrollY <= 1070){
        footerBtn.style.fontSize = `${1100 - window.scrollY}px`
    }
})

footerBtn.addEventListener('click', () => {
    scroll({
        top: 0,
        behavior: "smooth"
    })
})