const { Transform } = require("stream");

const transform_stream = new Transform({
    transform(chunk, encoding, callback) {
      const res =
        chunk
          .toString()
          .split("")
          .map((el) => el.toUpperCase())
          .join("") + "\n";
      this.push(res);
      callback();
    },
  });

  module.exports = transform_stream