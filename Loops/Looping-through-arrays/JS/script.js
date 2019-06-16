var extLinks = document.querySelectorAll('a[href^="http"]');

for (var i = 0; i < extLinks.length; i++) {
    if (!extLinks[i].hasAttribute("targert")) {
        extLinks[i].setAttribute("target", "_blank");
    }
}