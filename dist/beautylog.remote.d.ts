export declare let remoteLog: (logType: string, logMessage: string) => void;
export declare let remote: {
    loggly: (optionsArg: {
        customerTokenArg: string;
        subdomainArg: string;
        appName: string;
        serverName: string;
    }) => void;
};
