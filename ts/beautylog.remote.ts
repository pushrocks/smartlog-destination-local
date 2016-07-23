import * as plugins from "./beautylog.plugins";

let client;
let clientData = {
    serverName: "myServer",
    applicationName: "myApp",
    message: "undefined",
    messageType: "undefined"
}
export let remoteLog = (logType: string, logMessage: string) => {
    clientData.messageType = logType;
    clientData.message = logMessage;
    if (client) {
        client.log(clientData);
    };
}

// Service implementations

let loggly = (optionsArg: {
    token: string,
    subdomain: string,
    appName: string,
    serverName:string
}) => {
    client = plugins.loggly.createClient({
        token: optionsArg.token,
        subdomain: optionsArg.subdomain,
        tags: [],
        json: true
    });
    clientData.applicationName = optionsArg.appName;
    clientData.serverName = optionsArg.serverName;
}

export let remote = {
    loggly: loggly
};