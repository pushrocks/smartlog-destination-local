/// <reference path="./typings/main.d.ts" />
import * as plugins from "./beautylog.plugins";
import * as log from "./beautylog.log";

export class Ora {
    private _oraObject;
    state:string;
    constructor(textArg:string,colorArg:string){
        this._oraObject = plugins.ora({
            spinner:"dots",
            text:textArg,
            color:colorArg
        });
        this._oraObject.start();
    }
    text(textArg){
        this._oraObject.text = textArg;
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
}