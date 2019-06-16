const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e, current) {
    e.preventDefault();

    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Oooops!" : CTA.innerHTML = "Book Now!";

    ALERT.classList.toggle("hide");
}

// Using event handlers
// Only one function can be attached to event handler
// CTA.onclick = reveal;
// CTA.onclick = console.log("button was clicked");


// Using event listeners
CTA.addEventListener("click", function(e) {
    reveal(e, this);
}, false);
CTA.addEventListener("click", function() {
    console.log("Button was clicked");
}, false);