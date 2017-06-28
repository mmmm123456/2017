var gulp = require('gulp'),//La déclaration require indique à Node d’aller chercher dans node_modules un package appelé gulp. Une fois trouvé, nous attribuons son contenu à la variable gulp.
                concat = require('gulp-concat'), // pour combiner des fichiers
                sass = require('gulp-sass'), // pour Sass
                autoprefixer = require('gulp-autoprefixer'), // pour préfixer le sass
                cssnano = require('gulp-cssnano'), // pour minifier le css
                plumber = require('gulp-plumber'); // pour détecter mieux les erreurs
                livereload = require('gulp-livereload'); // pour le reload auto
                browserSync = require('browser-sync').create();
                var sourcemaps = require('gulp-sourcemaps');


var path = {
                'assets' : {
                               'sass' : './app/scss/',
                               'js' : './app/js/',
                               'fonts' : './app/fonts/',
                               'images' : './app/images/',
                               'css' : './app/css/'
                },
                'vendors' : './bower_components/'
}

//SYNCHRO NAVIGATEUR
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
  })
})


gulp.task('styles', function(){
                gulp.src(path.assets.sass + 'main.scss')
                .pipe(sourcemaps.init())
                .pipe(plumber())
                .pipe(concat("styles.scss"))
                .pipe(sass())
                .pipe(autoprefixer())
                .pipe(gulp.dest("./app/css/"))
                .pipe(livereload())
                .pipe(browserSync.stream());
});

gulp.task('rebuild',['build'], function(){
              	browserSync.reload();
});

gulp.task('fonts', function(){
                gulp.src([
                               path.vendors + 'bootstrap/fonts/*',
                               path.vendors + 'font-awesome/fonts/*'
                ])
                .pipe(gulp.dest(path.assets.fonts));
});

gulp.task('watch', function() {
                livereload.listen();
                gulp.watch(['*.html'],['rebuild']);
                gulp.watch(['./app/scss/*.scss'], ['styles']);
                gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('build', ['fonts', 'styles']);

gulp.task('default', ['browser-sync', 'watch']);
