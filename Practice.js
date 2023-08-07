// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.right = null;
//     this.left = null;
//   }
// }

// const a = new TreeNode(1);
// const b = new TreeNode(2);
// const c = new TreeNode(3);
// const d = new TreeNode(4);
// const e = new TreeNode(5);
// const f = new TreeNode(6);
// const g = new TreeNode(7);
// const h = new TreeNode(8);
// const i = new TreeNode(9);
// const j = new TreeNode(10);
// const k = new TreeNode(20);
// const l = new TreeNode(15);

// a.left = b;
// 1;
// a.right = c; //  2       3
// b.left = d;
// d.left = k; // 4   5   6   7
// b.right = e;
// c.left = i;
// c.right = k;
// i.left = a;
// i.right = b;
// k.right = g;
// k.left = l;
// a.left = e;
// d.right = i;
// h.left = j;
// h.right = k;

// const inOrder = (root) => {};

// var isBalanced = function (root) {
//   if (!root) return true;
//   let num1 = 0;
//   let num2 = 0;
//   let s = [root.left];
//   while (s.length > 0) {
//     let curr = s.pop();
//     if (curr == null) break;
//     num1++;
//     if (curr.right !== null && curr.left !== null) num1--;
//     if (curr.right !== null) s.push(curr.right);
//     if (curr.left !== null) s.push(curr.left);
//   }

//   s.push(root.right);
//   while (s.length > 0) {
//     let curr = s.pop();
//     if (curr == null) break;
//     num2++;
//     if (curr.right !== null && curr.left !== null) num2--;
//     if (curr.right !== null) s.push(curr.right);
//     if (curr.left !== null) s.push(curr.left);
//   }
//   return Math?.abs(num1 - num2) > 1 ? false : true;
// };

// var isBalanced = function (root) {
//   return height(root) !== -1;
// };

// function height(node) {
//   if (node == null) {
//     return 0;
//   }
//   let leftHeight = height(node.left);
//   if (leftHeight == -1) return -1;
//   let rightHeight = height(node.right);
//   if (rightHeight == -1) return -1;
//   if (Math.abs(leftHeight - rightHeight) > 1) return -1;
//   return 1 + Math.max(leftHeight, rightHeight);
// }

// console.log(isBalanced(a));
// console.log(Math?.abs(3 - 3));

// let arrr = [];

// const bfs = (root, arr) => {
//   if (root == null) return;
//   bfs(root.left, arr);
//   bfs(root.right, arr);
//   arr.push(root.val);
//   return arr;

// let s = [root];
// let res = [];
// let zigzag = false;
// while (s.length > 0) {
//   let size = s.length;
//   res.push([]);
//   while (size--) {
//     let curr = s.pop();
//     res[res.length - 1].push(curr.val);
//     if (curr.left !== null) s.unshift(curr.left);
//     if (curr.right !== null) s.unshift(curr.right);
//   }
//   if (zigzag) res[res.length - 1].reverse();
//   zigzag = !zigzag;
// }
// return res;
// };

// console.log(bfs(c,[]));
// console.log(pto(c,new TreeNode(c.val)));

// var buildTree = function (inorder, postorder) {
//   let i = 0;
//   let j = postorder.length;
//   let hm = new Map();
//   let arr = [];

//   while (j--) {
//     i = inorder.indexOf(postorder[j]);

//     if (arr.includes(inorder[i - 1])) continue;
//     if (!hm.has(inorder[i])) hm.set(inorder[i], []);

//     if (i - 1 >= 0 && !hm.get(inorder[i]).includes(inorder[i - 1]))
//       hm.get(inorder[i]).push(inorder[i - 1]);
//     else hm.get(inorder[i]).push(null);
//     if (j - 1 > 0) hm.get(postorder[j]).push(postorder[j - 1]);
//     else hm.get(inorder[i]).push(null);

//     if (hm.get(inorder[i]).length <= 0) hm.delete(inorder[i]);
//     arr.push(postorder[j]);
//   }
//   console.log(hm);
//   let s = [hm.keys().next().value];
//   let t = new TreeNode(s[0]);
//   let s2 = [t];
//   const resbt = t;

