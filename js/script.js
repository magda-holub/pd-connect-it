//switcher
var switcher = document.querySelector("#layout_switch"),
    buttons = switcher.querySelectorAll("button"),
    testLayout = document.querySelector("#testLayout"),
    body = document.body;

switcher.querySelectorAll("button")[0].addEventListener("click", function () {
    testLayout.classList.remove("layout-0", "layout-1");
    body.classList.add("mobile");
    buttons.forEach(function (button) {
        button.classList.remove("active")
    });
    this.classList.add("active");

});

switcher.querySelectorAll("button")[1].addEventListener("click", function () {
    testLayout.classList.remove("layout-1");
    body.classList.remove("mobile");
    testLayout.classList.add("layout-0");
    buttons.forEach(function (button) {
        button.classList.remove("active")
    });
    this.classList.add("active");
});

switcher.querySelectorAll("button")[2].addEventListener("click", function () {
    testLayout.classList.remove("layout-0");
    body.classList.remove("mobile");
    testLayout.classList.add("layout-1");
    buttons.forEach(function (button) {
        button.classList.remove("active")
    });
    this.classList.add("active");
});

//video select
function videoSelect() {
    var btn = document.querySelector('#celek .video-select .alza-btn');

    btn.addEventListener('click', function () {
        var videoID = document.querySelector('#celek .video-select__videoID').value,
            iframe = document.querySelector('#celek .pp-video iframe');

        iframe.src = 'https://www.youtube.com/embed/' + videoID;
        document.querySelector('#celek .video-select__videoID').value = '';
        console.log('Video změněno.');
    });
};


//run admin functions
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("admin") || window.location.href.includes("127")) {
        videoSelect();
    };
});