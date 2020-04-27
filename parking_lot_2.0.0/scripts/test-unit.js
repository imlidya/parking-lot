const sh = require('shelljs')

sh.exec('mocha tests/spec.js', (err, stdout, stderr) => {
    if (err) {
        console.log('Error running unit tests')
    }
    console.log('Running unit tests...')
})