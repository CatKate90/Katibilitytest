jQuery('.fs-title__content svg').click(function() {
  jQuery('.fs-title__content').fadeOut(1000);
  jQuery('.fs-title').css('background','transparent');
  jQuery('.fs-title').css('z-index','1');
  jQuery('.cat').css('max-width','70px');
});

var count = 9;
jQuery('input#q1a, input#q1c, input#q2a, input#q2c, input#q3b, input#q3c, input#q4a, input#q4c, input#q5b, input#q5c, input#q6a, input#q6b, input#q7a, input#q7c, input#q8a, input#q8c, input#q9a, input#q9b').click(function(e){
  e.preventDefault();
  jQuery('.fs-error').fadeIn(500);
  jQuery('.fs-error').fadeOut(500);
  count--;
});

jQuery('input#q9c').click(function() {
  jQuery('#myform').fadeOut(3000);
  jQuery('.fs-end p').text(count + '/9 Übereinstimmungen!');
});
