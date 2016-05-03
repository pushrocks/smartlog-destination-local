import * as classes from "./beautylog.classes";
export declare let log: (logText?: string, logType?: string) => void;
export declare let info: (logText: any) => void;
export declare let ok: (logText: any) => void;
export declare let success: (logText: any) => void;
export declare let warn: (logText: any) => void;
export declare let error: (logText: any) => void;
export declare let dir: (logText: any) => void;
export declare let figlet: (textArg: string, optionsArg?: any) => any;
export declare let figletSync: (textArg: string, optionsArg?: any) => boolean;
export declare let table: {
    new: (typeArg: string, tableHeadArrayArg?: any) => classes.ConsoleTable;
};
