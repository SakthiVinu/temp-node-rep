
// HTTP module - This module is used to create http server and clients.

//createServer() - this method is user to create a server. It had one parameter - a callback funciton
// the callback function has two arguments both are objects req, res. req contains the request from the
// client and the res constains the content that will be sent from server to the client machine
// createServer((req, res) => {})

    const http = require('http');

    const server = http.createServer((req, res) => {
        if(req.url === '/'){
            res.end('Welcome to our home page');
        }
        else if(req.url === '/about'){
            res.end('Welcome to our about page');
        }
        else {
            res.end(`
                <h1>Oops!<h1>
                <p>We can't seem to find the page you are looking for</p>
                <a href='/'>Home page</a>
            `);
        }
    });
    
    server.listen(5000);