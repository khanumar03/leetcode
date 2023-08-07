let str1 = "OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO";
let str2 = "OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO";

// var gcdOfStrings = function (str1, str2) {
//   if (str1.substring(0, str2.length) === str2) {
//     if (str1[str2.length] === str1[0]) {
//       return str1.substring(str2.length, str1.length);
//     }
//   }
//   return "";
// };
// console.log(str1.substring(0, str2.length))
// console.log(str1[str2.length] === str1[0])
// console.log(str1.substring(str2.length, str1.length))
// console.log(gcdOfStrings(str1,str2))
// let result = str1[0];
// for (let i = 0; i < str2.length; i++) {
//   if (result[0] === str1[i] && i !== 0) break;
//   if (str2[i] === str1[i] && i !== 0) {
//     result += str2[i];
//   }
// }
// console.log(str1.includes("X"));
// console.log(str2[result.length - 1]);
// console.log(result[0]);
// let s = (str1 += 0);
// console.log(s);
// var gcdOfStrings = function (str1, str2) {
//     if (str1 + str2 !== str2 + str1) return "";
//     if (str1.length % str2.length === 0 && str1.length >= str2.length)
//         return str2;
//     let result = str1[0];
//     for (let i = 0; i < str2.length; i++) {
//         if (str1[i] == 0 && i !== 0) result += str1[i];
//         if (result[0] === str1[i] && i !== 0) break;
//         if (str2[i] == str1[i] && i !== 0) {
//             result += str2[i];
//         }
//     }
//     return result;

//     let temp = str1.substring(str2.length,str1.length - 1)
//   if(str1.length >= str2.length) {
//       return str2.includes(temp) ? result  :  ""
//   }
//   return str1.includes(result) ? result  : "
// };
// console.log(gcdOfStrings(str1, str2))

// var numOfSubarrays = function (arr) {
//     let result = []
//     let c = 0
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i])
//         for(let j = i + 1; j < arr.length; j++){
//             let temp =  result[result.length - 1] + arr[j]
//             result.push(temp)
//         }
//     }
//     console.log(result)
//     for(let i = 0; i < result.length; i++ )  {
//         if(result[i] % 2 !== 0) c++
//     }
//     return c
// };

// let s = "anagram"
// var isAnagram = function(s, t) {
//     if(s.length  !== t.length) return false
//     let a1 = s.split("").sort()
//     let a2 = t.split("").sort()
//     for(let i = 0; i < a1.length; i++) {
//         if(a1[i] !== a2[i]) return false
//     }
//     return true
// };


// var groupAnagrams = function (strs) {
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

// var addToArrayForm = function(num, k) {
//     let nums =  (BigInt(num.join(""))) + (BigInt(k))
//     // return nums
//     return nums.toString().split("").map(Number)
// };

// var addBinary = function (a, b) {
//     if (a.length === b.length) {
//         let left1 = a.length - 1
//         let left2 = b.length - 1
//         let result = ""
//         let carry = 0
//         while (left1 >= 0 && left2 >= 0) {
//             let temp = (a[left1] ^ b[left2]) ^ carry
//             result += temp.toString()
//             // if (a[left1] === "1" && b[left2] === "1") {
//             //     carry = a[left1] | b[left2]
//             // } else {
//             //     carry = 0
//             // }
//             carry =  a[left1] & b[left2] === 0 ? 1 : 0
//             left1--
//             left2--
//         }
//         if (carry === 1) {
//             result += "1"
//         }
//         return result.split("").reverse().join("")
//     }
//     if (a.length > b.length) {
//         let arr = b.split("")
//         for (let i = 0; i < a.length - b.length; i++) {
//             arr.unshift("0")
//         }
//         let cb = arr.join("")
//         let left1 = a.length - 1
//         let left2 = cb.length - 1
//         let result = ""
//         let carry = 0
//         while (left1 >= 0 && left2 >= 0) {
//             let temp = (a[left1] ^ cb[left2]) ^ carry
//             result += temp.toString()
//             if (a[left1] === "1" && cb[left2] === "1") {
//                 carry = a[left1] | cb[left2]
//             }
//             if (!(a[left1] === "1" && cb[left2] === "1") && left1 !== 0) carry = 0
//             left1--
//             left2--
//         }
//         if (carry === 1) {
//             result += "1"
//         }
//         return result.split("").reverse().join("")
//     }
//     let arr = a.split("")
//     for (let i = 0; i < b.length - a.length; i++) {
//         arr.unshift("0")
//     }
//     let ca = arr.join("")
//     let left1 = ca.length - 1
//     let left2 = b.length - 1
//     let result = ""
//     let carry = 0
//     while (left1 >= 0 && left2 >= 0) {
//         let temp = (ca[left1] ^ b[left2]) ^ carry
//         result += temp.toString()
//         if (ca[left1] === "1" && b[left2] === "1") {
//             carry = ca[left1] | b[left2]
//         }
//         if (!(ca[left1] === "1" && b[left2] === "1") && carry ===0) carry = 0
//         left1--
//         left2--
//     }
//     if (carry === 1) {
//         result += "1"
//     }
//     return result.split("").reverse().join("")
// };

// var addBinary = function(a, b) {

