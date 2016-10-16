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
let loggly = (optionsArg) => {
    client = plugins.loggly.createClient({
        token: optionsArg.token,
        subdomain: optionsArg.subdomain,
        tags: [],
        json: true
    });
    clientData.applicationName = optionsArg.appName;
    clientData.serverName = optionsArg.serverName;
};
exports.remote = {
    loggly: loggly
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLnJlbW90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5yZW1vdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUUvQyxJQUFJLE1BQU0sQ0FBQztBQUNYLElBQUksVUFBVSxHQUFHO0lBQ2IsVUFBVSxFQUFFLFVBQVU7SUFDdEIsZUFBZSxFQUFFLE9BQU87SUFDeEIsT0FBTyxFQUFFLFdBQVc7SUFDcEIsV0FBVyxFQUFFLFdBQVc7Q0FDM0IsQ0FBQTtBQUNVLFFBQUEsU0FBUyxHQUFHLENBQUMsT0FBZSxFQUFFLFVBQWtCO0lBQ3ZELFVBQVUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDVCxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFBQSxDQUFDO0FBQ04sQ0FBQyxDQUFBO0FBRUQsMEJBQTBCO0FBRTFCLElBQUksTUFBTSxHQUFHLENBQUMsVUFLYjtJQUNHLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNqQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7UUFDdkIsU0FBUyxFQUFFLFVBQVUsQ0FBQyxTQUFTO1FBQy9CLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLElBQUk7S0FDYixDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDaEQsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO0FBQ2xELENBQUMsQ0FBQTtBQUVVLFFBQUEsTUFBTSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxNQUFNO0NBQ2pCLENBQUMifQ==