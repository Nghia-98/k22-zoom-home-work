const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        mainImage.src = thumbnail.src;
        mainImage.alt = thumbnail.alt;

        thumbnails.forEach((t) => t.classList.remove("active"));
        thumbnail.classList.add("active");
    });
});
