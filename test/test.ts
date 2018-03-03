import { tap, expect } from 'tapbundle';
import * as smartdelay from 'smartdelay';

import * as qenv from 'qenv';
let testQenv = new qenv.Qenv(process.cwd(), process.cwd() + '/.nogit');

import beautylog = require('../ts/index');

tap.test('.log(message) should print a blue Dir message', async () => {
  beautylog.log('beautylog.log(), with normal logText, without logType');
});

tap.test('.figlet should print nice fonts to console in yellow', async () => {
  return beautylog.figlet('Async!', { font: 'Star Wars', color: 'orange' });
});

tap.test('.figletSync should print nice fonts to console in yellow', async () => {
  beautylog.figletSync('Sync!', { font: 'Star Wars', color: 'blue' });
});

tap.test('.logReduced(message) should only log two messages', async () => {
  beautylog.logReduced('Message 1');
  beautylog.logReduced('Message 1');
  beautylog.logReduced('Message 1');
  beautylog.logReduced('Message 1');
  beautylog.logReduced('Message 2');
  beautylog.logReduced('Message 2');
});

tap.test('.newLine(number) create specified amount of new lines', async () => {
  beautylog.newLine(1);
});

tap.test('.ora(text,color) should display, update, and end a message', async () => {
  beautylog.ora.start('This is a test text', 'green');
  await smartdelay.delayFor(2000);
  beautylog.ora.text('updated text!');
  await smartdelay.delayFor(2000);
  await smartdelay.delayFor(2000);
  beautylog.ora.endOk('Allright, ora works!');
});

tap.test('.ora(text,color) should display an error message when ended with error', async () => {
  beautylog.ora.start('This is another test text', 'green');
  await smartdelay.delayFor(2000);
  beautylog.ora.endError('Allright, ora displays an error!');
});

tap.start();
