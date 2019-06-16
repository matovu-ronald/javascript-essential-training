const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// Using event handlers
// Only one function can be attached to event handler
// CTA.onclick = reveal;
// CTA.onclick = console.log("button was clicked");


// Using event listeners
CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function() {
    console.log("Button was clicked");
}, false);