//   while (s.length > 0) {
//     let size = s.length;
//     let curr
//     let curr2
//     while (size--) {
//       curr = s.pop();
//       curr2 = s2.pop();
//       if (hm.has(curr)) {
//         let r = hm.get(curr);

//         if (r[0] !== null) {
//           s.unshift(r[0]);
//           curr2.left = new TreeNode(r[0]);
//         }
//         if (curr2.left !== null) s2.unshift(curr2.left);
//         if (r[1] !== null) {
//           s.unshift(r[1]);
//           curr2.right = new TreeNode(r[1]);
//         }
//         if (curr2.right !== null) s2.unshift(curr2.right);
//       }
//     }
//     hm.delete(curr);
//   }
//   return resbt;
// };

// let inorder = [1,2,3];
// let postorder = [1,2,3];

// console.log(buildTree(inorder, postorder));
// var buildTree = function (inorder, postorder) {
//   let hash = {};
//   for (let i = 0; i < inorder.length; i++) {
//     hash[inorder[i]] = i;
//   }

//   return buildTree(
//     inorder,
//     0,
//     inorder.length - 1,
//     postorder,
//     0,
//     postorder.length - 1
//   );

//   function buildTree(inorder, is, ie, postorder, ps, pe) {
//     if (is > ie || ps > pe) return null;

//     let root = new TreeNode(postorder[pe]);
//     let inRoot = hash[root.val];
//     let numsLeft = inRoot - is;

//     root.left = buildTree(
//       inorder,
//       is,
//       inRoot - 1,
//       postorder,
//       ps,
//       ps + numsLeft - 1
//     );
//     root.right = buildTree(
//       inorder,
//       inRoot + 1,
//       ie,
//       postorder,
//       ps + numsLeft,
//       pe - 1
//     );
//     return root;
//   }
// };

// let inorder = [1, 9, 3, 15, 20, 7];
// let postorder = [1, 9, 15, 7, 20, 3];

// console.log(buildTree(inorder, postorder));

// class TrieNode {
//   constructor() {
//     this.children = {};
//     this.isEndOfWord = false;
//   }
// }

// var Trie = function () {
//   this.root = new TrieNode();
// };

// const root = new Trie();
// Trie.prototype.insert = function (word, node = new TrieNode()) {
//   this.root = node;
//   let curr = node
//   for (let i = 0; i < word.length; i++) {
//     let char = word.charAt(i).charCodeAt(0);
//     let ascii = "a".charCodeAt(0);
//     if (curr.children[char - ascii] == null)
//       curr.children[char - ascii] = new TrieNode();
//     curr = curr.children[char - ascii];
//   }
//   curr.isEndOfWord = true;
// };

// Trie.prototype.search = function (word) {
//   let curr = this.root;
//   for (let i = 0; i < word.length; i++) {
//     let char = word.charAt(i).charCodeAt(0);
//     let ascii = "a".charCodeAt(0);
//     if (curr.children[char - ascii] == null) return false;
//     curr = curr.children[char - ascii];
//   }
//   return curr.isEndOfWord;
// };

// Trie.prototype.startsWith = function (prefix) {
//   let curr = this.root;
//   for (let i = 0; i < prefix.length; i++) {
//     let char = prefix.charAt(i).charCodeAt(0);
//     let ascii = "a".charCodeAt(0);
//     if (curr.children[char - ascii] == null) return false;
//     curr = curr.children[char - ascii];
//   }
//   return true;
// };

// console.log(root.insert("apple"));
// console.log(root.insert("apply"));
// console.log(root.search("apple"));
// console.log(root.search("apply"));
// console.log(root.startsWith("app"));
// console.log(root.startsWith("a"));

// class WordDictionary {
//   constructor() {
//     this.wordlist = [];
//   }
//   addWord(word) {
//     this.wordlist.includes(word) ? null : this.wordlist.push(word);
//   }
//   search(word) {
//     if (word.indexOf(".") == -1) return this.wordlist.includes(word);

//     check: for (let s of this.wordlist) {
//       if (word.length !== s.length) continue;
//       for (let i = 0; word.length > i; i++) {
//         if (word[i] !== s[i] && word[i] !== ".") continue check;
//         // if (word[i] !== s[i]) continue check;
//       }
//       return true;
//     }
//     return false;
//   }
// }

