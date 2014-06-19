var height = 600;
var width = 800;

var svg = d3.select('body').append('svg')
  .attr({width: width, height: height});

svg.append("rect")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("fill", "blue");

////////

var projection = d3.geo.albers()
    .center([0, 37.7833])
    .rotate([122.4167, 0])
    // .parallels([37, 38])
    .scale(200000)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

d3.json('neighborhoods.json', function(err, data) {
  if(err) return console.log(err);

  console.log(data);

  svg.append("path")
    .datum(data)
    .attr("d", path)
    .style("fill", "red");
});