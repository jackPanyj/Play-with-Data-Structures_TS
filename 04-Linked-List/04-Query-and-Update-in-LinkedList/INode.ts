export default class INode {
    public val: any;
    public next: INode;

    public constructor(val?: any, next?: INode) {
        this.val =  val;
        this.next = next;
    }

    public toString() {
        return this.val.toString();
    }
}