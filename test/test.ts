import { tap, expect } from 'tapbundle';
import * as smartdelay from 'smartdelay';

import * as qenv from 'qenv';
let testQenv = new qenv.Qenv(process.cwd(), process.cwd() + '/.nogit');

import smartlogDesinationLocal = require('../ts/index');
import { ILogContext } from 'smartlog-interfaces';

let testLogContext: ILogContext = {
  company: 'Lossless GmbH',
  companyunit: 'Lossless.Cloud',
  containerName: 'gitlabci',
  environment: 'staging',
  runtime: 'node',
  zone: 'shipzone'
}

let testLocalInstance: smartlogDesinationLocal.DestinationLocal;

tap.test('should create a valid instance of DestinationLocal', async () => {
  testLocalInstance = new smartlogDesinationLocal.DestinationLocal()
  expect(testLocalInstance).to.be.instanceof(smartlogDesinationLocal.DestinationLocal);
})

tap.test('.log(message) should print a blue Dir message', async () => {
  testLocalInstance.handleLog({
    logLevel: 'info',
    logContext: testLogContext,
    message: 'this is a info log message'
  });
});

tap.test('.figlet should print nice fonts to console in yellow', async () => {
  testLocalInstance.figlet('Async!', { font: 'Star Wars', color: 'orange' });
});

tap.test('.figletSync should print nice fonts to console in yellow', async () => {
  testLocalInstance.figletSync('Sync!', { font: 'Star Wars', color: 'blue' });
});

tap.test('.logReduced(message) should only log two messages', async () => {
  testLocalInstance.logReduced('Message 1');
  testLocalInstance.logReduced('Message 1');
  testLocalInstance.logReduced('Message 1');
  testLocalInstance.logReduced('Message 1');
  testLocalInstance.logReduced('Message 2');
  testLocalInstance.logReduced('Message 2');
});

tap.test('.newLine(number) create specified amount of new lines', async () => {
  testLocalInstance.newLine(1);
});

tap.test('.ora(text,color) should display, update, and end a message', async () => {
  testLocalInstance.ora.start('This is a test text', 'green');
  await smartdelay.delayFor(2000);
  testLocalInstance.ora.text('updated text!');
  await smartdelay.delayFor(2000);
  await smartdelay.delayFor(2000);
  testLocalInstance.ora.stop();
});

tap.test('.ora(text,color) should display an error message when ended with error', async () => {
  testLocalInstance.ora.start('This is another test text', 'green');
  await smartdelay.delayFor(2000);
  testLocalInstance.ora.stop();
});

tap.start();
