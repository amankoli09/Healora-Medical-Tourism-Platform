const content = document.getElementById("doctorSlider");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

scrollRightBtn.addEventListener("click", () => {
    content.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});

scrollLeftBtn.addEventListener("click", () => {
    content.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});

const data = [
    {
        text: "Healora made my treatment abroad simple and stress-free.",
        name: "Anita Sharma",
        role: "Hair Transplant Patient"
    },
    {
        text: "Everything from hospital booking to travel was perfectly managed.",
        name: "Rahul Mehta",
        role: "Dental Implant Patient"
    },
    {
        text: "I felt supported and informed at every step of my journey.",
        name: "Sana Khan",
        role: "IVF Patient"
    }
];
let i = 0;
const text = document.querySelector(".review-text");
const name = document.querySelector(".review-name");
const role = document.querySelector(".review-role");

document.querySelector(".next").onclick = () => {
    i = (i + 1) % data.length;
    change();
};
document.querySelector(".prev").onclick = () => {
    i = (i - 1 + data.length) % data.length;
    change();
};
function change() {
    text.textContent = data[i].text;
    name.textContent = data[i].name;
    role.textContent = data[i].role;
}

