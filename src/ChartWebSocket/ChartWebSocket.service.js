(() => {
    'use strict';

    angular
        .module('chart-websocket')
        .service('ChartWebSocketService', ChartWebSocketService);

    /** @ngInject */
    function ChartWebSocketService() {
        this.enableRealTime = ()=>{
            var socket;

            socket = io.connect('http://localhost:8001');

            socket.on('plop', (data) => {
                $scope.$apply(() => {
                    if (this.series) {
                        // this.series[0].data.push(data);
                        this.series[0].data = this.series[0].data.concat(data);
                    }
                });
            });

            socket.on('plop2', (data) => {
                $scope.$apply(() => {
                    if (this.series2) {
                        // this.series[0].data.push(data);
                        this.series2[0].data = this.series2[0].data.concat(data);
                    }
                });
            });
        }
    };
})();
