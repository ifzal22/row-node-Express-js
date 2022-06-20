const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const data = require('./lib/data');

const app = {};

//
data.delete('test', 'newFile', (err) => {
console.log(err);
});

app.config = {
    port: 5000,
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

app.handleReqRes = handleReqRes;

app.createServer();
