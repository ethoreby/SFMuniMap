var height = 600;
var width = 800;

var svg = d3.select('.display').append('svg')
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

var x2js = new X2JS();

var app = angular.module('app', []);

app.controller('MainController', function($scope, $q, $http) {

  var drawCity = function(pathType) {

    var reference = {
      'neighborhoods': '#999999',
      'streets': 'green',
      'arteries': 'blue',
      'freeways': 'red'
    }
    var dfd = $q.defer();

    d3.json(pathType + '.json', function(err, data) {
    if(err) return console.log(err);

    svg.append('path')
      .datum(data)
      .attr('d', path)
      .style('fill', reference[pathType]);
    });

    dfd.resolve();
    return dfd.promise;
  }

  drawCity('neighborhoods')
  .then(function() {
    return drawCity('streets');
  })
  .then(function() {
    return drawCity('arteries')
  })
  .then(function() {
    return drawCity('freeways');  
  })

  $http.get('http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=sf-muni')
  .then(function(data) {
    $scope.routes = (x2js.xml_str2json(data.data)).body.route;
  });

});







