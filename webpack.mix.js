const mix         = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/**
 * Configure webpack.
 */
mix.webpackConfig({
    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            '@': `${__dirname}/resources/js`
        }
    }
})

/**
 * Configure options.
 */
mix.options({
    processCssUrls: false,
    postCss: [
        tailwindcss({
            prefix: 'mpcfq\:',
            purge: [
                'public/*.html', 'resources/js/*.js',
            ],
            variants: {
                borderWidth: [ 'responsive', 'last' ],
                cursor: [ 'responsive', 'hover' ]
            },
            theme: {
                extend: {
                    screens: {
                        'lg': '951px',
                        'xl': '1141px'
                    },
                    padding: {
                        '3.5': '0.875rem'
                    },
                    margin: {
                        '1.5': '0.375rem',
                        '-3.5': '-0.875rem'
                    }
                }
            }
        })
    ]
});

/**
 * Compile JS.
 */
mix.js('./resources/js/frontend.js', './public/js');

/**
 * Compile SASS.
 */
mix.sass('./resources/sass/style.scss', './public/css');
