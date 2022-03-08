let data2021 =[ // array of objects data 2021
    { label: 'PC',        value: 35.9},
    { label: 'Console',   value: 49.2},
    { label: 'Mobile',    value: 90.7}
];

let horizontalgraphdata =[ // array of objects data 2021
    { label: 'China',               value: 45.64},
    { label: 'United States',       value: 39.07},
    { label: 'Japan',               value: 20.76},
    { label: 'Republic of Korea',   value: 7.53},
    { label: 'Germany',             value: 5.70},
    { label: 'United Kingdom',      value: 5.51},
    { label: 'France',              value: 4.02},
    { label: 'Canada',              value: 3.55},
    { label: 'Italy',               value: 3.21},
    { label: 'Brazil',              value: 2.29}
];

let linegraphdata =[ // array of objects on the linegraph
    { label: 'Wii Sports',                  value: 82.65},
    { label: 'Super Mario Bros.',           value: 40.24},
    { label: 'Mario Kart Wii',              value: 35.98},
    { label: 'Wii Sport Resort',            value: 32.90},
    { label: 'Pokémon R/G/B',               value: 31.37},
    { label: 'Tetris',                      value: 30.26},
    { label: 'New Super Mario Bros.',       value: 29.85},
    { label: 'Wii Play',                    value: 28.92},
    { label: 'New Super Mario Bros. Wii',   value: 28.51},
    { label: 'Duck Hunt',                   value: 28.31},
    { label: 'Nintendogs',                  value: 24.68},
    { label: 'Mario Kart DS',               value: 23.26},
    { label: 'Pokémon G/S',                 value: 23.10},
    { label: 'Wii Fit',                     value: 22.70},
    { label: 'Kinect Adventures!',          value: 22.10},
    { label: 'Wii Fit Plus',                value: 21.81},
    { label: 'GTA: San Andreas',            value: 20.81},
    { label: 'Super Mario World',           value: 20.61},
    { label: 'GTA V',                       value: 20.32},
    { label: 'Brain Age',                   value: 20.16}
];

let data2022 =[
    {
        label: 'Xbox One',
        categories:['GTA V', 'PUBG', 'COD:BO3', 'Halo 5:Guardians', 'COD:WW2'],
        total:[36.92],
        value: [8.72,8,7.37,6.6,6.23]
    },

    {
        label: 'PS4',
        categories:['God Of War', 'Uncharted 4', 'Spider-Man', 'The Witcher 3', 'Horizon Zero Dawn'],
        total:[69.5],
        value: [19.5,16,13.2,10.8,10]
    },

    {
        label: 'Switch',
        categories:['Mario Kart 8', 'Animal Crossing', 'Super Smash Bros', 'Breath of the Wild', 'Pokemon Sword and Shield'],
        total:[158.07],
        value: [43.35,37.62,27.40,25.80,23.90]
    },

    {
        label: 'Steam',
        categories:['CS:GO', 'PUBG', 'L4D2', 'Payday 2', 'CS:Source'],
        total:[114.16],
        value: [36,29.7,18.43,15.04,14.99]
    }
];

let colors

let chart01; // dning the variable chart01

function setup(){

    createCanvas(900, 900);
    background(50);
    colors = [color('#69D2E7'), color('#A7DBD8'), color('#E0E4CC'), color('#F38630'), color('#FA6900')];

    //data, title, posX, posY, chartWidth, chartHeight, showValues
    chart01 = new BarChart(data2021);                   
    chart02 = new HorizontalChart(horizontalgraphdata);
    chart03 = new StackedChart(data2022);
    chart04 = new LineChart(linegraphdata);

} // end of setup

function draw(){
    background(50);

    chart01.updateValues()
    chart01.render()

    chart02.updateValues()
    chart02.render()

    chart03.updateValues()
    chart03.render()

    chart04.updateValues()
    chart04.render()

} // end of draw