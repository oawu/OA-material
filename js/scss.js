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

  $('.tabs > div > div').mouseenter (function () {
    $(this).addClass ('active').siblings ().removeClass ('active');
    $(this).parent ().next ().children ().eq ($(this).index ()).addClass ('active').siblings ().removeClass ('active');
  }).first ().mouseenter ();

  window.closeLoading();
});