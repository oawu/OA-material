/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 * @reference   http://codepen.io/carlcalderon/pen/KhwDH
 */

(function( factory ) {
  if ((typeof define === 'function') && define.amd) define (['jquery'], factory);
  else factory (jQuery);
}(function ($) {
  $.fn.extend ({
    OAjellyDropdown: function (opt) {
      var d4Opt = {
        autoOpen: false,
        color: null,
        width: '100px',
        paddingLeft: '12px',
        isRipple: true
      },
      init = function (opt) {
        opt.color = $(this).data ('color') || opt.color;
        opt.autoOpen = $(this).attr ('data-autoOpen') || opt.autoOpen;
        opt.paddingLeft = $(this).attr ('data-paddingLeft') || opt.paddingLeft;
        opt.isRipple = $(this).attr ('data-isRipple') || opt.isRipple;
        opt.width = $(this).data ('width') || opt.width;

        var $this   = $(this),
            $option = $(this).children ('option'),
            $div    = $('<div />'),
            $hidden = $('<input />').attr ('type', 'hidden')
                                    .addClass ('dpd-hidden')
                                    .val ($this.val ()),
            $title  = $('<div />').addClass ('dpd-title')
                                  .css ({
                                    'padding-left': parseFloat (opt.paddingLeft) + 'px',
                                    'line-height': parseFloat (opt.height) + 'px'})
                                  .text ($this.find ('option[selected]').text () || $this.find ('option').eq (0).text ())
                                  .click (function () {
                                    if (!$div.attr ('disabled')) $div.toggleClass ("dpd-closed");
                                  }),
            $li = $option.map (function () {
                     $li = $('<li />').css ({
                                        'padding-left': parseFloat (opt.paddingLeft) + 'px',
                                        'line-height': parseFloat (opt.height) + 'px'});
                     $.each ($(this).get (0).attributes, function (i, t) { $li.attr (t.name, t.value); });
                     $li.text ($(this).get (0).textContent).click (function () {
                       if (!$div.attr ('disabled')) {
                         $div.toggleClass ("dpd-closed");
                           $title.text ($(this).text ());
                           $hidden.val ($(this).attr ('value'))
                       }
                     });
                     return $li.get (0);
                  });

        $.each ($this.get (0).attributes, function (i, t) {
          if ((t.name == 'name') || (t.name == 'id')) $hidden.attr (t.name, t.value);
          else $div.attr (t.name, t.value);
        });
        $div.addClass ('oa-jelly-dropdown').css ({'width': opt.width}).append ($hidden).append ($title).append ($('<ul />').append ($li));

        if (!opt.autoOpen) $div.addClass ('dpd-closed');
        if (opt.color) $div.addClass (opt.color + '-dpd');

        $this.replaceWith ($div);
        if (opt.isRipple && !$div.attr ('disabled')) $title.OAripple ();

        return $div;
      }
      return $(this).map (function () { return init.bind ($(this), $.extend({}, d4Opt, opt)).apply ()[0]; });
    }
  });
}));
