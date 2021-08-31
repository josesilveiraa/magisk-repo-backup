import decompress from "decompress";
import fs from "fs";
import chalk from "chalk";
import util from "util";

const readdir = util.promisify(fs.readdir);

export default async function extract() {
  console.log(chalk.green("Starting decompressing process."));

  const files = await readdir("./output/");

  for (const file of files) {
    await decompress(`./output/${file}`, "./extracted");
  }
}
