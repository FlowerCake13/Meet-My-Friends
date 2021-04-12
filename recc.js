$(window).scroll(function(e){ 
	var $el = $('.fixed-bar'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 64.5 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px'}); 
  }
  if ($(this).scrollTop() < 64.5 && isPositionFixed){
    $el.css({'position': 'static', 'top': '0px'}); 
  } 
});

