

$(document).ready(function() {


    var owl = $("#feature-properties-owl-slider");

    owl.owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        pagination : false,
        responsiveClass:true
    });

    // Custom Navigation Events
    $(".feaure-slider-next").click(function(){
        owl.trigger('owl.next');
    })
    $(".feaure-slider-prev").click(function(){
        owl.trigger('owl.prev');
    })


    $("#our-partners-owl-slider").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 5,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        pagination : false,
        responsiveClass:true,
        navigation:true,
        navigationText: [
            "<i class='fa fa-angle-left fa-2x' >  </i>",
            "<i class='fa fa-angle-right fa-2x' ></i>"
        ],
    });


});

$(function() {
    new WOW().init();
});



