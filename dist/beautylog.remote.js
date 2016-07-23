"use strict";
const plugins = require("./beautylog.plugins");
let client;
let clientData = {
    serverName: "myServer",
    applicationName: "myApp",
    message: "undefined",
    messageType: "undefined"
};
exports.remoteLog = (logType, logMessage) => {
    clientData.messageType = logType;
    clientData.message = logMessage;
    if (client) {
        client.log(clientData);
    }
    ;
};
// Service implementations
let loggly = (customerTokenArg, subdomainArg) => {
    client = plugins.loggly.createClient({
        token: customerTokenArg,
        subdomain: subdomainArg,
        tags: ["beautylog-test"],
        json: true
    });
};
exports.remote = {
    loggly: loggly
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLnJlbW90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5yZW1vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFFL0MsSUFBSSxNQUFNLENBQUM7QUFDWCxJQUFJLFVBQVUsR0FBRztJQUNiLFVBQVUsRUFBQyxVQUFVO0lBQ3JCLGVBQWUsRUFBQyxPQUFPO0lBQ3ZCLE9BQU8sRUFBQyxXQUFXO0lBQ25CLFdBQVcsRUFBQyxXQUFXO0NBQzFCLENBQUE7QUFDVSxpQkFBUyxHQUFHLENBQUMsT0FBYyxFQUFDLFVBQWlCO0lBQ3BELFVBQVUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7UUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFBQSxDQUFDO0FBQ04sQ0FBQyxDQUFBO0FBRUQsMEJBQTBCO0FBRTFCLElBQUksTUFBTSxHQUFHLENBQUMsZ0JBQXVCLEVBQUMsWUFBbUI7SUFDckQsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ2pDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkIsU0FBUyxFQUFFLFlBQVk7UUFDdkIsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDeEIsSUFBSSxFQUFDLElBQUk7S0FDWixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUE7QUFFVSxjQUFNLEdBQUc7SUFDaEIsTUFBTSxFQUFFLE1BQU07Q0FDakIsQ0FBQyJ9