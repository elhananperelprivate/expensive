class SingletonExpensiveClass {
  constructor() {
    if (!SingletonExpensiveClass.instance) {
      this.cache = {};
      SingletonExpensiveClass.instance = this;
    }

    return SingletonExpensiveClass.instance;
  }

  expensive(n) {
    console.log('100$ 😱');
    return n + 4;
  }

  optimizeExpensive(n) {
    const isExistInCache = this.cache['' + n];
    if (isExistInCache) {
      return isExistInCache;
    }

    const result = this.expensive(n);
    this.cache['' + n] = result;
    return result;
  }
}

// Ensure only a single instance exists throughout the application
const instance = new SingletonExpensiveClass();

// Make the instance immutable
Object.freeze(instance);

// write example of using SingletonExpensiveClass
console.log('SingletonExpensiveClass');
console.log(instance.optimizeExpensive(1));
console.log(instance.optimizeExpensive(2));
console.log(instance.optimizeExpensive(3));
console.log(instance.optimizeExpensive(1));
console.log(instance.optimizeExpensive(1));
console.log(instance.optimizeExpensive(3));
console.log(instance.optimizeExpensive(2));
console.log(instance.optimizeExpensive(4));

