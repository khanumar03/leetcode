// var countSubarrays = function (nums, minK, maxK) {
//   if (!nums.includes(minK) || !nums.includes(maxK)) return 0;
//   let i = 0;
//   let j = 1;
//   let c = 0;
//   let b = false;
//   let checkcurrIisminandmax = false;

//   while (i <= nums.length - 1) {
//     let curr = nums.slice(i, j + 1);
//     if (checkcurrIisminandmax && nums[i] == minK && nums[i] == maxK) {
//       console.log(curr);
//       c++;
//     }
//     checkcurrIisminandmax = false;
//     for (let p = 0; p < curr.length; p++) {
//       if (curr[p] < minK || curr[p] > maxK) {
//         b = true;
//         checkcurrIisminandmax = true;
//         i++;
//         j = i + 1;
//         break;
//       }
//     }
//     if (!b) {
//       if (curr.includes(minK) && curr.includes(maxK)) {
//         console.log(curr);
//         c++;
//       }
//     }
//     if (j >= nums.length - 1) {
//       i++;
//       j = i + 1;
//       checkcurrIisminandmax = true;
//       b = false;
//       continue;
//     }
//     if (!b) j++;
//     b = false;
//   }
//   return c;
// };

// var countSubarraysA = function (nums, minK, maxK) {

//   let maxPosition = -1;
//   let minPosition = -1;
//   let leftBound = -1;
//   let answer = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < minK || nums[i] > maxK) {
//       leftBound = i;
//     }
//     if (nums[i] == minK) minPosition = i;
//     if (nums[i] == maxK) maxPosition = i;
//     let a = Math.min(maxPosition, minPosition) - leftBound;
//     if (a > 0) answer += a;

//   }
//   return answer;
// };

// let arr1 = [1, 3, 5, 2, 7, 5];
// console.log(countSubarraysA(arr1, 1, 5));

// var minJumps = function (arr) {
//   let n = arr.length - 1
//   let step = 0
//   if (n <= 1) return step
//   let map = new Map()
//   let i = 0
//   let j = 0

//   for (let i = 0; i <= n; i++) {
//     if (!map.has(arr[i])) {
//       map.set(arr[i], [])
//     }
//     let curr = map.get(arr[i])
//     curr.push(i)
//     map.set(arr[i], curr)
//   }

//   while (true) {
//   }
//   return step
// };

// let arr = [100, -23, -23, 23, 23, 23]
// console.log(minJumps(arr))

// var rotate = function (matrix) {
//   let temp = matrix.splice(0, matrix.length + 1).reverse()
//   let j = 0
//   let flag = true

//   for (let i = 0; i < temp.length; i++) {
//     matrix.push([])
//     while (j == i) {
//       for (let p = 0; p < temp.length; p++) {
//         matrix[i].push(temp[p][j])

//       }
//       if (flag) {
//         j++
//         break
//       }
//     }
//   }
// };

// let marr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(rotate(marr))

// var findKthPositive = function (arr, k) {
//   // let count = 0;
//   // for (let i = 1; i > 0; i++) {
//   //   if (!arr.includes(i)) count++;
//   //   if (count == k) return i;
//   // }

//   let l = 0
//   let r = arr.length
//   while(l < r) {
//     let mid = Math.floor(r + (l - r) / 2)
//     if(arr[mid] - mid > k) r = mid
//     else l = mid + 1
//   }
//   return l + k
// };

// let arr = [1,2,3,4]
// console.log(findKthPositive(arr, 5));

// var minimumTime = function (time, totalTrips) {
//   // console.log(time.length)
//   // let t = 1;
//   // for (let i = 1; i > 0; i++) {
//   //   if (sum(t, time) >= totalTrips) return t;
//   //   t++;
//   // }
//   let l = 1
//   let r = 100000000000000

//   while (l < r) {
//     let mid = Math.floor(r + (l - r) / 2)

//     if (sum(mid, time) >= totalTrips) r = mid
//     else l = mid + 1
//   }
//   return l
// };

// let sum = (num, time) => {
//   let total = time
//     .map((x) => Math.floor(num / x))
//     .reduce((acc, curr) => (acc += curr), 0);
//   return total;
// };

// let arr = [5, 10, 10]
// console.log(minimumTime(arr, 9));

