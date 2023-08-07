var kSmallestPairs = function (nums1, nums2, k) {
  let ans = [];
  let pq = [];
  let prevsum = -Math.pow(10, 10);
  let lastminsum = Infinity;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let s = nums1[i] + nums2[j];
      lastminsum = Math.min(lastminsum, s);
      if (s <= prevsum && s <= lastminsum) pq.push([s, [nums1[i], nums2[j]]]);
      else if (s >= prevsum) {
        pq.unshift([s, [nums1[i], nums2[j]]]);
        prevsum = Math.max(prevsum, s);
      } else {
        let [sum, pair] = pq.shift();
        pq.unshift([s, [nums1[i], nums2[j]]]);
        pq.unshift([sum, pair]);
        prevsum = Math.max(prevsum, s);
      }
      // else {
      //     let temp = [];
      //     while (true) {
      //       let [sum, pair] = pq.shift();
      //       if (s <= sum) {
      //         temp.push([sum, pair]);
      //         continue;
      //       }
      //       pq.unshift([sum, pair]);
      //       pq.unshift([s, [nums1[i], nums2[j]]]);
      //       pq.unshift(...temp);
      //       prevsum = Math.max(prevsum, s);
      //       break;
      //     }
      //   }

      if (pq.length > k) pq.shift();
    }
  }

  for (let i = pq.length - 1; i >= 0; i--) {
    ans.push(pq[i][1]);
  }

  return ans;
};

console.log(kSmallestPairs([-10, -4, 0, 0, 6], [3, 5, 6, 7, 8, 100], 10));
