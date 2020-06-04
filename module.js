const fs = require('fs')
const path = require('path')

module.exports = {

    page(page) {
        return fs.readFileSync(path.join(__dirname, page), 'utf-8')
    },

}

