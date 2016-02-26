(function() {
    'use strict';

    angular
        .module('blog').run(runApp);

    /** @ngInject **/
    function runApp($rootScope, $state, authService, auth, store){
        auth.hookEvents();

        $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options)=>{
            var token = store.get('token');
            console.log(token);
            if(!token && toState.name !='login'){
            // if(!authService.isConnected && toState.name !='login'){
                event.preventDefault();
                $state.go('login');
            }
        });

    };
})();
