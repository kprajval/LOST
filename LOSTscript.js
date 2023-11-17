function setBodyHeight() {
    // Set body height = window height
    $('body').height($(window).height());
}

$(document).ready(function() {
    $(window).bind('resize', setBodyHeight);
    setBodyHeight();

    const create = $('#create');
    const closePopup1 = $('#closePopup1');
    const login = $('#login');
    const closePopup = $('#closePopup');
    const profile = $('#profile'); // Add this line to select the profile element

    // Create popup
    create.on("click", function () {
        myPopup1.classList.add("show");
    });
    closePopup1.on("click", function () {
        myPopup1.classList.remove("show");
    });
    window.addEventListener("click", function (event) {
        if (event.target == myPopup1) {
            myPopup1.classList.remove("show");
        }
    });

    // Login popup
    login.on("click", function () {
        myPopup.classList.add("show");
    });
    closePopup.on("click", function () {
        myPopup.classList.remove("show");
    });
    window.addEventListener("click", function (event) {
        if (event.target == myPopup) {
            myPopup.classList.remove("show");
        }
    });

    // PROFILE POPUP
    profile.on("click", function () {
        myPopup3.classList.add("show");
    });
    const closePopup3 = $('#closePopup3');
    closePopup3.on("click", function () {
        myPopup3.classList.remove("show");
    });
    window.addEventListener("click", function (event) {
        if (event.target == myPopup3) {
            myPopup3.classList.remove("show");
        }
    });
});