//     let i = a.length - 1;
//     let j = b.length - 1;
//     let carry = 0;
//     let res = ""
//     while(i >= 0 || j >= 0){
//         let sum = carry;
//         if(i >= 0){
//             sum += a.charAt(i) - '0';
//             i--;
//         }
//         if(j >= 0){ 
//             sum += b.charAt(j) - '0';
//             j--;
//         }
//         carry = sum > 1 ? 1 : 0;
//         res += Math.floor((sum % 2)).toString();
//     }
//     if(carry != 0){ 
//         res += carry.toString();
//     }
//     return res.split("").reverse().join("");
// };

// let arr =  ["0",0]
// console.log(arr.indexOf("0"))


// var wordPattern = function(pattern, s) {
//     let p = pattern.split('');
//   let str = s.split(' ');
//   let r1 = ''
//   for (let i = 0; i < p.length; i++) {
//     r1 += p.indexOf(p[i]);
//   }
//   let r2 = ''
//   for (let i = 0; i < str.length; i++) {
//     r2 += str.indexOf(str[i]);
//   }
//   return r1 === r2;
// };

// let r  = new Map()
// r.set("a","dog")
// r.set("a","cat")
// r.set("a","cat")
// // if(r.has("a"))  {
// //     let s = r.get("a")
// //     console.log(s)
// // }
// r.set("a","dog")
// r.forEach((v,k) => {
//     if(k === "a") {
//         if(v !== "cat" )  console.log(false) 
//     }
//     console.log(k,v)
// })

// var maxDepth = function(root) {
//   let node  = {}
//   let s = new Set()
//   for(let i = 0; i < root.lengthl; i++)  {
//       if(root[i]  === null) continue
//       for(let j = 1; j < root.length; j++) {

//       }
//   }
//   return s
// };

// let myAtoi = function(s) {
//   let rm = s.split("").filter((x) => !/[a-zA-Z]/.test(x)).filter((x) => x  !== " ")
//   let new_s  = rm.join("")
//   console.log(parseInt(".1"))
//   for(let i =  0; i < new_s.length; i++)  {
//     if((s[i] === "-" || s[i] === "+") && (s[i + 1] ===  "-" || s[i]  === "+")) return 0
//     if(s[i] === "." && /[0-9]/.test(s[i - 1])) {
//       return parseInt(new_s)
//   }}
//   let pow1 = -(Math.pow(2,31))
//   let pow2 =  (Math.pow(2,31) - 1)
//   if(pow1 > parseInt(new_s)) return pow1
//   if(pow2 < parseInt(new_s)) return pow2
//   return parseInt(new_s)
// };

// var myAtoi1 = function(s) {
//   let i = 0;
//   let sign = 1;
//   let res = 0;
//   let len = s.length;
//   let INT_MAX = 2147483647;
//   let INT_MIN = - INT_MAX - 1;

//   // skip all space
//   while (s[i] === ' ') i++;

//   // check sign
//   if (s[i] === '+' || s[i] === '-') {
//     sign = s[i] === '+' ? 1 : -1;
//     i++;
//   }

//   while (s[i] >= '0' && s[i] <= '9') {
//     res = (res * 10) + (s[i] - 0);
//     if (sign === 1 && res > INT_MAX) return INT_MAX;
//     if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
//     i++;
//   }

//   return res * sign;
// };

// console.log(myAtoi1("  -0012a42"))

// console.log(myAtoi("3.16898"))
// console.log(parseInt("-0032"))
// console.log("2" + "3" )

// let s = "    sds  "
// console.log(/^[\s]+$/.test(s))

// var removeDuplicates = function(nums) {

// };

class Node {
  constructor(val) {
    this.val = val
    this.right = null
    this.left = null
  }
}

const a = new Node(69)
const b = new Node(3)
const c = new Node(72)
const d = new Node(61)
const e = new Node(47)
// const f = new Node("f")
// const g = new Node("g")
// const h = new Node("h")
// const i = new Node("i")
// const j = new Node("j")

a.right = c
a.left = b
b.right = d
d.left = e





// var maxDepth = function(root) {
//   let s = []
//   s.push(root)
//   let l = 0
//   let r = 0
//   while(s.length > 0) {
//       let curr = s.pop()
//       if(curr.right !== null) {
//           s.push(curr.right)
//           r++
//       }
//       if(curr.left !== null) {
//           s.push(curr.left)
//           l++
//       }
//   }
//   return Math.min(l,r) + 1
// };

// var minDiffInBST = function (root) {
//   let s = []
//   let arr = []
//   s.push(root)
//   while (s.length > 0) {
//     let curr = s.pop()
//     arr.push(curr.val)
//     if (curr.right !== null) {
//       s.push(curr.right)
//     }
//     if (curr.left !== null) {
//       s.push(curr.left)
//     }
//   }
//   let sarr = arr.sort()
//   let min = Infinity
//   for(let i = 0;  i < sarr.length - 1; i++) {
//     let temp = sarr[i] - sarr[i + 1]  
//     min = Math.min(min,temp < 1 ? Math.abs(temp) : temp)
//   }
//   return min
// }

// var reverse = function(x) {
//   if(x < -(Math.pow(2,31) || x > (Math.pow(2,31) - 1))) return 0
//   let result =  ""
//   let s = x.toString()
//   console.log(s)
//   if(s[0] === "-") {
//       result +=  "-"
//       let temp = s.split("").reverse()
//       result += temp.join("")
//       return parseInt(result)
//   }
//   let temp = s.split("").reverse()
//   result += temp.join("")
//   return parseInt(result)
// };

// console.log(-parseInt("9646324351") > -(Math.pow(2,31))) 
// console.log(-(Math.pow(2,31))) 

// console.log(reverse(123))



// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
