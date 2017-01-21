"use strict";
require("typings-global");
const plugins = require("./beautylog.plugins");
let defaultOptions = {
    font: 'Star Wars',
    color: 'green',
    cb: function () { }
};
exports.figlet = function (textArg, optionsArg) {
    let done = plugins.q.defer();
    let mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    let options = plugins.lodash.assign(mergeOptions, optionsArg);
    plugins.figlet(textArg, {
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data[options.color]);
        options.cb();
        done.resolve();
    });
    return done.promise;
};
exports.figletSync = function (textArg, optionsArg) {
    let mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    let options = plugins.lodash.assign(mergeOptions, optionsArg);
    console.log(plugins.figlet.textSync(textArg, {
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })[options.color]);
    return true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmZpZ2xldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5maWdsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF1QjtBQUN2QiwrQ0FBK0M7QUFDL0MsSUFBSSxjQUFjLEdBQUc7SUFDakIsSUFBSSxFQUFFLFdBQVc7SUFDakIsS0FBSyxFQUFFLE9BQU87SUFDZCxFQUFFLEVBQUUsY0FBWSxDQUFDO0NBQ3BCLENBQUE7QUFFVSxRQUFBLE1BQU0sR0FBRyxVQUFTLE9BQWUsRUFBRSxVQUFXO0lBQ3JELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDM0QsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzVELE9BQU8sQ0FBQyxNQUFNLENBQ1YsT0FBTyxFQUNQO1FBQ0ksSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1FBQ2xCLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsY0FBYyxFQUFFLFNBQVM7S0FDNUIsRUFDRCxVQUFTLEdBQUcsRUFBRSxJQUFJO1FBQ2QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLE1BQU0sQ0FBQTtRQUNWLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUNoQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUE7UUFDWixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDbEIsQ0FBQyxDQUNKLENBQUE7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUE7QUFFVSxRQUFBLFVBQVUsR0FBRyxVQUFTLE9BQWUsRUFBQyxVQUFXO0lBQ3hELElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQzNELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBQyxVQUFVLENBQUMsQ0FBQTtJQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBQztRQUN4QyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixjQUFjLEVBQUUsU0FBUztLQUM1QixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQTtBQUNmLENBQUMsQ0FBQSJ9