import glob from 'glob'

/**
 * Run script
 */
function mdtowiki () {
  const pattern = '**/*.md'
  const options = {
    nosort: true,
    debug: false,
    nocase: true,
    silent: false,
    ignore: 'node_modules/**/*',
  }
  let files = []

  try {
    files = glob.sync(pattern, options)
  } catch (e) {
    console.log('Error: ', e)
  }

  console.log(files)
  return files
}

export default mdtowiki
