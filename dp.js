import { DSU } from "./mypackage.js";
// var mincostTickets = function (days, costs) {
//   let n = days.length;
//   let dp = Array(n + 1).fill(Infinity);
//   dp[0] = 0;

//   for (let i = 1; i <= n; i++) {
//     dp[i] = dp[i - 1] + costs[0]; // 1-day pass for current day

//     let j = i - 1;
//     while (j >= 0 && days[i - 1] - days[j] < 7) j--;
//     dp[i] = Math.min(dp[i], dp[j + 1] + costs[1]); // 7-day pass for current day

//     j = i - 1;
//     while (j >= 0 && days[i - 1] - days[j] < 30) j--;
//     dp[i] = Math.min(dp[i], dp[j + 1] + costs[2]); // 30-day pass for current day
//   }

//   return dp[n];
// };

// let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31];
// console.log(mincostTickets(days, [2, 7, 15]));

var findCircleNum = function (isConnected) {
  let vis = Array(isConnected.length + 1).fill(false);
  let hm = new Map();
  let n = isConnected.length;
  let countProvince = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!hm.has(i + 1)) hm.set(i + 1, []);
      if (i !== j && isConnected[i][i] == 1 && isConnected[i][j] == 1) {
        hm.get(i + 1).push(j + 1);
      }
    }
  }

  for (let i = 1; i <= isConnected.length; i++) {
    if (!vis[i] && hm.has(i)) {
      dfs(i, vis, hm);
      countProvince++;
    }
  }
  console.log(hm);
  return countProvince;

  function dfs(node, visited, adj) {
    if (!visited[node]) visited[node] = true;
    if (!adj.has(node)) return;
    for (let nei of adj.get(node)) {
      if (!visited[nei]) dfs(nei, visited, adj);
    }
  }
};

let isConnected = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];

// console.log(findCircleNum(isConnected));

// var maxSatisfaction = function (satisfaction) {
//   let sum = 0;
//   let ans = 0;
//   satisfaction.sort((a, b) => a - b);
//   satisfaction.reverse();
//   for (let i = 0; i < satisfaction.length; i++) {
//     if (sum + satisfaction[i] > 0) {
//       ans += sum + satisfaction[i];
//       sum += satisfaction[i];
//     }
//   }
//   return ans;
// };

// let arr = [-2, 5, -1, 0, 3, -3];
// console.log(maxSatisfaction(arr));

// var fib = function (n, m = {}) {
//   if (n in m) return m[n];
//   if (n <= 2) return 1;
//   m[n] = fib(n - 1, m) + fib(n - 2, m);
//   return m[n];
// };

// var climbStairs = function (n) {
//   return count(n);
//   function count(n,memo = {}) {
//     if(n <= 1) return 1
//     if(n in memo) return memo[n]
//     memo[n] = count(n-1,memo) + count(n-2,memo)
//     return memo[n]
//   }
// };

// console.log(climbStairs(10));

var maxUncrossedLines = function (nums1, nums2) {
  let dp = Array(501);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(501).fill(-1);
  }

  return solve(0, 0);

  function solve(i, j) {
    if (i >= nums1.length || j >= nums2.length) return 0;
    if (dp[i][j] !== -1) return dp[i][j];

    if (nums1[i] === nums2[j]) return (dp[i][j] = 1 + solve(i + 1, j + 1));
    else {
      return (dp[i][j] = Math.max(solve(i, j + 1), solve(i + 1, j)));
    }
  }
};

let nums1 = [2, 5, 1, 2, 5];
let nums2 = [10, 5, 2, 1, 5, 2];

// console.log(maxUncrossedLines(nums1, nums2));

var mostPoints = function (questions) {
  let dp = Array(questions.length).fill(-1);

  return solve(0);

  function solve(i) {
    if (i >= questions.length) return 0;

    if (dp[i] !== -1) return dp[i];

    let taken = questions[i][0] + solve(i + questions[i][1] + 1);
    let nottaken = solve(i + 1);
    return (dp[i] = Math.max(taken, nottaken));
  }
};

// console.log(
//   mostPoints([
//     [1, 1],
//     [2, 2],
//     [3, 3],
//     [4, 4],
//     [5, 5],
//   ])
// );

var countGoodStrings = function (low, high, zero, one) {
  let dp = Array(high + 1).fill(-1);
  let M = 1e9 + 7;

  return solve(0);

  function solve(i) {
    if (i > high) return 0;
    let bool = false;
    if (i >= low) bool = true;
    if (dp[i] !== -1) return dp[i];

    let z = solve(i + zero) % M;
    let o = solve(i + one) % M;

    return (dp[i] = (bool + z + o) % M);
  }
};

console.log(countGoodStrings(1000, 1000, 1000, 5000));
