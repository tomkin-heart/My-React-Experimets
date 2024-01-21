const nextConfig = {
	output: 'export',
	basePath:
		process.env.NODE_ENV === 'production' ? '/My-React-Experiments' : '',
	// assetPrefix: `/public`,
	// basePath: '',
	// distDir: 'out',
}
 
module.exports = nextConfig

// module.exports = {
// 	output: 'export',
// 	// assetPrefix: `/public`,
// 	// basePath: '',
// 	// distDir: 'out',

// }
