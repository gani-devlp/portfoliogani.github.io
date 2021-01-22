// event scroll smooth
$('.page-scroll').on('click', function(e){
    
    var href = $(this).attr('href');
    var elemenHref =$(href);

     $('html').animate({
         scrollTop: elemenHref.offset().top - 100
     }, 1250, 'swing')
    
    e.preventDefault();
});
// typing kode
$(document).ready(function(){
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });
});

// PARALAX
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // ABOUT TEXT ANIMASI
    if(wScroll > $('.about').offset().top - 200) {
        $('.container .initial').addClass('muncul');
    }
});





