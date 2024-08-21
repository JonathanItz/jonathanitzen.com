const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'index.html',
        'hosting.html',
        '/resources/**/*.{html,pug,js}'
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Outfit', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