// const wd = new WordDictionary();
// wd.addWord("bad");
// wd.addWord("dad");
// wd.addWord("mad");
// console.log(wd.search("pad"));
// console.log(wd.search("bad"));
// console.log(wd.search(".ad"));
// console.log(wd.search("b.."));
// console.log(wd.wordlist);

// var BrowserHistory = function (homepage) {
//   this.curr = [homepage];
//   this.fwd = [];
// };

// BrowserHistory.prototype.visit = function (url) {
//   while (this.fwd.length > 0) {
//     this.fwd.pop();
//   }
//   this.curr.push(url);
// };

// BrowserHistory.prototype.back = function (steps) {
//   let res = "";
//   while (steps-- && this.curr.length > 1) {
//     res = this.curr.pop();
//     this.fwd.push(res);
//   }
//   return this.curr[this.curr.length - 1];
// };

// BrowserHistory.prototype.forward = function (steps) {
//   let res = "";
//   if (this.fwd.length < 1) return this.curr[this.curr.length - 1];
//   while (steps-- && this.fwd.length > 0) {
//     res = this.fwd.pop();
//     this.curr.push(res);
//   }
//   return res;
// };

// const bh = new BrowserHistory("Leetcode.com");
// bh.visit("google.com");
// bh.visit("facebook.com");
// bh.visit("youtube.com");
// console.log(bh.curr);
// console.log(bh.back(1));
// console.log(bh.back(1));
// console.log(bh.forward(1));
// console.log(bh.curr);
// console.log(bh.fwd);

// class ListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new ListNode(1);
// const b = new ListNode(2);
// const c = new ListNode(2);
// const d = new ListNode(1);
// const e = new ListNode(5);
// const f = new ListNode(6);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// let res;
// var reverseList = function (head) {
//   let node = new ListNode();
//   res = node
//   solve(head);
//   return node.next;
// };

// function solve(root) {
//   if (root == null) return;
//   solve(root.next);
//   res.next = new ListNode(root.val);
//   res = res.next;
// }

// var isPalindrome = function (head) {
// };

// console.log(isPalindrome(a));

// var canPlaceFlowers = function (flowerbed, n) {
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (n == 0) return true;
//     if (flowerbed[i] == 1) continue;
//     if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
//       flowerbed[i] = 1;
//       n--;
//     }
//   }
//   if (n > 0) return false;
//   return true;
// };

// let arr = [0, 0, 0, 0, 0, 0, 0];
// console.log(canPlaceFlowers(arr, 5));

// function TreeNode(val) {
//   this.val = val;
//   this.left = null;
//   this.right = null;
// }

// const a = new TreeNode(1);
// const b = new TreeNode(2);
// const c = new TreeNode(3);
// const d = new TreeNode(4);
// const e = new TreeNode(5);
// const f = new TreeNode(6);

// a.left = b;
// a.right = c;
// b.left = d;
// d.left = e;
// d.right = f;

// var tree2str = function (root) {
//   let s = [root];
//   let temp = [root.val];
//   let l = false;
//   let r = false;
//   while (s.length > 0) {
//     let size = s.length;
//     let temp2 = [];
//     while (size--) {
//       let curr = s.pop();
//       if (curr.left == null) temp2.push(null);
//       else temp.push(curr.left.val);

//       if (curr.right == null) temp2.push(null);
//       else temp.push(curr.right.val);

//       if (curr.left !== null) s.unshift(curr.left);
//       if (curr.right !== null) s.unshift(curr.right);
//       if (size <= 0) {
//         temp.push(...temp2);
//       }
//     }
//     temp2 = [];
//   }
//   for (let i = temp.length - 1; i >= 0; i--) {
//     if (temp[i] !== null) break;
//     temp.pop();
//   }
//   return temp;
// };

// console.log(tree2str(a));

// var zeroFilledSubarray = function (nums) {
//   let c = 0;
//   let sub = 0;
//   for (let i of nums) {
//     sub++;
//     if (i !== 0) {
//       sub = 0;
//       continue
//     } else c += sub;
//   }
//   return c;
// };

// let arr = [0,0,0,2,0,0];
// console.log(zeroFilledSubarray(arr));

