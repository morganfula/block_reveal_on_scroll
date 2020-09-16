const body = document.body,
  scrollWrap = document.getElementsByClassName('smooth-scroll-wrapper')[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.04;

let offset = 0;

body.style.height = Math.floor(height) + 'px';

function smoothScroll() {
  offset += (window.pageXOffset - offset) * speed;

  let scroll = "translateY(-" + offset + "px) translateZ(0)";
  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

$(function () {
  let elements = $(".text, .img").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 400) {
        $(item).addClass("reveal");
      }
    });
  });
  elements.forEach(function (item) {
    if ($(this).scrollTop() >= $(item).offset().top - 400) {
      $(item).addClass("reveal");
    }
  });
});