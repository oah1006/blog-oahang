
// HIDE FORM
function hideForm() {
    $('.modal').addClass('hidden');
}

$('.btn-back').click(function() {
    hideForm();
});

// Handle sign in/ sign up

function showFormSignUp() {
    $('.modal').removeClass("hidden");
    $('.sign-in').addClass("hidden");
    $('.sign-up').removeClass("hidden");
}

function showFormSignIn() {
    $('.modal').removeClass("hidden");
    $('.sign-in').removeClass("hidden");
    $('.sign-up').addClass("hidden");
}

// Sign up
$('.btn-sign-up').click(function() {
    showFormSignUp();
});

$('.btn-switch-register').click(function() {
    showFormSignUp();
});

// Sign in

$('.btn-sign-in').click(function() {
    showFormSignIn();
});

$('.btn-switch-login').click(function() {
    showFormSignIn();
});

// Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//  Stiky