(() => {
    'use strict';


    angular
        .module('blog').config(configure);

    /** @ngInject */
    function configure($urlRouterProvider, $stateProvider,$locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('main', {
            url: '/',
            views: {
                'menub': {
                    template: '<menubar></menubar>'
                },
                'main': {
                    template: '<main-component></main-component>'
                }
            }
        });

        // $stateProvider.state('main', {
        //     url: '/',
        //     views: {
        //         main: {
        //             template: '<main-component></main-component>'
        //         }
        //     }
        // });

        $stateProvider.state('login', {
            url: '/login',
            views: {
                main: {
                    template: '<login></login>'
                }
            }
        });

        $stateProvider.state('chart', {
            url: '/chart',
            views: {
                main: {
                    template: '<chart-websocket></chart-websocket>'
                }
            }
        });

        $stateProvider.state('chartExternal', {
            url: '/chartExternal',
            views: {
                main: {
                    template: '<chart></chart>'
                }
            }
        });
    };
})();
