function digital_root(i) {
    if (i < 10) return i;
    return digital_root(
      i.toString().split('').reduce((k, n) => {
        return k + +n;
      },0));
  }
console.log(digital_root(13));
console.log(digital_root(777));
console.log(digital_root(123456));
console.log(digital_root(13253433));