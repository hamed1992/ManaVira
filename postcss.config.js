module.exports = {
    plugins: {
      tailwindcss: {},
      
      autoprefixer: {},
        'postcss-nested': {},
      ...(process.env.NODE_ENV === 'production'
        ? {
            '@fullhuman/postcss-purgecss': {
              content: [
                './components/**/*.js',
                './pages/**/*.js'
              ],
              defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            }
          }
        : {})
    }
  };