/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

// var ENVIRONMENT = 'dev';
var ENVIRONMENT = 'production';

if (ENVIRONMENT == 'dev') {
  window.url = 'https://dev.works.ioa.tw/OA-material/';
} else {
  window.url = 'https://works.ioa.tw/OA-material/';

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46121102-26', 'auto');
  ga('send', 'pageview');
}

Array.prototype.column = function (k) {
  return this.map (function (t) { return k ? eval ("t." + k) : t; });
};
Array.prototype.diff = function (a, k) {
  return this.filter (function (i) { return a.column (k).indexOf (eval ("i." + k)) < 0; });
};
Array.prototype.max = function (k) {
  return Math.max.apply (null, this.column (k));
};
Array.prototype.min = function (k) {
  return Math.min.apply (null, this.column (k));
};
function browser_console_qrcode (color1, color2, qrCodeArray) {var css1 = "color:" + color1 + ";font-size:10px;margin:3px;text-shadow: 0 -6px " + color1 + ", 6px 0 " + color1 + ", 6px -6px " + color1 + ";",css2 = "color:" + color2 + ";font-size:10px;margin:3px;text-shadow: 0 -6px " + color2 + ", 6px 0 " + color2 + ", 6px -6px " + color2 + ";",qrt = '\\n';for (var i = 0, c = []; i < qrCodeArray.length; i++, qrt += '\\n')for (var j = 0; j < qrCodeArray[i].length; c.push ('"' + (qrCodeArray[i][j] ? css1 : css2) + '"'), j++)qrt += qrCodeArray[i][j] ? "%c▇" : "%c▇";qrt += '\\n';eval ('console.log("' + qrt + '", ' + c.join (',') + ');');console.log ('%c想看更多 OA Wu 的作品集嗎！？快看這裡喲！ %c➜ %chttp://www.ioa.tw/?f=works', 'color:rgba(36, 127, 84, 1.00);font-size:15px;line-height:25px;', 'color:rgba(213, 36, 35, 1.00);font-size:15px;line-height:25px;', 'color:rgba(66, 133, 244, 1.00);font-size:10px;line-height:25px;');}
browser_console_qrcode ('rgba(39, 40, 34, 1.00)', 'rgba(255, 255, 255, 1.00)', [[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],[1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],[1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],[1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],[1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1],[0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],[1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1],[0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1],[0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],[0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],[0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1],[0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],[0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],[1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1],[1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0],[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],[1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],[1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1],[1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1]]);

$(function () {
  var title = 'OA-material';
  var links = {
    left: [
      {name: '首頁', file: 'index.html', target: '_self'},
      {name: '使用CSS', file: 'css.html', target: '_self'},
      {name: '使用SCSS', file: 'scss.html', target: '_self'},
    ],
    right: [
      {name: '關於', file: 'about.html', target: '_self'},
      {name: '更多', file: 'https://works.ioa.tw/index.html', target: '_blank'},
    ]
  };

  var footInfos = [
    "OA's material © 2015",
    "如有相關問題歡迎與<a href='https://www.facebook.com/comdan66' target='_blank'>作者</a>討論。",
  ];

  var sideLinks = links.left.concat (links.right);
  if (!sideLinks.length) return;

  var now = document.URL.replace (/^.*[\\\/]/, '');
  now = now.length ? now : 'index.html';
  var nowLink = sideLinks.filter (function (t) { return t.file == now; });
  if (nowLink.length && (nowLink = nowLink[0]))
    $('title').text (nowLink.name + ' - OA-material');

  var $body = $('body');
  var overflow = $body.css ('overflow');
  var $option = null;

  var $header = $('<div />').attr ('id', 'header').append ($('<div />').addClass ('header_container')
                            .append ($('<div />').addClass ('l').append ($('<a />').addClass ('home').addClass ('icon-home').attr ('href', window.url + 'index.html').attr ('target', '_self')).append (links.left.map (function (t) {
                              return $('<a />').addClass (t.file == now ? 'active' : null).attr ('href', window.url + t.file).attr ('target', t.target).text (t.name);
                            })))
                            .append ($('<div />').addClass ('c').text (title).click (function () { $('html, body').stop ().animate ({ scrollTop: 0 - 50 }, 500); }))
                            .append ($('<div />').addClass ('r').append ($option = $('<a />').addClass ('option').addClass ('icon-menu').click (function () {
                              if ($headerRightSlide.hasClass ('close')) {
                                $headerRightSlide.removeClass ('close');
                                $('body').css ('overflow', 'hidden');
                                $(this).addClass ('close');
                              } else {
                                $headerRightSlide.addClass ('close');
                                $('body').css ('overflow', overflow);
                                $(this).removeClass ('close');
                              }}))
                            .append (links.right.map (function (t) {
                              var regex = /(http(s?))\:\/\//gi;
                              return $('<a />').addClass (t.file == now ? 'active' : null).attr ('href', regex.test (t.file) ? t.file : window.url + t.file).attr ('target', t.target).text (t.name);
                            })))).prependTo ($body);

  var $headerSlideCover = $('<div />').attr ('id', 'header_slide_cover').click (function () {
                            if (!$headerRightSlide.hasClass ('close')) {
                              $headerRightSlide.addClass ('close');
                              $('body').css ('overflow', overflow);
                              $option.removeClass ('close');
                            }
                          }).prependTo ($body);

  var $headerRightSlide = $('<div />').attr ('id', 'header_right_slide').addClass ('close').append ($('<div />').addClass ('right_slide_container').append (sideLinks.map (function (t) {
                             return $('<a />').addClass (t.file == now ? 'active' : null).addClass ('sub').attr ('href', window.url + t.file).attr ('target', t.target).text (t.name);
                           }))).prependTo ($body);

  var $footer = $('<div />').attr ('id', 'footer').append ($('<div />').addClass ('l')).append ($('<div />').addClass ('c').append (footInfos.map (function (t) {
                  return $('<div />').html (t);
                }))).append ($('<div />').addClass ('r')).appendTo ($body);

  window.mainLoading = $('<div />').attr ('id', 'main_loading').append ($('<div />')).appendTo ($body);

  window.closeLoading = function () {
    this.mainLoading.fadeOut (function () {
      $(this).hide (function () {
        $(this).remove ();
      });
    });
  };

});