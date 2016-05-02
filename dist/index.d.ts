import * as classes from "./beautylog.classes";
declare let beautylog: {
    log: (logText?: string, logType?: string) => void;
    info: (logText: any) => void;
    ok: (logText: any) => void;
    success: (logText: any) => void;
    warn: (logText: any) => void;
    error: (logText: any) => void;
    dir: (logText: any) => void;
    figlet: (textArg: string, optionsArg?: any) => any;
    figletSync: (textArg: string, optionsArg?: any) => boolean;
    table: {
        new: (typeArg: string, tableHeadArrayArg?: any) => classes.ConsoleTable;
    };
};
export = beautylog;
