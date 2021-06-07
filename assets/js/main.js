jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
   /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "https://techtalksbd.wordpress.com/feed/",        
    {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 4,

        // want to offset results being displayed?
        // default: false
        // valid values: any integer
        offsetStart: false, // offset start point
        offsetEnd: false, // offset end point

        // will request the API via https
        // default: false
        // valid values: false, true
        ssl: true,

        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",

        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>',

        // additional token definition for in-template-usage
        // default: {}
        // valid values: any object/hash
        tokens: {
          foo: 'bar',
          bar: function(entry, tokens) { return entry.title }
        },

        // formats the date with moment.js (optional)
        // default: 'dddd MMM Do'
        // valid values: see http://momentjs.com/docs/#/displaying/
        dateFormat: 'MMMM Do, YYYY',

        // localizes the date with moment.js (optional)
        // default: 'en'
        dateLocale: 'de',

        // formats the date in whatever manner you choose. (optional)
        // this function should return your formatted date.
        // this is useful if you want to format dates without moment.js.
        // if you don't use moment.js and don't define a dateFormatFunction, the dates will
        // not be formatted; they will appear exactly as the RSS feed gives them to you.
        dateFormatFunction: function(date){},

        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',

        // a callback, which gets triggered when an error occurs
        // default: function() { throw new Error("jQuery RSS: url don't link to RSS-Feed") }
        error: function(){},

        // a callback, which gets triggered when everything was loaded successfully
        // this is an alternative to the next parameter (callback function)
        // default: function(){}
        success: function(){},

        // a callback, which gets triggered once data was received but before the rendering.
        // this can be useful when you need to remove a spinner or something similar
        onData: function(){}
      },

      // callback function
      // called after feeds are successfully loaded and after animations are done
      function callback() {}
    
    );

    
});