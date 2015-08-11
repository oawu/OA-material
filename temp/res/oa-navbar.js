/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 */

(function( factory ) {
  if ((typeof define === 'function') && define.amd) define (['jquery'], factory);
  else factory (jQuery);
}(function ($) {

  $.fn.extend ({
    OAnavbar: function (opt) {
      var d4Opt = {
        itemSelector: '.item',
        itemsTextAlign: 'left'
      },
      init = function (opt) {
        var $item = $(this).children (opt.itemSelector).addClass ('oa-navbar-item').clone (true, true),
            $container = $('<div />').addClass ('oa-navbar-container').css ({'text-align': opt.itemsTextAlign});
            $items = $('<div />').addClass ('oa-navbar-items').addClass ('clearfix');

        $(this).addClass ('oa-navbar').empty ().append ($container.append ($items.append ($item)));
      }

      opt = $.extend (true, d4Opt, opt);

      return $(this).each (function () {
        init.bind ($(this), opt).apply ();
      });
    }
  });
}));
