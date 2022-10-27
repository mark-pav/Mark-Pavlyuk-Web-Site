$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},100);
        return false;
    });

});

$("a:contains('About')").click(function(){
  // window.location.href= 'aboutMe.html';
});

$("a:contains('Contact')").click(function(){
  //alert("Contact me section is coming up soon. Please, be patient!");
});
