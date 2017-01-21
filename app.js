const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 8000;

const router = express.Router();

router.get('/api/anna', function (req, res) {
  res.json({
    message: "Hello Anna! :D"
  });
});

app.use('/', router);
app.listen(port);

console.log("Waiting for a request ...");
