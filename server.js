
require('dotenv').config()

const firewall_config = require('./server/firewall.js').firewall_config
const session_config = require('./server/session.js').session_config

const express = require('express'),
          app = express(),
          session = require('express-session'),
          lusca = require('lusca')

const bodyParser = require('body-parser')
const request = require('request')
const nosql = require('nosql')
const db = nosql.load('/server/database.nosql')

app.use(session(session_config))
app.use(lusca(firewall_config))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null})
})

app.post('/', function (req, res) {})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

