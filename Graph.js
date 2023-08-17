import { TreeNode } from "./mypackage.js";

var minReorder = function (n, connections) {
  let vis = Array(n).fill(false);
  let hm = new Map();
  for (let i = 0; i < connections.length; i++) {
    let [a, b] = connections[i];
    if (!hm.has(a)) hm.set(a, []);
    hm.get(a).push([b, 1]);
    if (!hm.has(b)) hm.set(b, []);
    hm.get(b).push([a, 0]);
  }

  let c = 0;
  console.log(hm);
  let s = [0];
  while (s.length > 0) {
    let size = s.length;
    while (size--) {
      let curr = s.pop();
      if (vis[curr]) continue;
      vis[curr] = true;
      for (let [nei, sign] of hm.get(curr)) {
        if (!vis[nei] && sign == 1) {
          c++;
        }
        if (!vis[nei]) s.unshift(nei);
      }
    }
  }
  return c;
  // dfs(0, visited, hm);

  // function dfs(u, vis, adj) {
  //   if (vis[u]) return;
  //   vis[u] = true;

  //   for (let [nei, sign] of adj.get(u)) {
  //     if ( !vis[nei] && sign == 1) {
  //       c++;
  //     }
  //     if (!vis[nei]) dfs(nei, vis, adj);
  //   }
  // }
};

// let arr = [
//   [0, 1],
//   [1, 3],
//   [2, 3],
//   [4, 0],
//   [4, 5],
// ];

// for (let [nei, sign] of arr) {
//   console.log(nei, sign);
// }
// console.log(minReorder(6, arr));

// var longestCycle = function (edges) {
//   let visi = Array(edges.length).fill(false);
//   let res = -1;
//   let hm = new Map();
//   let s = new Set()

//   for (let i = 0; i < edges.length; i++) {
//     if (edges[i] === -1) continue;
//     if (!hm.has(i)) hm.set(i, []);
//     hm.get(i).push(edges[i]);
//     hm.get(i).push(1);
//   }
//   for(let i = 0; i < edges.length; i++) {
//     if(!visi[i])  {
//       dfs(i,visi,hm,s)
//       s.clear()
//     }
//   }
//   return res + 1

//   function dfs(node, vis, adj,st) {
//     if(!vis[node]) vis[node] = true
//     st.add(node)
//     if(!adj.has(node)) return
//     let [nei,count] = adj.get(node)
//     if(!adj.has(nei)) return
//     if(!vis[nei]) {
//       adj.get(nei)[1] += count
//       dfs(nei,vis,adj,st)
//     }
//     else if(vis[node] && st.has(nei)) {
//       let t  = Math?.abs(adj.get(node)[1] - adj.get(nei)[1])
//       res = Math.max(res,t)
//     }
//   }
// };

// let arr = [1,2,0,4,5,6,3,8,9,7];
// console.log(longestCycle(arr));

// var allPathsSourceTarget = function (graph) {
//   let hm = new Map();
//   let res = [];
//   for (let i = 0; i < graph.length; i++) {
//     hm.set(i, []);
//     for (let j = 0; j < graph[i].length; j++) {
//       hm.get(i).push(graph[i][j]);
//     }
//   }
//   console.log(hm);
//   let t = [0];
//   dfs(0, hm, t);

//   return res;

//   function dfs(node, adj, temp) {
//     if (node === graph.length - 1) {
//       res.push([...temp]);
//       temp.pop();
//       return
//     }

//     for (let nei of adj.get(node)) {
//       temp.push(nei);
//       dfs(nei, adj, temp);
//     }
//     temp.pop();
//   }
// };

// let gh = [[4, 3, 1], [3, 2, 4], [3], [4], []];
// console.log(allPathsSourceTarget(gh));

