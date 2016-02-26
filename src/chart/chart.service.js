// ToDo : stock session storage
(() => {
    'use strict';

    angular
        .module('chart')
        .service('chartService', chartService);

    /** @ngInject */
    function chartService() {
        this.getData = () =>{
            var data = [];
            for(var i=0; i<100; i++) {
                data.push(Math.random());
            }
            return  data;
        };
    };
})();
