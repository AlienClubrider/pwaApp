//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/pwaApp'));

// set up a route to redirect http to https
http.get('*', function(req, res) {
    // res.sendFile(path.join(__dirname + '/dist/pwaApp/index.html'));
    res.redirect('https://' + req.headers.host + req.url);

    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);