
let data;
let maxLat, maxLng, minLat, minLng;

let stations = [];

let currentTime, maxTime;

let trips = [];

function preload(){
    data = loadJSON('./data/2023-11-06.json');
}
function setup(){
    createCanvas(600,600);
    

    console.log('stations', data.stations.length);
    const lats = data.stations.map(station => station.lat); //lats에 모든 lat 데이터 넣기
    //console.log(lats);
    maxLat = Math.max(...lats); //... > https://fjolt.com/article/javascript-three-dots-spread-operator   
    maxLng = Math.max(...data.stations.map(station => station.lng));   
    minLat = Math.min(...lats);
    minLng = Math.min(...data.stations.map(station => station.lng));

    console.log(maxLat, maxLng, minLat, minLng);

    data.stations.forEach( s => {
        const station = new Station(s);
        stations.push(station);
    });

    data.trips.forEach(t=>{
        const trip = new Trip(t);
        trips.push(trip);
    })

    currentTime = data.trips[0].st;
    maxTime = data.trips[data.trips.length-1].et;


}
function draw(){
    background(220);
    
    currentTime += 60000;

    const time = new Date(currentTime);
    const timeStr = formatAMPM(time);
    text(timeStr,10,20);

    stations.forEach(s=>{
        s.display();
    });

    trips.forEach(t=>{
        t.display(currentTime);
    });
}

function formatAMPM(date){
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours>=12? 'pm':'am';
    hours = hours%12;
    hours = hours? hours:12;
    minutes = minutes < 10? '0'+minutes : minutes;
    var strTime =  hours + ':' + minutes+ ' ' +ampm;
    return strTime;
}
