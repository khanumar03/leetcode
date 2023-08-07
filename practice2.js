import { insertionSort } from "./mypackage.js";

let then = Date.now();
let arr = [4, 6, 2, 5, 7, 9, 1, 3];

function quickSort(s) {
  let i = 1;
  let j = s.length - 1;
  let p = s[0];
  while (i < j) {
    while (i <= j && s[i] <= p) i++;
    while (arr[j] > p) j--;
    if (s[i] < s[j]) {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    }
  }
  console.log(i, j);
}

// insertionSort(arr);
console.log(quickSort(arr));
console.log(arr);

let now = Date.now();
console.log(now - then + "ms");
