function toggleMenu(){
    const icon = document.querySelector(".hamburger-icon");
    const menu = document.querySelector(".menu-link");
    icon.classList.toggle("open");
    menu.classList.toggle("open");
}