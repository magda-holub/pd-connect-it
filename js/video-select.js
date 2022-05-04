$(document).on('click', '.pp-video .video-select .alza-btn' , function(){
    let videoContainer = $(this).closest('.pp-video');
    let targetIframe = $('iframe', videoContainer);
    let input = $('.video-select__videoID', videoContainer);
    $(targetIframe).attr('src', 'https://www.youtube.com/embed/' + input.val())
    input.val('')
    console.log('Video bylo změněno.')
});


