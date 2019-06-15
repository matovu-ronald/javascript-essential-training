/* const CTAELEMENT = document.querySelector(".cta a");

if (CTAELEMENT.hasAttribute("target")) {
    console.log(CTAELEMENT.getAttribute("target"))
} else {
   CTAELEMENT.setAttribute("target", "_blank");
} */

// console.log(CTAELEMENT.attributes);

const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

// var captionText = document.createTextNode(altText);

// captionElement.appendChild(captionText);
// FEATURED.appendChild(captionElement);

captionElement.append(altText);
FEATURED.append(captionElement);


THEIMAGE.setAttribute("alt", "");