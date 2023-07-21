/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{html,php}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'Arial', 'sans-serif'],
                playfair: ['Playfair Display', 'Arial', 'sans-serif'],
            },
            colors: {
                main: '#2D1A18',
                secondary: '#9B4517',
                black: '#131313',
            },
        },
    },
};
