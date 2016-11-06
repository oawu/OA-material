/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {
  var $container = $('#container');

  var top = {
    h1: "OA's Material UI Design for Web!",
    html: "Material 風格的 UI 設計。 這是一個藉由 Compass、HTML 以及 jQuery.. 工具實作的 Material UI Design  for Web。 開發者可使用 scss 或者 css 來套用，並且選擇使用 jQuery 來達到更多 UI 回饋效果。"
  };
  var declare = {
    h2: "聲明",
    lis: [
      "本作品授權採用 <b>姓名標示-非商業性 2.0 台灣 (CC BY-NC 2.0 TW) 授權</b>，詳見 <a href='http://creativecommons.org/licenses/by-nc/2.0/tw/' target='_blank'>http://creativecommons.org/licenses/by-nc/2.0/tw/</a>",
    ]
  };
  var intro = {
    h2: "簡介",
    lis: [
      "這是一個藉由 <a href='http://compass-style.org/' target='_blank'>Compass</a>、<a href='https://zh.wikipedia.org/zh-tw/css' target='_blank'>css</a> 以及 <a href='https://jquery.com/' target='_blank'>jQuery</a>.. 等工具實作的 Material UI Design  for Web。",
      "開發者可使用 <b>scss</b> 或者 <b>css</b> 來套用，並且選擇使用 jQuery 來達到更多 UI 回饋效果。",
      "此 Repository 開發工具主要使用 <a href='http://gulpjs.com/' target='_blank'>Gulp</a>、<a href='http://compass-style.org/' target='_blank'>Compass</a> 以及 <a href='https://jquery.com/' target='_blank'>jQuery</a> 語言所建立，主要架構則使用 <a href='https://github.com/comdan66/oaf2e/' target='_blank'>OAF2E v1.2</a>。",
      "相關概念也參考了 <a href='https://github.com/tedshd/' target='_blank'>Tedshd's GitHub</a> 所設計的 <a href='https://github.com/tedshd/material_design_for_web' target='_blank'>material_design_for_web</a>。",
      "資料夾 lib 內包含了 <a href='https://github.com/comdan66/OA-material/blob/master/lib/_oa-material.scss' target='_blank'>_oa-material.scss</a>、<a href='https://github.com/comdan66/OA-material/blob/master/lib/oa.material.css' target='_blank'>oa.material.css</a>、<a href='https://github.com/comdan66/OA-material/blob/master/lib/oa.material.min.css' target='_blank'>oa.material.min.css</a>，三隻檔案提供了 <b>scss</b>、<b>css</b> 兩種使用方式的檔案。",
      "Demo 範例頁面: <a href='https://works.ioa.tw/OA-material/index.html' target='_blank'>https://works.ioa.tw/OA-material/index.html</a>"
    ]
  };
  var about = {
    h2: "關於",
    lis: [
      "作者名稱 - <a href='http://www.ioa.tw/' target='_blank'>OA Wu</a>",
      "E-mail - <a href='mailto:comdan66@gmail.com'>comdan66@gmail.com</a>",
      "作品名稱 - <a href='https://works.ioa.tw/OA-material/index.html' target='_blank'>OA-material</a>",
      "最新版本 - 2.0.0",
      "GitHub - <a href='https://github.com/comdan66/OA-material' target='_blank'>OA-material</a>",
      "相關資源 - <a href='https://jquery.com/' target='_blank'>jQuery</a>",
      "相關資源 - <a href='http://compass-style.org/' target='_blank'>Compass</a>",
      "相關資源 - <a href='https://github.com/tedshd/material_design_for_web' target='_blank'>Tedshd's GitHub</a>",
      "更新日期 - 2015/08/14",
    ]
  };

  $('<section />').append ($('<h1 />').text (top.h1)).append ($('<article />').html (top.html)).appendTo ($container);
  $('<section />').append ($('<h2 />').text (declare.h2)).append ($('<article />').append ($('<ol />').append (declare.lis.map (function (t) { return $('<li />').html (t); })))).appendTo ($container);
  $('<section />').append ($('<h2 />').text (intro.h2)).append ($('<article />').append ($('<ol />').append (intro.lis.map (function (t) { return $('<li />').html (t); })))).appendTo ($container);
  $('<section />').append ($('<h2 />').text (about.h2)).append ($('<article />').append ($('<ol />').append (about.lis.map (function (t) { return $('<li />').html (t); })))).appendTo ($container);

  window.closeLoading ();
});