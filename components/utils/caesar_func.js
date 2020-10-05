const alph = require("./const");

const caesar_func = (action, shift, text) => {
  const arr = text.split("");
  const length = alph.length;
  const a = shift > 0 ? shift % length : 0;
  const b = action === "encode" ? a : -a;
  const res = arr.map((el) => {
    const index = alph.indexOf(el.toLowerCase(), 0);
    if (index !== -1) {
      const check =
        index + b > length - 1
          ? (index + b) % length
          : index + b < 0
          ? length - index + b
          : index + b;
      return (el === el.toLowerCase()) ? alph[check] : alph[check].toUpperCase();
    } else return el;
  });
  return res.join("");
};

module.exports = caesar_func;
