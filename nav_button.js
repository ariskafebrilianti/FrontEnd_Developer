const allLiTag = document.querySelectorAll ("li")

allLiTag.forEach((el) => {
    el.addEventListener("click", () => {
        allLiTag. forEach((el) => {
            el.classList.remove("active");
        });

        el.classList.add("active");
    });
});