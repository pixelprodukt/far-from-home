/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        fontSize: {
            base: '22px',
            lg: '26px'
        },
        extend: {
            colors: {
                'dark-teal': '#1B2124',
                'light-amber': '#F4EED2'
            }
        },
        fontFamily: {
            sans: ['Cormorant']
        },
    },
    plugins: [],
}

