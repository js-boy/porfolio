const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://localhost:8000',
			changeOrigin: true,
			logLevel: 'debug',
			pathRewrite: {'^/api': ''},
			onError: (err, req, res) => {
				console.error('Proxy error:', err);
				res.status(500).json({error: 'Proxy failed'});
			}
		})
	);
};