var maxDistance = function (grid) {
  let row = grid.length;
  let col = grid[0].length;
  let visited = Array(row);
  let max = -1;
  let nowater = true;
  let q = [];
  for (let i = 0; i < row; i++) {
    visited[i] = Array(col).fill(false);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 0) nowater = false;
      if (grid[i][j] === 1) q.unshift([i, j, 0]);
    }
  }

  if (nowater) return -1;

  while (q.length > 0) {
    let size = q.length;
    while (size--) {
      let curr = q.pop();
      let [a, b, dist] = curr;
      if (visited[a][b]) continue;
      if (dist > 0) max = Math.max(max, dist);
      let dirx = [-1, 1, 0, 0];
      let diry = [0, 0, -1, 1];
      for (let i = 0; i < 4; i++) {
        let x = a + dirx[i];
        let y = b + diry[i];
        if (x < 0 || y < 0 || x >= row || y >= col) continue;
        if (!visited[x][y]) {
          q.unshift([x, y, dist + 1]);
        }
      }
      visited[a][b] = true;
    }
  }
  return max;
};

// let gd = [
//   [1, 0, 0, 1],
//   [0, 0, 0, 0],
//   [1, 0, 0, 1],
// ];
// console.log(maxDistance(gd));

var pacificAtlantic = function (heights) {
  // let row = heights.length;
  // let col = heights[0].length;
  // let res = [];
  // let pacific = false;
  // let atlantic = false;
  // for (let i = 0; i < row; i++) {
  //   for (let j = 0; j < col; j++) {
  //     // if (!visited[i][j]) {
  //     dfs(heights, i, j);
  //     if (pacific && atlantic) res.push([i, j]);
  //     // }
  //     pacific = false;
  //     atlantic = false;
  //   }
  // }
  // return res;
  // function dfs(h, r, c, s = new Set()) {
  //   if (r <= 0 || c <= 0) pacific = true;
  //   if (r >= h.length - 1 || c >= h[0].length - 1) atlantic = true;
  //   if (pacific && atlantic) return;
  //   let dirx = [-1, 1, 0, 0];
  //   let diry = [0, 0, -1, 1];
  //   for (let i = 0; i < 4; i++) {
  //     let x = r + dirx[i];
  //     let y = c + diry[i];
  //     if (x < 0 || y < 0 || x >= h.length || y >= h[0].length) continue;
  //     if (h[x][y] <= h[r][c] && !s.has(`'${x},${y}'`)) {
  //       s.add(`'${x},${y}'`);
  //       dfs(h, x, y, s);
  //     }
  //   }
  // }
};

// let gds = [
//   [1, 2, 2, 3, 5],
//   [3, 2, 3, 4, 4],
//   [2, 4, 5, 3, 1],
//   [6, 7, 1, 4, 5],
//   [5, 1, 1, 2, 4],
// ];

// console.log(pacificAtlantic(gds));

// var shortestPathBinaryMatrix = function (grid) {
//   let row = grid.length;
//   let col = grid[0].length;
//   let visited = Array(row);
//   let clearPath = false;
//   let minPath = Infinity;
//   for (let i = 0; i < row; i++) {
//     visited[i] = Array(col).fill(false);
//   }

//   if (grid[0][0] !== 0) return -1;
//   let q = [];
//   q.push([0, 0, 1]);

//   while (q.length > 0) {
//     let size = q.length;
//     while (size--) {
//       let [a, b, dist] = q.pop();
//       if (a === row - 1 && b === col - 1) {
//         minPath = Math.min(minPath, dist);
//         clearPath = true;
//       }
//       if (visited[a][b]) continue;
//       visited[a][b] = true;
//       let dirx = [-1, 1, 0, 0, 1, -1, -1, 1];
//       let diry = [0, 0, -1, 1, 1, -1, 1, -1];
//       for (let i = 0; i < 8; i++) {
//         let x = a + dirx[i];
//         let y = b + diry[i];
//         if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) continue;
//         if (grid[x][y] !== 1 && !visited[x][y]) {
//           q.unshift([x, y, dist + 1]);
//         }
//       }
//     }
//   }

//   return clearPath ? minPath : -1;
// };

// let grd = [
//   [0, 0, 0],
//   [1, 1, 0],
//   [1, 1, 0],
// ];
// console.log(shortestPathBinaryMatrix(grd))

