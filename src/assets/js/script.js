var typed = new Typed(".typing",{
    strings : ["Grapic Design","Beats Meaking","Web Developement"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

let navItems = document.querySelectorAll('nav > a');
let sections = document.querySelectorAll('section');
window.onscroll = () => {
    let scrollHeight = window.pageYOffset;
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop / 1.1 <= scrollHeight) {
            for (let j = 0; j < navItems.length; j++) {
                navItems[j].classList.remove('active');
            }
            navItems[i].classList.add('active');
        }
    }
}
