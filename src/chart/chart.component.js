(() => {
    'use strict';

    let chartComponent = {
        templateUrl: 'chart/chart.html',
        controller: 'chartController'
    };

    angular
        .module('chart').component('chart', chartComponent);
})();
