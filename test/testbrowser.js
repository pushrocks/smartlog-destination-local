/// <reference path="typings/tsd.d.ts" />
var plugins = {
    gulp: require("gulp"),
    gulpBrowser: require("gulp-browser"),
    easyserve: require("easyserve")
};
plugins.gulp.task('compileBrowserJS', function () {
    var stream = plugins.gulp.src('test/browser/index.js')
        .pipe(plugins.gulpBrowser.browserify())
        .pipe(plugins.gulp.dest("test/browser/browserified/"));
    return stream;
});
plugins.gulp.task('default', ['compileBrowserJS'], function () {
    console.log('browserJS has been browserified');
    plugins.easyserve("test/browser/");
});
plugins.gulp.start.apply(plugins.gulp, ['default']);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0YnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7QUFDekMsSUFBSSxPQUFPLEdBQUc7SUFDVixJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNyQixXQUFXLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUNwQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQztDQUNsQyxDQUFDO0FBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7SUFDbEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7U0FDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUMzRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsa0JBQWtCLENBQUMsRUFBRTtJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDL0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyJ9