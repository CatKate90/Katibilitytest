jQuery('.fs-title__content svg').click(function() {
  jQuery('.fs-title__content').fadeOut(1000);
  jQuery('.fs-title').css('background','transparent');
  jQuery('.fs-title').css('z-index','1');
  jQuery('.cat').css('max-width','70px');
});
