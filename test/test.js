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
            var testOra = beautylog.ora("This is a test text", "green", true);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUFBRSxDQUFDLDJCQUEyQixFQUFDO1lBQzNCLENBQUM7Z0JBQ0csSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0MsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUVuQixJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDekYsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90cy90eXBpbmdzL21haW4uZC50c1wiIC8+XHJcbmltcG9ydCBiZWF1dHlsb2cgPSByZXF1aXJlKCcuLi9kaXN0L2luZGV4LmpzJyk7XHJcblxyXG5kZXNjcmliZShcImJlYXV0eWxvZ1wiLGZ1bmN0aW9uKCl7XHJcbiAgICBkZXNjcmliZShcIi5sb2cobWVzc2FnZSxsb2d0eXBlKVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgbG9nIGN5YW4gdGV4dFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgZGlmZmVyZW50IGxvZyB0eXBlcyBkZXBlbmRlbnQgb24gbG9nVHlwZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwiZGlyXCInLCdkaXInKTtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJlcnJvclwiJywnZXJyb3InKTtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJpbmZvXCInLCdpbmZvJyk7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwib2tcIicsJ29rJyk7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwic3VjY2Vzc1wiJywnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcIndhcm5cIicsJ3dhcm4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIuZGlyKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBwcmludCBhIGJsdWUgRGlyIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cuZGlyKCdiZWF1dHlsb2cuZGlyKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZGVzY3JpYmUoXCIuZXJyb3IobWVzc2FnZSlcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IGEgcmVkIGVycm9yIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cuZXJyb3IoJ2JlYXV0eWxvZy5lcnJvcigpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIuZmlnbGV0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBwcmludCBuaWNlIGZvbnRzIHRvIGNvbnNvbGUgaW4geWVsbG93XCIsZnVuY3Rpb24oZG9uZSl7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5maWdsZXQoXCJBc3luYyFcIix7Zm9udDpcIlN0YXIgV2Fyc1wiLGNvbG9yOlwieWVsbG93XCJ9KS50aGVuKGRvbmUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLmZpZ2xldFN5bmNcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IG5pY2UgZm9udHMgdG8gY29uc29sZSBpbiB5ZWxsb3dcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cuZmlnbGV0U3luYyhcIlN5bmMhXCIse2ZvbnQ6XCJTdGFyIFdhcnNcIixjb2xvcjpcImJsdWVcIn0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLmluZm8obWVzc2FnZSlcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYSBwdXJwbGUgaW5mbyBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmluZm8oJ2JlYXV0eWxvZy5kaXIoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLm9rKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5IGEgZ3JlZW4gb2sgbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5vaygnYmVhdXR5bG9nLm9rKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5vcmEodGV4dCxjb2xvcilcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXksIHVwZGF0ZSwgYW5kIGVuZCBhIG1lc3NhZ2VcIixmdW5jdGlvbihkb25lKXtcclxuICAgICAgICAgICAgdGhpcy50aW1lb3V0KDEwMDAwKTtcclxuICAgICAgICAgICAgbGV0IHRlc3RPcmEgPSBiZWF1dHlsb2cub3JhKFwiVGhpcyBpcyBhIHRlc3QgdGV4dFwiLFwiZ3JlZW5cIix0cnVlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGVzdE9yYS50ZXh0KFwidXBkYXRlZCB0ZXh0IVwiKTtcclxuICAgICAgICAgICAgICAgIHRlc3RPcmEubG9nKFwiYW4gaW50ZXJtZWRpYXRlIGxvZyBtZXNzYWdlXCIsXCJpbmZvXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVzdE9yYS5lbmRPayhcIkFsbHJpZ2h0LCBvcmEgd29ya3MhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0sMjAwMCk7XHJcbiAgICAgICAgICAgIH0sMjAwMClcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2Ugd2hlbiBlbmRlZCB3aXRoIGVycm9yXCIsZnVuY3Rpb24oZG9uZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dCgxMDAwMCk7XHJcbiAgICAgICAgICAgIGxldCB0ZXN0T3JhID0gYmVhdXR5bG9nLm9yYShcIlRoaXMgaXMgYW5vdGhlciB0ZXN0IHRleHRcIixcImdyZWVuXCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0ZXN0T3JhLmVuZEVycm9yKFwiQWxscmlnaHQsIG9yYSBkaXNwbGF5cyBhbiBlcnJvciFcIik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0sMjAwMClcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIuc3VjY2VzcyhtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhbiBvcmFuZ2Ugd2FybiBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLnN1Y2Nlc3MoJ2JlYXV0eWxvZy5zdWNjZXNzKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLndhcm5cIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYSBvcmFuZ2Ugd2FybiBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLndhcm4oJ2JlYXV0eWxvZy53YXJuKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi50YWJsZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgYSBuaWNlIHRhYmxlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFRhYmxlMSA9IGJlYXV0eWxvZy50YWJsZShcImNoZWNrc1wiKTtcclxuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMScsJ3N1Y2Nlc3MnXSk7XHJcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUxLnB1c2goWydjaGVjazInLCdlcnJvciddKTtcclxuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMycsJ2Vycm9yJ10pO1xyXG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMS5wcmludCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGFibGUyID0gYmVhdXR5bG9nLnRhYmxlKFwiY3VzdG9tXCIsW1wiQ29sdW1uMVwiLnJlZCxcIkNvbHVtbjJcIi5ibHVlLFwiQ29sdW1uM1wiLmN5YW5dKTtcclxuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTIucHVzaChbXCJIZXlcIixcInRoaXNcIixcIndvcmtzXCJdKTtcclxuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTIucHJpbnQoKTtcclxuICAgICAgICAgICAgfSkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iXX0=
