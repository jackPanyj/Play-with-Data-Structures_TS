import LinkedList from "./LinkedList";
import { equal } from "assert";

const linkedList = new LinkedList();

describe("Add Elements in LinkedList", () => {
    it("init a linkList", () => {
        for (let index = 0; index < 10; index++) {
            linkedList.addFirst(index);
        }
        equal(linkedList.toString(), '9,8,7,6,5,4,3,2,1,0');
    });

    it("#add", () => {
        linkedList.add(2, 333)
        equal(linkedList.toString(), '9,8,333,7,6,5,4,3,2,1,0');
    });
    it("#addLast", () => {
        linkedList.addLast(333)
        equal(linkedList.toString(), '9,8,333,7,6,5,4,3,2,1,0,333');
    });
    it("#addFirst", () => {
        linkedList.addFirst(111)
        equal(linkedList.toString(), '111,9,8,333,7,6,5,4,3,2,1,0,333');
    });
});