// var updateMatrix = function (mat) {
//   let row = mat.length;
//   let col = mat[0].length;
//   let distance = Array(row);
//   let q = [];
//   for (let i = 0; i < row; i++) {
//     distance[i] = Array(col).fill(Infinity);
//     for (let j = 0; j < distance[i].length; j++) {
//       if (mat[i][j] === 0) {
//         distance[i][j] = 0;
//         q.unshift([i, j]);
//       }
//     }
//   }

//   while (q.length > 0) {
//     let [a, b] = q.pop();
//     let dirx = [-1, 1, 0, 0];
//     let diry = [0, 0, -1, 1];
//     for (let i = 0; i < 4; i++) {
//       let x = a + dirx[i];
//       let y = b + diry[i];
//       if (x < 0 || y < 0 || x >= row || y >= col) continue;
//       if (distance[x][y] > distance[a][b] + 1) {
//         distance[x][y] = distance[a][b] + 1;
//         q.unshift([x, y]);
//       }
//     }
//   }
//   return distance;
// };

// let grd = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [1, 1, 1],
// ];
// console.log(updateMatrix(grd));

// var shortestBridge = function (grid) {
//   let row = grid.length;
//   let col = grid[0].length;
//   let visited = Array(row);
//   for (let i = 0; i < col; i++) {
//     visited[i] = Array(col).fill(false);
//   }

//   let s = [];
//   let q = [];

//   check: for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (grid[i][j] === 0) continue;
//       s.push([i, j]);
//       break check;
//     }
//   }
//   while (s.length > 0) {
//     let [a, b] = s.pop();
//     q.unshift([a, b, 0]);
//     if (visited[a][b]) continue;
//     visited[a][b] = true;
//     let dirx = [-1, 1, 0, 0];
//     let diry = [0, 0, -1, 1];
//     for (let i = 0; i < 4; i++) {
//       let x = a + dirx[i];
//       let y = b + diry[i];
//       if (x < 0 || y < 0 || x >= row || y >= col) continue;
//       if (grid[x][y] !== 0 && !visited[x][y]) {
//         s.push([x, y]);
//       }
//     }
//   }

//   let smallest = Infinity;

//   while (q.length > 0) {
//     let [a, b, dist] = q.pop();
//     let dirx = [-1, 1, 0, 0];
//     let diry = [0, 0, -1, 1];
//     for (let i = 0; i < 4; i++) {
//       let x = a + dirx[i];
//       let y = b + diry[i];
//       if (x < 0 || y < 0 || x >= row || y >= col) continue;
//       if (!visited[x][y]) {
//         if (grid[x][y] === 1 && !visited[x][y]) {
//           smallest = Math.min(smallest, dist);
//         }
//         visited[x][y] = true;
//         q.unshift([x, y, dist + 1]);
//       }
//     }
//   }
//   return smallest;
// };

// let grd = [
//   [0, 1, 0],
//   [0, 0, 0],
//   [0, 0, 1],
// ];
// console.log(shortestBridge(grd));

var nearestExit = function (maze, entrance) {
  let row = maze.length;
  let col = maze[0].length;
  let visited = Array(row);
  let nearestExt = Infinity;
  for (let i = 0; i < row; i++) {
    visited[i] = Array(col).fill(false);
  }

  let q = [];
  q.unshift([...entrance, 0]);

  while (q.length > 0) {
    let [a, b, dist] = q.pop();
    if (a <= 0 || b <= 0 || a >= row - 1 || b >= col - 1) {
      if (maze[a][b] === "." && visited[a][b]) {
        nearestExt = Math.min(nearestExt, dist);
        continue;
      }
    }
    let dirx = [-1, 1, 0, 0];
    let diry = [0, 0, -1, 1];
    for (let i = 0; i < 4; i++) {
      let x = a + dirx[i];
      let y = b + diry[i];
      if (x < 0 || y < 0 || x >= row || y >= col) continue;
      if (visited[x][y]) continue;
      if (!visited[x][y] && maze[x][y] !== "+") {
        visited[x][y] = true;
        q.unshift([x, y, dist + 1]);
      }
    }
    visited[a][b] = true;
  }
  return nearestExt !== Infinity ? nearestExt : -1;
};

let maze = [["+"], ["."]];
let entrance = [1, 0];

