var dog, happyDog, database, foodS, foodStock

function preload()
{
  dog1Image = loadImage("images/dogImg.png")
  dog2Image = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(1000, 500);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dog1Image)
  dog.scale = 0.25
  
  firebase.database().ref('Food')
  database = firebase.database()
 
  foodStock = database.ref('Food')
   foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dog2Image)

  }

  if(keyWentDown(DOWN_ARROW)){
    writeStock1(foodS)
    dog.addImage(dog1Image)

  }

  if(foodS < 0){
    writeStock2(foodS)
    }

  fill("black")
  textSize(30)
  text (foodS, 50,50)
  text("Note: Press DOWN_ARROW key to feed The Dog Food", 100, 50)
  text("Note: Press UP_ARROW key to get more fud", 100, 100)


}

function readStock(data){
foodS = data.val()

}

function writeStock(x){
  


  
  database.ref('/').update({
    Food:x = x+1
  })
}

function writeStock1(x){
  


  
  database.ref('/').update({
    Food:x = x-1
  })
}

function writeStock2(x){
  


  
  database.ref('/').update({
    Food:x = 0
  })
}


