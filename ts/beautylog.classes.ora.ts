/// <reference path="./typings/main.d.ts" />
import * as plugins from "./beautylog.plugins";
import * as log from "./beautylog.log";

export class Ora {
    private _oraObject;
    state:string;
    constructor(textArg:string,colorArg:string,startArg:boolean = false){
        this._oraObject = plugins.ora({
            spinner:"dots",
            text:textArg,
            color:colorArg
        });
        
        startArg ? this._oraObject.start() : void(0);
    }
    text(textArg){
        this._oraObject.text = textArg;
    };
    
    start(textArg?:string,colorArg?:string){
        if(textArg) this._oraObject.text = textArg;
        if(colorArg) this._oraObject.color = colorArg;
        this._oraObject.start();
    };
    end(){
        this._oraObject.stop();
        this._oraObject.clear();
    }
    endOk(textArg){
        this.end();
        log.ok(textArg);
    };
    endError(textArg){
        this.end();
        log.error(textArg);
    };
    stop(){ // alias for end
        this.end();
    }
    
    // log methods that play nice with ora
    log(logText:string,logType:string){
        this.stop();
        log.log(logText,logType);
        this.start();
    }
}