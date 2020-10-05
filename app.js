const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");
const validate = require("./components/utils/validate");
const transform = require("./components/transform");
const { input, output, shift, action } = require("./components/commander")();

validate(input, output, shift, action);
const read_stream = input
  ? fs.createReadStream(path.join(__dirname, input))
  : process.stdin;
const write_stream = output
  ? fs.createWriteStream(path.join(__dirname, output), { flags: "a+" })
  : process.stdout;

pipeline(read_stream, transform(action, shift), write_stream, (err) => {
  if (err) {
    console.error("Decode failed", err);
  } else {
    console.log("Decode succeded");
  }
});
