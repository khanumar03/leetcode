// class Node {
//     constructor(val) {
//         this.val = val
//         this.right = null
//         this.left = null
//     }
// }

// const a = new Node(4)
// const b = new Node(2)
// const c = new Node(7)
// const d = new Node(1)
// const e = new Node(3)
// const f = new Node(6)
// const g = new Node(9)
// // const h = new Node("h")
// // const i = new Node("i")
// // const j = new Node("j")

// a.right = b
// a.left = c
// b.right = e
// b.left = d
// c.right = g
// c.left = f

// var invertTree = function (root) {
//     if (root === null) return root
//     let s = [root]
//     while (s.length > 0) {
//         let curr = s.pop()

//         if (curr.right !== null && curr.left !== null) {

//         }

//         if (curr.right !== null) {
//             s.push(curr.left)
//         }
//         if (curr.left !== null) {
//             s.push(curr.right)
//         }
//     }
//     return root
// };

// class ListNode {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

// const l1 = new ListNode(9)
// const l2 = new ListNode(9)
// const l3 = new ListNode(9)
// const l4 = new ListNode(9)
// const l5 = new ListNode(9)
// const l6 = new ListNode(9)
// const l7 = new ListNode(9)
// const l8 = new ListNode(9)
// const l9 = new ListNode(9)
// const l10 = new ListNode(9)
// const l11 = new ListNode(9)

// l1.next = l2
// l2.next = l3
// l3.next = l4
// l4.next = l5
// l5.next = l6
// l6.next = l7
// l8.next = l9
// l9.next = l10
// l10.next = l11

// var addTwoNumbers = function (l1, l2) {
//     let curr1 = l1
//     let curr2 = l2
//     let sum = 0
//     let carry = 0
//     let curr = new ListNode(0)
//     let sln = curr
//     while (curr1 || curr2 ) {
//         sum = ((curr1?.val || 0) + (curr2?.val || 0)) + carry
//         if (sum >= 10) {
//             curr.next = new ListNode(sum % 10)
//             curr = curr.next
//             carry = Math.floor(sum / 10)
//         } else {
//             curr.next = new ListNode(sum)
//             curr = curr.next
//             carry = 0
//         }
//         if (curr1 !== null) curr1 = curr1.next
//         if (curr2 !== null) curr2 = curr2.next
//     }
//     if (carry !== 0) {
//         curr.next = new ListNode(carry)
//         curr = curr.next
//     }
//     return sln.next
// };

// console.log(addTwoNumbers(l1,l4))

// console.log(addTwoNumbers(l1, l8));

// var lengthOfLongestSubstring = function(s) {
//     let count = 0
//     for(let i = 0; i < s.length - 1; i++){
//         if(s[i] !== s[i+1] && i === 0) count++
//         for(let j = i + 1; j < s.length - 1; j++)  {
//             if(s.substring(i,j+1).includes(s[j ]))  {
//                 i = j + 1
//                 break
//             }
//             count++
//         }
//     let x = s[i]
//     let temp = s.split("").filter((v) =>{
//         return x === v
//     })
//     console.log(temp)
//     if(temp.length  <= 1)  return s.length
//     }

//     return count + 1
// };
// let arr = [1,2,3,0,0,0]
// let arr1 = [2,5,6]
// console.log(arr.slice(0,3).concat(arr1).sort())
// console.log(lengthOfLongestSubstring("dvdf"))

