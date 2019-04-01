import INode from '../01-Linked-List-Basics/INode';

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
        let curNode = this.dummyHead;
        
        // 找到插入位置的前一个元素
        for(let i = 0; i < index; i++) {
            curNode = curNode.next;
        }
        curNode.next = new INode(val, curNode.next);
        this.size += 1;
    }

    public addFirst(val: any) {
        this.add(0, val);
    }

    public addLast(val: any) {
        this.add(this.size, val);
    }

    public toString() {
        let curNode = this.dummyHead.next;
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