const express = require('express')
var bodyParser = require('body-parser');
const app = express();
const request = require('request');
var Promise = require('promise');
app.use(bodyParser.json());
var ipfilter = require('express-ipfilter').IpFilter;

var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('localhost.key', 'utf8');
var certificate = fs.readFileSync('localhost.cert', 'utf8');
var credentials = {key: privateKey, cert: certificate};
	
var ips = ['127.0.0.1'];
//var ips = [];	
  
app.use(ipfilter(ips, {mode: 'allow'}));

app.get('/get', (req, res) => {
console.log("Hello");
res.send('Hello');
})


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(3004, () =>{
	console.log("http is listening on 3000");
});

httpsServer.listen(3005, () => {
    console.log("https is listening on 3001");	
});
