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

    public remove(index: number) {
        if (index < 0 || index >= this.size) {
            throw new Error('不合法的索引');
        }
        let preNode = this.dummyHead;
        for (let i = 0; i < index; i++) {
            preNode = preNode.next;
        }
        let retNode = preNode.next;
        preNode.next = retNode.next;
        retNode.next = null;
        this.size -= 1;
        return retNode.val;
    }

    public removeFirst() {
        return this.remove(0);
    }

    public removeLast() {
        return this.remove(this.size - 1);
    }

    public removeElement(val: any) {
        let preNode = this.dummyHead;
        while (preNode.next != null) {
            if (preNode.next.val === val) {
                break;
            }
            preNode = preNode.next;
        }
        if (preNode != null) {
            let delNode = preNode.next;
            preNode.next = delNode.next;
            delNode.next = null;
        }
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

    let val = linkedList.remove(2);
    console.log(linkedList + '\n' + val);

    linkedList.removeFirst();
    console.log(linkedList + '');

    linkedList.removeLast();
    console.log(linkedList + '');

    linkedList.removeElement(6);
    console.log(linkedList + '');
}
test();
