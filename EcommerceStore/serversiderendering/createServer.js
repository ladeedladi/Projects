const http=require('http')

const route=require('./sec')
const server=http.createServer(route);
server.listen(3000);