// var minScore = function (n, roads) {
//   let hm = new Map();
//   let vis = new Set();
//   for (let i = 0; i < roads.length; i++) {
//     let [src, dst, dist] = roads[i];
//     if (!hm.has(src)) hm.set(src, []);
//     hm.get(src).push([dst, dist]);
//     if (!hm.has(dst)) hm.set(dst, []);
//     hm.get(dst).push([src, dist]);
//   }
//   console.log(hm);

//   // let s = [1];
//   let min = Infinity;

//   function dfs(i) {
//     if (vis.has(i)) return;
//     vis.add(i);
//     if (hm.has(i)) {
//       let adj = hm.get(i);
//       for (let j = 0; j < adj.length; j++) {
//         let [src, dist] = adj[j];
//         min = Math.min(min, dist);
//         dfs(src);
//       }
//     }
//   }
//   dfs(1);
//   return min;

// while (s.length > 0) {
//   let curr = s.pop();

//   if (hm.has(curr) && !vis.has(curr)) {
//     vis.add(curr);
//     let adj = hm.get(curr);
//     for (let i = 0; i < adj.length; i++) {
//       let [src, dist] = adj[i];
//       s.push(src);
//       min = Math.min(min, dist);
//     }
//   }
// }
// return min;

// while (s.length > 0) {
//   let size = s.length;
//   while (size--) {
//     let curr = s.pop();
//     if (vis.has(curr)) continue;
//     vis.add(curr);
//     if (hm.has(curr)) {
//       let c = hm.get(curr);
//       let t = c.length;
//       while (t--) {
//         s.unshift(c[t][0]);
//         min = Math.min(min, c[t][1]);
//       }
//     }
//   }
// }
// console.log(vis);
// return min;
// };

// let roads = [[1,2,2],[1,3,4],[3,4,7]]
// console.log(minScore(4, roads));

import {
  DoublyListNode,
  DSU,
  insertionSort,
  ListNode,
  TreeNode,
} from "./mypackage.js";

// const a = new ListNode(4);
// const b = new ListNode(2);
// const c = new ListNode(1);
// const d = new ListNode(3);

// a.next = b;
// b.next = c;
// c.next = d;

// var insertionSortList = function (head) {
//   if (!head || head.next == null) return head;
//   let arr = [];
//   let curr = head;
//   while (curr !== null) {
//     arr.push(curr.val);
//     curr = curr.next;
//   }
//   insertionSort(arr);
//   let res = new ListNode();
//   let temp = res;
//   for (let i = 0; i < arr.length; i++) {
//     temp.next = new ListNode(arr[i]);
//     temp = temp.next;
//   }
//   return res.next;
//   function insertionSort(s) {
//     for (let i = 1; i < s.length; i++) {
//       let temp = s[i];
//       let j = i - 1;
//       for (; j >= 0; j--) {
//         if (temp < s[j]) {
//           s[j + 1] = s[j];
//         } else {
//           break;
//         }
//       }
//       s[j + 1] = temp;
//     }
//   }
// };

// console.log(insertionSortList(a));

// var makeConnected = function (n, connections) {
//   if (connections.length < n - 1) return -1;
//   let vis = Array(n).fill(false);
//   let hm = new Map();
//   for (let i = 0; i < connections.length; i++) {
//     let [p1, p2] = connections[i];
//     if (!hm.has(p1)) hm.set(p1, []);
//     hm.get(p1).push(p2);
//     if (!hm.has(p2)) hm.set(p2, []);
//     hm.get(p2).push(p1);
//   }
//   console.log(hm);
//   // let s = [];
//   let ncc = 0;

