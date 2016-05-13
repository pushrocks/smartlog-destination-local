"use strict";
/// <reference path="./typings/main.d.ts" />
var plugins = require("./beautylog.plugins");
var defaultOptions = {
    font: "Star Wars",
    color: "green",
    cb: function () { }
};
exports.figlet = function (textArg, optionsArg) {
    var done = plugins.q.defer();
    var mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    var options = plugins.lodash.assign(mergeOptions, optionsArg);
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
    var mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    var options = plugins.lodash.assign(mergeOptions, optionsArg);
    console.log(plugins.figlet.textSync(textArg, {
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })[options.color]);
    return true;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5maWdsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRDQUE0QztBQUM1QyxJQUFPLE9BQU8sV0FBVyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2hELElBQUksY0FBYyxHQUFHO0lBQ2pCLElBQUksRUFBQyxXQUFXO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsRUFBRSxFQUFFLGNBQVcsQ0FBQztDQUNuQixDQUFDO0FBRVMsY0FBTSxHQUFHLFVBQVMsT0FBYyxFQUFDLFVBQVc7SUFDbkQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUM7UUFDbkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1FBQ2xCLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsY0FBYyxFQUFFLFNBQVM7S0FDNUIsRUFBRSxVQUFTLEdBQUcsRUFBRSxJQUFJO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRVMsa0JBQVUsR0FBRyxVQUFTLE9BQWMsRUFBQyxVQUFXO0lBQ3ZELElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBQztRQUN4QyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixjQUFjLEVBQUUsU0FBUztLQUM1QixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUMiLCJmaWxlIjoiYmVhdXR5bG9nLmZpZ2xldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cclxuaW1wb3J0IHBsdWdpbnMgPSByZXF1aXJlKFwiLi9iZWF1dHlsb2cucGx1Z2luc1wiKTtcclxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgZm9udDpcIlN0YXIgV2Fyc1wiLFxyXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgIGNiOiBmdW5jdGlvbigpe31cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgZmlnbGV0ID0gZnVuY3Rpb24odGV4dEFyZzpzdHJpbmcsb3B0aW9uc0FyZz8pe1xyXG4gICAgdmFyIGRvbmUgPSBwbHVnaW5zLnEuZGVmZXIoKTtcclxuICAgIHZhciBtZXJnZU9wdGlvbnMgPSBwbHVnaW5zLmxvZGFzaC5jbG9uZURlZXAoZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgdmFyIG9wdGlvbnMgPSBwbHVnaW5zLmxvZGFzaC5hc3NpZ24obWVyZ2VPcHRpb25zLG9wdGlvbnNBcmcpO1xyXG4gICAgcGx1Z2lucy5maWdsZXQodGV4dEFyZyx7XHJcbiAgICAgICAgZm9udDogb3B0aW9ucy5mb250LFxyXG4gICAgICAgIGhvcml6b250YWxMYXlvdXQ6ICdkZWZhdWx0JyxcclxuICAgICAgICB2ZXJ0aWNhbExheW91dDogJ2RlZmF1bHQnXHJcbiAgICB9LCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZy4uLicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmRpcihlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFbb3B0aW9ucy5jb2xvcl0pO1xyXG4gICAgICAgIG9wdGlvbnMuY2IoKTtcclxuICAgICAgICBkb25lLnJlc29sdmUoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRvbmUucHJvbWlzZTtcclxufTtcclxuXHJcbmV4cG9ydCB2YXIgZmlnbGV0U3luYyA9IGZ1bmN0aW9uKHRleHRBcmc6c3RyaW5nLG9wdGlvbnNBcmc/KXtcclxuICAgIHZhciBtZXJnZU9wdGlvbnMgPSBwbHVnaW5zLmxvZGFzaC5jbG9uZURlZXAoZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgdmFyIG9wdGlvbnMgPSBwbHVnaW5zLmxvZGFzaC5hc3NpZ24obWVyZ2VPcHRpb25zLG9wdGlvbnNBcmcpO1xyXG4gICAgY29uc29sZS5sb2cocGx1Z2lucy5maWdsZXQudGV4dFN5bmModGV4dEFyZyx7XHJcbiAgICAgICAgZm9udDogb3B0aW9ucy5mb250LFxyXG4gICAgICAgIGhvcml6b250YWxMYXlvdXQ6ICdkZWZhdWx0JyxcclxuICAgICAgICB2ZXJ0aWNhbExheW91dDogJ2RlZmF1bHQnXHJcbiAgICB9KVtvcHRpb25zLmNvbG9yXSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuIl19
