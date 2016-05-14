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
            var testOra = new beautylog.Ora("This is a test text", "green", true);
            setTimeout(function () {
                testOra.text("updated text!");
                testOra.log("an intermediate log message", "info");
                setTimeout(function () {
                    testOra.endOk("Allright, ora works!");
                    done();
                }, 2000);
            }, 2000);
        });
        it("should display an error message when ended with error", function (done) {
            this.timeout(10000);
            var testOra = new beautylog.Ora("This is another test text", "green");
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
    describe(".Table", function () {
        it("should print a nice table", function () {
            (function () {
                var testTable1 = new beautylog.Table("checks");
                testTable1.push(['check1', 'success']);
                testTable1.push(['check2', 'error']);
                testTable1.push(['check3', 'error']);
                testTable1.print();
                var testTable2 = new beautylog.Table("custom", ["Column1".red, "Column2".blue, "Column3".cyan]);
                testTable2.push(["Hey", "this", "works"]);
                testTable2.print();
            })();
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUFBQztRQUNkLEVBQUUsQ0FBQywyQkFBMkIsRUFBQztZQUMzQixDQUFDO2dCQUNHLElBQUksVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUVuQixJQUFJLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBQyxTQUFTLENBQUMsSUFBSSxFQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3RzL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cclxuaW1wb3J0IGJlYXV0eWxvZyA9IHJlcXVpcmUoJy4uL2Rpc3QvaW5kZXguanMnKTtcclxuXHJcbmRlc2NyaWJlKFwiYmVhdXR5bG9nXCIsZnVuY3Rpb24oKXtcclxuICAgIGRlc2NyaWJlKFwiLmxvZyhtZXNzYWdlLGxvZ3R5cGUpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBsb2cgY3lhbiB0ZXh0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdChcInNob3VsZCBwcmludCBkaWZmZXJlbnQgbG9nIHR5cGVzIGRlcGVuZGVudCBvbiBsb2dUeXBlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJkaXJcIicsJ2RpcicpO1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcImVycm9yXCInLCdlcnJvcicpO1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcImluZm9cIicsJ2luZm8nKTtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJva1wiJywnb2snKTtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJzdWNjZXNzXCInLCdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwid2FyblwiJywnd2FybicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5kaXIobWVzc2FnZSlcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IGEgYmx1ZSBEaXIgbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5kaXIoJ2JlYXV0eWxvZy5kaXIoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBkZXNjcmliZShcIi5lcnJvcihtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgYSByZWQgZXJyb3IgbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5lcnJvcignYmVhdXR5bG9nLmVycm9yKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5maWdsZXRcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IG5pY2UgZm9udHMgdG8gY29uc29sZSBpbiB5ZWxsb3dcIixmdW5jdGlvbihkb25lKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmZpZ2xldChcIkFzeW5jIVwiLHtmb250OlwiU3RhciBXYXJzXCIsY29sb3I6XCJ5ZWxsb3dcIn0pLnRoZW4oZG9uZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIuZmlnbGV0U3luY1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgbmljZSBmb250cyB0byBjb25zb2xlIGluIHllbGxvd1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5maWdsZXRTeW5jKFwiU3luYyFcIix7Zm9udDpcIlN0YXIgV2Fyc1wiLGNvbG9yOlwiYmx1ZVwifSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIuaW5mbyhtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhIHB1cnBsZSBpbmZvIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cuaW5mbygnYmVhdXR5bG9nLmRpcigpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIub2sobWVzc2FnZSlcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYSBncmVlbiBvayBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLm9rKCdiZWF1dHlsb2cub2soKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLm9yYSh0ZXh0LGNvbG9yKVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSwgdXBkYXRlLCBhbmQgZW5kIGEgbWVzc2FnZVwiLGZ1bmN0aW9uKGRvbmUpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMTAwMDApO1xyXG4gICAgICAgICAgICBsZXQgdGVzdE9yYSA9IG5ldyBiZWF1dHlsb2cuT3JhKFwiVGhpcyBpcyBhIHRlc3QgdGV4dFwiLFwiZ3JlZW5cIix0cnVlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGVzdE9yYS50ZXh0KFwidXBkYXRlZCB0ZXh0IVwiKTtcclxuICAgICAgICAgICAgICAgIHRlc3RPcmEubG9nKFwiYW4gaW50ZXJtZWRpYXRlIGxvZyBtZXNzYWdlXCIsXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RPcmEuZW5kT2soXCJBbGxyaWdodCwgb3JhIHdvcmtzIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LDIwMDApO1xyXG4gICAgICAgICAgICB9LDIwMDApXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIHdoZW4gZW5kZWQgd2l0aCBlcnJvclwiLGZ1bmN0aW9uKGRvbmUpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMTAwMDApO1xyXG4gICAgICAgICAgICBsZXQgdGVzdE9yYSA9IG5ldyBiZWF1dHlsb2cuT3JhKFwiVGhpcyBpcyBhbm90aGVyIHRlc3QgdGV4dFwiLFwiZ3JlZW5cIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRlc3RPcmEuZW5kRXJyb3IoXCJBbGxyaWdodCwgb3JhIGRpc3BsYXlzIGFuIGVycm9yIVwiKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSwyMDAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5zdWNjZXNzKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5IGFuIG9yYW5nZSB3YXJuIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cuc3VjY2VzcygnYmVhdXR5bG9nLnN1Y2Nlc3MoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIud2FyblwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhIG9yYW5nZSB3YXJuIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cud2FybignYmVhdXR5bG9nLndhcm4oKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLlRhYmxlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBwcmludCBhIG5pY2UgdGFibGVcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGFibGUxID0gbmV3IGJlYXV0eWxvZy5UYWJsZShcImNoZWNrc1wiKTtcclxuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMScsJ3N1Y2Nlc3MnXSk7XHJcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUxLnB1c2goWydjaGVjazInLCdlcnJvciddKTtcclxuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMycsJ2Vycm9yJ10pO1xyXG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMS5wcmludCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGFibGUyID0gbmV3IGJlYXV0eWxvZy5UYWJsZShcImN1c3RvbVwiLFtcIkNvbHVtbjFcIi5yZWQsXCJDb2x1bW4yXCIuYmx1ZSxcIkNvbHVtbjNcIi5jeWFuXSk7XHJcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUyLnB1c2goW1wiSGV5XCIsXCJ0aGlzXCIsXCJ3b3Jrc1wiXSk7XHJcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUyLnByaW50KCk7XHJcbiAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuIl19
