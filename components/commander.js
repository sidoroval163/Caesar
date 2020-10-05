const commander = require("commander");

const commanderSetting = () => {
  commander
    .storeOptionsAsProperties(true)
    .option("-s, --shift  <shiftNumber>", "shift")
    .option("-i, --input [inputPath]", "input")
    .option("-o, --output [outputPath]", "output")
    .option("-a, --action", "action");
  commander.parse(process.argv);
  return commander;
};

module.exports = commanderSetting;
