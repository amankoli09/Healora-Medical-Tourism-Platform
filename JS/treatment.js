document.addEventListener("DOMContentLoaded", function () {

    const countryFilter = document.getElementById("countryFilter");
    const specialtyFilter = document.getElementById("specialtyFilter");
    const cards = document.querySelectorAll(".treat-card");

    if (!countryFilter || !specialtyFilter) return;

    function filterCards() {
        const selectedCountry = countryFilter.value;
        const selectedSpecialty = specialtyFilter.value;

        cards.forEach(card => {
            const cardCountry = card.dataset.country;
            const cardSpecialty = card.dataset.specialty;

            const countryMatch =
                selectedCountry === "All" || cardCountry === selectedCountry;

            const specialtyMatch =
                selectedSpecialty === "All" || cardSpecialty === selectedSpecialty;

            card.style.display =
                (countryMatch && specialtyMatch) ? "block" : "none";
        });
    }

    countryFilter.addEventListener("change", filterCards);
    specialtyFilter.addEventListener("change", filterCards);

});