/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 * @reference   https://github.com/tedshd/material_design_for_web
 */

(function( factory ) {
  if ((typeof define === 'function') && define.amd) define (['jquery'], factory);
  else factory (jQuery);
}(function ($) {
  $.fn.extend ({
    OAripple: function (opt) {
      var d4Opt = {
        rippleColor: 'rgba(0, 0, 0, 0.15)'
      },
      init = function (opt) {
        $(this).addClass ('oa-ripple');
        var d = Math.max (parseFloat ($(this).css ('width')), parseFloat ($(this).css ('height'))) * 2;

        $(this).click (function (e) {
          var x = (e.pageX ? (e.pageX - $(this).offset ().left): (parseFloat ($(this).css ('width')) / 2)) - d / 2;
          var y = (e.pageY ? (e.pageY - $(this).offset ().top) : (parseFloat ($(this).css ('height')) / 2)) - d / 2;

          $(this).children ('.oa-ripple-effect').remove ();
          $('<span />')
                .addClass ('oa-ripple-effect')
                .css ({'top': y + 'px', 'left': x + 'px', 'width': d + 'px', 'height': d + 'px', 'background-color': opt.rippleColor})
                .addClass ('oa-ripple-show')
                .bind ('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {
                  $(this).removeClass ('oa-ripple-show').remove ();
                }).appendTo ($(this));
        });
      }
      return $(this).each (function () { init.bind ($(this), $.extend({}, d4Opt, opt)).apply (); });
    }
  });
}));