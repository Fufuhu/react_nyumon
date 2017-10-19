const fs = require('fs')

function readFile_pr (filename) {
    // Promiseの引数として関数を渡す??
    return new Promise((resolve) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            resolve(data)
        })
    })
}

readFile_pr('a.txt')
.then((text) => {
    console.log('a.txtを読みました', text)
    return readFile_pr('b.txt')
})
.then((text) => {
    console.log('b.txtをよみました', text)
    return readFile_pr('c.txt')
})
.then((text) => {
    console.log('c.txtをよみました', text)
})