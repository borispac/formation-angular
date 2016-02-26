(() => {
    'use strict';

    let ChartWebSocketComponent = {
        templateUrl: 'ChartWebSocket/ChartWebSocket.html',
        controller: 'ChartWebSocketController'
    };

    angular
        .module('chart-websocket').component('chartWebsocket', ChartWebSocketComponent);
})();
