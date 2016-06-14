(function ($) {
    $(document).ready(function () {
        'use strict';
        $('html').removeClass('no-js');

        $(".owl-carousel-1").owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        });

        $(".owl-carousel-2").owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true
                },
                1000:{
                    items:2,
                    nav:true,
                    loop:false
                }
            }
        })

        $(".owl-carousel-3").owlCarousel({
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true
                },
                1000:{
                    items:1,
                    nav:true
                }
            }
        })

        $(".owl-carousel-4").owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:true
                },
                1000:{
                    items:4,
                    nav:true
                }
            }
        })

        $('a[data-rel^=lightcase]').lightcase();
        $('a[data-rel="lightcase:myCollection:slideshow"]').lightcase({showSequenceInfo: false, transition: 'scrollHorizontal'});
        $('a[data-rel="lightcase:myCollection"]').lightcase({showSequenceInfo: false});
        $('#example1').lightcase({transition: 'none'});

        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });

        // $('.b-speaker__img').hover(function(){
        //     $(this).find('.b-speaker__img__social').animateCss('slideInUp');
        // });

        $('.b-grid').masonry({
            // options
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.b-grid-item',
            // use element for option
            columnWidth: '.b-grid-sizer',
            percentPosition: true
        });

        $( '#scheduleTabs' ).tabs();

        $('input, select').styler();

        $('a.html_popup').popup({
            content: '<div class="b-sm-post__popup"> <div class="b-sm-post__popup__title">Send</div> <div class="b-sm-post__popup__row"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAA10lEQVRIx2OwDp9LU8QwasHQtsA3bWn/vMPbD1w7ce4eEO07dnPdjkvUscAmYm7XrINPn79++eotGqKOBZMXHcM0mmoWxBSvefHyDQ0tWLnlArKJl6492rjr8orN5yGIChZcvfkEbvqB47dsI+dRORU9f4EIn+7Zh6ifTJHDp336gVELgKhl6v59R2/CEbIFF68+QpbafeQGWpwTZcHcVadwpXo0dOHqQ3J8QLwFm/dcoa0FwCKEHAvqJuwBOg2OkE08deE+slR6zcbRfDBqwagFoxYMQgsAyzTUjcGzuMMAAAAASUVORK5CYII=" alt="facebook"> Facebook </div> <div class="b-sm-post__popup__row"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABcElEQVRIx2PQWfWQpohh1IJRC0YtwG2B7cbHuKTM1z1ecefzx59///77f+Xdz7SDL/VWP8w6/Cpw5zMSLDjw9FvXhXeY4kCzzr3+8R8JAK35/OsvUL3NhsckWPDw82+g5iW3PhmteYQsXnD09X8MALTj6rufFSffkGDBsRffIZqBNpWfeGMAs2bu9Y//sYFKbKbjsyD3yCtk/e9//N368EvPxfd7n3zDaoHF+sekWdB78f3Jl9//Ewd+/v1Hcio68Ozbf6LBjfc/SbYgeu+LX8C4Iw7Mu/GRnIwGTOCPv/wmaDrQFVhzAGELso+8uvORsDeA0U5mUaG/+uH+pwRi4tvvf17bnpJfFgGTf+eFd6de/cBqOtBzhcdeU1TYAQuGHHBAYU2apSdek1nYOW1+Muvax91Pvr798Qer24FZxH/HM4pKU6sNj1vPvQMWGMCCDB4gwGJj3b0vSQdeUrk+MFn7CGgfWqk3WqONWjB8LAAAEp6ym91eJw0AAAAASUVORK5CYII=" alt="twitter"> Twitter</div><div class="b-sm-post__popup__row"><img src="data:image/png;base64,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" alt="google+">Google+</div><div class="b-sm-post__popup__row"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAoklEQVR4Ad2QMQ6CMBhG/8QVb4CXkHMY8CTi8M4hnkQOopeQxTLK2gT7Lzbkj2lHA29ovuQ9IJW1PBxxzAlGaoQgK2ldcTHQ2TD8VJ/Uei4DoaDDG9lzoUBs0FMiVDwW+p09wo7eBIGJlk2gZUL3mxO6z7pN8H1jhVDSc7NftIHi6fSfA1uuYc2pQBlo7K3ZwLDuYMzSXzGocRn6IQaZ/GnwAWkF9f1nWgYGAAAAAElFTkSuQmCC" alt="e-mail">via E-mail</div><div class="b-sm-post__popup__share-link">Share link</div><div class="b-sm-post__popup__link">https://g.co/kgs/PuDmtc</div></div>',
            type: 'html'
        });

    });
})(jQuery);