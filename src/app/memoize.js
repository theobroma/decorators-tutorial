function memoize(target, key, descriptor) {
  const origFn = descriptor.value.bind(target);
  const prevs = {};
  descriptor.value = function(...args) {
    if (prevs[args.toString()]) {
      return prevs[args.toString()];
    } else {
      return (prevs[args.toString()] = origFn(...args));
    }
  };
}
export default memoize;
