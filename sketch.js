var dog, happyDog, database, foodS, foodStock

function preload()
{
  dog = loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  backGround("46, 139, 87")

  drawSprites();
  
  if(keyWentdown(UP_ARROW))  {
    writeStock(foodS);
    dog.addImage(dogHappy)
  }

}



