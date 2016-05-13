"use strict";
/// <reference path="../ts/typings/main.d.ts" />
var beautylog = require('../dist/index.js');
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
    describe(".ora(text,color)", function () {
        it("should display, update, and end a message", function (done) {
            this.timeout(10000);
            var testOra = beautylog.ora("This is a test text", "green");
            setTimeout(function () {
                testOra.text("updated text!");
                setTimeout(function () {
                    testOra.endOk("Allright, ora works!");
                    done();
                }, 2000);
            }, 2000);
        });
        it("should display an error message when ended with error", function (done) {
            this.timeout(10000);
            var testOra = beautylog.ora("This is another test text", "green");
            setTimeout(function () {
                testOra.endError("Allright, ora displays an error!");
                done();
            }, 2000);
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
                var testTable1 = beautylog.table("checks");
                testTable1.push(['check1', 'success']);
                testTable1.push(['check2', 'error']);
                testTable1.push(['check3', 'error']);
                testTable1.print();
                var testTable2 = beautylog.table("custom", ["Column1".red, "Column2".blue, "Column3".cyan]);
                testTable2.push(["Hey", "this", "works"]);
                testTable2.print();
            })();
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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S0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRW5CLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBQyxTQUFTLENBQUMsSUFBSSxFQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN6RixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3RzL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cclxuaW1wb3J0IGJlYXV0eWxvZyA9IHJlcXVpcmUoJy4uL2Rpc3QvaW5kZXguanMnKTtcclxuXHJcbmRlc2NyaWJlKFwiYmVhdXR5bG9nXCIsZnVuY3Rpb24oKXtcclxuICAgIGRlc2NyaWJlKFwiLmxvZyhtZXNzYWdlLGxvZ3R5cGUpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBsb2cgY3lhbiB0ZXh0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdChcInNob3VsZCBwcmludCBkaWZmZXJlbnQgbG9nIHR5cGVzIGRlcGVuZGVudCBvbiBsb2dUeXBlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJkaXJcIicsJ2RpcicpO1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcImVycm9yXCInLCdlcnJvcicpO1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcImluZm9cIicsJ2luZm8nKTtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJva1wiJywnb2snKTtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJzdWNjZXNzXCInLCdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwid2FyblwiJywnd2FybicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5kaXIobWVzc2FnZSlcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IGEgYmx1ZSBEaXIgbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5kaXIoJ2JlYXV0eWxvZy5kaXIoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBkZXNjcmliZShcIi5lcnJvcihtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgYSByZWQgZXJyb3IgbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5lcnJvcignYmVhdXR5bG9nLmVycm9yKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5maWdsZXRcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IG5pY2UgZm9udHMgdG8gY29uc29sZSBpbiB5ZWxsb3dcIixmdW5jdGlvbihkb25lKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmZpZ2xldChcIkFzeW5jIVwiLHtmb250OlwiU3RhciBXYXJzXCIsY29sb3I6XCJ5ZWxsb3dcIn0pLnRoZW4oZG9uZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIuZmlnbGV0U3luY1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgbmljZSBmb250cyB0byBjb25zb2xlIGluIHllbGxvd1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5maWdsZXRTeW5jKFwiU3luYyFcIix7Zm9udDpcIlN0YXIgV2Fyc1wiLGNvbG9yOlwiYmx1ZVwifSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIuaW5mbyhtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhIHB1cnBsZSBpbmZvIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cuaW5mbygnYmVhdXR5bG9nLmRpcigpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIub2sobWVzc2FnZSlcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYSBncmVlbiBvayBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLm9rKCdiZWF1dHlsb2cub2soKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLm9yYSh0ZXh0LGNvbG9yKVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSwgdXBkYXRlLCBhbmQgZW5kIGEgbWVzc2FnZVwiLGZ1bmN0aW9uKGRvbmUpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMTAwMDApO1xyXG4gICAgICAgICAgICBsZXQgdGVzdE9yYSA9IGJlYXV0eWxvZy5vcmEoXCJUaGlzIGlzIGEgdGVzdCB0ZXh0XCIsXCJncmVlblwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGVzdE9yYS50ZXh0KFwidXBkYXRlZCB0ZXh0IVwiKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0T3JhLmVuZE9rKFwiQWxscmlnaHQsIG9yYSB3b3JrcyFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwyMDAwKTtcclxuICAgICAgICAgICAgfSwyMDAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSB3aGVuIGVuZGVkIHdpdGggZXJyb3JcIixmdW5jdGlvbihkb25lKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lb3V0KDEwMDAwKTtcclxuICAgICAgICAgICAgbGV0IHRlc3RPcmEgPSBiZWF1dHlsb2cub3JhKFwiVGhpcyBpcyBhbm90aGVyIHRlc3QgdGV4dFwiLFwiZ3JlZW5cIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRlc3RPcmEuZW5kRXJyb3IoXCJBbGxyaWdodCwgb3JhIGRpc3BsYXlzIGFuIGVycm9yIVwiKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSwyMDAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5zdWNjZXNzKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5IGFuIG9yYW5nZSB3YXJuIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cuc3VjY2VzcygnYmVhdXR5bG9nLnN1Y2Nlc3MoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIud2FyblwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhIG9yYW5nZSB3YXJuIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cud2FybignYmVhdXR5bG9nLndhcm4oKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLnRhYmxlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBwcmludCBhIG5pY2UgdGFibGVcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGFibGUxID0gYmVhdXR5bG9nLnRhYmxlKFwiY2hlY2tzXCIpO1xyXG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMS5wdXNoKFsnY2hlY2sxJywnc3VjY2VzcyddKTtcclxuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMicsJ2Vycm9yJ10pO1xyXG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMS5wdXNoKFsnY2hlY2szJywnZXJyb3InXSk7XHJcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUxLnByaW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3RUYWJsZTIgPSBiZWF1dHlsb2cudGFibGUoXCJjdXN0b21cIixbXCJDb2x1bW4xXCIucmVkLFwiQ29sdW1uMlwiLmJsdWUsXCJDb2x1bW4zXCIuY3lhbl0pO1xyXG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMi5wdXNoKFtcIkhleVwiLFwidGhpc1wiLFwid29ya3NcIl0pO1xyXG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMi5wcmludCgpO1xyXG4gICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==
