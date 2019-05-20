
const middleware = function (res) {

	res.setHeader('Cache-Control', 'no-store, no-cache') 
	res.setHeader('X-Powered-By', 'blocked')
	res.setHeader('X-XSS-Protection', 1) 
	res.setHeader('X-Frame-Options', 'deny') 
	res.setHeader('Content-Encoding', 'blocked')
}

module.exports = {
	middleware: middleware
}