// var minMaxDifference = function(num) {
//     let s = num.toString()
//     let min = ""
//     let max = ""
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === "1" || s[i] === "0") {
//             max += "9"
//             continue
//         }
//         max +=  s[i]
//     }
//     for(let i = 0; i < s.length; i++) {
//         if(parseInt(s[i]) >= 1 )  {
//             min += "0"
//             continue
//         }
//         min += s[i]
//     }
//     let db = parseInt(max) - parseInt(min)
//     return db
// };

// class Node {
//     constructor(val) {
//         this.val = val
//         this.right = null
//         this.left = null
//     }
// }

// const a = new Node(3)
// const b = new Node(9)
// const c = new Node(20)
// const d = new Node(15)
// const e = new Node(7)
// const f = new Node(6)
// const g = new Node(9)

// a.right = c
// a.left = b
// c.right = e
// c.left = d

// var zigzagLevelOrder = function (root) {
//     if (root === null) return [];

//     let s = [root];
//     let result = [];
//     result.push([root.val]);
//     let level = 1;
//     while (s.length > 0) {
//         let curr = s.pop();

//         let temp = [];
//         for (let i = s.length - 1; i > 0; i--) { }

//         if (level % 2 === 0) {
//             if (curr.left !== null) s.push(curr.left);
//             if (curr.right !== null) s.push(curr.right);
//             continue;
//         }
//         if (curr.left !== null) s.push(curr.left);
//         if (curr.right !== null) s.push(curr.right);
//     }
// };

// var maxArea = function(height) {
//     let i = 0
//     let j = height.length - 1
//     let max = 0

//     while (i < j) {
//         if(height[i] <= height[j])  {
//         max = Math.max(max,(j - i) * height[i])
//         i++
//         }
//         else {
//         max = Math.max(max,(j - 1) * height[j])
//         j--
//         }
//     }
//     return max
// };

// var minimumFuelCost = function(roads, seats) {
//     const adjList = createAdjacencyList(roads);
//     let ans = 0

//     const dfs = (curNode, preNode) => {
//         let people = 1
//         for(let child of adjList[curNode]){
//             if(child !== preNode){
//                 people += dfs(child, curNode)
//             }
//         }
//         if(curNode)
//             ans += Math.ceil(people/seats)

//         return people
//     }
//     dfs(0, -1)

//     return ans
// };

// const createAdjacencyList = (edges) => {
//     const N = edges.length
//     const adjList = Array(N+1).fill().map(() => []);

//     // Add the edges to the adjacency list
//     for(const edge of edges){
//         const [node1, node2] = edge;
//         adjList[node1].push(node2);
//         adjList[node2].push(node1);
//     }
//     return adjList;
// }

// console.log(minimumFuelCost([[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]],2))
// console.log((2 / 1).toFixed(5))

// var searchInsert = function (nums, target) {
//     let l = 0;
//     let r = nums.length - 1;

//     if (target > nums[r]) return r + 1;

//     while (l <= r) {
//         let mid = Math.floor(r + (l - r) / 2);

//         if (target < nums[mid]) r = mid - 1;
//         else if (target > nums[mid]) l = mid + 1;
//         else if (target === nums[mid]) return mid;
//         if (l > r) return l;
//         else if (r < l) return r;
//     }
//     return -1;
// };

// var intToRoman = function (num) {
//     let roman = "";

//     const romanNumbers = {
//         1: "I",
//         2: "II",
//         3: "III",
//         4: "IV",
//         5: "V",
//         6: "VI",
//         7: "VII",
//         8: "VIII",
//         9: "IX",
//         10: "X",
//         40: "XL",
//         50: "L",
//         90: "XC",
//         100: "C",
//         400: "CD",
//         500: "D",
//         900: "CM",
//         1000: "M",
//     };

//     let t = romanNumbers[num];
//     if (t) return (roman += t);

//     let s = num.toString().split("");

//     for (let i = 0; i < s.length; i++) {
//         if (num > 999) {
//             let temp = parseInt(s[i]);
//             while (temp > 0) {
//                 roman += romanNumbers[1000];
//                 temp--;
//             }
//         }
//     }
// };

// var singleNonDuplicate = function (nums) {
//     let l = 0;
//     let r = nums.length - 1;

//     // while(l <= r) {
//     //     if(nums[l] === nums[l + 1]) l += 2
//     //     else if(nums[r] === nums[r - 1]) r -= 2
//     //     else if(nums[l] === nums[r]) return nums[l]
//     // }

//     let mid = Math.floor(r + (l - r) / 2);
//     while (l < r) {
//         if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
//             return nums[mid];

//         if (nums[mid] === nums[mid + 1]) {
//             if (mid % 2 !== 0) mid = mid - 1;
//             else mid = mid + 2;
//         } else if (nums[mid] === nums[mid - 1]) {
//             if (mid % 2 !== 0) mid = mid + 1;
//             else mid = mid - 2;
//         }
//     }
// };

// let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let maxCap = 0

// maxCap = weights.reduce((acc,curr) => acc += curr,maxCap)
// console.log(maxCap)

// var generate = function (numRows) {
//     if (numRows == 1) return [[1]]
//     if (numRows == 2) return [[1], [1, 1]]

//     let result = []
//     result.push([1], [1, 1])
//     for (let i = 1; i < numRows - 1; i++) {
//         result.push([1])

//         for (let j = 0; j < result[i].length - 1; j++) {
//             let sum = result[i][j] + result[i][j + 1]
//             result[i + 1].push(sum)
//         }

//         result[i + 1].push(1)
//     }
//     return result
// };

// var countAndSay = function (n) {
//     if(n === 1) return "1"
//     let res = "1"
//     let c = 1

//     for (let i = 0; i < n - 1; i++) {
//         res = say(res)
//     }

//     function say(s) {
//         let temp = s
//         let t = ""
//         for (let i = 0; i < temp.length; i++) {
//             if (temp[i] !== temp[i + 1]) {
//                 t += c.toString() + temp[i]
//                 c = 1
//                 continue
//             }
//             else c++
//         }
//         return t
//     }
//     return res
// };

// var maxProfit = function (prices) {
//     // let max = 0

//     // for (let i = 0; i < prices.length; i++) {
//     //     for (let j = i + 1; j < prices.length; j++) {
//     //         let profit = prices[i] > prices[j] ? prices[i] - prices[j] : prices[j] - prices[i]
//     //         if (profit >= prices[i] && prices[j] !== 0) max = Math.max(max, profit)
//     //     }
//     // }
//     // return max

//     let l = 0
//     let r = 1
//     let max = 0

//     while (r < prices.length) {
//         if (prices[l] < prices[r]) {
//             let profit = prices[r] - prices[l]
//             max = Math.max(max, profit)
//         }
//         else {
//             l = r
//         }
//         r++
//     }
//     return max
// };

// const ht = new Map()

// var longestCommonPrefix = function (strs) {
//     if (strs.length <= 1 || strs[0] === "") return strs[0]
//     let res = ""
//     let count = 0
//     let j
//     let flag = false

//     while (count < strs[0].length) {
//         let temp = strs[0][count]
//         for (j = 1; j < strs.length; j++) {
//             if (temp !== strs[j][count]) {
//                 flag = true
//                 break
//             }
//         }
//         if (flag) break
//         count++
//         res += temp
//     }

//     if (!res) return ""
//     return res
// };
// console.log(longestCommonPrefix(["dog", "racecar", "car"]))

// var isValid = function(s) {
//     let st = []
//     let ht = {")":"(","}":"{","]":"["}

//     for(let i = 0; i < s.length; i++) {
//         if(ht[s[i]]) {
//            if(st.pop() !== ht[s[i]]) return false
//         }
//         else {
//             st.push(s[i])
//         }
//     }
//     return st.length < 1
// };

// var maxDepth = function(root) {
//     if(root === null) return 0
//     let s = []
//     s.push(root)
//     let l = 1
//     let r = 1
//     while(s.length > 0) {
//         let curr = s.pop()
//         if(curr.right !== null) {
//             s.push(curr.right)
//             r++
//         }
//         if(curr.left !== null) {
//             s.push(curr.left)
//             l++
//         }
//     }
//     return Math.max(l,r)
//   };

// let s =  [1,2]
// let [p , z] = s
// console.log(p,z)
// console.log(maxDepth([0,2,4,1,null,3,-1,5,1,null,6,null,8]))

// class Node {
//     constructor(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
//         this.val = val;
//         this.isLeaf = isLeaf;
//         this.topLeft = topLeft;
//         this.topRight = topRight;
//         this.bottomLeft = bottomLeft;
//         this.bottomRight = bottomRight;
//     }
// }
// var construct = function (grid) {
//     const dfs = (n, r, c) => {
//         let allSame = true
//         for (let i = 0; i < n; i++) {
//             for (let j = 0; j < n; j++) {
//                 if (grid[r][c] != grid[r + i][c + j]) {
//                     allSame = false
//                     break
//                 }
//             }
//         }
//         if (allSame) {
//             return new Node(grid[r][c], true)
//         }
//         n = n / 2
//         let topleft = dfs(n, r, c)
//         let topright = dfs(n, r, c + n)
//         let bottomleft = dfs(n, r + n, c)
//         let bottomright = dfs(n, r + n, c + n)
//         return new Node(0, false, topleft, topright, bottomleft, bottomright)
//     }
//     return dfs(grid.length, 0, 0)
// };

// console.log(construct([[1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0]]))

// var groupAnagrams = function(strs) {
//     let result = []
//     let temp
//     for (let i = 0; i < strs.length; i++) {
//         for(let c = 0; c < result.length; c++) {
//             if(result[c].includes(strs[i])) {
//                 temp = true
//                 break
//             }
//             else  {
//                 temp = false

//             }
//         }
//         if (temp) continue
//         result.push([])
//         let s1 = strs[i].split("").sort().join("")
//         result[result.length - 1].push(strs[i])
//         for (let j = i + 1; j < strs.length; j++) {
//             let s2 = strs[j].split("").sort().join("")
//             if (s1 === s2) result[result.length - 1].push(strs[j])
//         }
//     }
//     return result
// };
// console.log(groupAnagrams())

// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// const l1 = new ListNode(1);
// const l2 = new ListNode(1);
// const l3 = new ListNode(2);
// const l4 = new ListNode(3);
// const l5 = new ListNode(3);

// l1.next = l2;
// l2.next = l3;
// l3.next = l4;
// l4.next = l5;

// var mergeTwoLists = function (list1, list2) {
//     if (list1 === null && list2 === null) return null
//     if (list1 == null) return list2
//     if (list2 == null) return list1

//     let curr1 = list1
//     let curr2 = list2
//     let s = []
//     let sortlist = new ListNode()
//     let newlist = sortlist

//     while (curr1 !== null || curr2 !== null) {
//         if (curr1 == null && curr2) {
//             s.push(curr2.val)
//         }
//         else if (curr1 && curr2 == null) {
//             s.push(curr1.val)
//         }
//         else if (curr1.val <= curr2.val) {
//             s.push(curr1.val)
//             s.push(curr2.val)
//         }
//         else {
//             s.push(curr2.val)
//             s.push(curr1.val)
//         }
//         if (curr1 !== null) curr1 = curr1.next
//         if (curr2 !== null) curr2 = curr2.next
//     }

//     for (let i = 0; i < s.length; i++) {
//         sortlist.next = new ListNode(s[i])
//         sortlist = sortlist.next
//     }
//     return newlist.next
// }

// let arr = [-10,-7,-10,-9,-4,1,6,6]
// function sort(arr){
//     for(var i = 0; i < arr.length; i++){
//       var min = i;
//       for(var j = i+1; j < arr.length; j++){
//         if(arr[j] < arr[min]){
//          min = j;
//         }
//       }
//       var tmp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = tmp;
//     }
//     return arr;
//   };
// console.log(sort(arr))

// console.log(mergeTwoLists(l1, l4))

// var deleteDuplicates = function (head) {
//     let curr = head

//     while (curr !== null) {
//         if (curr.next !== null && curr.next.val === curr.val) {
//             curr.next = curr.next.next
//         }
//         else curr = curr.next
//     }
//     return head
// };

// console.log(deleteDuplicates(l1))

// const mergeSort = (arr) => {
//     if (arr.length === 1) return arr
//     let mid = Math.floor(arr.length / 2)

//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid, arr.length))

//     return merge(left, right)
// }

// function merge(l, r) {
//     let m = []

//     let i = 0
//     let j = 0

//     while (i < l.length && j < r.length) {
//         if (l[i] < r[j]) {
//             m.push(l[i])
//             i++
//         }
//         else {
//             m.push(r[j])
//             j++
//         }
//     }

//     while (i < l.length) {
//         m.push(l[i])
//         i++
//     }
//     while (j < r.length) {
//         m.push(r[j])
//         j++
//     }
//     return m
// }

// let arr = [1,3,2,5,7]

// var backspaceCompare = function (s, t) {
//     return backSpace(s) === backSpace(t)
// };

// function backSpace(st) {
//     let s = []
//     let _st = st.split("")
//     for (let i = 0; i < _st.length; i++) {
//         if (_st[i] !== "#") s.push(_st[i])
//         else s.pop()
//     }
//     return s.join("")
// }

// let s = "ab#c"
// let t = "ad#c"
// console.log(backspaceCompare(s, t))

// var compress = function (chars) {
//     let s = ""
//     let l = 0
//     let r = 1
//     let i = 1

//     while (r <= chars.length) {
//         if (chars[l] === chars[r]) {
//             r++
//             i++
//         }
//         else {
//             if (i > 1) {
//                 s += chars[l]
//                 s += i.toString()
//             }
//             else s += chars[l]
//             l = r
//             r = l + 1
//             i = 1
//         }
//     }
//     let res = s.split("")
//     chars.unshift(...res)
//     return res.length
// };

// let arr = ["a", "a", "b", "b", "c", "c", "c"]

// console.log(compress(arr))

// var strStr = function (haystack, needle) {
//     let l = 0;
//     let r = 0;
//     let c = 0;
//     let temp = 0;
//     while (l <= haystack.length) {
//         if (haystack[temp] === needle[r] && c < needle.length) {
//             temp++;
//             r++;
//             c++;
//         } else if (c >= needle.length) {
//             return Math.max(temp, needle.length) - Math.min(needle.length, temp);
//         } else if (haystack[temp] !== needle[r]) {
//             r = 0;
//             c = 0;
//             l++;
//             temp = l;
//         }
//     }
//     return -1;
// }

// console.log(strStr("aaa", "aaaa"));

