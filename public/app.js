var height = 600;
var width = 800;

var svg = d3.select('body').append('svg')
  .attr({width: width, height: height});


var projection = d3.geo.mercator()
    .scale(1000)
    .translate([width, height]);

var path = d3.geo.path()
   // .projection(projection);



d3.json('neighborhoods.json', function(err, data) {
  if(err) return console.log(err);

  console.log(data);

  svg.append("path")
    .datum(data)
    .attr("d", path)
    .style("fill", "red");
});