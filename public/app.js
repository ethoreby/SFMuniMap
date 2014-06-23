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

var drawCity = function(pathType) {
  
  var reference = {
    'neighborhoods': '#999999',
    'streets': 'green',
    'arteries': 'blue',
    'freeways': 'red'
  }

  d3.json(pathType + '.json', function(err, data) {
  if(err) return console.log(err);

  svg.append('path')
    .datum(data)
    .attr('d', path)
    .style('fill', reference[pathType]);
  });
}

drawCity('neighborhoods');
drawCity('streets');
drawCity('arteries');
drawCity('freeways');

var app = angular.module('app', []);

app.controller('MainController', function($scope, $q) {
  
});







