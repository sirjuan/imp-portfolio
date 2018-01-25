const fs = require('fs')

const writeFile = (pathToJs, pathToMd) => {
  if (fs.existsSync(pathToJs)) fs.unlinkSync(pathToJs)
  fs.writeFileSync(pathToJs, 'export default (data) => `');
  fs.createReadStream(pathToMd)
    .on('data', chunk => fs.appendFileSync(pathToJs, chunk))
    .on('end', () => fs.appendFileSync(pathToJs, '`'))
}

/*  Chokidar calls this function when it detects that
 *  file has been added or modified in /markdown directory
 */
const writer = async (pathToMd) => {

  const pathToJs = pathToMd.replace('markdown', 'pages/markdown').replace('.md', '.js');
  writeFile(pathToJs, pathToMd)
}

const removeFile = file => fs.existsSync(file) && fs.unlinkSync(file)

/*  Chokidar calls this function when it detects that
 *  file has been removed from /markdown directory
 */
const remover = path => removeFile(path.replace('markdown', 'pages/markdown').replace('.md', '.js'))

const compareDirs = () => {
  if (!fs.existsSync('pages/markdown')) fs.mkdirSync('pages/markdown')
  fs.readdirSync('pages/markdown').forEach((filename) => {
    const pathToJs = `pages/markdown/${filename}`
    const pathToMd = `markdown/${filename.replace('.js', '.md')}`
    if (!fs.existsSync(pathToMd)) removeFile(pathToJs)
  })
  fs.readdirSync('markdown').forEach((filename) => {
    const pathToMd = `markdown/${filename}`
    const pathToJs = `pages/markdown/${filename.replace('.md', '.js')}`
    writeFile(pathToJs, pathToMd)
  })
}

module.exports = { writer, remover, compareDirs }
