let planetsData = [];

async function fetchData() {
    const secretResponse = await fetch('./data/secret.json');
    const secretJson = await secretResponse.json();
    const apiKey = secretJson.apiKey; // Replace with apikey from secretJson

    // Api에서 각 행성 데이터를 불러오기 위한 array, 한번에 불러오는게 불가능한 것 같아요 
    const planetNames = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];


    try {
        for (const planetName of planetNames) {
            const url = `https://planets-by-api-ninjas.p.rapidapi.com/v1/planets?name=${planetName}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com',
                },
            };


            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);

            // Store the data for each planet
            planetsData.push(result);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


async function setup() {
    createCanvas(1000, 1000);
    background(10);
    await fetchData();

    drawPeriodCircle();

    // initial Xpos of planet & Gap
    let Xpos = 50;
    let gap = 50;

    // Draw each planet on the canvas
    for (let i = 0; i < planetsData.length; i++) {
        const planet = planetsData[i][0];

        const radius = parseFloat(planet.radius);
        const period = parseFloat(planet.period);
        const temperature = planet.temperature;

        const diameter = map(radius, 0.0001, 1, 10, 180);
        console.log(diameter);

        const x = Xpos + diameter / 2; // +radius of current planet
        //y value > period (공전주기), 위로 갈수록 공전주기가 길다. 
        const y = map(period, 60000, 80, height / 5, height * 4 / 5);

        const planetColor = map(temperature, 70, 750, 10, 100);

        drawPlanet(x, y, diameter, planetColor, planet.name);

        // Update x-coordinate for the next planet
        Xpos += diameter + gap; // Adjust the gap between planets

        beforeDiameter = diameter;

    }
}

function drawPeriodCircle() {
    let circleSize = 300;
    let circleGap = 10;
    for (let i = 0; i < 25; i++) {
        noFill();
        stroke(50);
        ellipse(-200, height / 2, circleSize, circleSize);
        circleSize += i * circleGap;
    }

}


function drawPlanet(x, y, diameter, planetcolor, name) {
    const radius = diameter / 2;

    // Draw planet
    colorMode(HSB, 100);
    fill(0,100,planetcolor);
    noStroke();
    ellipse(x, y, diameter, diameter);

    // Draw planet name
    fill(200);
    textAlign(CENTER, CENTER);
    textSize(10);
    text(name, x, y + radius + 10);
}
