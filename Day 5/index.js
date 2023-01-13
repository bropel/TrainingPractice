const http = require('http');
const fs = require('fs');


const PORT = 8080;

//create server
//a callback function is a func that is passed as an argument into another func; will be called in the future
const server = http.createServer((req,res) => {
    if (req.method === 'POST' && req.url === '/grocery'){
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        
        req.on('end', () => {
            groceries.push(JSON.parse(data));
        });

        res.end('POST /grocery request received');
        
    } else if(req.method === 'GET' && req.url === '/grocery'){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(groceries));
    } else {
        res.end('Endpoint not mapped');
    }
    
    
    //console.log('Request received');
    //res.end();

});

//we are calling the createServer method and we are passing in a callback fun that will be called every time a req is received by the server



server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
//callback fun only gets called when things in the background are finallyl done for setting up the ability to listen for incoming network comms
//Example of asynchronous JS


console.log('Done with all of the above operations');

//Asynchronous is all about the ability to run all of the other code first without having long running ops block the execution of the code

