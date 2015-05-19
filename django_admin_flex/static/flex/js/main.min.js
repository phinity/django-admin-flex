$(document).ready(function() {
  
  $(window).scroll(fixActions);
  $(window).resize(fixActions);
  fixActions();
  
  $('input[type="submit"]').addClass('btn btn-primary');
  $('select').addClass('bootstrap-select');
  
});

function fixActions() {
  
  var fixedActionMinWidth = typeof fixedActionMinWidth === 'undefined' ? 950 : fixedActionMinWidth;
  
  if($('.row-fixed').length) {
    var maxHeight = $('.row-fixed').position().top,
        fixColEl = $('.row-fixed .form-actions'),
        scrollTop = $(window).scrollTop(),
        winHeight = $(window).height(),
        winWidth = $(window).width(),
        fixColElHeight = fixColEl.outerHeight(true);
    
    if( (winHeight+scrollTop) > maxHeight+fixColElHeight || winWidth < fixedActionMinWidth ) {
    
      fixColEl
        .removeClass('fixed-actions well')
        .css({'position': 'relative', 'top': 'auto', 'right': 'auto'});
      
    } else {
      
      fixColEl
        .addClass('fixed-actions well')
      
      fixColElHeight = fixColEl.outerHeight(true);
      
      fixColEl
        .css({'position': 'fixed', 
              'top': ((winHeight - fixColElHeight )+'px'),
        });
    
    }
  }
  
}
