$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.main-menu').addClass('fixed-header');        
    }
    else {
        $('.main-menu').removeClass('fixed-header');      
    }
});