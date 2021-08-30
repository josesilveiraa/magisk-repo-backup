import cleanup from "./util/cleanup";
import makeDirs from "./util/dirCreator";
import download from "./util/moduleDownloader";
import extract from "./util/moduleExtractor";
import recompress from "./util/moduleRecompressor";

(async () => {
  makeDirs();
  await download();
  await extract();
  await recompress();
  await cleanup();
})();
