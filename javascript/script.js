// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Init Scrollspy
$('body').scrollspy({target: '#main-nav'});

// Smooth Scrolling
$("#navbar a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function () {

        window.location.hash = hash;
        });
    }
});

const special = document.querySelector('#special button');
const html = document.querySelector('html');
let isChanged = false;

special.addEventListener('click', function() {
    if (isChanged) {
        location.reload();
        isChanged = false;
    }
    else {
        isChanged = true;
        html.style.fontSize = "18px";
        document.querySelectorAll(".lead, .card-text, td").forEach(function(element) {
            element.style.fontWeight = "500";
        });
        document.querySelector("#header-section .overlay").style.backgroundColor = "rgba(0, 0, 0, 0.97)";
        document.querySelector("main").style.background = "#fafafa";
        document.querySelector("#navbar").style.boxShadow = "none";
        document.querySelector("#navbar").style.borderBottom = "2px solid #000000";
        document.querySelector("#more-reviews").className = "btn btn-outline-dark btn-lg";
        document.querySelector("#more-reviews").style.border = "2px solid #000000";
        document.querySelectorAll(".border-info").forEach(function(element) {
            element.style.setProperty("border", "2px solid #000000", "important");
        });
        document.querySelector("footer").className = "bg-dark py-1 text-white";
    }
});