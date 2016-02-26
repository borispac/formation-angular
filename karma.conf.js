// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // bower:js

            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/underscore/underscore.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/angular-material/angular-material.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/a0-angular-storage/dist/angular-storage.js',
            'bower_components/auth0-angular/build/auth0-angular.js',
            'bower_components/auth0-lock/build/auth0-lock.js',
            'bower_components/auth0.js/build/auth0.js',
            'bower_components/highcharts/highcharts.js',
            'bower_components/highcharts/highcharts-more.js',
            'bower_components/highcharts/modules/exporting.js',
            'bower_components/highcharts-ng/dist/highcharts-ng.js',

            // endbower
            'src/app.module.js',
            'src/app.js',
            'src/app.config.js',
            'src/app.route.js',
            'src/**/!(*.specs.)+(js|html)',
            'src/**/*.specs.js'
        ],

        //plugins:['karma-phantomjs-launcher','karma-jasmine','karma-coverage','karma-ng-html2js-preprocessor'],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 9876,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-babel-preprocessor'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,
        preprocessors: {
            'src/app.js': ['babel'],
            'src/**/!(*.specs.)+(js)': ['babel'],
            'src/**/*.specs.js': ['babel']
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            },
            filename: function(file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },
        reporters: ['dots']
    });
};
