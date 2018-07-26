$('.ui.antbotico.image')
  .transition('set looping')
  .transition('pulse', '2000ms');

$( document ).ready(function() {
  $('.ui.statistic')
    .transition({
      animation : 'drop in',
      duration  : 1000,
      interval  : 300
    });
});

$('.ui.statistic').mouseenter( function(){
    $(this).transition('tada');
  }
);