//   function dfs(nei, adj, visited) {
//     visited[nei] = true;
//     if (!adj.has(nei)) return;
//     for (let i of adj.get(nei)) {
//       if (!visited[i]) {
//         visited[i] = true;
//         dfs(i, adj, visited);
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     if (!vis[i]) {
//       dfs(i, hm, vis);
//       ncc++;
//     }
//   }
//   return ncc - 1;

// for (let i = 0; i < n; i++) {
//   if (!vis[i]) {
//     s.push(i);
//     while (s.length > 0) {
//       let size = s.length;
//       while (size--) {
//         let curr = s.pop();
//         if (vis[curr]) continue;
//         vis[curr] = true;
//         if (hm.has(curr)) {
//           let adj = hm.get(curr);
//           for (let i = 0; i < adj.length; i++) {
//             s.unshift(adj[i]);
//           }
//         }
//       }
//     }
//     ncc++;
//   }
// }

// for (let i = 0; i < n; i++) {
//   if (!vis[i]) {
//     s.push(i);
//     while (s.length > 0) {
//       let curr = s.pop();
//       if (vis[curr]) continue;
//       vis[curr] = true;
//       if (hm.has(curr)) {
//         let adj = hm.get(curr);
//         for (let i = 0; i < adj.length; i++) {
//           s.push(adj[i]);
//         }
//       }
//     }
//     ncc++;
//   }
// }
//   return ncc - 1;
// };

// var sortedSquares = function (nums) {
//   const res = nums.map((x) => x * x);
//   return insertionSort(res)
// };

var rotate = function (nums, k) {
  while (nums.length < k) {
    k--;
  }
  nums.reverse();
  let l = nums.length - k;
  // let r =
  // while(k--){

  // }
};

// var search = function(nums,target) {
//   let left = 0
//   let right = nums.length - 1
//   return bs(left,right)
//   function bs(l,r) {
//     if(l > r) return -1
//     let mid = Math.floor(r + (l - r) / 2)
//     if(nums[mid] === target) return mid
//     if(nums[mid] > target) r = mid - 1
//     else l = mid + 1
//     return bs(l,r)
//   }
// }

var successfulPairs = function (spells, potions, success) {
  let res = [];
  potions.sort((a, b) => a - b);
  let r = potions.length;

  for (let spell of spells) {
    if (spell * potions[r - 1] < success) {
      res.push(0);
      continue;
    }
    let index = getminimum(0, r - 1, spell);
    res.push(r - index);
  }
  return res;

  function getminimum(le, rt, curr) {
    while (le < rt) {
      let mid = Math.floor(rt + (le - rt) / 2);
      if (curr * potions[mid] >= success) {
        rt = mid;
      } else le = mid + 1;
    }
    return rt;
  }
};
let spells = [5, 1, 3],
  potions = [1, 2, 3, 4, 5];
// console.log(successfulPairs(spells, potions, 7));

var partitionString = function (s) {
  let i = 0;
  let j = i + 1;
  let count = 0;
  let flag = false;
  while (j <= s.length) {
    flag = false;
    if (j >= s.length && i == j - 1) {
      count++;
      break;
    }
    let ss = s.substring(i, j);
    if (ss.includes(s[j])) {
      count++;
      i = j;
      j = i + 1;
      continue;
    }
    flag = true;
    j++;
  }
  if (flag) count++;
  return count;
};

let s = "ssssss";
// console.log(partitionString(s));

var removeDuplicates = function (nums) {
  let prev = -Infinity;
  let index = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== prev) {
      nums[index] = nums[i];
      index++;
      count++;
      prev = nums[i];
    }
  }
  return count;
};

var removeElement = function (nums, val) {
  let index = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
      count++;
    }
  }
  console.log(nums);
  return count;
};

let arr = [0, 1, 2, 2, 3, 0, 4, 2];
// console.log(removeElement(arr, 2));

var minimizeArrayValue = function (nums) {
  let max = 0;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    max = Math.max(max, Math.round(total / (i + 1)));
  }
  return max;
};

// let arr2 = [3, 7, 1, 6];
// console.log(minimizeArrayValue(arr2));

class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.neighbors.push(b);
a.neighbors.push(d);
b.neighbors.push(a);
b.neighbors.push(c);
c.neighbors.push(b);
c.neighbors.push(d);
d.neighbors.push(c);
d.neighbors.push(a);

var cloneGraph = function (node) {
  if (!node) return;
  let hm = new Map();

  return dfs(node);
  function dfs(n) {
    if (hm.has(n)) return hm.get(n);

    let copy = new Node(n.val);
    hm.set(n, copy);
    for (let nei of n.neighbors) {
      copy.neighbors.push(dfs(nei));
    }
    return copy;
  }
};

