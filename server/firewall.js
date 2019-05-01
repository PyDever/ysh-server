
let firewall_config = new Object() // firewall configuration

firewall_config.csrf = true
firewall_config.xframe = 'SAMEORIGIN'
firewall_config.p3p = 'FEDBCA'
firewall_config.hsts = {maxAge: 31536000, includeSubDomain: true,
	xssProtection: true, nosniff: true, 
	referrerPolicy: 'same-origin'}

module.exports = {firewall_config: firewall_config}

