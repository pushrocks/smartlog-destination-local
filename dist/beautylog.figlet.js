"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        console.log(colorFiglet(data, options.color));
        options.cb();
        done.resolve();
    });
    return done.promise;
};
exports.figletSync = function (textArg, optionsArg) {
    let mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    let options = plugins.lodash.assign(mergeOptions, optionsArg);
    let figletString = plugins.figlet.textSync(textArg, {
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
    console.log(colorFiglet(figletString, options.color));
    return true;
};
let colorFiglet = (figletStringArg, colorArg) => {
    let figletArray = figletStringArg.split('\n');
    let figletStringCombined = '';
    for (let figletRow of figletArray) {
        figletRow = plugins.beautycolor.coloredString(figletRow, colorArg);
        figletStringCombined = figletStringCombined + figletRow + '\n';
    }
    return figletStringCombined;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmZpZ2xldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5maWdsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQkFBd0I7QUFDeEIsK0NBQWdEO0FBUWhELElBQUksY0FBYyxHQUFtQjtJQUNuQyxJQUFJLEVBQUUsV0FBVztJQUNqQixLQUFLLEVBQUUsT0FBTztJQUNkLEVBQUUsRUFBRSxjQUFZLENBQUM7Q0FDbEIsQ0FBQztBQUVTLFFBQUEsTUFBTSxHQUFHLFVBQVMsT0FBZSxFQUFFLFVBQVc7SUFDdkQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUQsT0FBTyxDQUFDLE1BQU0sQ0FDWixPQUFPLEVBQ1A7UUFDRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixjQUFjLEVBQUUsU0FBUztLQUMxQixFQUNELFVBQVMsR0FBRyxFQUFFLElBQVk7UUFDeEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FDRixDQUFDO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRVMsUUFBQSxVQUFVLEdBQUcsVUFBUyxPQUFlLEVBQUUsVUFBMkI7SUFDM0UsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELElBQUksWUFBWSxHQUFXLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtRQUMxRCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixjQUFjLEVBQUUsU0FBUztLQUMxQixDQUFDLENBQUM7SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLElBQUksV0FBVyxHQUFHLENBQUMsZUFBZSxFQUFFLFFBQXdDLEVBQUUsRUFBRTtJQUM5RSxJQUFJLFdBQVcsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDO0lBQzlCLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuRSxvQkFBb0IsR0FBRyxvQkFBb0IsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ2pFLENBQUM7SUFDRCxNQUFNLENBQUMsb0JBQW9CLENBQUM7QUFDOUIsQ0FBQyxDQUFDIn0=