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
                beautylog.info("another log message that uses the normal log function");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsUUFBUSxFQUFDO1FBQ2QsRUFBRSxDQUFDLDJCQUEyQixFQUFDO1lBQzNCLENBQUM7Z0JBQ0csSUFBSSxVQUFVLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRW5CLElBQUksVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzdGLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHMvdHlwaW5ncy9tYWluLmQudHNcIiAvPlxyXG5pbXBvcnQgYmVhdXR5bG9nID0gcmVxdWlyZSgnLi4vZGlzdC9pbmRleC5qcycpO1xyXG5cclxuZGVzY3JpYmUoXCJiZWF1dHlsb2dcIixmdW5jdGlvbigpe1xyXG4gICAgZGVzY3JpYmUoXCIubG9nKG1lc3NhZ2UsbG9ndHlwZSlcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGl0KFwic2hvdWxkIGxvZyBjeWFuIHRleHRcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IGRpZmZlcmVudCBsb2cgdHlwZXMgZGVwZW5kZW50IG9uIGxvZ1R5cGVcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcImRpclwiJywnZGlyJyk7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwiZXJyb3JcIicsJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwiaW5mb1wiJywnaW5mbycpO1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcIm9rXCInLCdvaycpO1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcInN1Y2Nlc3NcIicsJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJ3YXJuXCInLCd3YXJuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLmRpcihtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgYSBibHVlIERpciBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmRpcignYmVhdXR5bG9nLmRpcigpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGRlc2NyaWJlKFwiLmVycm9yKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBwcmludCBhIHJlZCBlcnJvciBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmVycm9yKCdiZWF1dHlsb2cuZXJyb3IoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLmZpZ2xldFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgbmljZSBmb250cyB0byBjb25zb2xlIGluIHllbGxvd1wiLGZ1bmN0aW9uKGRvbmUpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cuZmlnbGV0KFwiQXN5bmMhXCIse2ZvbnQ6XCJTdGFyIFdhcnNcIixjb2xvcjpcInllbGxvd1wifSkudGhlbihkb25lKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5maWdsZXRTeW5jXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBwcmludCBuaWNlIGZvbnRzIHRvIGNvbnNvbGUgaW4geWVsbG93XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYmVhdXR5bG9nLmZpZ2xldFN5bmMoXCJTeW5jIVwiLHtmb250OlwiU3RhciBXYXJzXCIsY29sb3I6XCJibHVlXCJ9KTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5pbmZvKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5IGEgcHVycGxlIGluZm8gbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGJlYXV0eWxvZy5pbmZvKCdiZWF1dHlsb2cuZGlyKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5vayhtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhIGdyZWVuIG9rIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cub2soJ2JlYXV0eWxvZy5vaygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIub3JhKHRleHQsY29sb3IpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5LCB1cGRhdGUsIGFuZCBlbmQgYSBtZXNzYWdlXCIsZnVuY3Rpb24oZG9uZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dCgxMDAwMCk7XHJcbiAgICAgICAgICAgIGxldCB0ZXN0T3JhID0gbmV3IGJlYXV0eWxvZy5PcmEoXCJUaGlzIGlzIGEgdGVzdCB0ZXh0XCIsXCJncmVlblwiLHRydWUpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0ZXN0T3JhLnRleHQoXCJ1cGRhdGVkIHRleHQhXCIpO1xyXG4gICAgICAgICAgICAgICAgdGVzdE9yYS5sb2coXCJhbiBpbnRlcm1lZGlhdGUgbG9nIG1lc3NhZ2VcIixcImluZm9cIik7XHJcbiAgICAgICAgICAgICAgICBiZWF1dHlsb2cuaW5mbyhcImFub3RoZXIgbG9nIG1lc3NhZ2UgdGhhdCB1c2VzIHRoZSBub3JtYWwgbG9nIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RPcmEuZW5kT2soXCJBbGxyaWdodCwgb3JhIHdvcmtzIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LDIwMDApO1xyXG4gICAgICAgICAgICB9LDIwMDApXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIHdoZW4gZW5kZWQgd2l0aCBlcnJvclwiLGZ1bmN0aW9uKGRvbmUpe1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMTAwMDApO1xyXG4gICAgICAgICAgICBsZXQgdGVzdE9yYSA9IG5ldyBiZWF1dHlsb2cuT3JhKFwiVGhpcyBpcyBhbm90aGVyIHRlc3QgdGV4dFwiLFwiZ3JlZW5cIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRlc3RPcmEuZW5kRXJyb3IoXCJBbGxyaWdodCwgb3JhIGRpc3BsYXlzIGFuIGVycm9yIVwiKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSwyMDAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5zdWNjZXNzKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5IGFuIG9yYW5nZSB3YXJuIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cuc3VjY2VzcygnYmVhdXR5bG9nLnN1Y2Nlc3MoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpYmUoXCIud2FyblwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhIG9yYW5nZSB3YXJuIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiZWF1dHlsb2cud2FybignYmVhdXR5bG9nLndhcm4oKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLlRhYmxlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBpdChcInNob3VsZCBwcmludCBhIG5pY2UgdGFibGVcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGFibGUxID0gbmV3IGJlYXV0eWxvZy5UYWJsZShcImNoZWNrc1wiKTtcclxuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMScsJ3N1Y2Nlc3MnXSk7XHJcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUxLnB1c2goWydjaGVjazInLCdlcnJvciddKTtcclxuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMycsJ2Vycm9yJ10pO1xyXG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMS5wcmludCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGFibGUyID0gbmV3IGJlYXV0eWxvZy5UYWJsZShcImN1c3RvbVwiLFtcIkNvbHVtbjFcIi5yZWQsXCJDb2x1bW4yXCIuYmx1ZSxcIkNvbHVtbjNcIi5jeWFuXSk7XHJcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUyLnB1c2goW1wiSGV5XCIsXCJ0aGlzXCIsXCJ3b3Jrc1wiXSk7XHJcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUyLnByaW50KCk7XHJcbiAgICAgICAgICAgIH0pKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuIl19
