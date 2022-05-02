module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}'
        , './components/**/*.{js,ts,jsx,tsx}'
    ],
    media: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            fontFamily: {
                'beau': ['Beau Rivage', 'cursive'],
                'messiri': ['El Messiri', 'sans-serif'],
                'wbrush': ['Water Brush', 'cursive']
            },
            backgroundImage: {
                'bgimage': "url('/assets/images/13.png')"
            },
            backgroundPosition: {
                center: 'center'
            },
            backgroundSize: {
                cover: 'cover'
            },
            colors: {
                transparent: 'transparent',
                folpd: {
                    blues: {
                        hblue: '#2D26A1',
                        shirts: '#1c70bf',
                        tidalblue: '#139FB9',
                        ltblue: '#35AFD3'
                    },
                    greens: {
                        sky: '#7DE7D6',
                        emgreen: '#0A6830',
                        hbteal: '#339492'
                    },
                    reds: {
                        vibrant: '#e10531',
                        ruby: '#ae001a',
                        mdrare: '#a50727',
                        md: '#850014',
                        dk: '#6b0015'
                    }
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}