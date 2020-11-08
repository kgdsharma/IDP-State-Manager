const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
//const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors);
require('./apis/interactions')(router);
app.use('/', router);

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('app started on port', PORT);
});
