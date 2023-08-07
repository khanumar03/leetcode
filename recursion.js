import { ListNode } from "./mypackage.js";

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

var swapPairs = function (head) {
  let res = new ListNode();
  let prev = res;
  let curr = head;
  while (curr !== null && curr.next !== null) {
    prev.next = curr.next;
    curr.next = prev.next.next;
    prev.next.next = curr;

    prev = curr;
    curr = curr.next;
  }
  return res.next;
};

// var checkInclusion = function (s1, s2) {
//   return (
//     s2.includes(s1) ||
//     s2.includes(s1.split("").reverse().join(""))
//   );
// };

// console.log(checkInclusion("abc", "bbbca"));
