function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'web Designer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop: true,
});

console.log(typed);
const second = new Typed('.multiple-contact-dotes', {
    strings: ['. . .', '. . .'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop: true,
});