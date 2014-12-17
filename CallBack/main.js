var http = require('http');
var fs = require('fs');

function hadError(err) {
    console.error(err);
    red.end('Server Error');
}

function formatHtml(tmpl, titles, res) {
    var html = tmpl.replace('&', titles.join('</li><li>'));
    res.writeHead(200, {'Content_Type': 'text/html'});
    res.end(html);
}

function getTemplate(data, res) {
    var titles = JSON.parse(data.toString());

    fs.readFile('./CallBack/index.html', function (err, data) {
        if (err) {
            hadError(err);
        } else {
            var tmpl = data.toString();
            formatHtml(tmpl, titles, res);
        }
    });
}

function GetTitles(res) {
    fs.readFile('./CallBack/titles.json', function (err, data) {
        if (err) {
            return hadError(err)
        } else {
            getTemplate(data, res);
        }
    });
}
http.createServer(function (req, res) {
    GetTitles(res);
}).listen(8000);