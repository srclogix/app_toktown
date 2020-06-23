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

$(window).on('mousemove click', function (e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();


function copyInput() {
  var copyText = document.getElementById("copyInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");

}


$('.c-step-three-icon .icon-check input').change(function () {
  if ($(this).is(":checked")) {
    $(this).parents(".c-step-three-icon").addClass("active");
  } else {
    $(this).parents(".c-step-three-icon").removeClass("active");
  }
});


$('').change(function () {
  if ($(this).is(":checked")) {
    $(this).parents(".gal-detail").addClass("active");
  } else {
    $(this).parents(".gal-detail").removeClass("active");
  }
});

$(document).ready(function () {
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

$(function () {
  $(".c-play-audio .gal-detail a").click(function () {
    // remove classes from all
    $(".gal-detail").removeClass("active");
    // add class to the one we clicked
    $(this).parents(".gal-detail").addClass("active");
  });
});

$(function () {
  $("#draggable").draggable({ containment: ".website-screen", scroll: false });
});


setTimeout(function () {

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
      fetch(control.href, { headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }) })
        .then(response => response.text()).then(text => {
          document.getElementById('snippet').innerHTML = text;
          initSnippet();
        });
      e.preventDefault();
    });
  }
}

addEventListener('load', initSnippet);


function selectElementContents(el) {
  // Copy textarea, pre, div, etc.
  if (document.body.createTextRange) {
    // IE
    var textRange = document.body.createTextRange();
    textRange.moveToElementText(el);
    textRange.select();
    textRange.execCommand("Copy");
  }
  else if (window.getSelection && document.createRange) {
    // Non-Internet Explorer
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copy command was ' + msg);
    }
    catch (err) {
      console.log('Oops, unable to copy');
    }
  }
} // end function selectElementContents(el)

function make_copy_button(el) {
  var copy_btn = document.createElement('input');
  copy_btn.type = "button";
  el.parentNode.insertBefore(copy_btn, el.nextSibling);
  copy_btn.onclick = function () {
    selectElementContents(el);
  };

  if (document.queryCommandSupported("copy") || parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2]) >= 42) {
    // Copy works with Internet Explorer 4+, Chrome 42+, Firefox 41+, Opera 29+
    copy_btn.value = "Copy to Clipboard";
  }
  else {
    // Select only for Safari and older Chrome, Firefox and Opera
    copy_btn.value = "Select All (then press Ctrl + C to Copy)";
  }
}
make_copy_button(document.getElementById("markup"));


function copyClipboard() {
  var elm = document.getElementById("divClipboard");
  // for Internet Explorer

  if (document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");

  }
  else if (window.getSelection) {
    // other browsers

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");

  }
}