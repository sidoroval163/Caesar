const { action } = require("commander");
const { Transform } = require("stream");
const caesar_func = require("./utils/caesar_func");
const { shift } = require("./utils/const");

const transform_stream = (action, shift) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const res = caesar_func(action, shift, chunk.toString());
      this.push(res);
      callback();
    },
  });
};

module.exports = transform_stream;
