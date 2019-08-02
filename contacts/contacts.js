let circles = []
function setup(){
    createCanvas(1270,600)
    for(i = 0; i <23;i++){
        let circle = {
        x : 50+ (i*50),
        y : 400,
        r : random(25,50) 
        }
    circles.push(circle)
    }
}

function draw(){
    background(color(25,25,112));

    for(i = 0; i < circles.length; i++){
        let curr = circles[i];
        noStroke();
        fill(randomColor());
        ellipse(curr.x,curr.y,curr.r);
        curr.x += random(-2,2);
        curr.y += random(-2,2);
        curr.r += random(-2,2);
    }
}

function randomColor(){
    a = random(200,255)
    b = random(200,255)
    c = random(200,255)
    let randColor = color(a,b,c)
    return randColor
}

