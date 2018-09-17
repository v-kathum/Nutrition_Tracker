
// app load screen
$(window).load(function () {
    $("#loader").delay(1900).fadeOut(500);
});

// Get the modal
var modal = document.getElementById('login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal2 = document.getElementById('register');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal2) {
        modal.style.display = "none";
    }
}