import { ListNode } from "./mypackage.js";

// 1
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = Math.trunc((r + l) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
};

// let arr = [-1, 0, 3, 5, 9, 12];
// console.log(search(arr, 5));

var moveZeroes = function (nums) {
  let i = 0;
  let j = i + 1;

  while (j < nums.length) {
    if (nums[i] == 0 && nums[j] == 0) {
      j++;
      continue;
    }
    if (nums[i] == 0 && nums[j] !== 0 && j < nums.length) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      i++;
      j++;
      continue;
    }
    i++;
    j++;
  }
};

// let arr = [0, 1, 0, 3, 12];
// console.log(moveZeroes(arr));

var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (sum == target) return [i + 1, j + 1];
    if (sum > target) j--;
    else i++;
  }
};
// let arr = [-1,0];
// console.log(twoSum(arr, -1));

var reverseString = function (s) {
  // rs(0, s);
  let l = 0;
  let r = s.length - 1;

  if (l == r) return s;

  while (l < r) {
    const temp = s[r];
    s[r] = s[l];
    s[l] = temp;
    l++;
    r--;
  }
  console.log(s);
};

function rs(r, s) {
  if (r == s.length - 1) return;
  r += 1;
  rs(r, s);
  let temp = s[r];
  let temp2 = s[i];
  if (i < r) {
    s[i++] = temp;
    s[r] = temp2;
  }
}

// let arr = ["H", "a", "n", "n", "a", "h"];
// console.log(reverseString(arr));

// var reverseWords = function(s) {
//   return s.split(" ")
// };

// var coinChange = function (coins, amount) {
//   let dp = Array(amount + 1).fill(-1);
//   let min = mincoins(amount, coins, dp);
//   return min
// };

// function mincoins(n, c, dp) {
//   if (n <= 0) return 0;

//   let ans = Infinity;
//   for (let i = 0; i < c.length; i++) {
//     if (n - c[i] >= 0) {
//       let subAns = 0;
//       if (dp[n - c[i]] !== -1) {
//         subAns = dp[n - c[i]];
//       } else {
//         subAns = mincoins(n - c[i], c, dp);
//       }
//       if (subAns !== Infinity && subAns + 1 < ans) {
//         ans = subAns + 1;
//       }
//     }
//   }
//   return dp[n] = ans;
// }

// let ar = [1, 5, 7];
// console.log(coinChange(ar, 18));

var reverseWords = function (s) {
  let temp = s.split(" ");
  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].split("").reverse().join("");
  }
  return temp.join(" ");
};

// let s = "Let's take LeetCode contest"
// console.log(reverseWords(s))

// var rotate = function (nums, k) {
// for(let i = 0 ; i < k; i++) {
//     let temp = nums.pop()
//     nums.unshift(temp)
// }
// let i = 0
// let j = nums.length - 1

// if (k > nums.length) k = k % nums.length;
// while (t--) {
//   const temp = nums.pop();
//   nums.unshift(temp);
// }
//   nums.reverse();
//   reverse(nums,0,k-1)
//   reverse(nums,k,nums.length-1)
//   function reverse(arrR, s, e) {
//     while (s < e) {
//       const temp = arrR[e];
//       arrR[e] = arrR[s];
//       arrR[s] = temp;
//       s++;
//       e--;
//     }
//   }
//   return nums;
// };

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotate(arr, 3));

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
const f = new ListNode(6);

a.next = b;
b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;


// var middleNode = function (head) {
//   solve(1, head);
//   return s;
//   function solve(i, temp) {
//     if (temp == null) {
//       t = Math.floor(i / 2) ;
//       return;
//     }
//     temp = temp.next;
//     i++;
//     solve(i, temp);
//   }
// };
var removeNthFromEnd = function (head, n) {
};

console.log(removeNthFromEnd(a, 1));
