const fs = require('fs')

fs.readFile('a.txt', 'utf-8', function (err, data) {
    console.log('a.txtを読み込みまhした', data)
    fs.readFile('b.txt', 'utf-8', function (err, data) {
        console.log('b.txtを読み込みました', data)
        fs.readFile('c.txt', 'utf-8', function (err, data) {
            console.log('c.txtを読み込みました。', data)
        })
    })
})