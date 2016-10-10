//**************************************** Parallax script ****************************************** //

function parallax() {
    var $window = $(window);
    $('.b-parallax[data-type="background"]').each(function(){
        var $bgobj = $(this);
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% '+ yPos +'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });
}

function masonryInit() {
    if($(window).width() > 1140) {
        jQuery('.b-place-list').masonry({
            // options
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.b-grid-item',
            // use element for option
            gutter: 20
        });
    }
}

jQuery('.b-hide-filters').on('click', function () {
    var filterBtn = jQuery('.b-hide-filters');
    var menuForm = jQuery('.b-slide-menu__form');
    if (menuForm.hasClass('opened')) {
        menuForm.removeClass('opened').addClass('closed');
        filterBtn.text('Show filters');
    } else if (menuForm.hasClass('closed')) {
        menuForm.removeClass('closed').addClass('opened');
        filterBtn.text('Hide filters');
    }
    jQuery('.b-slide-menu__form').slideToggle('medium');
});

//****************************** Slide menu on map pages ******************************//
jQuery('.b-slide-menu__toggle').on('click', function () {
    var slideMenu = jQuery('.b-slide-menu');
    if (slideMenu.hasClass('opened')) {
        slideMenu.removeClass('opened').addClass('closed');
        jQuery(this).find(jQuery('.fa-caret-right')).removeClass('hidden');
        jQuery(this).find(jQuery('.fa-caret-left')).addClass('hidden');
        slideMenu.removeClass('oopeen').addClass('closseed');
    } else if (slideMenu.hasClass('closed')) {
        slideMenu.removeClass('closed').addClass('opened');
        jQuery(this).find(jQuery('.fa-caret-left')).removeClass('hidden');
        jQuery(this).find(jQuery('.fa-caret-right')).addClass('hidden');
        slideMenu.removeClass('closseed').addClass('oopeen');
    }
});

/*ajax subscribe*/
jQuery(document).on("click", '.b-gadget__subscribe__button ', function (e) {
    e.preventDefault();
    var email = jQuery(".b-gadget__subscribe__field");
    email.removeClass('error');
    var thisbtn = jQuery(this);


    if (isValidEmailAddress(email.val())) {
        thisbtn.prop('disabled', true);

        jQuery.ajax({
            url: nightcity_obj.ajaxurl,
            type: 'POST',
            data: "action=nightcity_mailchimp_send&email=" + email.val(),
            success: function (date) {
                jQuery('#subscribe_mini_form').append("<div class=\"alert alert-success fade in\">" +
                    "<button class=\"close\" data-dismiss=\"alert\" type=\"button\">&times;</button><strong>" +
                    "" + date + "" +
                    "</strong></div>");
                jQuery('#subscribe_mini_form')[0].reset();
                thisbtn.prop('disabled', false);
            }

        });
    } else {
        email.addClass('error');

    }
});


//****************************** Lazy load ******************************//
window.addEventListener("DOMContentLoaded", lazyLoadImages);
window.addEventListener("load", lazyLoadImages);
window.addEventListener("resize", lazyLoadImages);
window.addEventListener("scroll", lazyLoadImages);

function lazyLoadImages() {
    var images = document.querySelectorAll(".lazy[data-src]"), item;
    // load images that have entered the viewport

    [].forEach.call(images, function (item) {
        if (item.getBoundingClientRect().top > 0) { //alert(1);

            //$(this).
            var image = item.getAttribute("data-src"),
                img = jQuery('<img />');
            img.bind('load', function () {
                jQuery(item).find(".b-placeholder").addClass('b-placeholder--fadeout');
            });
            img.attr('src', image);
            jQuery(item).css("background-image", "url(" + image + ")")

            item.removeAttribute("data-src");
        }
    })
    // if all the images are loaded, stop calling the handler
    if (images.length == 0) {
        window.removeEventListener("DOMContentLoaded", lazyLoadImages);
        window.removeEventListener("load", lazyLoadImages);
        window.removeEventListener("resize", lazyLoadImages);
        window.removeEventListener("scroll", lazyLoadImages);
    }
}


//****************************** Tooltip plugin activate ******************************//
function tooltip() {
    jQuery('[data-toggle="tooltip"]').tooltip()
}


// //****************************** Sly plugin activate ******************************//
// function customScrollInit(){
//     var $frame = $('.custom-scroll');
//     var $wrap  = $frame.parent();
//
//     // Call Sly on frame
//     $frame.sly({
//         speed: 300,
//         easing: 'easeOutExpo',
//         scrollBar: $wrap.find('.scrollbar'),
//         scrollBy: 50,
//         dragHandle: 1,
//         dynamicHandle: 1
//     });
// }


