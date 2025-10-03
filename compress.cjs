const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Input & Output folders
const inputDir = "./public/images";   // your original images folder
const outputDir = "./public/compressed";

// Make sure output folder exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Compress all images in folder
fs.readdirSync(inputDir).forEach(file => {
  const inputFile = path.join(inputDir, file);
  const outputFile = path.join(outputDir, file.split(".")[0] + ".webp");

  sharp(inputFile)
    .resize(1200) // optional: resize width to 1200px max
    .webp({ quality: 70 }) // compress to webp with 70% quality
    .toFile(outputFile)
    .then(() => console.log(`Compressed: ${file} → ${outputFile}`))
    .catch(err => console.error(`Error with ${file}:`, err));
});
