// init Isotope
var $grid = $('.grid').fadeIn(1000).isotope({
  itemSelector: '.element-item',
  percentPosition: true,
  masonry: {
  }
});

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});