// console.log(nearestExit(maze, entrance));

var canVisitAllRooms = function (rooms) {
  let visited = Array(rooms.length).fill(false);

  let s = [0];
  while (s.length > 0) {
    let key = s.pop();
    if (visited[key]) continue;
    visited[key] = true;
    for (let i of rooms[key]) if (!visited[i]) s.push(i);
  }
  return !visited.includes(false);
  // function dfs(key)  {
  //   if(visited[key]) return
  //   visited[key] =  true

  //   for(let i of rooms[key]) {
  //     if(!visited[i]) dfs(i)
  //   }
  // }
};
// let arr = [[1,3],[3,0,1],[2],[0]]
// console.log(canVisitAllRooms(arr));

var numOfMinutes = function (n, headID, manager, informTime) {
  let visited = Array(n).fill(false);
  let hm = new Map();
  for (let i = 0; i < n; i++) {
    if (manager[i] === -1) continue;
    if (!hm.has(manager[i])) hm.set(manager[i], []);
    if (hm.has(manager[i])) hm.get(manager[i]).push(i);
  }

  let maxmin = 0;
  dfs(headID, visited, hm, 0);

  return maxmin;

  function dfs(node, vis, adj, currmax) {
    if (!adj.has(node)) return;
    vis[node] = true;

    currmax += informTime[node];
    maxmin = Math.max(maxmin, currmax);
    for (let emp of adj.get(node)) {
      if (!visited[emp]) {
        dfs(emp, vis, adj, currmax);
      }
    }
  }
};

// let arr = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
// console.log(numOfMinutes(15, 0, arr, [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]));

var eventualSafeNodes = function (graph) {
  let visited = Array(graph.length).fill(false);
  let res = [];
  let s = new Set();

  return res;

  function dfs(state, vis, adj, inre) {}
};

// let graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
// console.log(eventualSafeNodes(graph));

var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  let minDist = Array(n);
  for (let i = 0; i < n; i++) {
    minDist[i] = [];
  }
  let visited = new Set();
  let hm = new Map();
  let res2 = Array(n).fill(-1);
  for (let i = 0; i < redEdges.length; i++) {
    if (!hm.has(redEdges[i][0])) hm.set(redEdges[i][0], []);
    hm.get(redEdges[i][0]).push([redEdges[i][1], "red"]);
  }
  for (let i = 0; i < blueEdges.length; i++) {
    if (!hm.has(blueEdges[i][0])) hm.set(blueEdges[i][0], []);
    hm.get(blueEdges[i][0]).push([blueEdges[i][1], "blue"]);
  }

  let q = [];
  q.push([0, 0, "both"]);

  while (q.length > 0) {
    let [node, dist, color1] = q.pop();
    if (!hm.has(node)) continue;
    if (visited.has(`'${node},${color1}'`)) continue;
    visited.add(`'${node},${color1}'`);
    for (let [nei, color2] of hm.get(node)) {
      if (color1 !== color2 || color1 === "both") {
        if (res2[nei] === -1) {
          res2[nei] = Math.min(Infinity, dist + 1);
        } else res2[nei] = Math.min(res2[nei], dist + 1);
        q.unshift([nei, dist + 1, color2]);
      }
    }
  }

  res2[0] = 0;
  return res2;
};

let redgraph = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
];
let bluegraph = [
  [1, 2],
  [2, 3],
  [3, 1],
];
// console.log(shortestAlternatingPaths(5, redgraph, bluegraph));

var isBipartite = function (graph) {
  let visited = Array(graph.length).fill(-1);
  for (let i = 0; i < graph.length; i++) {
    visited[i] = [-1, false];
  }
  let hm = new Map();
  let color = 1;

  for (let i = 0; i < graph.length; i++) {
    hm.set(i, []);
    for (let nei of graph[i]) {
      hm.get(i).push(nei);
    }
  }

  let isColor = false;
  let q = [];
  q.push([0, 0]);

  console.log(hm);
  while (q.length > 0) {
    let [node, clr] = q.pop();
    color = clr === 1 ? 0 : 1;
    if (visited[node][1]) continue;
    visited[node][1] = true;
    visited[node][0] = clr;
    for (let nei of graph[node]) {
      if (
        visited[nei][0] === clr &&
        visited[node][0] === clr &&
        visited[node][1]
      )
        return false;
      if (visited[nei][1]) q.unshift([nei, visited[nei][0]]);
      else q.unshift([nei, color]);
    }
  }
  return true;
};

