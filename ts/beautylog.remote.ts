import * as plugins from "./beautylog.plugins";

let client;
let clientData = {
    serverName:"myServer",
    applicationName:"myApp",
    message:"undefined",
    messageType:"undefined"
}
export let remoteLog = (logType:string,logMessage:string) => {
    clientData.messageType = logType;
    clientData.message = logMessage;
    if (client){
         client.log(clientData);
    };
}

// Service implementations

let loggly = (customerTokenArg:string,subdomainArg:string) => {
    client = plugins.loggly.createClient({
        token: customerTokenArg,
        subdomain: subdomainArg,
        tags: ["beautylog-test"],
        json:true
    });
}

export let remote = {
    loggly: loggly
};