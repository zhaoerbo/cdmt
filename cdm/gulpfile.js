var gulp=require("gulp");
var minifyHtml = require("gulp-minify-html")
var minifyCss = require("gulp-clean-css")
gulp.task("htmltask",function(){
	gulp.src("*html")
	.pipe(minifyHtml())
	.pipe(gulp.dest("lib"))
})

gulp.task("csstask",function(){
	gulp.src("./css/*css")
	.pipe(minifyCss())
	.pipe(gulp.dest("lib/css"))
})
