import 'typings-test'
import beautylog = require('../dist/index')

import * as qenv from 'qenv'

describe('beautylog',function(){
    describe('.log(message)',function(){
        it('should print a blue Dir message',function(){
            beautylog.log('beautylog.log(), with normal logText, without logType')
        })
    })
    describe('.dir(message)',function(){
        it('should print a blue Dir message',function(){
            beautylog.dir('beautylog.dir(), with normal logText, without logType')
        })
    })
    describe('.error(message)',function(){
        it('should print a red error message',function(){
            beautylog.error('beautylog.error(), with normal logText, without logType')
        })
    })
    describe('.figlet',function(){
        it('should print nice fonts to console in yellow',function(done){
            beautylog.figlet('Async!',{font: 'Star Wars',color: 'orange'}).then(done)
        })
    })
    describe('.figletSync',function(){
        it('should print nice fonts to console in yellow',function(){
            beautylog.figletSync('Sync!',{font: 'Star Wars',color: 'blue'})
        })
    })
    describe('.info(message)',function(){
        it('should display a purple info message',function(){
            beautylog.info('beautylog.dir(), with normal logText, without logType')
        })
    })
    describe('.logReduced(message)',function(){
        it('should only log two messages',function(){
            beautylog.logReduced('Message 1')
            beautylog.logReduced('Message 1')
            beautylog.logReduced('Message 1')
            beautylog.logReduced('Message 1')
            beautylog.logReduced('Message 2')
            beautylog.logReduced('Message 2')
        })
    })
    describe('.ok(message)',function(){
        it('should display a green ok message',function(){
            beautylog.ok('beautylog.ok() works!')
        })
    })
    describe('.newLine(number)',function(){
        it('create specified amount of new lines',function(){
            beautylog.newLine(1)
        })
    })
    describe('.ora(text,color)',function(){
        it('should display, update, and end a message',function(done){
            this.timeout(10000)
            beautylog.ora.start('This is a test text','green')
            setTimeout(function(){
                beautylog.ora.text('updated text!')
                beautylog.info('another log message that uses the normal log function')
                setTimeout(function(){
                    beautylog.ora.endOk('Allright, ora works!')
                    done()
                },2000)
            },2000)
        })
        it('should display an error message when ended with error',function(done){
            this.timeout(10000)
            beautylog.ora.start('This is another test text','green')
            setTimeout(function(){
                beautylog.ora.endError('Allright, ora displays an error!')
                done()
            },2000)
        })
    })
    describe('.success(message)',function(){
        it('should display an orange warn message',function(){
            beautylog.success('beautylog.success() works!')
        })
    })
    describe('.warn',function(){
        it('should display a orange warn message',function(){
            beautylog.warn('beautylog.warn() works!')
        })
    })
    describe('.note', function() {
        it('should display a pink note', function() {
            beautylog.note('beautylog.note() works!')
        })
    })
})
