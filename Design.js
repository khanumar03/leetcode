// class MinStack {
//   constructor() {
//     this.min = [];
//     this.stack = [];
//   }
//   push(val) {
//     this.stack.push(val);
//     if (this.min.length < 1) {
//       this.min.push(val);
//       return;
//     }
//     let temp = this.min[this.min.length - 1];
//     this.min.push(Math.min(temp, val));
//   }

//   pop() {
//     this.min.pop();
//     this.stack.pop();
//   }

//   top() {
//     return this.stack[this.stack.length - 1];
//   }

//   getMin() {
//     return this.min[this.min.length - 1];
//   }
// }

// const stack = new MinStack();
// stack.push(2);
// stack.push(0);
// stack.push(3);
// stack.push(0);
// console.log(stack.getMin());
// stack.pop();
// console.log(stack.getMin());
// stack.pop();
// console.log(stack.getMin());
// stack.pop();
// console.log(stack.getMin());

// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.least = [];
//     this.lru = new Map();
//   }

//   get(key) {
//     return this.lru.has(key) ? this.lru.get(key) : -1;
//   }

//   put(key, val) {
//     if (this.lru.size < this.capacity) {
//       this.lru.set(key, val);
//       this.least.push(key);
//       return;
//     }
//     this.lru.delete(this.least.pop());
//     this.lru.set(key, val);
//     this.least.unshift(key);
//   }
// }

// const lrucache = new LRUCache(2)
// lrucache.put(1,1)
// lrucache.put(2,2)
// console.log(lrucache.get(1))
// lrucache.put(3,3)
// console.log(lrucache.get(2))
// lrucache.put(4,4)
// console.log(lrucache.get(1))
// console.log(lrucache.get(3))
// console.log(lrucache.get(4))

class MyHashSet {
  constructor() {
    this.set = [];
  }

  add(key) {
    if(this.set.includes(key)) return
    this.set.push(key);
  }

  remove(key) {
    if (!this.set.includes(key)) return;
    let i = this.set.indexOf(key);
    this.set[i] = null;
  }

  contains(key) {
    return this.set.includes(key);
  }
}