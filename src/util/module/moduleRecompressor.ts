import archiver from "archiver";
import chalk from "chalk";
import fs from "fs";
import util from "util";

const readdir = util.promisify(fs.readdir);

export default async function recompress() {
  console.log(chalk.green("Starting recompressing process..."));

  const files = await readdir("./extracted/");

  for (const file of files) {
    const output = fs.createWriteStream(`./modules/${file}.zip`);
    const archive = archiver("zip", { zlib: { level: 9 } });

    archive.on("error", function (err) {
      throw err;
    });

    archive.pipe(output);

    archive.directory(`./extracted/${file}`, false);

    await archive.finalize();
  }
}
