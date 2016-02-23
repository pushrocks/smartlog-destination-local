/// <reference path="../ts/typings/main.d.ts" />
var smartenv = require("smartenv");
var beautylog = require('../index.js');
describe("beautylog", function () {
    describe(".log(message,logtype)", function () {
        it("should log cyan text", function () {
            beautylog.log('beautylog.log(), with normal logText, without logType');
        });
        it("should print different log types dependent on logType", function () {
            beautylog.log('beautylog.log(), with normal logText, without logType');
            beautylog.log('beautylog.log(), with normal logText, with logType "dir"', 'dir');
            beautylog.log('beautylog.log(), with normal logText, with logType "error"', 'error');
            beautylog.log('beautylog.log(), with normal logText, with logType "info"', 'info');
            beautylog.log('beautylog.log(), with normal logText, with logType "ok"', 'ok');
            beautylog.log('beautylog.log(), with normal logText, with logType "success"', 'success');
            beautylog.log('beautylog.log(), with normal logText, with logType "warn"', 'warn');
        });
    });
    describe(".dir(message)", function () {
        it("should print a blue Dir message", function () {
            beautylog.dir('beautylog.dir(), with normal logText, without logType');
        });
    });
    describe(".error(message)", function () {
        it("should print a red error message", function () {
            beautylog.error('beautylog.error(), with normal logText, without logType');
        });
    });
    describe(".info(message)", function () {
        it("should display a purple info message", function () {
            beautylog.info('beautylog.dir(), with normal logText, without logType');
        });
    });
    describe(".ok(message)", function () {
        it("should display a green ok message", function () {
            beautylog.ok('beautylog.ok(), with normal logText, without logType');
        });
    });
    describe(".success(message)", function () {
        it("should display an orange warn message", function () {
            beautylog.success('beautylog.success(), with normal logText, without logType');
        });
    });
    describe(".warn", function () {
        it("should display a orange warn message", function () {
            beautylog.warn('beautylog.warn(), with normal logText, without logType');
        });
    });
    describe(".table", function () {
        it("should print a nice table", function () {
            (function () {
                var testTable1 = beautylog.table.new("checks");
                testTable1.push(['check1', 'success']);
                testTable1.push(['check2', 'error']);
                testTable1.push(['check3', 'error']);
                testTable1.print();
                var testTable2 = beautylog.table.new("custom", ["Column1".red, "Column2".blue, "Column3".cyan]);
                testTable2.push(["Hey", "this", "works"]);
                testTable2.print();
            })();
        });
    });
    describe(".figlet", function () {
        it("should print nice fonts to console in yellow", function (done) {
            beautylog.figlet("Async!", { font: "Star Wars", color: "yellow" }).then(done);
        });
    });
    describe(".figletSync", function () {
        it("should print nice fonts to console in yellow", function () {
            beautylog.figletSync("Sync!", { font: "Star Wars", color: "blue" });
        });
    });
    describe(".code", function () {
        it("should highlight code", function () {
            this.timeout(10000);
            beautylog.code("var test = 3;\nfunction(){\n  var hello = \"super\"\n};\nvar test;", {
                language: "javascript"
            });
        });
    });
});