// let gra = [[1,2,3],[0,2],[0,1,3],[0,2]]
// console.log(isBipartite(gra));

var largestPathValue = function (colors, edges) {
  let clrs = Array(colors.length);
  let hm = new Map();
  let inDegree = Array(colors.length).fill(0);

  for (let i = 0; i < clrs.length; i++) {
    clrs[i] = Array(26).fill(0);
  }

  for (let i = 0; i < edges.length; i++) {
    if (!hm.has(edges[i][0])) hm.set(edges[i][0], []);
    hm.get(edges[i][0]).push(edges[i][1]);
    inDegree[edges[i][1]]++;
  }

  // console.log(hm);
  // console.log(inDegree);

  let q = [];
  for (let i = 0; i < colors.length; i++) {
    if (inDegree[i] === 0) {
      q.unshift(i);
      clrs[i][colors.charCodeAt(i) - "a".charCodeAt(0)] = 1;
    }
  }

  // console.log(clrs);
  let ans = 0;
  let countNodes = 0;

  while (q.length > 0) {
    let u = q.pop();
    countNodes++;

    ans = Math.max(ans, clrs[u][colors.charCodeAt(u) - "a".charCodeAt(0)]);

    if (!hm.has(u)) continue;
    for (let v of hm.get(u)) {
      for (let i = 0; i < 26; i++) {
        let cal = colors[v].charCodeAt(0) - "a".charCodeAt(0);
        clrs[v][i] = Math.max(clrs[v][i], clrs[u][i] + (cal === i));
        if (cal === i) break;
      }
      inDegree[v]--;
      if (inDegree[v] === 0) q.push(v);
    }
  }
  return countNodes < colors.length ? -1 : ans;
};

let edg = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
// console.log(largestPathValue("iiiiii", edg));

function topo(edges) {
  let visited = Array(edges.length).fill(false);
  let s = new Set();
  let res = [];

  for (let i = 0; i < edges.length; i++) {
    if (!visited[i]) dfs(i, visited, s);
    s.clear();
  }

  return res;
  function dfs(u, vis, inre) {
    if (!vis[u]) vis[u] = true;
    if (!inre.has(u)) inre.add(u);
    for (let v of edges[u]) {
      if (!visited[v]) dfs(v, vis, inre);
      else if (!inre.has(v)) dfs(v, vis, inre);
    }
    if (!res.includes(u)) res.unshift(u);
  }
}

let edgs = [[3, 2], [4], [3, 1], [1], [], [1, 4]];
// console.log(topo(edgs));

var canReach = function (arr, start) {
  let visited = Array(arr.length).fill(false);

  let q = [];
  q.push(start);

  while (q.length > 0) {
    let curr = q.pop();
    if (visited[curr]) continue;
    visited[curr] = true;

    if (arr[curr] === 0) return true;

    if (curr + arr[curr] < arr.length) q.unshift(curr + arr[curr]);
    if (curr - arr[curr] >= 0) q.unshift(curr - arr[curr]);
  }
  return false;
};

let arrr = [4, 2, 3, 0, 3, 1, 2];
// console.log(canReach(arrr,5))

var shortestPathLength = function (graph) {
  let n = graph.length;
  if (n === 1) return 0;

  let final = (1 << n) - 1;
  let q = [];

  for (let i = 0; i < n; i++) {
    q.unshift([i, 1 << i]);
  }

  let visited = Array(n);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = Array(final + 1);
  }
  let res = 0;

  while (q.length > 0) {
    let size = q.length;
    res++;
    while (size--) {
      let [node, bitState] = q.pop();
      for (let nei of graph[node]) {
        let newbit = bitState | (1 << nei);
        if (visited[nei][newbit] === 1) continue;
        visited[nei][newbit] = 1;
        if (newbit === final) return res;
        q.unshift([nei, newbit]);
      }
    }
  }
  return -1;
};

