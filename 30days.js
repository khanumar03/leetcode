class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
    this.cachehandler = [];
  }

  set(key, value, duration) {
    if (this.cache.has(key)) {
      let [v, c] = this.cache.get(key);
      this.cache.set(key, [value, c++]);
      this.cachehandler.push(
        setTimeout(() => {
          if (this.cache.has(key)) {
            let [v1, c1] = this.cache.get(key);
            if (c1 < 1) this.cache.delete(key);
            else this.cache.set(key, [v1, c1--]);
          }
        }, duration)
      );
      return true;
    }
    this.cache.set(key, [value, 0]);
    this.cachehandler.push(
      setTimeout(() => {
        if (this.cache.has(key)) {
          let [v, c] = this.cache.get(key);
          if (c < 1) this.cache.delete(key);
          else this.cache.set(key, [v, c--]);
        }
      }, duration)
    );
    return false;
  }

  get(key) {
    if (this.cache.has(key)) return this.cache.get(key)[0];
    return -1;
  }

  count() {
    return this.cache.size;
  }
}

const time = new TimeLimitedCache();

console.log(time.set(1, 42, 50));
console.log(time.set(1, 50, 100));
console.log(time.get(1));
console.log(time.get(1));
console.log(time.get(1));
console.log(time.count());
