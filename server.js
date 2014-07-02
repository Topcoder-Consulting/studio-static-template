var express = require('express');
var wwwhisper = require('connect-wwwhisper');
var app = express();
app.use(wwwhisper());
app.use(express.static(__dirname + '/files'));
app.listen(process.env.PORT || 3000);