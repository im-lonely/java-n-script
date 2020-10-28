module.exports = {
  E: Math.E,
  PI: Math.PI,
  abs: Math.abs,
  acos: Math.acos,
  asin: Math.asin,
  atan: Math.atan,
  atan2: Math.atan2,
  cbrt: Math.cbrt,
  ceil: Math.ceil,
  copySign(target, source) {
    return Math.abs(target) * (source >= 0 ? 1 : -1);
  },
  cos: Math.cos,
  cosh: Math.cosh,
  exp: Math.exp,
  expm1: Math.expm1,
  floor: Math.floor,
  log: Math.log,
  log10: Math.log10,
  log1p: Math.log1p,
  max: Math.max,
  min: Math.min,
  nextAfter(start, direction) {
    if (start === direction) return start;
    return start + (direction > start ? 0 : -1);
  },
  nextUp(number) {
    return number++;
  },
  pow: Math.pow,
  random: Math.random(),
  rint: Math.round(),
  round(a) {
    if (Number.isInteger(a)) return this.rint(a);
    return a.toFixed(16);
  },
  scalb(number, scaleFactor) {
    return number * this.pow(2, scaleFactor);
  },
  sin: Math.sin,
  sinh: Math.sinh,
  sqrt: Math.sqrt,
  tan: Math.tan,
  tanh: Math.tanh,
  toDegrees(rad) {
    return (rad * 180) / Math.PI;
  },
  toRadians(deg) {
    return (deg / 180) * Math.PI;
  },
};
