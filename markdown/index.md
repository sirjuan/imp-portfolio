# Juha's study portfolio

Here you can find all the labs, essays and other stuff I have create for this course. Labs can be found on the header
menu.

This portfolio is created with [Next.js](https://github.com/zeit/next.js/) which is framework for server-rendered
[React](https://reactjs.org/) applications. The source code can be found on
[GitHub](https://github.com/sirjuan/imp-portfolio).

Probably the hardest part of this course has been finding a way to import markdown (.md) files in Next.js. After
trying numerous approaches I found when googling I finally found a solution that worked in both dev and production
environments. Most of the approaches I found before worked perfectly fine in dev but didn't build on production server.

I tried for example have [Chokidar](https://github.com/paulmillr/chokidar) watch /markdown directory and create .js
files with functions that Next.js was able to import in React. But because the .js files didn't exist at build time, the production build failed.

This is the code that I used to achieve that:

```
const fs = require('fs')
const chokidar = require('chokidar')

chokidar.watch('./markdown', { ignoreInitial: true })
  .on('ready', compareDirs)
  .on('add', writer)
  .on('change', writer)
  .on('unlink', remover)

const writeFile = (pathToJs, pathToMd) => {
  if (fs.existsSync(pathToJs)) fs.unlinkSync(pathToJs)
  fs.writeFileSync(pathToJs, 'export default (data) => `')
  fs.createReadStream(pathToMd)
    .on('data', chunk => fs.appendFileSync(pathToJs, chunk))
    .on('end', () => fs.appendFileSync(pathToJs, '`'))
}

/*  Chokidar calls this function when it detects that
 *  file has been added or modified in /markdown directory
 */
const writer = async (pathToMd) => {
  const pathToJs = pathToMd.replace('markdown', 'pages/markdown').replace('.md', '.js')
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
```

In the end I solved the problem by adding two-tier resolvers in webpack without any modifications to [Node.js](https://nodejs.org/en/) server:

```
{
  test: /\.md$/,
  loader: 'emit-file-loader',
  options: {
    name: 'dist/[path][name].[ext]',
  },
},
{
  test: /\.md$/,
  loader: 'raw-loader',
},
```
