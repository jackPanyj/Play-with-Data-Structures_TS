import INode from './INode';

class LinkedList {
    private size: number = 0;
    private dummyHead: INode = new INode();

    public getSize() {
        return this.size;
    }

    public isEmpty() {
        return this.size === 0;
    }

    public add(index: number, val: any) {
        if (index < 0 || index > this.size) {
            throw new Error('不合法的索引');
        }
        let preNode = this.dummyHead;

        // 找到插入位置的前一个元素
        for (let i = 0; i < index; i++) {
            preNode = preNode.next;
        }
        preNode.next = new INode(val, preNode.next);
        this.size += 1;
    }
    public addFirst(val: any) {
        this.add(0, val);
    }

    public addLast(val: any) {
        this.add(this.size, val);
    }

    public get(index: number) {
        if (index < 0 || index > this.size) {
            throw new Error('不合法的索引');
        }
        let curNode = this.dummyHead.next;
        for (let i = 0; i < index; i++) {
            curNode = curNode.next;
        }
        return curNode.val;
    }

    public getFirst() {
        return this.get(0);
    }

    public getLast() {
        return this.get(this.size - 1);
    }

    public set(index: number, val: any) {
        if (index < 0 || index >= this.size) {
            throw new Error('不合法的索引');
        }

        let curNode = this.dummyHead.next;
        for (let i = 0; i < index; i++) {
            curNode = curNode.next;
        }
        curNode.val = val;
    }

    public contains(val: any) {
        let curNode = this.dummyHead;
        while (curNode.next != null) {
            if (curNode.val === val) {
                return true;
            }
            curNode = curNode.next;
        }
        return false;
    }

    public toString() {
        let curNode = this.dummyHead.next;
        let str = '';
        while (curNode != null) {
            str += curNode.val + (curNode.next != null ? ' -> ' : '');
            curNode = curNode.next;
        }
        return str;
    }
}

function test() {
    const linkedList = new LinkedList();
    for (let index = 0; index < 10; index++) {
        linkedList.addFirst(index);
    }
    console.log(linkedList + '');

    linkedList.add(2, 333);
    console.log(linkedList + '');

    linkedList.addLast(222);
    console.log(linkedList + '');

    console.log(linkedList.get(3));

    linkedList.set(1, 123);
    console.log(linkedList + '');
}
test();
