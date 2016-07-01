"use strict";
require("typings-global");
var plugins = require("./beautylog.plugins");
var tableHelpers = {
    makeRow: function (cellCounterArg, colorArg) {
        if (cellCounterArg === void 0) { cellCounterArg = 2; }
        if (colorArg === void 0) { colorArg = "cyan"; }
        var rowArray = [];
        for (var i = 0; i < (cellCounterArg); i++) {
            rowArray.push(String(i + 1).cyan);
        }
        return rowArray;
    }
};
var Table = (function () {
    function Table(tableTypeArg, tableHeadArrayArg) {
        if (tableHeadArrayArg === void 0) { tableHeadArrayArg = tableHelpers.makeRow(); }
        switch (tableTypeArg) {
            case "checks":
                this.tableHead = ['Check Item:'.cyan, 'Status:'.cyan];
                break;
            case "custom":
                this.tableHead = tableHeadArrayArg;
                break;
            default:
                break;
        }
        this.rows = [];
        this.type = tableTypeArg;
    }
    Table.prototype.push = function (row) {
        this.rows.push(row);
    };
    Table.prototype.print = function () {
        var table = new plugins.cliTable({
            head: this.tableHead
        });
        for (var row in this.rows) {
            if (this.rows[row][1] == "success") {
                this.rows[row][1] = ' '.bgGreen + ' ' + this.rows[row][1];
            }
            else if (this.rows[row][1] == "error") {
                this.rows[row][1] = ' '.bgRed + ' ' + this.rows[row][1];
            }
            table.push(this.rows[row]);
        }
        ;
        console.log(table.toString());
    };
    return Table;
}());
exports.Table = Table;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmNsYXNzZXMudGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9iZWF1dHlsb2cuY2xhc3Nlcy50YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBTyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3hCLElBQVksT0FBTyxXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFFL0MsSUFBSSxZQUFZLEdBQUc7SUFDZixPQUFPLEVBQUUsVUFBUyxjQUF5QixFQUFDLFFBQXdCO1FBQWxELDhCQUF5QixHQUF6QixrQkFBeUI7UUFBQyx3QkFBd0IsR0FBeEIsaUJBQXdCO1FBQ2hFLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQztDQUNKLENBQUM7QUFFRjtJQUlJLGVBQVksWUFBbUIsRUFBQyxpQkFBbUQ7UUFBbkQsaUNBQW1ELEdBQW5ELG9CQUE2QixZQUFZLENBQUMsT0FBTyxFQUFFO1FBQy9FLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbkIsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckQsS0FBSyxDQUFDO1lBQ1YsS0FBSyxRQUFRO2dCQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ25DLEtBQUssQ0FBQztZQUNWO2dCQUNJLEtBQUssQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFDRCxvQkFBSSxHQUFKLFVBQUssR0FBWTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzdCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUztTQUN2QixDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUN2QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELENBQUM7WUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQUEsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbkNZLGFBQUssUUFtQ2pCLENBQUEifQ==