$(document).ready(function(){

var dimension = 50;

  for(i=1; i<= dimension; i++){
    $('.main').append('<div class="container"></div>');
  };

    for(j=1; j<=dimension; j++){
      $('.container').append('<div class="grid_element"></div>');
      console.log('making grid ... ' + dimension);
  };

$('button').click(function(){
  $('.grid_element').css('background-color', '#eee');
});

$('.grid_element').hover(function(){
    $(this).css('background-color', '#000');

  });

  $('form').submit(function change_dimension(){
    dimension = document.getElementById('dimension').value;
    console.log(dimension);


  });

});
