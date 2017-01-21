"use strict";
require("typings-test");
const beautylog = require("../dist/index");
describe('beautylog', function () {
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
            beautylog.ok('beautylog.ok(), with normal logText, without logType');
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
            let testOra = new beautylog.Ora('This is a test text', 'green', true);
            setTimeout(function () {
                testOra.text('updated text!');
                beautylog.info('another log message that uses the normal log function');
                setTimeout(function () {
                    testOra.endOk('Allright, ora works!');
                    done();
                }, 2000);
            }, 2000);
        });
        it('should display an error message when ended with error', function (done) {
            this.timeout(10000);
            let testOra = new beautylog.Ora('This is another test text', 'green');
            setTimeout(function () {
                testOra.endError('Allright, ora displays an error!');
                done();
            }, 2000);
        });
    });
    describe('.success(message)', function () {
        it('should display an orange warn message', function () {
            beautylog.success('beautylog.success(), with normal logText, without logType');
        });
    });
    describe('.warn', function () {
        it('should display a orange warn message', function () {
            beautylog.warn('beautylog.warn(), with normal logText, without logType');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQiwyQ0FBMkM7QUFJM0MsUUFBUSxDQUFDLFdBQVcsRUFBQztJQUNqQixRQUFRLENBQUMsZUFBZSxFQUFDO1FBQ3JCLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBQztZQUNqQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUE7UUFDMUUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsRUFBRSxDQUFDLGlDQUFpQyxFQUFDO1lBQ2pDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQTtRQUMxRSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLGlCQUFpQixFQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBQztZQUNsQyxTQUFTLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUE7UUFDOUUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxTQUFTLEVBQUM7UUFDZixFQUFFLENBQUMsOENBQThDLEVBQUMsVUFBUyxJQUFJO1lBQzNELFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDN0UsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUM7UUFDbkIsRUFBRSxDQUFDLDhDQUE4QyxFQUFDO1lBQzlDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxLQUFLLEVBQUUs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