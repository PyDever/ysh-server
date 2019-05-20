
require('dotenv').config()

const express = require('express'),
          app = express()

const nosql = require('nosql')
const db = nosql.load('/server/database.nosql')

const helmet = require('helmet')
const body_parser = require('body-parser')
const request = require('request')

/* client-side application settings */
app.use(express.static('public'))
app.use(body_parser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

/* do all the shit that helmet does with HTTP headers */
const middleware = require('./server/middleware.js').middleware
const escape = require('./server/escape.js').escape

/*
Working XSS attacks against X-XSS-Protection without escaping:
---------------------------------------------------------------
1) cooki1%3dvalue1;%0D%0AX-XSS-Protection:0%0D%0A%0D%0A
2) <script type ='text/javascript'>PAYLOAD</script>
3) <script>/*///*/PAYLOAD</script>

app.get('/', function (req, res) {

	middleware(res)
	if (req.query.entry !== undefined) {
		res.render('index', {entry: escape(req.query.entry)})

	} else {res.render('index', {entry: ''})}
})


app.post('/', function (req, res) {

	middleware(res)
	let data = {
		organization: req.body.organization,
		project: req.body.project,
		club: req.body.club
	}
	db.insert(escape(data))
})

app.listen(3000, '0.0.0.0', function () {
	console.log('http://localhost:3000/')
})


