(() => {
    'use strict';

    angular
        .module('manual-highcharts').controller('manualHighchartsController', manualHighchartsController);

    /** @ngInject */
    function manualHighchartsController($scope, $timeout) {
        let chart;
        let options = {
            chart: {
                renderTo: this.chartid,
                height: 350
            },
            title: {
                text: 'Monthly Average Temperature',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                x: -20
            },

            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: this.series
        };

        // The div id is set dynamically, we need to get out of the usal angular flow and use $timeout(,0) to do so
        $timeout(function () {
            chart = new Highcharts.Chart(options);
        }, 0);

        $scope.$watch(() => this.series, () => {
            if (this.series && chart) {
                    chart.get('series-1').setData(this.series[0].data);
            };
        }, true);
    };
})();
