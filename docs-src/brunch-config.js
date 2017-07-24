module.exports = {
    files : {
        javascripts : {
            joinTo : 'app.js'
        },

        stylesheets: {
            joinTo : 'style.css'
        },

        templates : {
            joinTo : 'app.js'
        }
    },

    paths : {
        public : "../docs"
    },

    plugins: {
          postcss: {
            processors: [
                require('autoprefixer')
            ]
        }
    },

    sourceMaps : false
};