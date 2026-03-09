let modal = document.getElementById("doctorModal");
let closeBtn = document.querySelector(".close-btn");

let cards = document.querySelectorAll(".doctor-card");

cards.forEach(function (card) {

    card.addEventListener("click", function (event) {

        if (event.target.tagName === "BUTTON") {
            return;
        }

        let doctorName = card.querySelector(".doctor-name h2").innerText;
        let doctorImage = card.querySelector(".doctor-photo img").src;
        let doctorSpecialty = card.querySelector(".doctor-title").innerText;

        document.getElementById("modalName").innerText = doctorName;
        document.getElementById("modalImg").src = doctorImage;
        document.getElementById("modalSpecialty").innerText = doctorSpecialty;


        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
