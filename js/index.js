/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {
  $('.buttons button').click (function () {
    $(this).addClass ('jelly-effect')
           .bind ('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {
             $(this).removeClass ('jelly-effect');
           });
  });

  window.closeLoading();
});