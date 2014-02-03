/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        var contentWidth = $(".post-content").width();
        console.log(contentWidth);

    });

}(jQuery));