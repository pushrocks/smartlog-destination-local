export declare class Ora {
    private _oraObject;
    state: string;
    constructor(textArg: string, colorArg: string);
    text(textArg: any): void;
    end(): void;
    endOk(textArg: any): void;
    endError(textArg: any): void;
}