// console.log(shortestPathLength([[1, 2, 3], [0], [0], [0]]));

var findSmallestSetOfVertices = function (n, edges) {
  let indegree = Array(n).fill(0);
  let ans = [];
  for (let i = 0; i < edges.length; i++) {
    indegree[edges[i][1]] += 1;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) ans.push(i);
  }
  return ans;
};

// console.log(findSmallestSetOfVertices(6,[[0,1],[0,2],[2,5],[3,4],[4,2]]));

var ladderLength = function (beginWord, endWord, wordList) {
  let hm = new Map();

  for (let key of wordList) {
    for (let i = 0; i < key.length; i++) {
      let k = key.substring(0, i) + "*" + key.substring(i + 1, key.length);
      if (!hm.has(k)) hm.set(k, []);
      hm.get(k).push(key);
    }
  }

  let visited = new Set();
  let q = [];
  let ans = Infinity;
  q.push([beginWord, 1]);

  while (q.length > 0) {
    let [word, dist] = q.pop();
    if (word === endWord) {
      ans = Math.min(ans, dist);
      continue;
    }
    if (visited.has(word)) continue;
    visited.add(word);
    let wordState = build(word);
    for (let i = 0; i < wordState.length; i++) {
      if (!hm.has(wordState[i])) continue;

      for (let nei of hm.get(wordState[i])) {
        if (!visited.has(nei)) q.unshift([nei, dist + 1]);
      }
    }
  }
  return ans !== Infinity ? ans : 0;

  function build(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
      let k = s.substring(0, i) + "*" + s.substring(i + 1, s.length);
      arr.push(k);
    }
    return arr;
  }
};

// console.log(
//   ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
// );

var findJudge = function (n, trust) {
  let judge = Array(n);
  for (let i = 0; i < judge.length; i++) {
    judge[i] = [];
  }
  let res = -1;
  let flag = 0;
  for (let i = 0; i < trust.length; i++) {
    judge[trust[i][0] - 1].push(trust[i][1]);
  }
  console.log(judge);
  let temp = -1;
  check: for (let i = 1; i <= judge.length; i++) {
    if (flag > 1) return -1;
    for (let j = 1; j <= judge.length; j++) {
      if (judge[j - 1].length < 1) {
        flag++;
        continue;
      }
      if (judge[j - 1].includes(i)) {
        temp = i;
      } else {
        flag = 0;
        continue check;
      }
    }
    flag = 0;
    res = temp;
  }
  return flag > 1 ? -1 : res;
};

// console.log(findJudge(3, [[1,2],[2,3]]));

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

let theGCD = gcd(3, 5);
// console.log(theGCD);

var minimumJumps = function (forbidden, a, b, x) {
  let max = Math.max(...forbidden);
  let visited = Array(max).fill(false);
  let jump = 0;
  let q = [];
  q.push([0, true]);

  while (q.length > 0) {
    let size = q.length;
    while (size--) {
      let [curr, jumpstate] = q.pop();
      if (visited[curr]) continue;
      visited[curr] = true;
      if (curr === x) return jump;
      if (curr + a <= max && jumpstate) q.unshift([curr + a, !jumpstate]);
      if (curr - b >= 0 && !jumpstate) q.unshift([curr - b, !jumpstate]);
    }
    jump++;
  }
  return -1;
};
// console.log(minimumJumps([18,13,3,9,8,14], 3,8, 6));

// const a = new TreeNode(1);
// const b = new TreeNode(1);
// const c = new TreeNode(1);
// const d = new TreeNode(1);
// const e = new TreeNode(1);
// const f = new TreeNode(1);
// const g = new TreeNode(1);
// const h = new TreeNode(1);

// a.right = b;
// b.left = c;
// b.right = d;
// d.left = e;
// d.right = f;
// e.right = g;
// g.right = h;

