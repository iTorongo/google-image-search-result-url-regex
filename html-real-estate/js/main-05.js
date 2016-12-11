
$(window).scroll(function() {
    if ($(".navbar").offset().top > 20) {
  
        $('.navbar-brand img').attr('src','images/05/logo.png'); //change src
         $('.navbar-brand img').addClass('fadeIn');

    } else {

        $('.navbar-brand img').attr('src','images/05/logo-big.png');
    }   
});




/****************************************/
/*     Property Gallery Isotop Filter
/****************************************/


$(document).ready(function() {

    // init Isotope
    var $grid = $('.grid').isotope({
        // options...
    });
    //set default filter
    $grid.isotope({ filter: '.exterior' });

    // filter items on button click
    $('.gallery-filter-list').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


    // change is-checked class on buttons
    $('.gallery-filter-list').each( function( i, li ) {
        var $buttonGroup = $( li );
        $buttonGroup.on( 'click', 'li', function() {
            $buttonGroup.find('.is-clicked').removeClass('is-clicked');
            $( this ).addClass('is-clicked');
        });
    });



    /*Floor plan Panel Filter*/

    // change is-checked class on buttons
    $('.panel-group').each( function( i, a ) {
        var $panelHeading = $( a);
        $panelHeading.on( 'click', 'a', function() {
            $panelHeading.find('.is-active').removeClass('is-active');
            $( this ).addClass('is-active');
        });
    });


    /*Nearby places google map*/
    var LocsA = [
        {
            lat:-31.829086,
            lon: 115.856431,
            title: "<span class='marker marker-location'></span> <span class='property-location'>Property Location</span> <p class='property-details'>Listed below you'll find properties we own that are in various stages.</p>",
            html: [
                '<img src="images/05/google-image.jpg">',
                '<h4>Content A1</h4>',
                '<p>Lorem Ipsum..</p>',
            ].join(''),
            icon: 'images/05/property.png',

            animation: google.maps.Animation.DROP
        },

        {
            lat: -31.829961,
            lon: 115.853984,
            title: "<span class='marker marker-shopping'></span>Shopping Malls  <span class='gmap-distance'>3.90 Km</span> ",
            html: [

                '<h4>Content C1</h4>',
                '<p>Lorem Ipsum..</p>'
            ].join(''),

            icon: 'images/05/shopping-mall.png',
            animation: google.maps.Animation.DROP
        },


        {
            lat:-31.829524,
            lon: 115.857332,
            title: "<span class='marker  marker-hospital'></span>Hospitals  <span class='gmap-distance'>3.0 Km</span>",
            html: [
                '<h3>Content B1</h3>',
                '<p>Lorem Ipsum..</p>'
            ].join(''),

            icon: 'images/05/hospital.png',
            animation: google.maps.Animation.DROP

        },

        {
            lat: -31.830545,
            lon: 115.857546,
            title: "<span class='marker  marker-resturant'></span>School & College <span class='gmap-distance'>1.90 Km</span>",
            html: [

                '<h4>Content C1</h4>',
                '<p>Lorem Ipsum..</p>'
            ].join(''),
            icon: 'images/05/school.png',
            animation: google.maps.Animation.DROP
        },

        {
            lat:-31.825586,
            lon: 115.858619,
            title: "<span class='marker  marker-airport'></span>Airport<span class='gmap-distance'>5.0 Km</span>",
            html: [

                '<h4>Content A1</h4>',
                '<p>Lorem Ipsum..</p>',
            ].join(''),
            icon: 'images/05/shopping-mall.png',

            animation: google.maps.Animation.DROP
        },
        {
            lat:-31.828029,
            lon: 115.855572,
            title: "<span class='marker  marker-station'></span>Railway Stations <span class='gmap-distance'>0.9 Km</span>",
            html: [
                '<h3>Content B1</h3>',
                '<p>Lorem Ipsum..</p>'
            ].join(''),

            icon: 'images/05/hospital.png',
            animation: google.maps.Animation.DROP

        },



        {
            lat: -31.832545,
            lon: 115.857546,
            title: "<span class='marker  marker-resturant'></span> Bar & Resturants <span class='gmap-distance'>0.3 Km</span>",
            html: [
                '<h4>Content C1</h4>',
                '<p>Lorem Ipsum..</p>'
            ].join(''),

            icon: 'images/05/shopping-mall.png',
            animation: google.maps.Animation.DROP
        },

        {
            lat: -31.831545,
            lon: 115.854546,
            title: "<span class='marker  marker-resturant'></span>Other Facilities<span class='gmap-distance'>7.2 Km</span>",
            html: [
                '<h4>Content C1</h4>',
                '<p>Lorem Ipsum..</p>'
            ].join(''),
            icon: 'images/05/shopping-mall.png',
            animation: google.maps.Animation.DROP
        },


        {
            lat: -31.830618,
            lon: 115.860207,
            title: "<span class='marker  marker-airport'></span>Airport<span class='gmap-distance'>5.0 Km</span>",
            html: [
                '<h4>Content C1</h4>',
                '<p>Lorem Ipsum..</p>'
            ].join(''),
            icon: 'images/05/school.png',
            animation: google.maps.Animation.DROP
        },


    ];

    new Maplace({
        locations: LocsA,
        map_div: '#gmap',
        control_div:"#controls",
        controls_type: 'list',
        view_all:false,
        map_options: {
            zoom: 16
        },
        controls_on_map: false,

    }).Load();


});

$(document).ready(function() {
// Page Nav
    var clickMenu = function () {

        $('.navbar a:not([class="external"])').click(function (event) {
            var section = $(this).data('nav-section'),
                navbar = $('.navbar');

            if ($('[data-section="' + section + '"]').length) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top - 55
                }, 500);
            }

            event.preventDefault();
            return false;
        });
    };

// Reflect scrolling in navigation
    var navActive = function (section) {

        var $el = $('.nav-property > ul');
        $el.find('li').removeClass('active');
        $el.each(function () {
            $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });

    };

    var navigationSection = function () {

        var $section = $('section[data-section]');

        $section.waypoint(function (direction) {

            if (direction === 'down') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: '80px'
        });

        $section.waypoint(function (direction) {
            if (direction === 'up') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function () {
                return -$(this.element).height() + 85;
            }
        });

    };

    clickMenu();
    navigationSection();

});


$(function() {
    new WOW().init();

});




