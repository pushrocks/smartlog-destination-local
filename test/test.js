#!/usr/bin/env node

/// <reference path="./typings/main.d.ts" />
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBQzVDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFdkMsUUFBUSxDQUFDLFdBQVcsRUFBQztJQUNqQixRQUFRLENBQUMsdUJBQXVCLEVBQUM7UUFDN0IsRUFBRSxDQUFDLHNCQUFzQixFQUFDO1lBQ3RCLFNBQVMsQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx1REFBdUQsRUFBQztZQUN2RCxTQUFTLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7WUFDdkUsU0FBUyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUNoRixTQUFTLENBQUMsR0FBRyxDQUFDLDREQUE0RCxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BGLFNBQVMsQ0FBQyxHQUFHLENBQUMsMkRBQTJELEVBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEYsU0FBUyxDQUFDLEdBQUcsQ0FBQyx5REFBeUQsRUFBQyxJQUFJLENBQUMsQ0FBQztZQUM5RSxTQUFTLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxFQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hGLFNBQVMsQ0FBQyxHQUFHLENBQUMsMkRBQTJELEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsRUFBRSxDQUFDLGlDQUFpQyxFQUFDO1lBQ2pDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLGlCQUFpQixFQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBQztZQUNsQyxTQUFTLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7UUFDL0UsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxnQkFBZ0IsRUFBQztRQUN0QixFQUFFLENBQUMsc0NBQXNDLEVBQUM7WUFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsY0FBYyxFQUFDO1FBQ3BCLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBQztZQUNuQyxTQUFTLENBQUMsRUFBRSxDQUFDLHNEQUFzRCxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxtQkFBbUIsRUFBQztRQUN6QixFQUFFLENBQUMsdUNBQXVDLEVBQUM7WUFDdkMsU0FBUyxDQUFDLE9BQU8sQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsT0FBTyxFQUFDO1FBQ2IsRUFBRSxDQUFDLHNDQUFzQyxFQUFDO1lBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsd0RBQXdELENBQUMsQ0FBQztRQUM3RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLFFBQVEsRUFBQztRQUNkLEVBQUUsQ0FBQywyQkFBMkIsRUFBQztZQUMzQixDQUFDO2dCQUNHLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRW5CLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0YsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLFNBQVMsRUFBQztRQUNmLEVBQUUsQ0FBQyw4Q0FBOEMsRUFBQyxVQUFTLElBQUk7WUFDM0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUMsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLGFBQWEsRUFBQztRQUNuQixFQUFFLENBQUMsOENBQThDLEVBQUM7WUFDOUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUMsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsT0FBTyxFQUFDO1FBQ2IsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsU0FBUyxDQUFDLElBQUksQ0FDVixvRUFBb0UsRUFDcEU7Z0JBQ0ksUUFBUSxFQUFDLFlBQVk7YUFDeEIsQ0FDSixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG52YXIgc21hcnRlbnYgPSByZXF1aXJlKFwic21hcnRlbnZcIik7XG52YXIgYmVhdXR5bG9nID0gcmVxdWlyZSgnLi4vaW5kZXguanMnKTtcblxuZGVzY3JpYmUoXCJiZWF1dHlsb2dcIixmdW5jdGlvbigpe1xuICAgIGRlc2NyaWJlKFwiLmxvZyhtZXNzYWdlLGxvZ3R5cGUpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgbG9nIGN5YW4gdGV4dFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgZGlmZmVyZW50IGxvZyB0eXBlcyBkZXBlbmRlbnQgb24gbG9nVHlwZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBiZWF1dHlsb2cubG9nKCdiZWF1dHlsb2cubG9nKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJkaXJcIicsJ2RpcicpO1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJlcnJvclwiJywnZXJyb3InKTtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwiaW5mb1wiJywnaW5mbycpO1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJva1wiJywnb2snKTtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5sb2coJ2JlYXV0eWxvZy5sb2coKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aCBsb2dUeXBlIFwic3VjY2Vzc1wiJywnc3VjY2VzcycpO1xuICAgICAgICAgICAgYmVhdXR5bG9nLmxvZygnYmVhdXR5bG9nLmxvZygpLCB3aXRoIG5vcm1hbCBsb2dUZXh0LCB3aXRoIGxvZ1R5cGUgXCJ3YXJuXCInLCd3YXJuJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmRpcihtZXNzYWdlKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IGEgYmx1ZSBEaXIgbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBiZWF1dHlsb2cuZGlyKCdiZWF1dHlsb2cuZGlyKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgZGVzY3JpYmUoXCIuZXJyb3IobWVzc2FnZSlcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBwcmludCBhIHJlZCBlcnJvciBtZXNzYWdlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5lcnJvcignYmVhdXR5bG9nLmVycm9yKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5pbmZvKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhIHB1cnBsZSBpbmZvIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgYmVhdXR5bG9nLmluZm8oJ2JlYXV0eWxvZy5kaXIoKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLm9rKG1lc3NhZ2UpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgZGlzcGxheSBhIGdyZWVuIG9rIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgYmVhdXR5bG9nLm9rKCdiZWF1dHlsb2cub2soKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLnN1Y2Nlc3MobWVzc2FnZSlcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5IGFuIG9yYW5nZSB3YXJuIG1lc3NhZ2VcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgYmVhdXR5bG9nLnN1Y2Nlc3MoJ2JlYXV0eWxvZy5zdWNjZXNzKCksIHdpdGggbm9ybWFsIGxvZ1RleHQsIHdpdGhvdXQgbG9nVHlwZScpO1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLndhcm5cIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBkaXNwbGF5IGEgb3JhbmdlIHdhcm4gbWVzc2FnZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBiZWF1dHlsb2cud2FybignYmVhdXR5bG9nLndhcm4oKSwgd2l0aCBub3JtYWwgbG9nVGV4dCwgd2l0aG91dCBsb2dUeXBlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLnRhYmxlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgcHJpbnQgYSBuaWNlIHRhYmxlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGFibGUxID0gYmVhdXR5bG9nLnRhYmxlLm5ldyhcImNoZWNrc1wiKTtcbiAgICAgICAgICAgICAgICB0ZXN0VGFibGUxLnB1c2goWydjaGVjazEnLCdzdWNjZXNzJ10pO1xuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMicsJ2Vycm9yJ10pO1xuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHVzaChbJ2NoZWNrMycsJ2Vycm9yJ10pO1xuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTEucHJpbnQoKTtcblxuICAgICAgICAgICAgICAgIHZhciB0ZXN0VGFibGUyID0gYmVhdXR5bG9nLnRhYmxlLm5ldyhcImN1c3RvbVwiLFtcIkNvbHVtbjFcIi5yZWQsXCJDb2x1bW4yXCIuYmx1ZSxcIkNvbHVtbjNcIi5jeWFuXSk7XG4gICAgICAgICAgICAgICAgdGVzdFRhYmxlMi5wdXNoKFtcIkhleVwiLFwidGhpc1wiLFwid29ya3NcIl0pO1xuICAgICAgICAgICAgICAgIHRlc3RUYWJsZTIucHJpbnQoKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmZpZ2xldFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIHByaW50IG5pY2UgZm9udHMgdG8gY29uc29sZSBpbiB5ZWxsb3dcIixmdW5jdGlvbihkb25lKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5maWdsZXQoXCJBc3luYyFcIix7Zm9udDpcIlN0YXIgV2Fyc1wiLGNvbG9yOlwieWVsbG93XCJ9KS50aGVuKGRvbmUpO1xuICAgICAgICB9KVxuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmZpZ2xldFN5bmNcIixmdW5jdGlvbigpe1xuICAgICAgICBpdChcInNob3VsZCBwcmludCBuaWNlIGZvbnRzIHRvIGNvbnNvbGUgaW4geWVsbG93XCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5maWdsZXRTeW5jKFwiU3luYyFcIix7Zm9udDpcIlN0YXIgV2Fyc1wiLGNvbG9yOlwiYmx1ZVwifSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCIuY29kZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIGhpZ2hsaWdodCBjb2RlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMudGltZW91dCgxMDAwMCk7XG4gICAgICAgICAgICBiZWF1dHlsb2cuY29kZShcbiAgICAgICAgICAgICAgICBcInZhciB0ZXN0ID0gMztcXG5mdW5jdGlvbigpe1xcbiAgdmFyIGhlbGxvID0gXFxcInN1cGVyXFxcIlxcbn07XFxudmFyIHRlc3Q7XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTpcImphdmFzY3JpcHRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgfSlcbn0pO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
