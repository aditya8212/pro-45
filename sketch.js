var canvas;
var gameState = "story";
var john;

function preload(){
	johnimg = loadImage("john.png");
	coinsimg = loadImage("jet_coins.png");
	firstback = loadImage("jetpackback1.jpg");
	zapperimg = loadImage("NewZapper.png");
	missile = loadImage("mis.png");
	ground = loadImage("jet gru.jpg");
	back = loadImage("grun.png");
	play = loadImage("play.png");

}

function setup() {
 
	canvas = createCanvas(1200,700);

	missileG = new Group();
	bulletsG = new Group();

	backi = createSprite(1200,430);
	backi.addImage(back);
	backi.velocityX = -5;
	backi.scale = 2.2;
	

	gru = createSprite(1200, 660, 2400, 50);
	gru.addImage(ground); 
	gru.scale = 1.55;
	gru.velocityX = -5;

	gruinvinsible = createSprite(600,600,1200,5);
	gruinvinsible.visible = false;

	gruinvinsible2 = createSprite(600,30,1200,10);
	gruinvinsible2.visible = false;

	john = createSprite(100,500,10,10);
	
	john.addImage(johnimg);
	john.scale = 0.15;

	button = createSprite(560,410,40,20);

}

function draw() {
  
	background("white");

if(gameState === "start"){
	
	background(firstback);

	john.visible = false;
	gru.visible = false;
	backi.visible = false;


	if(mousePressedOver(button)){
		gameState = "play";

	}
	
}

if(gameState === "play"){
	
	background("white");

	gru.visible = true;
	john.visible = true;
	button.visible = false;
	backi.visible = true;

	if(keyDown("space")){
		john.velocityY = -10;
		bullets();

	}

	john.velocityY = john.velocityY+1;

	john.collide(gruinvinsible);

	spawnMissile();
	zapper();
	coinsF();

	if(john.isTouching(missileG)){
		john.visible = false;

	}

	if(gru.x < 0){
		gru.x = 1200;
	
	}

	if(backi.x < 0){
		backi.x = 1200;
	
	}

	john.collide(gruinvinsible2);

}

if(gameState === "story"){
	john.visible = false;
	gru.visible = false;
	backi.visible = false;
	button.visible = false;

	background("black");

	textSize(20);
	fill("red");
	text("STORY",550,50);
	
	textSize(15);
	fill("aquamarine");
	text("bal",50,100);
	

}

drawSprites();
  
}

function spawnMissile(){
	if(frameCount%200 === 0){
		miss = createSprite(1200,600);
		miss.addImage(missile);
		miss.velocityX = -10;
		miss.scale = 0.3;

		if(john.y < 550){
			miss.y = random(john.y-20,john.y+50);

		}
		else{
			miss.y = john.y-70;

		}

		miss.lifetime = 120;

		missileG.add(miss);

	}

}

function bullets(){
	if(frameCount%3 === 0){
		bul = createSprite(john.x,john.y+10,8,15);
		bul.velocityY = +20;
		bul.shapeColor = "yellow";
		bulletsG.add(bul);
		
		bul2 = createSprite(john.x-10,john.y+10,8,15);
		bul2.velocityY = +20;
		bul2.velocityX = -3;
		bul2.shapeColor = "yellow";
		bulletsG.add(bul2);

		bul3 = createSprite(john.x+10,john.y+10,8,15);
		bul3.velocityY = +20;
		bul3.velocityX = +3;
		bul3.shapeColor = "yellow";
		bulletsG.add(bul3);

	}

}

function zapper(){
	if(frameCount%100 === 0){
		zapp = createSprite(1200,600);
		zapp.addImage(zapperimg);
		zapp.rotationSpeed = 10;
		zapp.velocityX = -10;
		zapp.scale = 0.4;

		if(john.y < 550){
			zapp.y = random(john.y-20,john.y+50);

		}
		else{
			zapp.y = john.y-170;

		}

		console.log(john.y);
		
	}

}

function coinsF(){
	if(frameCount%310 === 0){
		
		
		for(i = 600; i < 2400; i = i+40 ){
			coins = createSprite(i,400);
		coins.addImage(coinsimg);
		coins.velocityX = -5;
		coins.scale = 0.4;

		}
	

	}


}