angular.module('linuxDash').directive('cpuAvgLoadChart', ['server', function(server) {
  return {
    restrict: 'E',
    scope: {},
    template: '\
      <multi-line-chart-plugin \
          heading="CPU平均负载" \
          module-name="load_avg" \
          units="units"> \
      </multi-line-chart-plugin> \
    ',
    link: function(scope) {
      scope.units = '%'
    }
  }
}])
