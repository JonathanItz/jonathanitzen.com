const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Outfit', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
