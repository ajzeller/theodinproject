function makeGrid(dimension){
  for(i=1; i <= dimension; i++){
    for(j=1; j <= dimension; j++){
      $('.main').append('<div class="grid_element"></div>');
    };
  };
  $('.grid_element').height(500/dimension);
  $('.grid_element').width(500/dimension);
};

function clearGrid(){
  $('.grid_element').remove();
};

function newGrid(){
  var n = prompt('What is your desired side dimension?');
  clearGrid();
  makeGrid(n);
};

$(document).ready(function(){

makeGrid(16);

$('.grid_element').hover( function(){
    $(this).css('background-color', '#000');
});

$('.reset_grid').click( function() {
  newGrid();
  $('.grid_element').hover( function(){
      $(this).css('background-color', '#000');
  });
});

});
