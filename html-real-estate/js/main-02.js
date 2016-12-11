
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
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " to $" + $( "#slider-range" ).slider( "values", 1 ) );
} );

/****************************************/
/*    Home page carousel sliders */
/****************************************/

$(document).ready(function () {

    $('.btn-vertical-slider-left').on('click', function () {

        if ($(this).attr('data-slide') == 'next') {
            $('#vertical-carousel-left').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#vertical-carousel-left').carousel('prev')
        }

    });

    $('.btn-vertical-slider-right').on('click', function () {

        if ($(this).attr('data-slide') == 'next') {
            $('#vertical-carousel-right').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#vertical-carousel-right').carousel('prev')
        }

    });
});





