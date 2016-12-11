
/*Navigation menu fixed slide in*/
  var windowScroll = function() {
    var lastScrollTop = 0;

    $(window).scroll(function(){

        var header = $('#rlest-header'),
        scrlTop = $(this).scrollTop();

      if ( scrlTop > 100 && scrlTop <= 2000 ) {
        header.addClass('navbar-fixed-top wow slideInDown');
      } else if ( scrlTop <= 500) {
        if ( header.hasClass('navbar-fixed-top') ) {
          header.addClass('navbar-fixed-top wow slideOutUp');
          setTimeout(function(){
            header.removeClass('navbar-fixed-top wow slideInDown slideOutUp');
          }, 100 );
        }
      } 
      
    });
  };


  // collapse Menu
  var collapseMenu = function() {

    $('body').on('click', '.js-rlest-nav-toggle', function(event){

      event.preventDefault();

      if ( $('#navbar').is(':visible') ) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active'); 
      }
      
    });

  };



  // Document on load.
  $(function(){

    windowScroll();
    collapseMenu();

  });

  //Search icon
   $(function() {
 /*     var $searchlink = $('.glyphicon-search');
        $searchlink.on('click', function(e){
            $(".searchform").toggle();
        });*/

       $('.glyphicon-search').click(function() {
           $('.searchform').fadeIn(300);
           $('.searchform input').focus();
       });
       $('.searchform input').blur(function() {
           $('.searchform').fadeOut(300);
       });
    });

  /*Owl and Swiper  carousel*/
    $(document).ready(function() {



  var sync1 = $("#owl-demo-details");
  var sync2 = $("#owl-demo");
 
  sync1.owlCarousel({
     autoPlay: 3000, //Set AutoPlay to 3 seconds
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 


   sync2.owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        navigation : true,
        pagination : false,
        responsiveClass:true,
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        },
        navigationText: [
            "<img src='images/04/prev.png'/>",
            "<img src='images/04/next.png'/>"
        ],
    });


 
  function syncPosition(el){
    var current = this.currentItem;
    $("#owl-demo")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#owl-demo").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#owl-demo").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }





      //swiper slider
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true
        });




        $("#owl-slider-feedback").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items : 2,
            itemsDesktop : [1199,2],
            itemsDesktopSmall : [979,2],
            responsiveClass:true
        });


        $("#owl-slider-partners").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items : 6,
            itemsDesktop : [1199,6],
            itemsDesktopSmall : [979,5]

        });

    });

$(function() {
    new WOW().init();
});

