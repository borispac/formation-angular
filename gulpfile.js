var gulp = require('gulp'),
    one = require('one-gulp'),
    Server = require('karma').Server;

one.init(gulp, {
    // look at options documentation for details
    jsDeps: [{
        include: ['bower_components/jquery/dist/*.js', 'bower_components/**/*.js'],
        output: 'bower-scripts.js'
    }, {
        include: ['app.module.js', '**/*.js'],
        exclude: ['bower_components/**/*.js'],
        output: 'all-scripts.js'
    }]
});

one.unlink(one.sources.js).from(one.transforms.sortJsByDepth);
one.link(one.sources.js).to(one.transforms.babel);
one.link(one.transforms.babel).to(one.transforms.sortJsByDepth);
one.link(one.transforms.babel).to(one.outputs.writeToDev);

gulp.task('test', (done) => {
    server  = new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);

    server.start();
});

gulp.task('test:watch', (done) => {
    server  = new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, done);

    server.start();
});
