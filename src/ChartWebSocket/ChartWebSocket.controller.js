(() => {
    'use strict';

    angular
        .module('chart-websocket').controller('ChartWebSocketController', ChartWebSocketController);

    /** @ngInject */
    function ChartWebSocketController(ChartWebSocketService) {
        this.series = [{
            id: 'series-1',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 12],
            dataGrouping: {
                enabled: true
            }
        }]

        this.series2 = [{
            id: 'series-1',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 12],
            dataGrouping: {
                enabled: true
            }
        }]

        ChartWebSocketService.enableRealTime();
    };
})();
