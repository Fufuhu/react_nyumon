const fs = require('fs')

function readFileEx (filename) {
    return new Promise ((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            resolve(data)
        })
    })
}

readAll = async () {
    const a = await readFileEx('a.txt')
    console.log(a)
    const b = await readFileEx('b.txt')
    console.log(b)
    const c = await readFileEx('c.txt')
    console.log(c)
}

readAll()