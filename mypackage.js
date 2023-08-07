class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class DoublyListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class DSU {
  constructor(n) {
    this.parent = [];
    this.n = n !== undefined ? n : null;
  }
  Initialize() {
    for (let i = 0; i < this.n; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] === x) return x;
    return this.find(this.parent[x]);
  }

  makeUnion(a, b) {
    let x = this.find(a);
    let y = this.find(b);
    if (x !== y) {
      this.parent[y] = x;
      return false;
    }
    return true;
  }
}

//  sort Method

function insertionSort(s) {
  for (let i = 1; i < s.length; i++) {
    let temp = s[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (temp < s[j]) s[j + 1] = s[j];
      else break;
    }
    s[j + 1] = temp;
  }
  return s;
}

export { ListNode, DoublyListNode, TreeNode, DSU, insertionSort };
