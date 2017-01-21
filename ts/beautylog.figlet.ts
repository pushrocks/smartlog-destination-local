import 'typings-global'
import plugins = require('./beautylog.plugins')

export interface IFigletOptions {
    font?: string
    color?: plugins.beautycolor.TColorName
    cb?
}

let defaultOptions: IFigletOptions = {
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
        function(err, data: string) {
            if (err) {
                console.log('Something went wrong...')
                console.dir(err)
                return
            }
            console.log(colorFiglet(data, options.color))
            options.cb()
            done.resolve()
        }
    )
    return done.promise
}

export let figletSync = function(textArg: string,optionsArg?: IFigletOptions){
    let mergeOptions = plugins.lodash.cloneDeep(defaultOptions)
    let options = plugins.lodash.assign(mergeOptions,optionsArg)
    let figletString: string = plugins.figlet.textSync(textArg,{
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })
    console.log(colorFiglet(figletString, options.color))
    return true
}

let colorFiglet = (figletStringArg, colorArg: plugins.beautycolor.TColorName) => {
    let figletArray = figletStringArg.split('\n')
    let figletStringCombined = ''
    for (let figletRow of figletArray ) {
        figletRow = plugins.beautycolor.coloredString(figletRow, colorArg)
        figletStringCombined = figletStringCombined + figletRow + '\n'
    }
    return figletStringCombined
}
