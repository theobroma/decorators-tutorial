//measure function execution time
function time(target, key, descriptor) {
  const origFn = descriptor.value.bind(target);

  let i = 0;
  descriptor.value = function(...args) {
    let id = i++;
    console.time(key + id);
    let value = origFn(...args);
    console.timeEnd(key + id);
    return value;
  };
}

export default time;
