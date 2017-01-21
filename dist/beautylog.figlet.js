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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhdXR5bG9nLmZpZ2xldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2JlYXV0eWxvZy5maWdsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF1QjtBQUN2QiwrQ0FBK0M7QUFRL0MsSUFBSSxjQUFjLEdBQW1CO0lBQ2pDLElBQUksRUFBRSxXQUFXO0lBQ2pCLEtBQUssRUFBRSxPQUFPO0lBQ2QsRUFBRSxFQUFFLGNBQVksQ0FBQztDQUNwQixDQUFBO0FBRVUsUUFBQSxNQUFNLEdBQUcsVUFBUyxPQUFlLEVBQUUsVUFBVztJQUNyRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzVCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQzNELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBQyxVQUFVLENBQUMsQ0FBQTtJQUM1RCxPQUFPLENBQUMsTUFBTSxDQUNWLE9BQU8sRUFDUDtRQUNJLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLGNBQWMsRUFBRSxTQUFTO0tBQzVCLEVBQ0QsVUFBUyxHQUFHLEVBQUUsSUFBWTtRQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsTUFBTSxDQUFBO1FBQ1YsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUM3QyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUE7UUFDWixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDbEIsQ0FBQyxDQUNKLENBQUE7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUE7QUFFVSxRQUFBLFVBQVUsR0FBRyxVQUFTLE9BQWUsRUFBQyxVQUEyQjtJQUN4RSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUMzRCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUE7SUFDNUQsSUFBSSxZQUFZLEdBQVcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFDO1FBQ3ZELElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLGNBQWMsRUFBRSxTQUFTO0tBQzVCLENBQUMsQ0FBQTtJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFBO0FBQ2YsQ0FBQyxDQUFBO0FBRUQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxlQUFlLEVBQUUsUUFBd0M7SUFDeEUsSUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QyxJQUFJLG9CQUFvQixHQUFHLEVBQUUsQ0FBQTtJQUM3QixHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxXQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDbEUsb0JBQW9CLEdBQUcsb0JBQW9CLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQTtJQUNsRSxDQUFDO0lBQ0QsTUFBTSxDQUFDLG9CQUFvQixDQUFBO0FBQy9CLENBQUMsQ0FBQSJ9