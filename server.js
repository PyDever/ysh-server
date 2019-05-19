
require('dotenv').config()

const express = require('express'),
          app = express()

const body_parser = require('body-parser')
const request = require('request')
const nosql = require('nosql')
const db = nosql.load('/server/database.nosql')

app.use(express.static('public'))
app.use(body_parser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')


/*
Working XSS attacks:
---------------------
cooki1%3dvalue1;%0D%0AX-XSS-Protection:0%0D%0A%0D%0A
<script type ='text/javascript'>PAYLOAD</script>
<script>/*///*/PAYLOAD</script>

app.get('/', function (req, res) {
  res.render('index', {entry: req.query.entry})
})

app.post('/', function (req, res) {
	let application_content = {
		organization: req.body.organization,
		project: req.body.project,
		club: req.body.club
	}
	db.insert(application_content)
})

app.listen(3000, '0.0.0.0', function () {
	console.log('http://localhost:3000/')
})


