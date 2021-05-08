export interface OutputType {
    [key: string]: string | undefined;
}
export declare function createOutputProxy<O extends OutputType = OutputType>(): O;
