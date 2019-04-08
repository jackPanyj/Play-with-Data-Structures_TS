import LinkListStack from './LinkListStack';

/**
 * @see https://leetcode-cn.com/problems/valid-parentheses/
 * 给定一个只包括 '('，')'，'{'，'}'，'[', ']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */

class Solution {
    public isValid(str: string) {
        const stack = new LinkListStack();
        for (const s of str) {
            if (s === '(' || s === '{' || s === '[') {
                stack.push(s);
            } else {
                if (stack.isEmpty()) {
                    return false;
                }
                let popS = stack.pop();
                if (s === ')' && popS !== '(') {
                    return false;
                }
                if (s === '}' && popS !== '{') {
                    return false;
                }
                if (s === ']' && popS !== '[') {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}

const solution = new Solution();
const ret = solution.isValid(')');
console.log(ret);
