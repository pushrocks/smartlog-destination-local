/// <reference path="../ts/typings/main.d.ts" />
var smartenv = require("smartenv");
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
});

//# sourceMappingURL=data:application/json;base64,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PVwiLi4vdHMvdHlwaW5ncy9tYWluLmQudHNcIiAvPlxudmFyIHNtYXJ0ZW52ID0gcmVxdWlyZShcInNtYXJ0ZW52XCIpO1xudmFyIGJlYXV0eWxvZyA9IHJlcXVpcmUoJy4uL2Rpc3QvaW5kZXguanMnKTtcblxuZGVzY3JpYmUoXCJiZWF1dHlsb2dcIixmdW5jdGlvbigpe1xuICAgIGRlc2NyaWJlKFwiLmxvZyhtZXNzYWdlLGxvZ3R5cGUpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgbG9nIGN5YW4gdGV4dFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgZGlmZmVyZW50IGxvZyB0eXBlcyBkZXBlbmRlbnQgb24gbG9nVHlwZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJkaXJcIicsJ2RpcicpO1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJlcnJvclwiJywnZXJyb3InKTtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwiaW5mb1wiJywnaW5mbycpO1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJva1wiJywnb2snKTtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwic3VjY2Vzc1wiJywnc3VjY2VzcycpO1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJ3YXJuXCInLCd3YXJuJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmRpcihtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IGEgYmx1ZSBEaXIgbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBiZWF1dHlsb2cuZGlyKCdiZWF1dHlsb2cuZGlyKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgZGVzY3JpYmUoXCIuZXJyb3IobWVzc2FnZSlcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBwcmludCBhIHJlZCBlcnJvciBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5lcnJvcignYmVhdXR5bG9nLmVycm9yKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5pbmZvKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhIHB1cnBsZSBpbmZvIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgYmVhdXR5bG9nLmluZm8oJ2JlYXV0eWxvZy5kaXIoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLm9rKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhIGdyZWVuIG9rIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgYmVhdXR5bG9nLm9rKCdiZWF1dHlsb2cub2soKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLnN1Y2Nlc3MobWVzc2FnZSlcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5IGFuIG9yYW5nZSB3YXJuIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgYmVhdXR5bG9nLnN1Y2Nlc3MoJ2JlYXV0eWxvZy5zdWNjZXNzKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLndhcm5cIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5IGEgb3JhbmdlIHdhcm4gbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBiZWF1dHlsb2cud2FybignYmVhdXR5bG9nLndhcm4oKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLnRhYmxlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgYSBuaWNlIHRhYmxlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGFibGUxID0gYmVhdXR5bG9nLnRhYmxlLm5ldyhcImNoZWNrc1wiKTtcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUxLnB1c2goWydjaGVjazEnLCdzdWNjZXNzJ10pO1xuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMicsJ2Vycm9yJ10pO1xuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMycsJ2Vycm9yJ10pO1xuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHJpbnQoKTtcblxuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGFibGUyID0gYmVhdXR5bG9nLnRhYmxlLm5ldyhcImN1c3RvbVwiLFtcIkNvbHVtbjFcIi5yZWQsXCJDb2x1bW4yXCIuYmx1ZSxcIkNvbHVtbjNcIi5jeWFuXSk7XG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMi5wdXNoKFtcIkhleVwiLFwidGhpc1wiLFwid29ya3NcIl0pO1xuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTIucHJpbnQoKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmZpZ2xldFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IG5pY2UgZm9udHMgdG8gY29uc29sZSBpbiB5ZWxsb3dcIixmdW5jdGlvbihkb25lKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5maWdsZXQoXCJBc3luYyFcIix7Zm9udDpcIlN0YXIgV2Fyc1wiLGNvbG9yOlwieWVsbG93XCJ9KS50aGVuKGRvbmUpO1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmZpZ2xldFN5bmNcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBwcmludCBuaWNlIGZvbnRzIHRvIGNvbnNvbGUgaW4geWVsbG93XCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5maWdsZXRTeW5jKFwiU3luYyFcIix7Zm9udDpcIlN0YXIgV2Fyc1wiLGNvbG9yOlwiYmx1ZVwifSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59KTtcblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
