var navButton = document.getElementById('nav-button');
function toggleMenu() {
    navButton.classList.toggle('active');
}

$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 3000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 

var myDiv = document.getElementById("mesaj_news");
myDiv.innerHTML = "This website uses cookies from Google to analyze traffic.";

// Open mobile menu
$('#mobile-menu-open').click(function () {
    $('header, body').addClass('active');
});

// Close mobile menu
$('#mobile-menu-close').click(function () {
    $('header, body').removeClass('active');
});

  

