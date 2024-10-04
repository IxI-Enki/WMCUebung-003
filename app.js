import chalk from "chalk";
import cowsay from "cowsay";

console.log(chalk.white.bgRedBright("Hello Jan"));

let output = cowsay.say({
  text: "Moo",
});
console.log(output);

console.log(cowsay.think({ text: "Hello Jan" }));
