import ListNode from './ListNode';

/**
 * Leetcode 203. Remove Linked List Elements
 * @see https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 */
export default class Solution {
    public removeElements(head: ListNode, val: number) {
        while (head != null && head.val === val) {
            const delNode = head;
            head = head.next;
            delNode.next = null;
        }

        if (head == null) {
            return head;
        }

        let prev = head;
        while (prev.next.val != null) {
            if (prev.next.val === val) {
                const delNode = prev.next;
                prev.next = delNode.next;
                delNode.next = null;
            }
            prev = prev.next;
        }
        return head;
    }
}
