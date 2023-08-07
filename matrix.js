let then = Date.now();

// var minPathSum = function (grid) {
//   let dp = [];
//   for (let i = 0; i < grid.length; i++) {
//     dp.push([]);
//     for (let j = 0; j < grid[0].length; j++) {
//       dp[dp.length - 1].push(-1);
//     }
//   }
//   return solve(grid, 0, 0);
//   function solve(g, i, j) {
//     if (i == g.length - 1 && j == g[0].length - 1) {
//       return grid[i][j];
//     }

//     if (dp[i][j] !== -1) {
//       return dp[i][j];
//     }

//     if (i == g.length - 1) return (dp[i][j] = grid[i][j] + solve(g, i, j + 1));
//     else if (j == g[0].length - 1)
//       return (dp[i][j] = grid[i][j] + solve(g, i + 1, j));
//     else
//       return (dp[i][j] =
//         grid[i][j] + Math.min(solve(g, i + 1, j), solve(g, i, j + 1)));
//   }
//   let  res  = []
//   for (let i = 0; i < grid.length; i++) {
//   }
// };

var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image;
  solve(image, sr, sc, image[sr][sc], color);
  console.log(image);
  function solve(oldimage, s, c, co, newColor) {
    let q = [];
    q.push([s, c]);
    while (q.length > 0) {
      let size = q.length;
      while (size--) {
        let [row, col] = q.pop();
        if (
          row < 0 ||
          col < 0 ||
          row >= oldimage.length ||
          col >= oldimage[0].length ||
          oldimage[row][col] !== co
        ) {
          continue;
        }
        oldimage[row][col] = newColor;
        q.unshift([row - 1, col]);
        q.unshift([row + 1, col]);
        q.unshift([row, col + 1]);
        q.unshift([row, col - 1]);
      }
    }

    // solve(oldimage, s - 1, c, co, newColor);
    // solve(oldimage, s + 1, c, co, newColor);
    // solve(oldimage, s, c + 1, co, newColor);
    // solve(oldimage, s, c - 1, co, newColor);
  }
};

// let arr = [
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1],
// ];
// console.log(floodFill(arr, 1, 1, 2));

var numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "V" || grid[i][j] === "0") continue;
      dfs(grid, i, j);
      count++;
    }
  }
  return count;
  function dfs(g, r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= g.length ||
      c >= g[0].length ||
      g[r][c] === "V" ||
      g[r][c] === "0"
    )
      return;
    g[r][c] = "V";
    dfs(g, r - 1, c);
    dfs(g, r + 1, c);
    dfs(g, r, c + 1);
    dfs(g, r, c - 1);
  }
};

// let grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];

var maxAreaOfIsland = function (grid) {
  let count = 0;
  let temp = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "V" || grid[i][j] === 0) continue;
      dfs(grid, i, j);
      count = Math.max(count, temp);
      temp = 0;
    }
  }
  return count;
  function dfs(g, r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= g.length ||
      c >= g[0].length ||
      g[r][c] === "V" ||
      g[r][c] === 0
    )
      return 0;
    temp++;
    g[r][c] = "V";
    dfs(g, r - 1, c);
    dfs(g, r + 1, c);
    dfs(g, r, c + 1);
    dfs(g, r, c - 1);
  }
};

// let grid1 = [
//   [1, 1, 1, 0, 0],
//   [0, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0],
//   [1, 1, 0, 1, 1],
// ];

// console.log(maxAreaOfIsland(grid1));

var closedIsland = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === true || grid[i][j] === 1) continue;
      if (dfs(grid, i, j)) count++;
    }
  }
  return count;

  function dfs(g, r, c) {
    if (r < 0 || c < 0 || r >= g.length || c >= g[0].length) return false;
    if (g[r][c] === 1 || g[r][c]) return true;
    g[r][c] = true;
    let bool = true;
    let dirx = [0, 1, 0, -1];
    let diry = [-1, 0, 1, 0];
    for (let i = 0; i < 4; i++) {
      let x = r + dirx[i];
      let y = c + diry[i];
      if (!dfs(g, x, y)) bool = false;
    }
    return bool;
  }
};

// let grid = [
//   [1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 0, 0, 0, 0, 1, 1, 0],
//   [1, 0, 1, 0, 1, 1, 1, 0],
//   [1, 0, 0, 0, 0, 1, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1, 0],
// ];

var numEnclaves = function (grid) {
  let count = 0;
  let row = grid.length;
  let col = grid[0].length;
  let temp = 0;
  let check = true;
  let visited = Array(row);
  for (var i = 0; i < row; i++) {
    visited[i] = Array(col).fill(false);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== 0 && !visited[i][j]) {
        dfs(grid, i, j, visited);
        if (check) count += temp;
        check = true;
        temp = 0;
      }
    }
  }
  return count;
  function dfs(g, r, c, vis) {
    if (
      r < 0 ||
      c < 0 ||
      r >= g.length ||
      c >= g[0].length ||
      grid[r][c] === 0
    ) {
      return;
    }
    if (
      g[r][c] === 1 &&
      (r <= 0 || c <= 0 || r >= g.length - 1 || c >= g[0].length - 1)
    ) {
      check = false;
      temp = 0;
    }
    if (check && !vis[r][c]) temp++;
    if (!vis[r][c]) vis[r][c] = true;
    let dirx = [-1, 1, 0, 0];
    let diry = [0, 0, -1, 1];
    for (let i = 0; i < 4; i++) {
      let x = r + dirx[i];
      let y = c + diry[i];
      if (x < 0 || c < 0 || x >= grid.length || c >= grid[0].length) continue;
      if (!vis[x][y]) dfs(g, x, y, vis);
    }
  }
};