// console.log(cloneGraph(a));

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let res = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) leftMax = height[left];
      else res += leftMax - height[left];
      left++;
    } else {
      if (height[right] >= rightMax) rightMax = height[right];
      else res += rightMax - height[right];
      right--;
    }
  }
  return res;
};

let ht = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// console.log(trap(ht));

var groupAnagrams = function (strs) {
  let hm = new Map();
  let res = [];

  for (let i = 0; i < strs.length; ) {
    let s1 = strs[i].split("").sort().join("");
    if (hm.has(s1)) {
      hm.get(s1).push(strs[i]);
      i++;
      continue;
    }
    hm.set(s1, []);
  }

  for (let i = 0; i < strs.length; i++) {
    let s1 = strs[i].split("").sort().join("");
    if (hm.has(s1)) {
      res.push(hm.get(s1));
      hm.delete(s1);
    }
  }
  return res;
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

var removeStars = function (s) {
  let st = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      st.pop();
      continue;
    }
    st.push(s[i]);
  }
  return st.join("");
};

// console.log(removeStars("leet**cod*e"))

var simplifyPath = function (path) {
  let s = path.split("/").filter((x) => x !== ".");
  let st = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "") continue;
    if (s[i] === "..") st.pop();
    else st.push("/" + s[i]);
  }
  if (st.length < 1) return "/";
  return st.join("");
};

// console.log(simplifyPath("/..."))

var validateStackSequences = function (pushed, popped) {
  let s = [];
  let j = 0;
  for (let i = 0; i < pushed.length; i++) {
    s.push(pushed[i]);
    while (s[s.length - 1] === popped[j] && s.length > 0) {
      s.pop();
      j++;
    }
  }
  return s.length < 1;
};

// console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]));

var longestPalindromeSubseq = function (s) {
  let dp = Array(1001);
  for (let i = 0; i < 1001; i++) {
    dp[i] = Array(1001).fill(-1);
  }
  let l = 0;
  let r = s.length - 1;

  return lps(s, l, r);

  function lps(p, i, j) {
    if (i > j) return 0;
    if (i === j) return 1;

    if (dp[i][j] !== -1) return dp[i][j];
    if (p[i] === p[j]) return (dp[i][j] = 2 + lps(p, i + 1, j - 1));
    else return (dp[i][j] = Math.max(lps(p, i + 1, j), lps(p, i, j - 1)));
  }
};

// console.log(longestPalindromeSubseq("bbbab"));

var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
};

var findMedianSortedArrays = function (nums1, nums2) {
  let nums3 = nums1.concat(nums2).sort((a, b) => a - b);
  let n = nums3.length - 1;
  let mid = Math.floor(n + (0 - n) / 2);
  if ((n + 1) % 2 !== 0) return nums3[mid];
  let median = (nums3[mid] + nums3[mid + 1]) / 2;
  return median;
};

// console.log(findMedianSortedArrays([1,2],[3,4]));

var numWays = function (words, target) {
  let m = target.length;
  let k = words[0].length;
  const MOD = 1e9 + 7;

  let freq = Array(26);
  for (let i = 0; i < freq.length; i++) {
    freq[i] = Array(k).fill(0);
  }

  let dp = Array(1001);
  for (let i = 0; i < 1001; i++) {
    dp[i] = Array(1001).fill(-1);
  }

  for (let i = 0; i < k; i++) {
    for (let word of words) {
      let ch = word[i].charCodeAt(0);
      freq[ch - 97][i]++;
    }
  }
  return solve(0, 0, freq, target);

  function solve(i, j, f, t) {
    if (i === m) return 1;
    if (j === k) return 0;

    if (dp[i][j] !== -1) return dp[i][j];

    let not_taken = solve(i, j + 1, f, t) % MOD;
    let taken =
      (freq[target[i].charCodeAt(0) - 97][j] * solve(i + 1, j + 1, f, t)) % MOD;

    return (dp[i][j] = (not_taken + taken) % MOD);
  }
};

// console.log(numWays(["acca","bbbb","caca"],"aba"))

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let st = new Set();
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    while (st.has(s[i])) {
      st.delete(s[left++]);
    }
    st.add(s[i]);
    max = Math.max(max, i - left + 1);
  }

  return max;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));

var longestPalindrome = function (s) {
  let res = "";
  let left = 0;
  let lp = 0;

  for (let i = 0; i < s.length; i++) {}
};

