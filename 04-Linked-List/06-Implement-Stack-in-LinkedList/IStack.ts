export interface IStack {
    getSize(): number;
    isEmpty(): boolean;
    push(val: any): void;
    pop(): NonNullable<any>;
    peek(): any;
}
