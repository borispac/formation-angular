(function() {
    'use strict';

    angular.module('login', []);
    angular.module('chart', []);
    angular.module('menubar', []);
    angular.module('manual-highcharts', []);
    angular.module('chart-websocket', []);
    angular.module('category-list', []);
    angular.module('category-name', []);
    angular.module('list-article', ['category-name']);
    angular.module('main-component', ['category-list', 'list-article']);
    angular.module('blog', ['auth0','angular-storage','login','angular-flippy','chart-websocket','manual-highcharts','menubar','chart','ngSanitize', 'ngMaterial', 'ui.router', 'main-component','highcharts-ng']);

})();
