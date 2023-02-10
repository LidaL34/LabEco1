let canvas;

let dogoURL

let catURL

let randomURL
let randomName
let randomAge

let coinURL
let coinCode
let coinSym
let coinDes

let usURL
let usId
let usYear


function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw() {
    background(0, 50); 
    newCursor();

    if (dogoURL !== undefined){
        textSize(20)
        text (' Random dog pic:',100, 50)
        image (dogoURL, 100, 55, 100,100)
    }
    if (catURL !== undefined){
        text ('Cat Fact:', 100 ,200)
        text (catURL,100, 225)
    }
    if (randomURL !== undefined){
        text (' Random User:',100, 300)
        text ( randomName, 100,330)
        text ( randomAge, 100, 360)
    }
    if (coinURL !== undefined){
        text ('Bitcoin Info:', 100,400)
        text (coinCode, 100,435)
        text ( coinSym,100,455)
        text ( coinDes, 100, 475)
    }
    if (usURL !== undefined){
        text ('US Population Info:', 100, 550)
        text (usId,100,550)
        text (usYear, 100, 600)

    }
}

function mouseClicked(){
    //Put here your fetch functions
    // fetch("https://dog.ceo/api/breeds/image/random")
    // .then (response => response.json())
    // .then (data => {
    //     dogoURL = data
    //     console.log (dogoURL)
    // });

    dogApi ("https://dog.ceo/api/breeds/image/random");
    catApi ("https://catfact.ninja/fact");
    randomApi ("https://randomuser.me/api/");
    coinApi ("https://api.coindesk.com/v1/bpi/currentprice.json");
    usApi ("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
}

async function dogApi(URL){
    const response = await fetch (URL);
    const data = await response.json();
    dogoURL =  loadImage (data.message);
    console.log (dogoURL);
}

async function catApi(URL){
    const response = await fetch (URL);
    const data = await response.json();
    catURL =  data.fact;
    console.log (catURL);
}

async function randomApi(URL){
    const response = await fetch (URL);
    const data = await response.json();
    randomURL =  data.results [0];
    randomName = data.results [0].name.first
    randomAge = data.results [0].dob.age
    console.log (randomURL);
}

async function coinApi(URL){
    const response = await fetch (URL);
    const data = await response.json();
    coinURL =  data.bpi.USD;
    coinCode = data.bpi.USD.code
    coinDes = data.bpi.USD.description
    coinSym = data.bpi.USD.symbol
    console.log (coinURL);
}

async function usApi(URL){
    const response = await fetch (URL);
    const data = await response.json();
    usURL =  data.data [0];
    usId = data.data [0].IDNation;
    usYear = data.data [0].Year;

    console.log (usURL);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}