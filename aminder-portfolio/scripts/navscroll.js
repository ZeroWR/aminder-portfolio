$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>600){
                $('#mainNav').addClass('sticky-nav');
                $('#mainNav').addClass('visible');
        } else {
                $('#mainNav').removeClass('sticky-nav');
                $('#mainNav').removeClass('visible');
        }
    })
});
