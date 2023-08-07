var fib = function (n, dp = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n in dp) return dp[n];

  dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
  return dp[n];
};

// console.log(fib(50));

var tribonacci = function (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

// console.log(tribonacci(10));

var minCostClimbingStairs = function (cost) {
  return Math.min(mincost(cost, 0, cost[0]), mincost(cost, 1, cost[1]));
  function mincost(c, jump, minc) {
    if (jump >= c.length) return minc;
    let sum = minc + (jump + 1 >= c.length ? 0 : c[jump + 1]);
    let sum2 = minc + (jump + 2 >= c.length ? 0 : c[jump + 2]);
    return Math.min(
      mincost(cost, jump + 1, sum),
      mincost(cost, jump + 2, sum2)
    );
  }
};

// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

var minInsertions = function(s) {
  let dp = Array(501)
  for(let i  = 0; i < dp.length; i++) {
    dp[i] = Array(501).fill(-1)
  }

  return solve(0,s.length -1,s,dp) 

  function solve(start,end,str,t) {
    if(start >= end) return 0

    if(t[start][end] !== -1) return t[start][end]
    if(str[start] === str[end]) return t[start][end] = solve(start + 1, end - 1,str,dp)
    else {
      let left = solve(start,end - 1,str,t) 
      let right = solve(start + 1,end,str,t) 
      t[start][end] = Math.min(left,right)  + 1
    }
    // console.log(dp[start][end])
    return  dp[start][end]
  }

  
}

console.log(minInsertions("leetcode"))