// var minEatingSpeed = function (piles, h) {
//   let l = 1;
//   let r = piles.reduce((acc, curr) => (acc = Math.max(acc, curr)), 0);

//   while (l < r) {
//     let mid = Math.floor(r + (l - r) / 2);
//     let t = sum(mid, piles);
//     if (t > h) l = mid + 1
//     else r = mid
//   }
//   return l;
// };

// let sum = (num, time) => {
//   let total = time
//     .map((x) => Math.ceil(x / num))
//     .reduce((acc, curr) => (acc += curr), 0);
//   return total;
// };

// let arr = [3,6,7,11];
// console.log(minEatingSpeed(arr, 8));

// var isPowerOfFour = function(n) {
//   let i = 0
//   while(i > -1) {
//       let pow = Math.pow(4,i)
//       if(pow == n) return true
//       else if(pow > n) return false
//       i++
//   }
// };

// var isPowerOfFour = function(n) {
//   return  recurr(0,n)
// };

// function recurr(num,n) {
//   if(Math.pow(4,num) == n) return true
//   else if(Math.pow(4,num) > n) return false
//   return recurr(num + 1,n)
// }
// console.log(isPowerOfFour(16))

// var twoSum = function (nums, target) {
//   let hm = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let s = target - nums[i];
//     if(!hm.has(s)) hm.set(nums[i],i)
//     else return [hm.get(s),i]
//   }
// };

// let nums =  [2,7,11,15];
// console.log(twoSum(nums, 9));

// class ListNode {
//   constructor(val) {
//     this.val = val
//     this.next = null
//   }
// }

// const a = new ListNode(1)
// const b = new ListNode(2)
// const c = new ListNode(3)
// const d = new ListNode(1)
// const e = new ListNode(5)
// const f = new ListNode(6)
// const g = new ListNode(2)

// a.next = b
// b.next = c
// d.next = e
// e.next = f
// f.next = c

// var detectCycle = function (head) {
//   let hm = new Set()
//   let curr = head
//   while (curr !== null) {
//     if (hm.has(curr)) return true
//     else {
//       hm.add(curr)
//       curr = curr.next
//     }
//   }
//   return false
// };

// var hasCycle = function(head) {
//   let curr = head
//   while (curr && curr.next) {
//       head = head.next
//       curr = curr.next.next
//       if(curr === head) {
//         return true
//       }
//   }
//   return false
// };

// console.log(hasCycle(a))

// let len = 0
// let ln
// var Solution = function (head) {
//   ln = head
//   let temp = head
//   while (temp !== null) {
//     len++
//     temp = temp.next
//   }
// };
// Solution.prototype.getRandom = function () {
//   let random = Math.round(Math.random()) % len
//   let temp = ln
//   for (let i = 0; i < random; i++) {
//     temp = temp.next
//   }
//   return temp.val
// };

// let s = new Solution(a)

// for(let i  = 0; i < 5; i++) {
//   console.log(s.getRandom())
// }

// console.log(Math.round(Math.random()))

// class TreeNode {
//   constructor(val) {
//     this.val = val
//     this.left = null
//     this.right = null
//   }
// }

// var sortedArrayToBST = function (nums) {
//   function helper(l, r) {
//     if (l > r) return null
//     let mid = Math.floor((r + l) / 2)
//     console.log(l, mid, r)
//     let root = new TreeNode(nums[mid])
//     console.log(root)
//     root.left = helper(l, mid - 1)
//     root.right = helper(mid + 1, r)
//     return root
//   }
//   return helper(0, nums.length - 1)
// };

// let arr = [-10, -3, 0, 5, 9, 10]
// console.log(sortedArrayToBST(arr))

// class ListNode {
//   constructor(val) {
//     this.val = val
//     this.next = null
//   }
// }

// const a = new ListNode(1)
// const b = new ListNode(2)
// const c = new ListNode(3)
// const d = new ListNode(4)
// const e = new ListNode(5)

// a.next = b
// b.next = c
// c.next = d
// d.next = e

// var middleNode = function (head) {
//   let slow = head
//   let fast = head
//   while (fast !== null) {
//     if (fast.next == null) return slow
//     fast = fast.next.next
//     slow = slow.next
//   }
//   return slow
// };

// console.log(middleNode(a))

