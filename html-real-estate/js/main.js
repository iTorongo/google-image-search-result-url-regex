
/****************************************/
/*     Blog page 2 price Slider Ranger   */
/****************************************/



$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [ 0, 1000000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " to $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( " $" + $( "#slider-range" ).slider( "values", 0 ) +
        " to $" + $( "#slider-range" ).slider( "values", 1 ) );
} );


/****************************************/
/*     Home Page Carousel Sliders
/****************************************/

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
    $(".feature-slider-next").click(function(){
        owl.trigger('owl.next');
    })
    $(".feature-slider-prev").click(function(){
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


    $("#owl-slider-feedback").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 2,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2],
        responsiveClass:true
    });


});