// let grid = [
//   [0, 1, 1, 0],
//   [0, 0, 1, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 0],
// ];

// console.log(numEnclaves(grid));

var countSubIslands = function (grid1, grid2) {
  let row = grid2.length;
  let col = grid2[0].length;
  let visited = Array(row);
  for (var i = 0; i < row; i++) {
    visited[i] = Array(col).fill(false);
  }

  let count = 0;
  let bool = true;
  for (let i = 0; i < grid2.length; i++) {
    for (let j = 0; j < grid2[0].length; j++) {
      if (grid2[i][j] !== 0 && !visited[i][j]) {
        dfs(grid2, grid1, i, j, visited);
        if (bool) count++;
        bool = true;
      }
    }
  }
  return count;
  function dfs(g1, g2, r, c, vis) {
    if (
      r < 0 ||
      c < 0 ||
      r >= g1.length ||
      c >= g1[0].length ||
      g1[r][c] === 0 ||
      vis[r][c]
    ) {
      return;
    }
    if (g1[r][c] !== g2[r][c]) bool = false;
    vis[r][c] = true;
    let dirx = [-1, 1, 0, 0];
    let diry = [0, 0, -1, 1];
    for (let i = 0; i < 4; i++) {
      let x = r + dirx[i];
      let y = c + diry[i];
      if (x < 0 || y < 0 || x >= g1.length || y >= g1[0].length) continue;
      if (!vis[x][y]) {
        dfs(g1, g2, x, y, vis);
      }
    }
  }
};

// let grid1s = [
//   [1, 0, 1, 0, 1],
//   [1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1],
//   [1, 0, 1, 0, 1],
// ];
// let grid2s = [
//   [0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1],
//   [0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0],
//   [1, 0, 0, 0, 1],
// ];
// console.log(countSubIslands(grid1s, grid2s));

var islandPerimeter = function (grid) {
  let row = grid.length;
  let col = grid[0].length;

  let visited = Array(row);
  for (let i = 0; i < row; i++) {
    visited[i] = Array(col).fill(false);
  }
  let perimeter = 0;

  let q = [];

  check: for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        q.push([i, j]);
        break check;
      }
    }
  }

  while (q.length > 0) {
    let [r, c] = q.pop();
    if (visited[r][c]) continue;
    visited[r][c] = true;
    let dirx = [-1, 1, 0, 0];
    let diry = [0, 0, -1, 1];
    for (let i = 0; i < 4; i++) {
      let x = r + dirx[i];
      let y = c + diry[i];
      if (x < 0 || y < 0 || x >= row || y >= col) {
        perimeter++;
        continue;
      }
      if (grid[x][y] === 0) {
        perimeter++;
        continue;
      }
      if (!visited[x][y]) q.unshift([x, y]);
    }
  }

  return perimeter;

  // function bfs(r, c, vis) {
  //   if (
  //     r < 0 ||
  //     c < 0 ||
  //     r >= row ||
  //     c >= col ||
  //     grid[r][c] === 0 ||
  //     vis[r][c]
  //   ) {
  //     return;
  //   }
  //   vis[r][c] = true;
  //   let dirx = [-1, 1, 0, 0];
  //   let diry = [0, 0, -1, 1];
  //   for (let i = 0; i < 4; i++) {
  //     let x = r + dirx[i];
  //     let y = c + diry[i];
  //     if (x < 0 || y < 0 || x >= row || y >= col) continue;
  //     if (!vis[x][y]) bfs;
  //   }
  // }
};

let ipgrid = [
  [1, 1],
  [1, 1],
];

// console.log(islandPerimeter(ipgrid));

var spiralOrder = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  let visited = Array(row);

  for (let i = 0; i < row; i++) {
    visited[i] = Array(col).fill(false);
  }

  let sm = [];
  let clockwise = [
    [1, 0],
    [0, 1],
    [-1,0],
    [0,-1],
  ];
  let direction = ["right","down","left","up"]
  dfs(0, 0, visited, clockwise, 0);

  return sm;

  function dfs(r, c, vis, cw, check) {
    if (vis[r][c]) {
      dfs
      return 
    };
    vis[r][c] = true;
    let [x, y] = cw[check];
    if (r + x < 0 || c + y < 0 || r + x >= row || c + y >= col) {
      dfs(r, c, vis, cw, check + 1);
      return;
    }
    dfs(r + x, c + y, vis, cw, check);
  }
};

let spm = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(spm));
