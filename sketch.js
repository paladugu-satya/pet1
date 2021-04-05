//Create variables here
var dog,dogimg,dogimg2
var database
var foodstock,foods
function preload()
{
  dogimg=loadImage("images/dogImg.png")
  dogimg2=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
    createCanvas(800, 700);
    database=firebase.database()
  dog=createSprite(400,350,1,1)
  dog.addImage(dogimg)
  
  dog.scale=0.3
foodstock=database.ref('food')
foodstock.on('value',readStock)












}


function draw() {  
background(46,139,87)
if (keyWentDown(UP_ARROW)){
writestock(foods)
dog.addImage(dogimg2)
}
  drawSprites();
  //add styles here
  fill(255,255,255)
  stroke("white")
text("foodremaining:"  +foods,100,100)
}






function readStock(data){
foods=data.val()
}
function writestock(x){
if (x<=0){
x=0
}
else{
  x=x-1
}
database.ref("/").update({
  food:x
})
}

