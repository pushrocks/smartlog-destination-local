/// <reference path="../ts/typings/main.d.ts" />
import beautylog = require('../dist/index.js');

describe("beautylog",function(){
    describe(".log(message,logtype)",function(){
        it("should log cyan text",function(){
            beautylog.log('beautylog.log(), with normal logText, without logType');
        });
        it("should print different log types dependent on logType",function(){
            beautylog.log('beautylog.log(), with normal logText, without logType');
            beautylog.log('beautylog.log(), with normal logText, with logType "dir"','dir');
            beautylog.log('beautylog.log(), with normal logText, with logType "error"','error');
            beautylog.log('beautylog.log(), with normal logText, with logType "info"','info');
            beautylog.log('beautylog.log(), with normal logText, with logType "ok"','ok');
            beautylog.log('beautylog.log(), with normal logText, with logType "success"','success');
            beautylog.log('beautylog.log(), with normal logText, with logType "warn"','warn');
        });
    });
    describe(".dir(message)",function(){
        it("should print a blue Dir message",function(){
            beautylog.dir('beautylog.dir(), with normal logText, without logType');
        })
    })
    describe(".error(message)",function(){
        it("should print a red error message",function(){
            beautylog.error('beautylog.error(), with normal logText, without logType');
        });
    });
    describe(".figlet",function(){
        it("should print nice fonts to console in yellow",function(done){
            beautylog.figlet("Async!",{font:"Star Wars",color:"yellow"}).then(done);
        })
    });
    describe(".figletSync",function(){
        it("should print nice fonts to console in yellow",function(){
            beautylog.figletSync("Sync!",{font:"Star Wars",color:"blue"});
        })
    });
    describe(".info(message)",function(){
        it("should display a purple info message",function(){
            beautylog.info('beautylog.dir(), with normal logText, without logType');
        });
    });
    describe(".ok(message)",function(){
        it("should display a green ok message",function(){
            beautylog.ok('beautylog.ok(), with normal logText, without logType');
        });
    });
    describe(".ora(text,color)",function(){
        it("should display, update, and end a message",function(done){
            this.timeout(10000);
            let testOra = beautylog.ora("This is a test text","green");
            setTimeout(function(){
                testOra.text("updated text!");
                setTimeout(function(){
                    testOra.endOk("Allright, ora works!");
                    done();
                },2000);
            },2000)
        });
        it("should display an error message when ended with error",function(done){
            this.timeout(10000);
            let testOra = beautylog.ora("This is another test text","green");
            setTimeout(function(){
                testOra.endError("Allright, ora displays an error!");
                done();
            },2000)
        });
    });
    describe(".success(message)",function(){
        it("should display an orange warn message",function(){
            beautylog.success('beautylog.success(), with normal logText, without logType');
        })
    });
    describe(".warn",function(){
        it("should display a orange warn message",function(){
            beautylog.warn('beautylog.warn(), with normal logText, without logType');
        });
    });
    describe(".table",function(){
        it("should print a nice table",function(){
            (function(){
                var testTable1 = beautylog.table("checks");
                testTable1.push(['check1','success']);
                testTable1.push(['check2','error']);
                testTable1.push(['check3','error']);
                testTable1.print();

                var testTable2 = beautylog.table("custom",["Column1".red,"Column2".blue,"Column3".cyan]);
                testTable2.push(["Hey","this","works"]);
                testTable2.print();
            })();
        });
    });
});


