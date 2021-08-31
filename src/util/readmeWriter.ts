import chalk from "chalk";
import fs, { PathLike } from "fs";

export default function writeToFile(
  totalModules: number,
  outputDir: PathLike,
  fileName: string
) {
  const now = new Date();

  const data = `# Magisk Module Downloader\n\nI have downloaded ${totalModules} modules. These modules were downloaded at ${now.toUTCString()}
  `;

  fs.writeFile(`${outputDir}/${fileName}`, data, (err) => {
    if (err) throw err;

    console.log(chalk.green(`${fileName} successfully written.`));
  });
}
