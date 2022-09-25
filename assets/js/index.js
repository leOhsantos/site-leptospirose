const mobileMenu = document.querySelector(".mobile-menu"),
    navList = document.querySelector(".nav-list"),
    navItems = document.querySelectorAll(".nav-item"),
    target = document.querySelectorAll("[data-anime]"),
    imgs = document.querySelectorAll(".img");

function handleMenuButton() {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    navItems.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    })
}

function animateElements() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);

    target.forEach(e => {
        if (windowTop > e.offsetTop) {
            e.classList.add("animate");
        } else {
            e.classList.remove("animate");
        }
    })

    if (window.matchMedia("(max-width: 999px)").matches) {
        imgs.forEach((imgs) => {
            imgs.setAttribute("data-anime", "bottom");
        });
    }
}

mobileMenu.addEventListener("click", handleMenuButton);
window.addEventListener("scroll", animateElements);