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

function randomColor(){

  // Define possible hex digits
  var chars = [
    '0', '1', '2', '3',
    '4', '5', '6', '7',
    '8', '9', 'a', 'b',
    'c', 'd', 'e', 'f'
  ];

  var c = [ ];

  for (var i=0; i<6; i++) {
    // Choose random digit
    var index = Math.floor(Math.random()*chars.length);

    // Push random digit to array
    c.push(chars[index]);
  }

  // Transform the array to the form "#AAAAAA"
  return '#'+c.join('');
};

$(document).ready(function(){

makeGrid(16);

$('.grid_element').hover( function(){
    $(this).css('background-color', '#000');
});

$('.reset_grid_black').click( function() {
  newGrid();
  $('.grid_element').hover( function(){
      $(this).css('background-color', '#000');
  });
});

$('.reset_grid_random').click( function() {
  newGrid();
  $('.grid_element').hover( function(){
      var color =randomColor;
      $(this).css('background-color', color);
  });
});

});