//# sourceMappingURL=data:application/json;base64,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S0FBSyxDQUFDLENBQUM7WUFDcEIsU0FBUyxDQUFDLElBQUksQ0FDVixvRUFBb0UsRUFDcEU7Z0JBQ0ksUUFBUSxFQUFDLFlBQVk7YUFDeEIsQ0FDSixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHMvdHlwaW5ncy9tYWluLmQudHNcIiAvPlxudmFyIHNtYXJ0ZW52ID0gcmVxdWlyZShcInNtYXJ0ZW52XCIpO1xudmFyIGJlYXV0eWxvZyA9IHJlcXVpcmUoJy4uL2luZGV4LmpzJyk7XG5cbmRlc2NyaWJlKFwiYmVhdXR5bG9nXCIsZnVuY3Rpb24oKXtcbiAgICBkZXNjcmliZShcIi5sb2cobWVzc2FnZSxsb2d0eXBlKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIGxvZyBjeWFuIHRleHRcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IGRpZmZlcmVudCBsb2cgdHlwZXMgZGVwZW5kZW50IG9uIGxvZ1R5cGVcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwiZGlyXCInLCdkaXInKTtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwiZXJyb3JcIicsJ2Vycm9yJyk7XG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcImluZm9cIicsJ2luZm8nKTtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwib2tcIicsJ29rJyk7XG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcInN1Y2Nlc3NcIicsJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwid2FyblwiJywnd2FybicpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5kaXIobWVzc2FnZSlcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBwcmludCBhIGJsdWUgRGlyIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgYmVhdXR5bG9nLmRpcignYmVhdXR5bG9nLmRpcigpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGRlc2NyaWJlKFwiLmVycm9yKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgYSByZWQgZXJyb3IgbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBiZWF1dHlsb2cuZXJyb3IoJ2JlYXV0eWxvZy5lcnJvcigpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCIuaW5mbyhtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYSBwdXJwbGUgaW5mbyBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5pbmZvKCdiZWF1dHlsb2cuZGlyKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5vayhtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYSBncmVlbiBvayBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5vaygnYmVhdXR5bG9nLm9rKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5zdWNjZXNzKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhbiBvcmFuZ2Ugd2FybiBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5zdWNjZXNzKCdiZWF1dHlsb2cuc3VjY2VzcygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi53YXJuXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhIG9yYW5nZSB3YXJuIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgYmVhdXR5bG9nLndhcm4oJ2JlYXV0eWxvZy53YXJuKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi50YWJsZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IGEgbmljZSB0YWJsZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFRhYmxlMSA9IGJlYXV0eWxvZy50YWJsZS5uZXcoXCJjaGVja3NcIik7XG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMS5wdXNoKFsnY2hlY2sxJywnc3VjY2VzcyddKTtcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUxLnB1c2goWydjaGVjazInLCdlcnJvciddKTtcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUxLnB1c2goWydjaGVjazMnLCdlcnJvciddKTtcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUxLnByaW50KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGVzdFRhYmxlMiA9IGJlYXV0eWxvZy50YWJsZS5uZXcoXCJjdXN0b21cIixbXCJDb2x1bW4xXCIucmVkLFwiQ29sdW1uMlwiLmJsdWUsXCJDb2x1bW4zXCIuY3lhbl0pO1xuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTIucHVzaChbXCJIZXlcIixcInRoaXNcIixcIndvcmtzXCJdKTtcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUyLnByaW50KCk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5maWdsZXRcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBwcmludCBuaWNlIGZvbnRzIHRvIGNvbnNvbGUgaW4geWVsbG93XCIsZnVuY3Rpb24oZG9uZSl7XG4gICAgICAgICAgICBiZWF1dHlsb2cuZmlnbGV0KFwiQXN5bmMhXCIse2ZvbnQ6XCJTdGFyIFdhcnNcIixjb2xvcjpcInllbGxvd1wifSkudGhlbihkb25lKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5maWdsZXRTeW5jXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgbmljZSBmb250cyB0byBjb25zb2xlIGluIHllbGxvd1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBiZWF1dHlsb2cuZmlnbGV0U3luYyhcIlN5bmMhXCIse2ZvbnQ6XCJTdGFyIFdhcnNcIixjb2xvcjpcImJsdWVcIn0pO1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmNvZGVcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBoaWdobGlnaHQgY29kZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMTAwMDApO1xuICAgICAgICAgICAgYmVhdXR5bG9nLmNvZGUoXG4gICAgICAgICAgICAgICAgXCJ2YXIgdGVzdCA9IDM7XFxuZnVuY3Rpb24oKXtcXG4gIHZhciBoZWxsbyA9IFxcXCJzdXBlclxcXCJcXG59O1xcbnZhciB0ZXN0O1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6XCJqYXZhc2NyaXB0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgIH0pXG59KTtcblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
