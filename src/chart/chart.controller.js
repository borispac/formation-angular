(() => {
    'use strict';

    angular
        .module('chart').controller('chartController', chartController);

    /** @ngInject */
    function chartController($interval,  chartService) {
        this.addData = () => {
            var seriesArray = this.chartConfig.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat(chartService.getData());
        };

        this.chartConfig = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            series: [{
                data: chartService.getData()
            }],
            title: {
                text: 'Hello'
            },
            size: {
                width: 1500
            },
            loading: false
        }

        $interval(() =>{
            this.addData();
            // console.log('test');
        }, 5000);

        // $scope.chartConfig.series.push(chartService.getData());
    };
})();
