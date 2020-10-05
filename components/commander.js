const commander = require("commander");

const commanderSetting = () => {
  commander
    .storeOptionsAsProperties(true)
    .option("-s, --shift  <count>", "shift")
    .option("-i, --input [iPath]", "input")
    .option("-o, --output [oPath]", "output")
    .option("-a, --action <code>", "action");
  commander.parse(process.argv);
  return commander;
};

module.exports = commanderSetting;
