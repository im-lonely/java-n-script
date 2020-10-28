module.exports = {
  err: {},
  in: {},
  out: {
    println: console.log,
  },
  arraycopy(src, srcPos, dest, destPos, length) {
    dest.splice(destPos, 0, ...src.slice(srcPos, length));
  },
  clearProperty(key) {
    delete this[key];
  },
  console() {
    return console;
  },
  currentTimeMillis() {
    return Date.now();
  },
  exit() {
    if (typeof window === "undefined") process.exit(0);
  },
  getProperties() {
    return Object.getOwnPropertyNames(this);
  },
  getProperty(key, def) {
    if (def) this[key] = def;
    return this[key];
  },
  setProperty(key, value) {
    this[key] = value;
  },
};
