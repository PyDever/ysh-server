
let session_config = {
  secret: process.env.KEY, 
  resave: true, 
  saveUninitialized: true
}

module.exports = {session_config: session_config}