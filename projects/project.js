let circles = []
let circles2 = []
function setup(){
    createCanvas(1270,1500)
    for(i = 0; i <25;i++){
        let circle = {
        x : 1000,
        y : 50  + (i*65),
        r : random(25,100) 
        }
    circles.push(circle)
    }
    for(i = 0; i <25;i++){
        let circle2 = {
        x : 200,
        y : 50 + (i*65) ,
        r : random(25,100) 
        }
    circles2.push(circle2)
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
    for(i = 0; i < circles.length; i++){
        let curr = circles2[i];
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


