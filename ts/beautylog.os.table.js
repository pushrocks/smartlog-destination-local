/// <reference path="./index.ts" />
var BeautylogOsTable;
(function (BeautylogOsTable) {
    function init() {
        BeautylogOsTable.cliTable = require("cli-table2");
        var beautylogOsTable = {};
        beautylogOsTable.new = function (type) {
            var newConsoleTable = new ConsoleTable(type);
            return newConsoleTable;
        };
        return beautylogOsTable;
    }
    BeautylogOsTable.init = init;
})(BeautylogOsTable || (BeautylogOsTable = {}));
//# sourceMappingURL=beautylog.os.table.js.map