module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xxs': '480px',
                'xxl': '1400px'
            },
            colors: {
                'light': '#F3F4F6',
                'dark': '#181818',
                'pc-g': '#00BAAF',
                'pc-b': '#317AEC'
            },
            fontFamily: {
                'lufga': ['Lufga', 'sans-serif'],
                'itcavantgardestdmd': ['Itcavantgardestdmd', 'sans-serif']
            },
            keyframes: {
                'hover': {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    '50%': {
                        opacity: '1',
                        transform: 'translateY(-5px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                'hover-opposite': {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    '40%': {
                        opacity: '1',
                        transform: 'translateY(-2px)'
                    },
                    '70%': {
                        opacity: '1',
                        transform: 'translateY(-6px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
            },
            animation: {
                'hover-short': 'hover 8s infinite',
                'hover-medium': 'hover-opposite 12s infinite',
                'hover-long': 'hover 10s infinite',
            }
        },
    },
    plugins: [],
}
