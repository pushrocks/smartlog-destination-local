"use strict";
require("typings-test");
const beautylog = require("../dist/index");
const beautyremote = require("beautyremote");
const qenv = require("qenv");
let testQenv = new qenv.Qenv(process.cwd(), process.cwd() + '/.nogit');
describe('beautylog', function () {
    describe('.registerRemote', function () {
        it('should accept a beautyremote', function () {
            let myRemote = new beautyremote.Loggly({
                token: process.env.LOGGLY_TOKEN
            });
            beautylog.registerRemote(myRemote);
        });
    });
    describe('.log(message)', function () {
        it('should print a blue Dir message', function () {
            beautylog.log('beautylog.log(), with normal logText, without logType');
        });
    });
    describe('.dir(message)', function () {
        it('should print a blue Dir message', function () {
            beautylog.dir('beautylog.dir(), with normal logText, without logType');
        });
    });
    describe('.error(message)', function () {
        it('should print a red error message', function () {
            beautylog.error('beautylog.error(), with normal logText, without logType');
        });
    });
    describe('.figlet', function () {
        it('should print nice fonts to console in yellow', function (done) {
            beautylog.figlet('Async!', { font: 'Star Wars', color: 'orange' }).then(done);
        });
    });
    describe('.figletSync', function () {
        it('should print nice fonts to console in yellow', function () {
            beautylog.figletSync('Sync!', { font: 'Star Wars', color: 'blue' });
        });
    });
    describe('.info(message)', function () {
        it('should display a purple info message', function () {
            beautylog.info('beautylog.dir(), with normal logText, without logType');
        });
    });
    describe('.logReduced(message)', function () {
        it('should only log two messages', function () {
            beautylog.logReduced('Message 1');
            beautylog.logReduced('Message 1');
            beautylog.logReduced('Message 1');
            beautylog.logReduced('Message 1');
            beautylog.logReduced('Message 2');
            beautylog.logReduced('Message 2');
        });
    });
    describe('.ok(message)', function () {
        it('should display a green ok message', function () {
            beautylog.ok('beautylog.ok() works!');
        });
    });
    describe('.newLine(number)', function () {
        it('create specified amount of new lines', function () {
            beautylog.newLine(1);
        });
    });
    describe('.ora(text,color)', function () {
        it('should display, update, and end a message', function (done) {
            this.timeout(10000);
            beautylog.ora.start('This is a test text', 'green');
            setTimeout(function () {
                beautylog.ora.text('updated text!');
                beautylog.info('another log message that uses the normal log function');
                setTimeout(function () {
                    beautylog.ora.endOk('Allright, ora works!');
                    done();
                }, 2000);
            }, 2000);
        });
        it('should display an error message when ended with error', function (done) {
            this.timeout(10000);
            beautylog.ora.start('This is another test text', 'green');
            setTimeout(function () {
                beautylog.ora.endError('Allright, ora displays an error!');
                done();
            }, 2000);
        });
    });
    describe('.success(message)', function () {
        it('should display an orange warn message', function () {
            beautylog.success('beautylog.success() works!');
        });
    });
    describe('.warn', function () {
        it('should display a orange warn message', function () {
            beautylog.warn('beautylog.warn() works!');
        });
    });
    describe('.note', function () {
        it('should display a pink note', function () {
            beautylog.note('beautylog.note() works!');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQiwyQ0FBMkM7QUFDM0MsNkNBQTRDO0FBRTVDLDZCQUE0QjtBQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQTtBQUV0RSxRQUFRLENBQUMsV0FBVyxFQUFDO0lBQ2pCLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtRQUN4QixFQUFFLENBQUMsOEJBQThCLEVBQUU7WUFDL0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDO2dCQUNuQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO2FBQ2xDLENBQUMsQ0FBQTtZQUNGLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsRUFBRSxDQUFDLGlDQUFpQyxFQUFDO1lBQ2pDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQTtRQUMxRSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLGVBQWUsRUFBQztRQUNyQixFQUFFLENBQUMsaUNBQWlDLEVBQUM7WUFDakMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFBO1FBQzFFLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsaUJBQWlCLEVBQUM7UUFDdkIsRUFBRSxDQUFDLGtDQUFrQyxFQUFDO1lBQ2xDLFNBQVMsQ0FBQyxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQTtRQUM5RSxD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