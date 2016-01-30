/// <reference path="./index.ts" />
module BeautylogNode {
    export function init() {
        plugins.colors = require("colors");
        plugins.clc = require("cli-color");

        var beautylogNode:any = {
            log:BeautylogNodeLog.init(),
            code:BeautylogNodeCode.init()
        }; //object to append to all public facing functions

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

        beautylogNode.table = BeautylogNodeTable.init();

        return beautylogNode;
    }
}