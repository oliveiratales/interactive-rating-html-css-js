const rating_cards = document.querySelectorAll(".ratings span");
const submit_btn = document.querySelectorAll(".btn-submit");
const rate_point = document.getElementById("rate");
const rate_section = document.querySelector(".rating-section");
const thank_section = document.querySelector(".thanks");

let rate = null;

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        const active = document.querySelector(".checked")

        if (active) {
            active.classList.remove("checked")
        }

        const card = e.target;
        card.classList.add("checked")
        rate = e.target.innerText;
    })
}
);

function submit() {
    if (rate) {
        rate_point.innerText = rate;
        rate_section.classList.add("hidden");
        thank_section.classList.remove("hidden");
    }
}