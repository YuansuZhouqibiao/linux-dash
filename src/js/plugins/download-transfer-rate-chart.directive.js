angular.module('linuxDash').directive('downloadTransferRateChart', ['server', function(server) {
  return {
    restrict: 'E',
    scope: {},
    template: ' \
      <multi-line-chart-plugin \
        heading="下载传输速率" \
        module-name="download_transfer_rate" \
        units="units"> \
      </multi-line-chart-plugin> \
    ',
    link: function(scope) {
      scope.delay = 2000
      scope.units = 'KB/s'
    }
  }
}])
