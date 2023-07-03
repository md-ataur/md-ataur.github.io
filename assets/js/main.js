jQuery(document).ready(function ($) {

    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function () {
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });

    /* jQuery RSS - https://github.com/enginkizil/FeedEk */

    $('#divFeed').FeedEk({
        FeedUrl: 'https://techtalksbd.wordpress.com/feed',
        MaxCount: 4,
        ShowDesc: true,
        ShowPubDate: false,
        DescCharacterLimit: 120,
        TitleLinkTarget: '_blank',
        DateFormat: 'MM/dd/yyyy',
        DateFormatLang: 'en',
        Offset: 5,
        ShowAuthor: false,
        AuthorLabel: "Author:",
        Success: function (feedItems) { },
        Error: function (error) { console.log(error) }
    });

});