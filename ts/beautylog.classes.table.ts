/// <reference path="./typings/main.d.ts" />
import * as plugins from "./beautylog.plugins";

let tableHelpers = {
    makeRow: function(cellCounterArg:number = 2,colorArg:string = "cyan"){
        let rowArray = [];
        for (let i = 0; i < (cellCounterArg); i++) {
            rowArray.push(String(i + 1).cyan);
        }
        return rowArray;
    }
};

export class Table {
    tableHead:string[];
    rows;
    type:string;
    constructor(tableTypeArg:string,tableHeadArrayArg:string[] = tableHelpers.makeRow()) {
        switch (tableTypeArg) {
            case "checks":
                this.tableHead = ['Check Item:'.cyan,'Status:'.cyan];
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
    push(row:string[]){
        this.rows.push(row);
    }
    print() {
        let table = new plugins.cliTable({
            head: this.tableHead
        });
        for (let row in this.rows){
            if(this.rows[row][1] == "success"){
                this.rows[row][1] = ' '.bgGreen + ' ' + this.rows[row][1];
            } else if (this.rows[row][1] == "error") {
                this.rows[row][1] = ' '.bgRed + ' ' + this.rows[row][1];
            }
            table.push(this.rows[row]);
        };
        console.log(table.toString());
    }
}