// const fib = (n) => {
//   if (n == 1) return
//   console.log("!" + (n - 1))
//   fib(n - 1)
//   return n
// }

// console.log(fib(5))

// var minJumps = function (arr) {
//   let q = [];
//   let step = 0;
//   if (arr.length <= 1) return step;
//   let visited = new Array(arr.length - 1).fill(false);
//   let hm = new Map();

//   for (let i in arr) {
//     if (!hm.has(arr[i])) hm.set(arr[i], [parseInt(i)]);
//     else hm.get(arr[i]).push(parseInt(i));
//   }

//   visited[0] = true;
//   q.unshift(0);

//   while (q.length > 0) {
//     let s = q.length;
//     while (s--) {
//       let curr = q.pop();

//       if (curr == arr.length - 1) return step;

//       let l = curr - 1;
//       let r = curr + 1;

//       if (l >= 0 && !visited[l]) {
//         q.unshift(l);
//         visited[l] = true;
//       }

//       if (r <= arr.length - 1 && !visited[r]) {
//         q.unshift(r);
//         visited[r] = true;
//       }

//       if (hm.has(arr[curr])) {
//         for (let i of hm.get(arr[curr])) {
//           if (!visited[i]) {
//             q.unshift(i);
//             visited[i] = true;
//           }
//         }
//         hm.delete(arr[curr]);
//       }
//     }
//     step++;
//   }
//   return -1;
// };

// let arr = [1,2,3,7,5,1,1];
// console.log(minJumps(arr));

// var countSubarrays = function (nums, minK, maxK) {
//   let minPosition = -1;
//   let maxPosition = -1;
//   let leftBound = -1;
//   let answer = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > maxK || nums[i] < minK) leftBound = i;
//     if (nums[i] == minK) minPosition = i;
//     if (nums[i] == maxK) maxPosition = i;
//     answer += Math.max(0, Math.floor(Math.min(minPosition, maxPosition) - leftBound))
//   }
//   return answer;
// };

// let arr = [-1, 0, 2, 5, 6, 7];
// console.log(countSubarrays(arr, 0, 5));

// class ListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const a = new ListNode(1);
// const b = new ListNode(4);
// const c = new ListNode(5);

// a.next = b;
// b.next = c;

// const d = new ListNode(1);
// const e = new ListNode(3);
// const f = new ListNode(4);

// d.next = e;
// e.next = f;

// const g = new ListNode(2);
// const h = new ListNode(6);

// g.next = h;

// var mergeKLists = function (lists) {
//   let arr = [];
//   for (let i = 0; i < lists.length; i++) {
//     let curr = lists[i];
//     while (curr !== null) {
//       arr.push(curr.val);
//       curr = curr.next;
//     }
//   }
//   let i = arr.sort((a,b) => a - b).length - 1
//   let sortlist = new ListNode(0)
//   let res = sortlist
//   let j = 0
//   while (j <= i) {
//     sortlist.next = new ListNode(arr[j])
//     sortlist = sortlist.next
//     j++
//   }
//   return res.next
// };

// let arr = [a, d, g];
// console.log(mergeKLists(arr));

let then = Date.now();
// start
// var findRelativeRanks = function (score) {
//   let hm = new Map();
//   let arr = [...score].sort((a, b) => a - b).reverse();

//   for (let i = 0; i < arr.length; i++) {
//     if (i <= 2) {
//       if (i == 0) hm.set(arr[i], "Gold Medal");
//       else if (i == 1) hm.set(arr[i], "Silver Medal");
//       else if (i == 2) hm.set(arr[i], "Bronze Medal");
//     }
//     else hm.set(arr[i], (i + 1).toString());
//   }
//   let res = []
//   for (let i in score) {
//     res.push(hm.get(score[i]))
//   }
//   return res
// };

// let arr = [10, 3, 8, 9, 4];
// console.log(findRelativeRanks(arr));

// var intToRoman = function (num) {
//   let hm = new Map();
//   hm.set(1, "I");
//   hm.set(2, "II");
//   hm.set(3, "III");
//   hm.set(4, "IV");
//   hm.set(5, "V");
//   hm.set(6, "VI");
//   hm.set(7, "VII");
//   hm.set(8, "VIII");
//   hm.set(9, "IX");
//   hm.set(10, "X");
//   hm.set(20, "XX");
//   hm.set(30, "XXX");
//   hm.set(40, "XL");
//   hm.set(50, "L");
//   hm.set(60, "LX");
//   hm.set(70, "LXX");
//   hm.set(80, "LXXX");
//   hm.set(90, "XC");
//   hm.set(100, "C");
//   hm.set(400, "CD");
//   hm.set(500, "D");
//   hm.set(900, "CM");
//   hm.set(1000, "M");

