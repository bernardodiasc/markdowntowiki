import fs from 'fs-extra'
import mdtowiki from '../src'

const examples = {
  basic: {
    config: '.',
    output: {
      '.': [
        'README.md'
      ]
    }
  },
  complex: {
    config: '.',
    output: {
      'Getting Started': 'README.md'
    }
  }
}

// test("setup", function (t) {
//   mkdirp.sync(dir)
//   fs.writeFileSync(dir + "/package.json", "{}", "ascii")
//   fs.writeFileSync(dir + "/README", "x", "ascii")
//   t.pass("setup done")
//   t.end()
// })

describe('lib', () => {
  it('works as expected', () => {
    mdtowiki()
    // expect().toBeTruthy()
    // expect().toMatchObject()
  })
})

// test("cleanup", function (t) {
//   rimraf.sync(dir)
//   t.pass("clean")
//   t.end()
// })
