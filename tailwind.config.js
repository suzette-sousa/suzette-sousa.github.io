module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: [
		'./components/**/*.js',
    './pages/**/*.js'],
  darkMode: false,
	theme: {
		extend: {},
	},
	variants: {
    extend: {},
  },
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}