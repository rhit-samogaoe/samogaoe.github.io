// we are targeting those 2 element and whenever we click it adds or removes the open class.
function toggleMenu() {
    // we are using an inbuil system in js and we're gonna target an element on th epage and use it
    const menu = document.querySelector(".phone-menu-links");
    const icon = document.querySelector(".phone-menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}