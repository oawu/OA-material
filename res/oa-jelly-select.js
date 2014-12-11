$(function () {
  $(".oa-jelly-dropdown .dpd-title").click (function () {
    $(this).parent ().toggleClass ("dpd-closed");
  });

  $(".oa-jelly-dropdown li").click (function () {
    $(this).parent ().parent ().toggleClass ("dpd-closed").find (".dpd-title").text ($(this).text ());
  });
  
  $('.oa-jelly-dropdown .dpd-title, .dropdown li').OAripple ();
});