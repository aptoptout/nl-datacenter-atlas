const config = {
    container: document.querySelector("#map"),
    access_token: 'pk.eyJ1IjoiYXB0LW9wdC1vdXQiLCJhIjoiY2syYmU2a282MWNkdTNtb2JjeHhrdG91dSJ9.bIWJSVgBP7qMeB-IlkqrZw',
    dataCentreDataSheet: '1CsugJ7ZCSGgOdu7Ms0IT9unlLNXhbNnto1zbmlx3Zbc',
    styleLines: {
        production: 'mapbox://styles/apt-opt-out/ck2x6woe41lay1cq3n70uau16?fresh=true',
        dev: 'mapbox://styles/apt-opt-out/ck5zjrpzn1he81imnrj1lgq6r?fresh=true'
    },
    styleNone: 'mapbox://styles/apt-opt-out/ck3e426ff0htf1cpbxhg3z2uo?fresh=true',
    filters: {
        seacables: {
            landingpoints: true,
            cables: false
        }
    },
    mode: 'dev',
    showPOI : false,
    zoomlevel : {
        dev : 7.75,
        production: 11
    },
    markerRadius : {
        dev : 8,
        production: 45
    },
    dev: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    production: {
        width: 3840,
        height: 2560
    },
    colors: {
        red: [255, 0, 0],
        green: [0, 255, 0],
        blue: [0, 0, 255],
        black: [0, 0, 0],
        grey: [129, 129, 129],
        yellow: [255, 255, 0]
    },
    centers: [{
        lat: 51.34599527489911,
        lng: 3.7252670139396287
    },{
        lat: 51.756519388721586,
        lng: 3.7256103367803917
    },{
        lat: 52.257383078231214,
        lng: 3.740373215241334
    },{
        lat: 52.32782514997294,
        lng: 4.85040287204788
    },{
        lat: 52.75753277885718,
        lng: 4.8586426181911975
    },{
        lat: 53.18941576844276,
        lng: 4.871002237352741
    },{
        lat: 53.627624398170894,
        lng: 4.901901285250688
    },{
        lat: 52.098221485501256,
        lng: 4.902028818243934
    },{
        lat: 51.59761226215838,
        lng: 4.848945181778731
    },{
        lat: 51.26047604478177,
        lng: 4.837958853676582
    },{
        lat: 50.93875650899426,
        lng: 6.009217075502306
    },{
        lat: 51.44096764711702,
        lng: 6.032563022813179
    },{
        lat: 51.94089135581527,
        lng: 6.028786472556476
    },{
        lat: 52.44660650318437,
        lng: 6.017800144469561
    },{
        lat: 52.9565383015601,
        lng: 6.038742832479784
    },{
        lat: 53.456411169570146,
        lng: 6.019860081042907
    },{
        lat: 53.45198278307876,
        lng: 6.926990099881436
    },{
        lat: 52.998277901061556,
        lng: 6.940307645017356
    },{
        lat: 52.54127368052275,
        lng: 6.937904385758316
    },{
        lat: 52.03838105093706,
        lng: 6.926555259616521
    }]
};