var express = require('express');
var cors = require('cors');
require('dotenv').config()
const router = require('./routes/routes')


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.use('/', router)





const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
