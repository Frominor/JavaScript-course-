let range = {
    from: 2,
  };
  
  
  range[Symbol.iterator] = function() {
    return {
      current: this.from,
      next() {
        let z=0 + Math.random() * (3 - 0);
        z=z.toFixed(0);
        z=+z
        if (this.current !=z) {
          return { done: false, value:z };
        } else if(this.current==z) {
          alert(z)
          return { done: true, };
        }
      }
  
    };
  
  };
  
  // теперь работает!
  for (let num of range) {
    alert(num);
  }