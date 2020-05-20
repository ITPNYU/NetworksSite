let res;
function preload() {
  let url = 'http://localhost:3000/hi';
  httpGet(url, 'json', false, function(response) { //use the httpGet() function in p5 to make a CORS request
    res = response;
  });
}

function setup(){
  createCanvas(400, 400);
}

function draw() {
  if (!res) {
    return; // Wait until the earthquake data has loaded before drawing.
  }
  background(200);
  textAlign(CENTER);
  text(res.msg, 0, height/2, width, 30);
  noLoop();
}