import { IStack } from './IStack';
import LinkedList from './LinkedList';

export default class LinkListStack implements IStack {
    private list = new LinkedList();

    public getSize(): number {
        return this.list.getSize();
    }

    public isEmpty(): boolean {
        return this.list.isEmpty();
    }

    public push(val: any): void {
        this.list.addFirst(val);
    }

    public pop() {
        return this.list.removeFirst();
    }

    public peek() {
        return this.list.getFirst();
    }

    public toString() {
        return this.list.toString();
    }
}

function test() {
    const stack = new LinkListStack();
    for (let index = 0; index < 10; index++) {
        stack.push(index);
    }
    console.log(stack + '');
    stack.pop();
    console.log(stack + '');
    console.log(stack.peek());
    console.log(stack + '');
}
// test();
