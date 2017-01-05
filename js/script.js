/**
 * Created by Макс on 27.12.2016.
 */
$(document).ready(function () {

    $('.get-app').on('click', function () {
        $('.popup-wrap').fadeIn(500);
    });

    $('#btn-close').on('click', function () {
        $('.popup-wrap').fadeOut(500);
    });

//---------NAVBAR-1-------------------------------------------
//
//     $('#nav-button').on('click', function () {
//         $('.nav-block').slideToggle();
//     });

    // $('#nav-button').on('click', function () {
    //     $('.nav-block').slideToggle();
    // });
    //
    // $(document).click( function(event){
    //     console.log('hhh')
    //     if( $(event.target).closest('.nav-block').length || $(event.target).closest('#nav-button').length)
    //         return;
    //     $('.nav-block').hide();
    //     event.stopPropagation();
    // });


//---------NAVBAR-2-------------------------------------------

    var touch = $('#nav-button');
    var menu = $('.nav-block');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 991 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

//---------NAVBAR-3-------------------------------------------

    // $('#nav-button').toggle(function () {
    //     $('.nav-block').slideDown(500);
    // }, function () {
    //     $('.nav-block').slideUp(500);
    // });

//---------ICONS-CLICK-------------------------------------------

    // $('#sound').on('click', function () {
    //     $('#sound-text').show();
    //     $('#days-text').hide();
    //     $('#growth-text').hide();
    // });
    //
    //
    // $('#days').on('click', function () {
    //     $('#days-text').show();
    //     $('#sound-text').hide();
    //     $('#growth-text').hide();
    //
    // });
    //
    // $('#growth').on('click', function () {
    //     $('#growth-text').show();
    //     $('#days-text').hide();
    //     $('#sound-text').hide();
    //
    // });


    // $(function(){
    //
    //     $('.div-container > div').hide();
    //
    //     $('#inpArea').on('click', 'input', function() {
    //         $('#divArea > div').hide();
    //         var i = $(this).index();
    //         $('#divArea > div').eq(i).show();
    //     });
    //
    // });


    (function($){
        jQuery.fn.lightTabs = function(options){

            var createTabs = function(){
                tabs = this
                i = 0;

                showPage = function(i){
                    $(tabs).children("div").children("div").hide();
                    $(tabs).children("div").children("div").eq(i).show();
                    $(tabs).children('.div-left').children("ul").children("li").children("a").removeClass("active");
                    $(tabs).children('.div-left').children("ul").children("li").children("a").eq(i).addClass("active");
                }

                showPage(2);

                $(tabs).children('.div-left').children("ul").children("li").each(function(index, element){
                    $(element).attr("data-page", i);
                    i++;
                });

                $(tabs).children('.div-left').children("ul").children("li").click(function(){
                    showPage(parseInt($(this).attr("data-page")));
                });
            };
            return this.each(createTabs);
        };
    })(jQuery);
    $(document).ready(function(){
        $(".tabs").lightTabs();
    });

});

