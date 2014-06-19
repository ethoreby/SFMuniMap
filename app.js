var height = 600;
var width = 800;

var svg = d3.select('body').append('svg')
  .attr({width: width, height: height});

d3.json('arteries.json', function(err, data) {
  if(err) return console.log(err);

  
});