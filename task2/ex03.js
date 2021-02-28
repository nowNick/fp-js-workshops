// const curry = () => {};

const curry = (fn) => {
  const arity = fn.length;
  return function curried(...args) {
    if (args.length < arity) {
      return curried.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
};

module.exports = curry;
