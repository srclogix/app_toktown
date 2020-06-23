var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.c-bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();





$('.c-step-three-icon .icon-check input').change(function(){
    if($(this).is(":checked")) {
        $(this).parents(".c-step-three-icon").addClass("active");
    } else {
        $(this).parents(".c-step-three-icon").removeClass("active");
    }
});


$('').change(function(){
    if($(this).is(":checked")) {
        $(this).parents(".gal-detail").addClass("active");
    } else {
        $(this).parents(".gal-detail").removeClass("active");
    }
});

$(document).ready(function(){
$(".gal-detail  input").click(function () {
      $(".gal-detail").removeClass('c-active');
      $(this).parents(".gal-detail").addClass('c-active');
});

$(".c-Bottom-left").click(function () {
    $(this).parents("body").addClass("c-body-Bottom-left");
     $(this).parents("body").removeClass("c-body-Bottom-right");
     $(this).parents("body").removeClass("c-body-top-right ");
     $(this).parents("body").removeClass("c-body-top-left");
});

$(".c-Bottom-right").click(function () {
    $(this).parents("body").addClass("c-body-Bottom-right");
     $(this).parents("body").removeClass("c-body-Bottom-left");
     $(this).parents("body").removeClass("c-body-top-right ");
     $(this).parents("body").removeClass("c-body-top-left");
});

$(".c-Top-right").click(function () {
    $(this).parents("body").addClass("c-body-top-right");
     $(this).parents("body").removeClass("c-body-Bottom-left");
     $(this).parents("body").removeClass("c-body-Bottom-right ");
     $(this).parents("body").removeClass("c-body-top-left");
});

$(".c-Top-left").click(function () {
    $(this).parents("body").addClass("c-body-top-left");
     $(this).parents("body").removeClass("c-body-Bottom-left");
     $(this).parents("body").removeClass("c-body-Bottom-right ");
     $(this).parents("body").removeClass("c-body-top-right");
});


});

$(function() {
   $(".c-play-audio .gal-detail a").click(function() {
      // remove classes from all
      $(".gal-detail").removeClass("active");
      // add class to the one we clicked
      $(this).parents(".gal-detail").addClass("active");
   });
});

$( function() {
    $( "#draggable" ).draggable({ containment: ".website-screen", scroll: false });
  } );


setTimeout(function(){ 

$(".c-otp-before").hide();
$(".c-otp-w").addClass("c-otp-show");
 }, 2000);


// blust


 function initSnippet() {
    let snippet = document.querySelector('pre code');
    hljs.highlightBlock(snippet);
    let style = document.getElementById('style-link').textContent;
    for (let link of document.querySelectorAll('.codestyle')) {
      link.rel = 'stylesheet';
      link.disabled = !link.href.match(style + '\\.css$');
    }
    document.getElementById('language-link').innerHTML = snippet.result.language;
    for (let control of document.querySelectorAll('.copyInput')) {
      control.addEventListener('click', e => {
        fetch(control.href, {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
          .then(response => response.text()).then(text => {
            document.getElementById('snippet').innerHTML = text;
            initSnippet();
          });
        e.preventDefault();
      });
    }
  }

  addEventListener('load', initSnippet)



  function SelectContent(element) {
                        var doc = document
                            , text = doc.getElementById(element)
                            , range, selection
                        ;    
                        if (doc.body.createTextRange) {
                            range = document.body.createTextRange();
                            range.moveToElementText(text);
                            range.select();
                        } else if (window.getSelection) {
                            selection = window.getSelection();        
                            range = document.createRange();
                            range.selectNodeContents(text);
                            selection.removeAllRanges();
                            selection.addRange(range);

                        }
                         document.execCommand('copyInput');
                    }
                    $(".copyInput").click(function(){

                         SelectContent( $(this).attr('title'));
                    });