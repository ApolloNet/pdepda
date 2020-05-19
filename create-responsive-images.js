const fs = require('fs').promises
const path = require('path')
const sharp = require('sharp')

const inputDir = './static/files'
const outputDir = './static/files/derivatives'
const test = /\.(jpe?g|png)$/i

function loadFormats() {
  return [
    { name: 'small', width: 480 },
    { name: 'medium', width: 800 },
    { name: 'large', width: 1280 },
    { name: 'giant', width: 1920 }
     { name: 'tiles', tile: true }
  ]
}

async function loadImages(inputDir, test) {
  const files = await fs.readdir(inputDir)
  return files.filter((file) => path.extname(file).match(test))
}

function createDerivatives(file, outputDir) {
  const formats = loadFormats()
  formats.forEach(async (format) => {
    const input = path.join(inputDir, file)
    const output = await prepareOutputPath(file, outputDir, format)
    formatImage(input, output, format)
  })
}

async function prepareOutputPath(file, outputDir, format) {
  const outputFormatDir = path.join(outputDir, format.name)
  await fs.mkdir(outputFormatDir, { recursive: true })
  return path.join(outputFormatDir, file)
}

function formatImage(input, output, format) {
  format.tile &&
    sharp(input)
      .tile()
      .toFile(output + '.dz')
  format.width &&
    sharp(input)
      .resize(format.width)
      .jpeg({
        quality: 70,
        chromaSubsampling: '4:4:4'
      })
      .toFile(output)
}

loadImages(inputDir, test)
  .then((images) => {
    images.forEach((file) => createDerivatives(file, outputDir))
  })
  .catch((err) => {
    throw new Error(err)
  })
