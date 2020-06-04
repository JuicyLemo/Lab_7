var http = require("http");
const mod = require('./module')

http.createServer(function (request, response) {

    response.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });

    response.end(`${mod.page('./res/test.html')}` + `<style>${mod.page('./res/styletest.css')}</style>`);
}).listen(8888);
console.log("Старт");


