import fs from "fs";

export default function makeDirs() {
  if (!fs.existsSync("./output/")) {
    fs.mkdir("./output", (err) => {
      if (err) throw err;
    });
  }

  if (!fs.existsSync("./modules/")) {
    fs.mkdir("./modules", (err) => {
      if (err) throw err;
    });
  }

  if (!fs.existsSync("./extracted/")) {
    fs.mkdir("./extracted", (err) => {
      if (err) throw err;
    });
  }
}