function buttonUp() {
    var inputVal = $('.searchbox-input').val();
    inputVal = jQuery.trim(inputVal).length;
    if (inputVal !== 0) {
        jQuery('.searchbox-icon').css('display', 'none');
    } else {
        jQuery('.searchbox-input').val('');
        jQuery('.searchbox-icon').css('display', 'block');
    }
}

/*
function init_map() {
    var myOptions = {
        zoom: 10,
        center: new google.maps.LatLng(51.5073509, -0.12775829999998223),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(51.5073509, -0.12775829999998223)});
    infowindow = new google.maps.InfoWindow({content: '<strong>Title</strong><br>London, United Kingdom<br>'});
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);
*/





(function ($) {
    $(document).ready(function () {
        'use strict';
        $('html').removeClass('no-js');
        $('.chosen-single').addClass('noajax');
        $(".chosen-select").chosen({
          disable_search_threshold: 10,
          no_results_text: "Oops, nothing found!",
          width: "100%"
        });
 
        

        //****************************** Ion range slider plugin activate ******************************//
        jQuery('.example_class').ionRangeSlider({
            type: 'double',
            min: 0,
            max: 750,
            from: 150,
            to: 600
        });

        //****************************** Script for animate.css ******************************//
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });


        //****************************** Simple popup plugin activate ******************************//
        $('.html_popup').popup({
            content: '<div class="b-sm-post__popup"> <div class="b-sm-post__popup__title">Send</div> <div class="b-sm-post__popup__row"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAA10lEQVRIx2OwDp9LU8QwasHQtsA3bWn/vMPbD1w7ce4eEO07dnPdjkvUscAmYm7XrINPn79++eotGqKOBZMXHcM0mmoWxBSvefHyDQ0tWLnlArKJl6492rjr8orN5yGIChZcvfkEbvqB47dsI+dRORU9f4EIn+7Zh6ifTJHDp336gVELgKhl6v59R2/CEbIFF68+QpbafeQGWpwTZcHcVadwpXo0dOHqQ3J8QLwFm/dcoa0FwCKEHAvqJuwBOg2OkE08deE+slR6zcbRfDBqwagFoxYMQgsAyzTUjcGzuMMAAAAASUVORK5CYII=" alt="facebook"> Facebook </div> <div class="b-sm-post__popup__row"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABcElEQVRIx2PQWfWQpohh1IJRC0YtwG2B7cbHuKTM1z1ecefzx59///77f+Xdz7SDL/VWP8w6/Cpw5zMSLDjw9FvXhXeY4kCzzr3+8R8JAK35/OsvUL3NhsckWPDw82+g5iW3PhmteYQsXnD09X8MALTj6rufFSffkGDBsRffIZqBNpWfeGMAs2bu9Y//sYFKbKbjsyD3yCtk/e9//N368EvPxfd7n3zDaoHF+sekWdB78f3Jl9//Ewd+/v1Hcio68Ozbf6LBjfc/SbYgeu+LX8C4Iw7Mu/GRnIwGTOCPv/wmaDrQFVhzAGELso+8uvORsDeA0U5mUaG/+uH+pwRi4tvvf17bnpJfFgGTf+eFd6de/cBqOtBzhcdeU1TYAQuGHHBAYU2apSdek1nYOW1+Muvax91Pvr798Qer24FZxH/HM4pKU6sNj1vPvQMWGMCCDB4gwGJj3b0vSQdeUrk+MFn7CGgfWqk3WqONWjB8LAAAEp6ym91eJw0AAAAASUVORK5CYII=" alt="twitter"> Twitter</div><div class="b-sm-post__popup__row"><img src="data:image/png;base64,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" alt="google+">Google+</div><div class="b-sm-post__popup__row"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAoklEQVR4Ad2QMQ6CMBhG/8QVb4CXkHMY8CTi8M4hnkQOopeQxTLK2gT7Lzbkj2lHA29ovuQ9IJW1PBxxzAlGaoQgK2ldcTHQ2TD8VJ/Uei4DoaDDG9lzoUBs0FMiVDwW+p09wo7eBIGJlk2gZUL3mxO6z7pN8H1jhVDSc7NftIHi6fSfA1uuYc2pQBlo7K3ZwLDuYMzSXzGocRn6IQaZ/GnwAWkF9f1nWgYGAAAAAElFTkSuQmCC" alt="e-mail">via E-mail</div><div class="b-sm-post__popup__share-link">Share link</div><div class="b-sm-post__popup__link">https://g.co/kgs/PuDmtc</div></div>',
            type: 'html'
        });

        $('.jquery_popup').popup({
            content: $('.b-jquery-popup'),
            afterOpen: function () {
                $('input, select').styler()
            },
            afterClose: function () {
                $('input, select').styler('destroy')
            }

        });


        //****************************** determine and set the window height to the home page promo ******************************//
        // $(function(){
        //     var windowHeight = $(window).height();
        //     var topMenu = $('.b-header').height();
        //     var promoHeight = windowHeight-topMenu;
        //     $('.b-promo').css({
        //         height: promoHeight
        //     })
        // })


        //****************************** Preloader script ******************************//
        // var hellopreloader = document.getElementById("hellopreloader_preload");
        // function fadeOutnojquery(el){el.style.opacity = 1;
        //     var interhellopreloader = setInterval(function(){
        //         el.style.opacity = el.style.opacity - 0.05;
        //         if (el.style.opacity <=0.05){
        //             clearInterval(interhellopreloader);
        //             hellopreloader.style.display = "none";
        //         }},16);
        // }
        // window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};


        if ($("div").is(".b-map-menu")) {
            $(".b-footer").hide(0);
        } else {
            $(".b-footer").show(0);
        }


        //********************************************** Ajax script **************************************** //

        function ajax_init() {
            $('a:not(.noajax):not(.ab-item)').unbind( "click" );
            $('a:not(.noajax):not(.ab-item)').click(function () {
                var $linkClicked = $(this).attr('href');
                console.log($linkClicked + 'lala');
                //$("body").css('opacity',"0.5");
                $('.b-preloader').show();
                $.get($linkClicked, function (d) { 
                    var response = new Object();
                    response.html = $('<div>').html(d);
                    $("#content").html($(response.html).find('#content').html());
                    if ($("div").is(".b-map-menu")) {
                        $(".b-footer").hide(0);
                    } else {
                        $(".b-footer").show(0);
                    }
                    document.title = $(response.html).find('title').html();
                    window.history.pushState({
                        "html": $(response.html).find('html').html(),
                        "pageTitle": response.pageTitle
                    }, "", $linkClicked);
                    lazyLoadImages();
                    main_js();
                    masonryInit();
                    ajax_init();
                    window.scrollTo(0, 0);
                    $('.b-preloader').hide();
                    //$("body").css('opacity',"1");
                });
            return false;
            });
        }
        
        ajax_init();
        
        // var hash = window.location.hash.substr(1);
        // var href = $('a').each(function(){
        //     var href = $(this).attr('href');
        //     if(hash==href.substr(0,href.length-5)){
        //         var toLoad = hash+'.html #content';
        //         $('#content').load(toLoad)
        //     }
        // });

        // $('a').click(function(){
        //     var toLoad = $(this).attr('href')+' #content';
        //     $('#content').hide(0,loadContent);
        //     window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
        //     function loadContent() {
        //         $('#content').load(toLoad,'',showNewContent())
        //     }
        //     function showNewContent() {
        //         $('#content').show(0);
        //     }
        //     return false;
        // });
        //

        var submitIcon = $('.searchbox-icon');
        var inputBox = $('.searchbox-input');
        var searchBox = $('.searchbox');
        var isOpen = false;
        submitIcon.click(function () {
            if (isOpen == false) {
                searchBox.addClass('searchbox-open');
                inputBox.focus();
                isOpen = true;
            } else {
                searchBox.removeClass('searchbox-open');
                inputBox.focusout();
                isOpen = false;
            }
        });
        submitIcon.mouseup(function () {
            return false;
        });
        searchBox.mouseup(function () {
            return false;
        });
        $(document).mouseup(function () {
            if (isOpen == true) {
                $('.searchbox-icon').css('display', 'block');
                submitIcon.click();
            }
        });

        if($(window).width() > 992) {
            $('.fadein').delay(2000).queue(function (next) {
                $(this).addClass('active');
                next();
            });
        }






        $('.b-nav-toggle').on('click', function () {
            var bNav = $('.b-nav');
            var iconToggle = $(this).find('.fa');
            if ($(this).hasClass('closed')) {
                bNav.slideDown('fast');
                $(this).removeClass('closed').addClass('opened');
                iconToggle.removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('opened')) {
                bNav.slideUp('fast');
                $(this).removeClass('opened').addClass('closed');
                iconToggle.removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
        });

        $('.b-nav>ul>li.menu-item-has-children>a').append('<i class="fa fa-angle-down"></i>');

        $('.b-view-btn__grid').on('click', function(){
            $('.b-place-list--list').removeClass('opened').addClass('closed');
            $('.b-place-list--grid').removeClass('closed').addClass('opened');
            $(window).trigger('resize');
        });
        $('.b-view-btn__list').on('click', function(){
            $('.b-place-list--grid').removeClass('opened').addClass('closed');
            $('.b-place-list--list').removeClass('closed').addClass('opened');
            $(window).trigger('resize');
        });

        main_js($);


    });
})(jQuery);