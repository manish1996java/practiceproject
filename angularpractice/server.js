const http = require('http');
const app = require('./backend/app');

//inisialize port
const PORT = 7621||process.env.PORT;

//set port in node enviroment
app.set('port',PORT);

//create server
const server = http.createServer(app);

//listten port 
server.listen(PORT);