var longestZigZag = function (root) {
  if (root === null) return 0;

  return Math.max(dfs(root.left, true, 0), dfs(root.right, false, 0));

  function dfs(rt, isl, count) {
    if (rt === null) return count;

    if (isl) {
      return Math.max(dfs(rt.right, false, count + 1), dfs(rt.left, true, 0));
    }
    {
      return Math.max(dfs(rt.left, true, count + 1), dfs(rt.right, false, 0));
    }
  }
};

// console.log(longestZigZag(a));

// var widthOfBinaryTree = function (root) {
//   if (root.right === null && root.left === null) return 1;
//   let q = [];
//   q.push(root);
//   let maxw = 0;

//   while (q.length > 0) {
//     let size = q.length;
//     let temp = 0;
//     while (size--) {
//       let curr = q.pop();

//       // if(curr.left !== null && ) {

//       // }
//     }
//   }
// };

// console.log(widthOfBinaryTree(a));

// var isBipartite = function (graph) {
//   let color = Array(graph.length).fill(0);

//   for (let i = 0; i < color.length; i++) {}

//   return true;

//   function bfs(node) {}
// };

// console.log(
//   isBipartite([[1,3],[0,2],[1,3],[0,2]])
// );

// var calcEquation = function (equations, values, queries) {
//   let hm = new Map();

//   for (let i = 0; i < equations.length; i++) {
//     let src = equations[i][0];
//     let des = equations[i][1];
//     let value = parseFloat(values[i]);

//     if (!hm.has(src)) hm.set(src, []);
//     if (!hm.has(des)) hm.set(des, []);

//     hm.get(src).push([des, value]);
//     hm.get(des).push([src, parseFloat((1.0 / value).toFixed(1))]);
//   }

//   console.log(hm);

//   let res = [];

//   for (let [src, des] of queries) {
//     let st = new Set();

//     if (!hm.has(src) || !hm.has(des)) res.push(-1);
//     else dfs(src, des, st, 1);
//   }

//   return res;

//   function dfs(src, des, st, product) {
//     if (st.has(src)) return;
//     st.add(src);
//     if (src === des) {
//       res.push(parseFloat(product.toFixed(1)));
//       return;
//     }

//     for (let [d, val] of hm.get(src)) {
//       dfs(d, des, st, product * val);
//     }
//   }
// };

// console.log(
//   calcEquation(
//     [
//       ["a", "b"],
//       ["b", "c"],
//     ],
//     [2.0, 3.0],
//     [
//       ["a", "c"],
//       ["b", "a"],
//       ["a", "e"],
//       ["a", "a"],
//       ["x", "x"],
//     ]
//   )
// );

// console.log();

const a = new TreeNode(3);
const b = new TreeNode(5);
const c = new TreeNode(1);
const d = new TreeNode(6);
const e = new TreeNode(2);
const f = new TreeNode(0);
const g = new TreeNode(8);
const h = new TreeNode(7);
const i = new TreeNode(4);

// a.left = c;
a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = h;
e.right = i;
c.left = f;
c.right = g;

var minDepth = function (root) {
  if (!root) return 0;
  let mindepth = Infinity;
  dfs(root, 1);

  return mindepth;

  function dfs(node, depth) {
    if (node.right === null && node.left === null) return depth;

    if (node.right === null)
      return (mindepth = Math.min(mindepth, dfs(node.left, depth + 1)));
    if (node.left === null)
      return (mindepth = Math.min(mindepth, dfs(node.right, depth + 1)));

    return (mindepth = Math.min(
      dfs(node.left, depth + 1),
      dfs(node.right, depth + 1)
    ));
  }
};

// console.log(minDepth(a));

var distanceK = function (root, target, k) {
  let Kdistance = [];

  dfs(root, target, k, 1);
  return Kdistance;

  function dfs(nei, t, kd, dist) {
    if (nei === null) return;

    if (dist === kd && nei.val !== t) {
      Kdistance.push(nei.val);
      return;
    }

    if (nei.val === t) {
      dfs(nei.left, t, kd, 1);
      dfs(nei.right, t, kd, 1);
      return;
    }

    dfs(nei.left, t, kd, dist + 1);
    dfs(nei.right, t, kd, dist + 1);
  }
};

console.log(distanceK(a, 5, 2));
console.log("hello world!!");
