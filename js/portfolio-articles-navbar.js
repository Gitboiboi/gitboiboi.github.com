// Hide / Reveal header on scroll direction
const projectSlides = document.querySelectorAll('.slide-card');
const header = document.querySelector('header');
var prevScrollpos = window.pageYOffset;

function revealHeader() {
    var currentScrollPos = window.pageYOffset;
    if ((prevScrollpos < currentScrollPos) && (window.innerWidth < 700)){
            header.classList.remove('header-reveal');
            for (let i = 0; i < projectSlides.length; i++) {
                projectSlides[i].style.paddingTop = '5vh';   
            }
    }
    else if (prevScrollpos > currentScrollPos + 2) {
        header.classList.add('header-reveal');
        for (let i = 0; i < projectSlides.length; i++) {
                projectSlides[i].style.paddingTop = 'calc(5vh + 78px)';   
            }
    }
    prevScrollpos = currentScrollPos;
}
window.addEventListener('scroll', revealHeader);
window.addEventListener('resize', revealHeader);

if ((window.innerWidth > 700) || (prevScrollpos == 0)) {
    header.classList.add('header-reveal');
}
