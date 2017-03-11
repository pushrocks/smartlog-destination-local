"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBcUI7QUFDckIsMkNBQTJDO0FBQzNDLDZDQUE0QztBQUU1Qyw2QkFBNEI7QUFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUE7QUFFdEUsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUNwQixRQUFRLENBQUMsaUJBQWlCLEVBQUU7UUFDMUIsRUFBRSxDQUFDLDhCQUE4QixFQUFFO1lBQ2pDLElBQUksUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQztnQkFDckMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTthQUNoQyxDQUFDLENBQUE7WUFDRixTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsZUFBZSxFQUFFO1FBQ3hCLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRTtZQUNwQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUE7UUFDeEUsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxlQUFlLEVBQUU7UUFDeEIsRUFBRSxDQUFDLGlDQUFpQyxFQUFFO1lBQ3BDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQTtRQUN4RSxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1FBQzFCLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRTtZQUNyQyxTQUFTLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUE7UUFDNUUs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