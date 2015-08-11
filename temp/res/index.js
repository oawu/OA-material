/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46121102-7', 'auto');
ga('send', 'pageview');

$(function () {
  
  $container = $('#container');
  $('#container > div').hide ();

  $('.navbar').OAnavbar ();

  $('.item').click (function () {
    $(this).addClass ('active').siblings ().removeClass ('active');
    window.location.assign ('#d' + $(this).index ());
  });

  var $active = $('.item').filter ('.active');
  $active.length ? $active.click () : $('.item').eq (!location.hash ? 0 : location.hash.slice (location.hash.indexOf ('d') + 1)).click ();

  $('.item').each (function (i) {
    Path.map ("#d" + i).to (function () {
      $container.children ().eq (i).fadeIn (function () {
        $('.ripple-btn').OAripple ();
        $('.jelly-ripple-btn').OAripple ().OAjelly ();
      }).siblings ().fadeOut ();

    }).enter (function () {
      $('#container > div').fadeOut ();
    });
  });

  Path.listen();

  $('.jelly-btn').OAjelly ();
  $('.oa-select').OAjellyDropdown ({ width: '220px'}).click (function () { $(this).siblings ().addClass ('dpd-closed'); });
  $('.prettyprint').addClass ('linenums');
  prettyPrint ();
});