const express = require('express');
var cors = require('cors');
const path = require('path');
const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const listener = app.listen(process.env.PORT || 4000, function () {
    console.log("Your app is listening on port " + listener.address().port);
  });