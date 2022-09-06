const target = document.querySelectorAll("[data-anime]");

const ativarScroll = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);

    target.forEach((e) => {
        if (windowTop > e.offsetTop) {
            e.classList.add("animate");
        } else {
            e.classList.remove("animate");
        }
    })
}

window.addEventListener("scroll", ativarScroll);