const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile('FileSystem/example.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('file content:' + data);
                return;
            }
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(data);
        })
    }
});
const port = 4000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
