(() => {
    'use strict';

    let manualHighchartsComponent = {
        templateUrl: 'manual-highcharts/manual-highcharts.html',
        controller: 'manualHighchartsController',
        bindings: {
            series :'<',
            chartid : '@'
        }
    };

    angular
        .module('manual-highcharts').component('manualHighcharts', manualHighchartsComponent);
})();
