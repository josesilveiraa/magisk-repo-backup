import axios from "axios";
import chalk from "chalk";
import Downloader from "nodejs-file-downloader";

type IModule = {
  id: string;
  last_update: number;
  props_url: string;
  zip_url: string;
  notes_url: string;
};

export default async function download() {
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/Magisk-Modules-Repo/submission/modules/modules.json"
  );

  for (const module of data.modules as IModule[]) {
    const downloadUrl = module.zip_url;
    const moduleName = module.id;
    const outputName = `${module.id}.zip`;

    const downloader = new Downloader({
      url: downloadUrl,
      directory: "./output",
      fileName: outputName,
    });

    await downloader.download();
    console.log(chalk.green(`Downloaded ${moduleName}!`));
  }
}
