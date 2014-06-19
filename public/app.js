var height = 600;
var width = 800;

var svg = d3.select('body').append('svg')
  .attr({width: width, height: height});

svg.append('rect')
  .attr('width', '100%')
  .attr('height', '100%')
  .attr('fill', '#66CCFF');

var projection = d3.geo.albers()
    .center([0, 37.768544])
    .rotate([122.427521, 0])
    .scale(250000)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

d3.json('neighborhoods.json', function(err, data) {
  if(err) return console.log(err);

  svg.append('path')
    .datum(data)
    .attr('d', path)
    .style('fill', '#999999');
});

d3.json('streets.json', function(err, data) {
  if(err) return console.log(err);

  svg.append('path')
    .datum(data)
    .attr('d', path)
    .style('fill', 'green');
});

d3.json('arteries.json', function(err, data) {
  if(err) return console.log(err);

  svg.append('path')
    .datum(data)
    .attr('d', path)
    .style('fill', 'blue');
});

d3.json('freeways.json', function(err, data) {
  if(err) return console.log(err);

  svg.append('path')
    .datum(data)
    .attr('d', path)
    .style('fill', 'red');
});