//   if (hm.has(num)) return hm.get(num);

//   let temp = num.toString();
//   let res = "";
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] == "0")  {
//       continue
//     }
//     if (temp.substring(i, temp.length).length > 3) {
//       for (let j = 0; j < temp[i]; j++) {
//         res += hm.get(1000);
//       }
//     } else if (temp.substring(i, temp.length).length > 2) {
//       let temp2 = "";
//       for (let x = 0; x < parseInt(temp[i]); x++) {
//         if (x == 3) temp2 = hm.get(400);
//         else if (x == 4) temp2 = hm.get(500);
//         else if (x == 8) temp2 = hm.get(900);
//         else temp2 += hm.get(100);
//       }
//       res += temp2;
//     } else if (temp.substring(i, temp.length).length > 1) {
//       if (temp[i + 1] == "0") {
//         res += hm.get(parseInt(temp.substring(i, temp.length)));
//         i++;
//       } else res += hm.get(parseInt(temp[i] + "0"));
//     } else res += hm.get(parseInt(temp[i]));
//   }
//   return res;
// };

// console.log(intToRoman(101));

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

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;

// b.right = e;
// b.left = d;
// c.right = g;
// c.left = f;
// e.right = h;
// e.left = i;
// f.right = j;
// f.left = k;

// var isSymmetric = function (root) {
//   if (root.right == null && root.left == null) return true;
//   if (root.right == null || root.left == null) return false;

//   let s = [root.left, root.right];
//   while (s.length > 0) {
//     let curr1 = s.pop();
//     let curr2 = s.pop();

//     if (curr1.val !== curr2.val) return false;

//     if (
//       (curr1.right !== null && curr2.left == null) ||
//       (curr1.right == null && curr2.left !== null)
//     )
//       return false;
//     if (
//       (curr1.left !== null && curr2.right == null) ||
//       (curr1.left == null && curr2.right !== null)
//     )
//       return false;

//     if (curr1.right !== null && curr2.left !== null) {
//       s.unshift(curr2.left);
//       s.unshift(curr1.right);
//     }
//     if (curr1.left !== null && curr2.right !== null) {
//       s.unshift(curr2.right);
//       s.unshift(curr1.left);
//     }
//   }

//   return true;
// };

// console.log(isSymmetric(a))

// const sumNumbers = function (root, num = 0) {
//   if (root == null) return 0;
//   num = num * 10 + root.val;
//   if (!root.left && !root.right) {
//     console.log(num);
//     return num;
//   }
//   return sumNumbers(root.left, num) + sumNumbers(root.right, num)
// }

var longestPalindrome = function (s) {
  let maxlp  = ""
  if (s.length <= 1) return s;
  let l = 0;
  let r = 1;
  while (l < s.length) {
    let ls = s.substring(l, r + 1);
    let lp = ls.split("").reverse().join("");
    if (lp == ls) {
      if (lp.length > maxlp.length) maxlp = ls;
    }
    if (r >= s.length - 1) {
      l++;
      r = l + 1;
      continue;
    }
    r++;
  }
  return maxlp;
};

let str ="bb";

console.log(longestPalindrome(str));

class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);
const f = new TreeNode(6);
const g = new TreeNode(7);

a.left = b;
1;
a.right = c; //  2       3
b.left = d; // 4   5   6   7
b.right = e;
c.left = f;
c.right = g;

var isCompleteTree = function (root) {
  let s = [root];
  let arr = [];
  while (s.length > 0) {
    let curr = s.pop();
    if(curr == null && s.includes(TreeNode))  return false
    if (curr == null) {
      arr.push(curr);
      continue;
    }
    arr.push(curr.val);
    if (curr.left == null && curr.right == null) continue;
    s.unshift(curr.left);
    s.unshift(curr.right);
  }
  return arr.includes(null) ? false : true;
};

console.log(isCompleteTree(a));

// end
let now = Date.now();
console.log(now - then + "ms");
