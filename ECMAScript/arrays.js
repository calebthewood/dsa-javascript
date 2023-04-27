/* Experiment, to write out the ECMA script standard

  V8 Chromium Src - https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src

  F(x) -> the Number value of x

*/

function forEach(callbackfn) {
  let O = Object(this);
  let len = LengthOfArrayLike(O);
  if (!isCallable(callbackfn)) {
    throw TypeError;
  }
  let k = 0;
  while (k < len) {
    let Pk = String(Number(k));
    let kPresent = HasProperty(O, Pk);
    if (kPresent) {
      let kValue = Get(O, Pk);
      Call(callbackfn, arguments, kValue, Number(k), O);
    }
    k = k + 1;
  }
  return undefined;
}