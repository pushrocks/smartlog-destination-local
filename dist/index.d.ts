import { Ora } from "./beautylog.classes.ora";
import { Table } from "./beautylog.classes.table";
export declare let dir: (logText: any) => void;
export declare let error: (logText: any) => void;
export declare let figlet: (textArg: string, optionsArg?: any) => any;
export declare let figletSync: (textArg: string, optionsArg?: any) => boolean;
export declare let info: (logText: any) => void;
export declare let log: (logText?: string, logType?: string) => void;
export declare let ok: (logText: any) => void;
export declare let ora: (textArg: string, colorArg: string) => Ora;
export declare let success: (logText: any) => void;
export declare let table: (tableTypeArg: string, tableHeadArrayArg?: string[]) => Table;
export declare let warn: (logText: any) => void;
