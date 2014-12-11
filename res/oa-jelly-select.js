$(function () {
  $(".dropdown .title").click(function () {
    $(this).parent().toggleClass("closed");
  });

  $(".dropdown li").click(function () {
    $(this).parent().parent().toggleClass("closed").find(".title").text($(this).text());
  });
});