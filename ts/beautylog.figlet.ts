import 'typings-global'
import plugins = require('./beautylog.plugins')
let defaultOptions = {
    font: 'Star Wars',
    color: 'green',
    cb: function() {}
}

export let figlet = function(textArg: string, optionsArg?){
    let done = plugins.q.defer()
    let mergeOptions = plugins.lodash.cloneDeep(defaultOptions)
    let options = plugins.lodash.assign(mergeOptions,optionsArg)
    plugins.figlet(
        textArg,
        {
            font: options.font,
            horizontalLayout: 'default',
            verticalLayout: 'default'
        },
        function(err, data) {
            if (err) {
                console.log('Something went wrong...')
                console.dir(err)
                return
            }
            console.log(data[options.color])
            options.cb()
            done.resolve()
        }
    )
    return done.promise
}

export let figletSync = function(textArg: string,optionsArg?){
    let mergeOptions = plugins.lodash.cloneDeep(defaultOptions)
    let options = plugins.lodash.assign(mergeOptions,optionsArg)
    console.log(plugins.figlet.textSync(textArg,{
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })[options.color])
    return true
}
