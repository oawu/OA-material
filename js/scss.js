/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {
  $('pre').click (function () {
    if ($(this).hasClass ('show'))
      $(this).removeClass ('show');
    else
      $(this).addClass ('show');
  });

  $('.tabs > * > *').click (function () {
    $(this).addClass ('active').siblings ().removeClass ('active');
    $(this).parent ().next ().children ().eq ($(this).index ()).addClass ('active').siblings ().removeClass ('active');
  });

  $('.tabs > * > *:first-child').click ();

  $('.prettyprint').addClass ('linenums');
  prettyPrint ();

  $('.prettyprint ol').each (function () {
    var $li = $(this).find ('li');
    
    var min = $li.map (function () {
      return $(this).children ().length > 1 ? ($(this).children ().first ().html ().match (/\s/g) || []).length : null;
    }).filter (function (t) {
      return t;
    }).toArray ();
    
    console.error (min);
    
    min = min.min ();
    
    $li.each (function () {
      var $first = $(this).children ().first ();
      $first.html ($first.html ().replace(new RegExp("\\s{" + min + "}", "g"), ''));
    });
  });
  
  $('button.jelly').click (function () {
    $(this).addClass ('jelly-effect')
           .bind ('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {
             $(this).removeClass ('jelly-effect');
           });
  });

  window.closeLoading();
});