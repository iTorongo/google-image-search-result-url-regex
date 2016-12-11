$(document).ready(function() {

    /*Core Search Function*/
    function searchImage(title) {
        var allImages = "";
        var tmp, count = 0;
        var realtmp = new Array();
        //Remove all previously created dom for every new search
        $( ".image-container" ).remove();
        //$( ".search-title-heading" ).remove();
        jqXHR_imagesearch = $.ajax({
            type: "GET",
            url: "php/google_image_search-bck.php",
            data: {
                query: title
            },
            success: function(data) {
                tmp = jQuery.parseJSON(data);
                for (var i = 0; i < tmp.length; i++) {
                    if ((tmp[i].indexOf("http") >= 0)) {
                        realtmp[count] = tmp[i];
                        count++;
                    }
                }
                //Generating HTML
                allImages +='<div class="image-container">' +
                    '<h2 class="search-title-heading">Search Result for '+title+'</h2> </br> ';

                for (var i = 0; i < count; i++) {
                   //Main image load
                    allImages +='<div class="col-sm-3 image-cell">' +
                                    '<a  class="preview-image"  rel="type1"  href="'+realtmp[i]+'">' +
                                    '<img   data-original="'+realtmp[i]+'"  class="img-responsive img-holder lazy" id="thumb9" alt="Image" >' +
                                    '</a>' +
                                '</div>';


                    //Image load for grid style
                 /*   allImages +='<a  class="preview-image"  rel="type1" id="preview-image9" href="'+realtmp[i]+'">' +
                        '<img   data-original="'+realtmp[i]+'"  class="lazy" id="thumb9" alt="Image" >' +
                        '</a>'
                    ;*/

                    //Image load for massonary grid
                    /* allImages +='<div class="grid-sizer"></div>' +
                         '<div class="grid-item" >' +
                             '<a  class="preview-image"  rel="type1" id="preview-image9" href="'+realtmp[i]+'">' +
                             '<img   src="'+realtmp[i]+'"  class="img-thumbnail img-holder lazy" alt="Image" >' +
                             '</a>' +
                        '</div>';*/

                    //Another Grid
                   /* allImages +='<div class="item">' +
                        '<div class="well">' +
                        '<a  class="preview-image"  rel="type1" id="preview-image9" href="'+realtmp[i]+'">' +
                        '<img  data-original="'+realtmp[i]+'"  class="img-thumbnail img-holder lazy" alt="Image" >' +
                        '</a>' +
                        '</div>' +
                        '</div>';*/

                }
                allImages +=  '</div>';
                //End Generating HTML

                $('#search-result').append(allImages);

                $("#loadingimg").hide();
                $( ".search-result" ).removeClass('hide');

                //Checked Broken Image
                $('img').each(function() {
                    if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                        // image was broken, replace with your new image
                        this.src = 'images/defaultload.gif';
                    }
                });
            },
            complete:function(){
                //On complete Ajax Call Laxy Load Images
                    $("img.lazy").lazyload({
                        effect : "fadeIn"
                    });

             /*   $(function() {
                    $( ".img-holder" ).aeImageResize({ height: 250, width: 250});
                });*/

            }
        });
    }

    $("#loadingimg").hide();

    /*Onclick Search*/
    $( ".search-button" ).click(function() {
        $("#loadingimg").show();
        var query = $('.search-query').val();
        searchImage(query);
        $( ".search-result" ).addClass('hide');
    });

    /*Press Enter Search*/
    $('.search-query').keyup(function(e) {

        if(e.keyCode == 13) {
            $("#loadingimg").show();
            var query = $('.search-query').val();
            searchImage(query);
            $( ".search-result" ).addClass('hide');
        }

    });

    /*Fancy Box*/
    $(".preview-image").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
});


