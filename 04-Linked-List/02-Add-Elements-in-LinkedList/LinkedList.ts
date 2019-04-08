import INode from './INode';

class LinkedList {
    private head: INode = null;
    private size: number = 0;

    public addFirst(val: any) {
        // const node = new INode(val);
        // node.next = this.head;
        // this.head = node;
        this.head = new INode(val, this.head);
        this.size += 1;
    }

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

        if (index === 0) {
            this.addFirst(val);
        } else {
            // 找到插入位置的前一个元素
            let preNode = this.head;
            for(let i = 0; i < index - 1; i++) {
                preNode = preNode.next;
            }
            preNode.next = new INode(val, preNode.next);
        }
        this.size += 1;
    }

    public addLast(val: any) {
        this.add(this.size, val);
    }

    public toString() {
        let curNode = this.head;
        let str = '';
        while(curNode != null) {
            str += curNode.val + (curNode.next != null ? ' -> ' : '');
            curNode = curNode.next;
        }
        return str;
    }
}

const linkedList = new LinkedList();
for (let index = 0; index < 10; index++) {
    linkedList.addFirst(index);
}
console.log(linkedList + '');

linkedList.add(2, 333);
console.log(linkedList + '');


linkedList.addLast(222);
console.log(linkedList + '');