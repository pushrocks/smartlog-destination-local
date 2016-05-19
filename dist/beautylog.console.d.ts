/**
 * routes the console to got through beautylog, so beautylog can take action before things are logged to console.
 */
export declare let route: (statusArg: boolean) => void;
export declare let beautyConsole: {
    log2: (message?: any, ...optionalParams: any[]) => void;
    log: (logArg: any) => void;
};
