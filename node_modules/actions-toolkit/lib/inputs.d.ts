export interface InputType {
    [key: string]: string | undefined;
}
export declare function createInputProxy<I extends InputType = InputType>(): I;