// console.log(longestPalindrome("babad"));

var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map((x) => x + extraCandies >= max);
};

// console.log(kidsWithCandies([2,3,5,1,3],3));

var convert = function (s, numRows) {
  let res = [];
  let r = 0;
  let zz = true;

  for (let i = 0; i < s.length; ) {
    if (!zz) {
      r--;
      while (r-- && i < s.length) {
        res[r].push(s[i]);
        i++;
      }
      r = 1;
      zz = !zz;
      continue;
    }

    while (r !== numRows && i < s.length) {
      if (!res[r]) res.push([s[i]]);
      else res[r].push(s[i]);
      r++;
      i++;
    }
    zz = !zz;
  }
  let result = "";
  res.forEach((x) => {
    result += x.join("");
  });
  return result;
};

// console.log(convert("PAYPALISHIRING", 4));

var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);

  while (stones.length > 1) {
    let y = stones.pop();
    let x = stones.pop();

    if (y !== x) {
      stones.push(Math.abs(y - x));
      stones.sort((a, b) => a - b);
    }
  }

  return stones.length >= 1 ? stones[0] : 0;
};

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));

var bulbSwitch = function (n) {
  if (n <= 1) return n;

  let bulb = Array(n + 1).fill(true);
  let countoffbulb = 0;

  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (j % i === 0) bulb[j] = !bulb[j];
      if (i === n) bulb[j] ? null : countoffbulb++;
    }
  }

  return n - countoffbulb;
};

// console.log(bulbSwitch(10));

var findDifference = function (nums1, nums2) {
  let s1 = new Set();
  let s2 = new Set();
  for (let i = 0; i < nums1.length || i < nums2.length; i++) {
    if (i < nums2.length && !nums1.includes(nums2[i])) s2.add(nums2[i]);
    if (i < nums1.length && !nums2.includes(nums1[i])) s1.add(nums1[i]);
  }
  return [[...s1], [...s2]];
};

// console.log(findDifference([-68,-80,-19,-94,82,21,-43], [-63]));

var average = function (salary) {
  salary.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 1; i < salary.length - 1; i++) {
    sum += salary[i];
  }
  return (sum / 2).toFixed(5);
};

// console.log(average([4000,3000,1000,2000]))

var arraySign = function (nums) {
  const res = nums.reduce((acc, curr) => (acc *= curr), 1);
  if (isNaN(res)) return 0;
  if (res === 0) return 0;
  return res < 0 ? -1 : 1;
};

// console.log(arraySign([1, 28, -91, -62, -36, -1]));

// var createTargetArray = function (nums, index) {

// };

// console.log(createTargetArray([1,2,3,4,0],[0,1,2,3,0]));

var numSubseq = function (nums, target) {};

// console.log(numSubseq([3,5,6,7],9));

var createCounter = (init) => {
  const initial = init;
  function increment() {
    init++;
    return init;
  }

  function decrement() {
    init--;
    return init;
  }

  function reset() {
    init = initial;
    return init;
  }
  return { increment, decrement, reset };
};

// const counter = createCounter(0);
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.reset())
// console.log(counter.reset())

// async function sleep(millis) {
//   const res = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ok");
//     }, millis);

//     setTimeout(() => {
//       reject("not ok!");
//     }, millis + 100);
//   });
//   return res;
// }

// console.log(
//   sleep(100)
//     .then((x) => console.log(x))
//     .catch((err) => console.log(err))
// );
// var promisePool = async function (functions, n) {
//   return new Promise((res) => {
//     if (!functions.length) return res();

//     let pool = 0;
//     let done = 0;
//     let index = 0;

//     const onDone = () => {
//       done++;
//       pool--;

//       if (done === functions.length) return res();
//       else run();
//     };

//     const run = () => {
//       while (pool < n && index < functions.length) {
//         pool++;
//         const func = functions[index++];
//         func().then(onDone);
//       }
//     };

//     run();
//   });
// };

// promisePool([
//   () => new Promise(res => setTimeout(res, 300)),
//   () => new Promise(res => setTimeout(res, 400)),
//   () => new Promise(res => setTimeout(res, 200))
// ],2).then(console.log())
