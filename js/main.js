//**************************************** Parallax script ****************************************** //

// function parallax() {
//     var $window = $(window);
//     $('.b-parallax[data-type="background"]').each(function(){
//         var $bgobj = $(this); // Назначаем объект
//         $(window).scroll(function() {
//             // Прокручиваем фон со скоростью var.
//             // Значение yPos отрицательное, так как прокручивание осуществляется вверх!
//             var yPos = -($window.scrollTop() / $bgobj.data('speed'));
//             // Размещаем все вместе в конечной точке
//             var coords = '50% '+ yPos +'px';
//             // Смещаем фон
//             $bgobj.css({ backgroundPosition: coords });
//         });
//     });
// }







//****************************** Lazy load ******************************//
window.addEventListener("DOMContentLoaded", lazyLoadImages);
window.addEventListener("load", lazyLoadImages);
window.addEventListener("resize", lazyLoadImages);
window.addEventListener("scroll", lazyLoadImages);

function lazyLoadImages() {
    var images = document.querySelectorAll(".lazy[data-src]"), item;
    // load images that have entered the viewport

    [].forEach.call(images, function (item) {
        if (item.getBoundingClientRect().top>0) { //alert(1);

            //$(this).
            var image = item.getAttribute("data-src"),
                img = jQuery('<img />');
            img.bind('load', function() {
                jQuery(item).find(".b-placeholder").addClass('b-placeholder--fadeout');
            });
            img.attr('src', image);
            jQuery(item).css("background-image","url("+image+")")

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
function tooltip(){
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





function buttonUp(){
    var inputVal = jQuery('.searchbox-input').val();
    inputVal = jQuery.trim(inputVal).length;
    if( inputVal !== 0){
        jQuery('.searchbox-icon').css('display','none');
    } else {
        jQuery('.searchbox-input').val('');
        jQuery('.searchbox-icon').css('display','block');
    }
}








function init_map(){var myOptions = {zoom:10,center:new google.maps.LatLng(51.5073509,-0.12775829999998223),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(51.5073509,-0.12775829999998223)});infowindow = new google.maps.InfoWindow({content:'<strong>Title</strong><br>London, United Kingdom<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);




(function ($) {
    $(document).ready(function () {
        'use strict';
        $('html').removeClass('no-js');





        









        //****************************** Script for animate.css ******************************//
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function() {
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
            afterOpen: function(){$('input, select').styler()},
            afterClose: function(){$('input, select').styler('destroy')}

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







        if($("div").is(".b-map-menu")){
            $(".b-footer").hide(0);
        }else{
            $(".b-footer").show(0);
        }



        


        //********************************************** Ajax script **************************************** //


        $('a:not(.noajax, .ab-item)').click(function() {
            var $linkClicked = $(this).attr('href'); //берем урл
            console.log($linkClicked);
            $('.b-preloader').fadeIn('fast');
            $.get($linkClicked,function(d){ //обращаемся по этому урл через аякс
                var response = new Object();
                response.html = $('<div>').html(d);
                $("#content").html($(response.html).find('#content').html());
                if($("div").is(".b-map-menu")){
                    $(".b-footer").hide(0);
                }else{
                    $(".b-footer").show(0);
                }
                document.title = $(response.html).find('title').html(); //собсно назначем тайтл
                //ии меняем урл в адресной строке
                window.history.pushState({"html":$(response.html).find('html').html(),"pageTitle":response.pageTitle},"", $linkClicked);
                lazyLoadImages();
                main_js();
                $('.b-preloader').fadeOut('fast');
            });
            return false;
        });


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


        var submitIcon = $('.searchbox-icon');
        var inputBox = $('.searchbox-input');
        var searchBox = $('.searchbox');
        var isOpen = false;
        submitIcon.click(function(){
            if(isOpen == false){
                searchBox.addClass('searchbox-open');
                inputBox.focus();
                isOpen = true;
            } else {
                searchBox.removeClass('searchbox-open');
                inputBox.focusout();
                isOpen = false;
            }
        });
        submitIcon.mouseup(function(){
            return false;
        });
        searchBox.mouseup(function(){
            return false;
        });
        $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbox-icon').css('display','block');
                submitIcon.click();
            }
        });


        $('.fadein').delay(2000).queue(function(next){
            $(this).addClass('active');
            next();
        });




        $('.custom-scroll').customScrollbar({
            updateOnWindowResize: true
        });


        $('.b-nav-toggle').on('click', function(){
            var bNav = $('.b-nav');
            var iconToggle = $(this).find('.fa');
            if($(this).hasClass('closed')){
                bNav.slideDown('fast');
                $(this).removeClass('closed').addClass('opened');
                iconToggle.removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }else if($(this).hasClass('opened')){
                bNav.slideUp('fast');
                $(this).removeClass('opened').addClass('closed');
                iconToggle.removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
        });


        $('.b-nav>ul>li.menu-item-has-children>a').append('<i class="fa fa-angle-down"></i>');


        main_js();


    });
})(jQuery);