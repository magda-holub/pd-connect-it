//layout switcher
$("#layout_switch button").on("click", function () {
    $("#testLayout").removeClass("layout-0").removeClass("layout-1");
    $("body").addClass("mobile");
});
$("#layout_switch button:nth-child(2)").on("click", function () {
    $("#testLayout").addClass("layout-0");
    $("body.mobile").removeClass("mobile");
});
$("#layout_switch button:nth-child(3)").on("click", function () {
    $("#testLayout").addClass("layout-1");
    $("body.mobile").removeClass("mobile");
});

//video select
$('#celek .video-select .alza-btn').on("click", function(){
    let videoID = $('#celek .video-select__videoID').val()
    $('#celek .pp-video iframe').attr('src', 'https://www.youtube.com/embed/' + videoID)
    videoID.val('')
    console.log('Video změněno.')
});

console.log('video-select is running')