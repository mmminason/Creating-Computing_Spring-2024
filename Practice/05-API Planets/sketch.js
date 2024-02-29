let planetsData = [];

async function setup() {
    createCanvas(800, 400);

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
console.log(planetsData);
