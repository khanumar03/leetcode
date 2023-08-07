import { DSU } from "./mypackage.js";

// var makeConnected = function (n, connections) {
//     const dsu = new DSU(n);
//     dsu.Initialize();

//     let c = n;
//     for (let i of connections) {
//         let x = dsu.makeUnion(i[0], i[1]);
//         if (x) c--;
//     }
//     console.log(dsu.parent);
//     return c - 1;
// };

// let arr = [
//     [0, 4],
//     [1, 6],
//     [2, 9],
//     [4, 7],
//     [0, 6],
//     [6, 9],
//     [4, 8],
//     [1, 4],
//     [4, 9],
//     [1, 8],
//     [2, 8],
//     [3, 4],
//     [0, 9],
// ];
// console.log(makeConnected(10, arr));

// var validPath = function (n, edges, source, destination) {
//   const dsu = new DSU(n);
//   dsu.Initialize();

//   for (let i = 0; i < edges.length; i++) {
//     let [u, v] = edges[i];
//     dsu.makeUnion(u, v);
//   }
//   return dsu.makeUnion(source, destination);
//   if(n <= 1) return true
//   let vis = Array(n).fill(false);
//   let hm = new Map();
//   for (let i = 0; i < edges.length; i++) {
//     let [u, v] = edges[i];
//     if (!hm.has(u)) hm.set(u, []);
//     hm.get(u).push(v);
//     if (!hm.has(v)) hm.set(v, []);
//     hm.get(v).push(u);
//   }

//   let s = [source];
//   while (s.length > 0) {
//     let curr = s.pop();
//     if (vis[curr]) continue;
//     vis[curr] = true;
//     if (hm.has(curr)) {
//       let adj = hm.get(curr);
//       if (adj.includes(destination)) return true;
//       for (let i = 0; i < adj.length; i++) {
//         s.push(adj[i]);
//       }
//     }
//   }
//   return false;
// };
// let arr =[[0,1],[0,2],[3,5],[5,4],[4,3]]
// console.log(validPath(6, arr, 0, 5));

var countPairs = function (n, edges) {
  let visited = Array(n).fill(false);
  let hm = new Map();

  for (let [a, b] of edges) {
    if (!hm.has(a)) hm.set(a, []);
    hm.get(a).push(b);
    if (!hm.has(b)) hm.set(b, []);
    hm.get(b).push(a);
  }
  console.log(hm)
  // let numberOfPairs = 0;
  // let sizeOfComponent = 0;
  // let remainingNodes = n;
  // for (let i = 0; i < n; i++) {
  //   if (!visited[i]) {
  //     sizeOfComponent = bfs(i, visited, hm);
  //     numberOfPairs += sizeOfComponent * (remainingNodes - sizeOfComponent);
  //     remainingNodes -= sizeOfComponent;
  //   }
  // }
  // return numberOfPairs;

  // function bfs(node, vis, adj) {
  //   let count = 0;
  //   let s = [];
  //   s.unshift(node);
  //   while (s.length > 0) {
  //     let size = s.length;
  //     while (size--) {
  //       let curr = s.pop();
  //       if (vis[curr]) continue;
  //       vis[curr] = true;
  //       count++;
  //       if (adj.has(curr)) {
  //         for (let i of adj.get(curr)) {
  //           if (!vis[i]) {
  //             s.unshift(i);
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return count;
  // }

  // function dfs(node, vis, adj) {
  //   let count = 1;
  //   if (vis[node]) return count;
  //   vis[node] = true;
  //   if(!adj.has(node)) return count
  //   for (let i of adj.get(node)) {
  //     if (!vis[i]) {
  //       count += dfs(i, vis, adj);
  //     }
  //   }
  //   return count;
  // }

  const dsu = new DSU(n);
  dsu.Initialize();

  for (let [a, b] of edges) {
    dsu.makeUnion(a, b);
  }

  let component = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (dsu.find(i) !== dsu.find(j)) component++;
    }
  }
  return component;
};

let arr = [
  [0, 2],
  [0, 5],
  [2, 4],
  [1, 6],
  [5, 4],
];
console.log(countPairs(7, arr));