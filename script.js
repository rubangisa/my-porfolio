function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const typed = new Typed('.multiple-text', {
    strings: ['web Designer', 'Frontend Developer', 'Backend Developer', 'Graphic Designer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop: true,
});
const second = new Typed('.multiple-contact-dotes', {
    strings: ['. . .', '. . .'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop: true,
});