// x value : distance between with sun and planet
// y value : orbital period of planet(bottom to top)
// brightness of planet : temperature of planet



let planetsData = [];
let stars = [];

async function fetchData() {
    const secretResponse = await fetch('./data/secret.json');
    const secretJson = await secretResponse.json();
    const apiKey = secretJson.apiKey; // Replace with apikey from secretJson

    // Api에서 각 행성 데이터를 불러오기 위한 array
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
    await fetchData();
    generateStars(200);
    background(5, 10, 30);
    drawPeriodCircle();
}
function draw() {

    drawStars();
    drawSun();


    // Draw each planet on the canvas
    for (let i = 0; i < planetsData.length; i++) {
        const planet = planetsData[i][0];

        const radius = parseFloat(planet.radius);
        const period = parseFloat(planet.period);
        const temperature = planet.temperature;
        const sDistance = planet.semi_major_axis;


        const diameter = map(radius, 0.0001, 1, 2, 90);
        const x = map(sDistance, 0, 31, 15, width);


        //y value > period (공전주기), 위로 갈수록 공전주기가 길다. 
        const y = map(period, 60000, 80, 50, height - 100);


        const planetColor = map(temperature, 70, 750, 10, 100);

        drawPlanet(x, y, diameter, planetColor, planet.name);


        beforeDiameter = diameter;

    }

}


function drawPeriodCircle() {
    let circleSize = 285;
    let circleGap = 10;
    for (let i = 0; i < 25; i++) {

        stroke(244,76,17,255-i*10);
        strokeWeight(0.5);
        fill(30, 30, 120, 5);
        ellipse(15, height / 2, circleSize, circleSize);
        circleSize += i * circleGap;
    }

}

function drawPlanet(x, y, diameter, planetcolor, name) {
    const radius = diameter / 2;

    // Draw planet
    push();
    colorMode(HSB, 100);
    fill(15, 90, planetcolor);
    noStroke();
    ellipse(x, y, diameter, diameter);
    pop();

    // Draw planet name
    push();
    translate(x, y);
    rotate(HALF_PI);
    fill(150,230,255);
    textAlign(LEFT, CENTER);
    textFont('Helvetica', 9);
    text(name, radius + 10, 0);
    pop();
}
function drawSun() {
    noStroke();
    fill(244,76,17);
    ellipse(15, height/2, 280, 280);
}

function generateStars(numStars) {
    for (let i = 0; i < numStars; i++) {
        const x = random(width);
        const y = random(height);
        const size = random(1, 3);
        const brightness = random(100, 255);
        const star = { x, y, size, brightness };
        stars.push(star);
    }
}

function drawStars() {
    for (const star of stars) {
        fill(star.brightness);
        noStroke();
        ellipse(star.x, star.y, star.size, star.size);

        if (random() > 0.95) {
            star.brightness = random(100, 255);
        }
    }
}

