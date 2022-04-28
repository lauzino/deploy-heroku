var express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/'));

app.get('/', (request, response) => {
	response.render('index.html');
});

app.listen(port, (request, response) => {
	console.log('servidor rodando');
});
