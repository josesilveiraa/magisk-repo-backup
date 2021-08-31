import cleanup from "./util/general/cleanup";
import makeDirs from "./util/general/dirCreator";
import download from "./util/module/moduleDownloader";
import extract from "./util/module/moduleExtractor";
import recompress from "./util/module/moduleRecompressor";
import writeToFile from "./util/readmeWriter";

(async () => {
  makeDirs();
  await download();
  await extract();
  await recompress();
  await cleanup();

  writeToFile(108, "./modules/", "README.md");
})();
