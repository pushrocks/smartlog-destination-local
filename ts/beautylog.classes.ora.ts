import "typings-global";
import * as plugins from "./beautylog.plugins";
import {logNode} from "./beautylog.log.helpers";

export let oraActive:boolean = false; // when an Ora is active (e.g. start()) this is true;
export let activeOra:Ora; //points to the currently active Ora object

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
        activeOra = this;
        oraActive = true;
        this._oraObject.start();
    };
    end(){
        this._oraObject.stop();
        this._oraObject.clear();
        activeOra = undefined;
        oraActive = false;
    }
    endOk(textArg){
        this.end();
        logNode("ok",textArg);
    };
    endError(textArg){
        this.end();
        logNode("error",textArg);
    };
    pause(){
        this._oraObject.stop();
    }
    stop(){ // alias for end
        this.end();
    };
}