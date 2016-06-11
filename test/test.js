"use strict";
require("typings-test");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLFFBQVEsRUFBQztRQUNkLEVBQUUsQ0FBQywyQkFBMkIsRUFBQztZQUMzQixDQUFDO2dCQUNHLElBQUksVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUVuQixJQUFJLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBQyxTQUFTLENBQUMsSUFBSSxFQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy10ZXN0XCI7XG5pbXBvcnQgYmVhdXR5bG9nID0gcmVxdWlyZSgnLi4vZGlzdC9pbmRleC5qcycpO1xuXG5kZXNjcmliZShcImJlYXV0eWxvZ1wiLGZ1bmN0aW9uKCl7XG4gICAgZGVzY3JpYmUoXCIubG9nKG1lc3NhZ2UsbG9ndHlwZSlcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBsb2cgY3lhbiB0ZXh0XCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpdChcInNob3VsZCBwcmludCBkaWZmZXJlbnQgbG9nIHR5cGVzIGRlcGVuZGVudCBvbiBsb2dUeXBlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcImRpclwiJywnZGlyJyk7XG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcImVycm9yXCInLCdlcnJvcicpO1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJpbmZvXCInLCdpbmZvJyk7XG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcIm9rXCInLCdvaycpO1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJzdWNjZXNzXCInLCdzdWNjZXNzJyk7XG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGggbG9nVHlwZSBcIndhcm5cIicsJ3dhcm4nKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCIuZGlyKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgYSBibHVlIERpciBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5kaXIoJ2JlYXV0eWxvZy5kaXIoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBkZXNjcmliZShcIi5lcnJvcihtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IGEgcmVkIGVycm9yIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgYmVhdXR5bG9nLmVycm9yKCdiZWF1dHlsb2cuZXJyb3IoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmZpZ2xldFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IG5pY2UgZm9udHMgdG8gY29uc29sZSBpbiB5ZWxsb3dcIixmdW5jdGlvbihkb25lKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5maWdsZXQoXCJBc3luYyFcIix7Zm9udDpcIlN0YXIgV2Fyc1wiLGNvbG9yOlwieWVsbG93XCJ9KS50aGVuKGRvbmUpO1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmZpZ2xldFN5bmNcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBwcmludCBuaWNlIGZvbnRzIHRvIGNvbnNvbGUgaW4geWVsbG93XCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5maWdsZXRTeW5jKFwiU3luYyFcIix7Zm9udDpcIlN0YXIgV2Fyc1wiLGNvbG9yOlwiYmx1ZVwifSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCIuaW5mbyhtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYSBwdXJwbGUgaW5mbyBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5pbmZvKCdiZWF1dHlsb2cuZGlyKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5vayhtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYSBncmVlbiBvayBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5vaygnYmVhdXR5bG9nLm9rKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5vcmEodGV4dCxjb2xvcilcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5LCB1cGRhdGUsIGFuZCBlbmQgYSBtZXNzYWdlXCIsZnVuY3Rpb24oZG9uZSl7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMTAwMDApO1xuICAgICAgICAgICAgbGV0IHRlc3RPcmEgPSBuZXcgYmVhdXR5bG9nLk9yYShcIlRoaXMgaXMgYSB0ZXN0IHRleHRcIixcImdyZWVuXCIsdHJ1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGVzdE9yYS50ZXh0KFwidXBkYXRlZCB0ZXh0IVwiKTtcbiAgICAgICAgICAgICAgICB0ZXN0T3JhLmxvZyhcImFuIGludGVybWVkaWF0ZSBsb2cgbWVzc2FnZVwiLFwiaW5mb1wiKTtcbiAgICAgICAgICAgICAgICBiZWF1dHlsb2cuaW5mbyhcImFub3RoZXIgbG9nIG1lc3NhZ2UgdGhhdCB1c2VzIHRoZSBub3JtYWwgbG9nIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgdGVzdE9yYS5lbmRPayhcIkFsbHJpZ2h0LCBvcmEgd29ya3MhXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICAgICAgfSwyMDAwKTtcbiAgICAgICAgICAgIH0sMjAwMClcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSB3aGVuIGVuZGVkIHdpdGggZXJyb3JcIixmdW5jdGlvbihkb25lKXtcbiAgICAgICAgICAgIHRoaXMudGltZW91dCgxMDAwMCk7XG4gICAgICAgICAgICBsZXQgdGVzdE9yYSA9IG5ldyBiZWF1dHlsb2cuT3JhKFwiVGhpcyBpcyBhbm90aGVyIHRlc3QgdGV4dFwiLFwiZ3JlZW5cIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGVzdE9yYS5lbmRFcnJvcihcIkFsbHJpZ2h0LCBvcmEgZGlzcGxheXMgYW4gZXJyb3IhXCIpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0sMjAwMClcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCIuc3VjY2VzcyhtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYW4gb3JhbmdlIHdhcm4gbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBiZWF1dHlsb2cuc3VjY2VzcygnYmVhdXR5bG9nLnN1Y2Nlc3MoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCIud2FyblwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIGRpc3BsYXkgYSBvcmFuZ2Ugd2FybiBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy53YXJuKCdiZWF1dHlsb2cud2FybigpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRob3V0IGxvZ1R5cGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCIuVGFibGVcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBwcmludCBhIG5pY2UgdGFibGVcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3RUYWJsZTEgPSBuZXcgYmVhdXR5bG9nLlRhYmxlKFwiY2hlY2tzXCIpO1xuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMScsJ3N1Y2Nlc3MnXSk7XG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMS5wdXNoKFsnY2hlY2syJywnZXJyb3InXSk7XG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMS5wdXNoKFsnY2hlY2szJywnZXJyb3InXSk7XG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMS5wcmludCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRlc3RUYWJsZTIgPSBuZXcgYmVhdXR5bG9nLlRhYmxlKFwiY3VzdG9tXCIsW1wiQ29sdW1uMVwiLnJlZCxcIkNvbHVtbjJcIi5ibHVlLFwiQ29sdW1uM1wiLmN5YW5dKTtcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUyLnB1c2goW1wiSGV5XCIsXCJ0aGlzXCIsXCJ3b3Jrc1wiXSk7XG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMi5wcmludCgpO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG4iXX0=
