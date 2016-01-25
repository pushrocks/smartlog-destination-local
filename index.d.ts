/// <reference path="ts/typings/tsd.d.ts" />
declare module BeautylogPlugins {
    var init: () => {
        smartenv: any;
    };
}
declare var tableHelpers: {
    makeRow: (cellCounterArg?: number, colorArg?: string) => any[];
};
declare class ConsoleTable {
    tableHead: string[];
    rows: any;
    type: string;
    constructor(tableTypeArg: string, tableHeadArrayArg?: string[]);
    push(row: string[]): void;
    print(): void;
}
declare module BeautylogNode {
    function init(): any;
}
declare module BeautylogOsTable {
    var cliTable: any;
    function init(): any;
}
declare module BeautylogBrowser {
    function init(): any;
}
declare var plugins: {
    smartenv: any;
};
declare var beautylog: any;
