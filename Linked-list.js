import { ListNode } from "./mypackage.js";

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)
const d = new ListNode(-3)
const e = new ListNode(-2)
a.next  = b
b.next  = c
c.next  = d
d.next  = e

var removeZeroSumSublists = function(head) {
    let psum = 0
    let hm = new Map()

};



console.log(removeZeroSumSublists(a));