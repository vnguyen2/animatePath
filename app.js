const express = require("express");
const app = express(),
      server = require('http').createServer(app);
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })

app.use(express.static(path.join(__dirname, '/public')));

  
app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), function () {
        console.log("Express server listening on port " + app.get('port'));
    });
