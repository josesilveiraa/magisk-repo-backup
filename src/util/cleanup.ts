import chalk from "chalk";
import rimraf from "rimraf";

export default async function cleanup() {
  console.log(chalk.green("Cleaning up..."));

  rimraf("./extracted/", (err) => {
    if (err) throw err;
  });
  rimraf("./output/", (err) => {
    if (err) throw err;
  });
}
