/// <reference path="./index.ts" />
module BeautylogNode {
    export function init() {
        var colors = require("colors");
        var clc = require("cli-color");

        var beautylogNode:any = {}; //object to append to all public facing functions
        var localBl:any; // object to append to all private params and functions

        localBl = {};
        localBl.dirPrefix = clc.bgXterm(39).xterm(231).bold(' DIR ') + ' ';
        localBl.errorPrefix = ' Error: '.bgRed.white.bold + ' ';
        localBl.infoPrefix = clc.bgXterm(198).xterm(231).bold(' INFO ') + ' ';
        localBl.normalPrefix = ' Log: '.bgCyan.white.bold + ' ';
        localBl.okPrefix = ' '.bgGreen + ' OK! '.bgBlack.green.bold + ' ';
        localBl.successPrefix = ' Success: '.bgGreen.white.bold + ' ';
        localBl.warnPrefix = ' '.bgYellow + ' Warn: '.bgBlack.yellow.bold + ' ';

        /**
         *
         * @param logText
         * @param logType
         * @returns {boolean}
         */
        beautylogNode.log = (logText:string = 'empty log', logType:string = 'normal') => {
            try {
                switch (logType) {
                    case 'dir':
                        logText = localBl.dirPrefix + clc.xterm(26)(logText);
                        break;
                    case 'error':
                        logText = localBl.errorPrefix + logText.red.bold;
                        break;
                    case 'info':
                        logText = localBl.infoPrefix + clc.xterm(198)(logText);
                        break;
                    case 'normal':
                        logText = localBl.normalPrefix + logText.cyan.bold;
                        break;
                    case 'ok':
                        logText = localBl.okPrefix + logText.bold;
                        break;
                    case 'success':
                        logText = localBl.successPrefix + logText.green.bold;
                        break;
                    case 'warn':
                        logText = localBl.warnPrefix + logText.bold;
                        break;
                    case 'log':
                    default:
                        logText.blue.bold;
                        console.log(('unknown logType for "' + logText + '"').red.bold);
                        break;
                }
                console.log(logText);
                return true;
            }
            catch (error) {
                console.log(localBl.errorPrefix + 'You seem to have tried logging something strange'.red.bold + error);
                return false;
            }
        };



        /**
         * logs an directory to console
         * @param logText
         * @returns {boolean}
         */
        beautylogNode.dir = function(logText) {
            return beautylogNode.log(logText, 'dir');
        };


        /**
         * logs an error to console
         * @param logText
         * @returns {boolean}
         */
        beautylogNode.error = function(logText) {
            return beautylogNode.log(logText, 'error');
        };

        /**
         * logs an info to console
         * @param logText
         * @returns {boolean}
         */
        beautylogNode.info = function(logText) {
            return beautylogNode.log(logText, 'info');
        };

        /**
         * logs an 'OK!' message to console
         * @param logText
         * @returns {boolean}
         */
        beautylogNode.ok = function(logText) {
            return beautylogNode.log(logText, 'ok');
        };

        /**
         * logs a success to console
         * @param logText string to log as error
         * @returns {boolean}
         */
        beautylogNode.success = function(logText) {
            return beautylogNode.log(logText, 'success');
        };

        /**
         * logs a 'warn:' message to console
         * @param logText string to log as error
         * @returns {boolean}
         */
        beautylogNode.warn = function(logText) {
            return beautylogNode.log(logText, 'warn');
        };

        beautylogNode.table = BeautylogOsTable.init();

        return beautylogNode;
    }
}