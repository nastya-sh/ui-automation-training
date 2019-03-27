const compose = (...funs) => comp => {
  return funs.reduceRight((wrapped, f) => f(wrapped), comp);
};
export default compose;
