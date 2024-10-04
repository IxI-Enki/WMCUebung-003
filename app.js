import chalk from "chalk";
import cowsay from "cowsay";

console.log(chalk.white.bgRedBright("Hello Enki"));

let output = cowsay.say({
  text: "Oi oi oi",
});
console.log(output);

console.log(cowsay.think({ text: "Hello Enki" }));
