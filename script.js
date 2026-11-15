
// =====================================
// TRAVIS RAMIREZ - PORTFOLIO JAVASCRIPT
// =====================================


// =====================================
// MOBILE NAVIGATION
// =====================================

function toggleMenu() {
    const nav = document.getElementById("nav");

    nav.classList.toggle("open");
}


// =====================================
// CLOSE MENU AFTER CLICKING A LINK
// =====================================

document.addEventListener("DOMContentLoaded", function() {

    const navLinks = document.querySelectorAll("#nav a");

    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            document.getElementById("nav").classList.remove("open");

        });

    });


    // =====================================
    // CURRENT YEAR
    // =====================================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
