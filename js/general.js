// Logo rotation animation on hover
var headerLogo = document.querySelector('.header-logo');
function logoHoverAnim() {
    headerLogo.classList.add('header-logo-active');

    setTimeout(function() {
        headerLogo.classList.remove('header-logo-active');
    }, 1000);
}
headerLogo.addEventListener('mouseenter', logoHoverAnim);
