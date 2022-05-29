//BACKGROUNDS
var back,back1Img, back2Img, back3Img;
//CAKE
var cake, cakeImg;
//Opening cake
var cake2, cake2Img;
//Group of cake
var cakeG;
//Touch the top
var mount, mountImg;
//Lots of love
var last, lastImg;
//plaY
var playbtn, playImg;
//GAMESTATES
var gamestate, g1, g2, g3;
g1=1;
g2=2;
g3=3;
gamestate=g1;

//walls
var wall1, wall2, wall3, wall4, wall;

//background music
var music;

//timing
var t=5;

//candyImage
var candyImg;

function preload()
{
    back2Img=loadImage("image/back3.png");
    back1Img=loadImage("image/back2.png");
    back3Img=loadImage("image/back4.jpg");
    cakeImg=loadImage("image/cake1.png");
    cake2Img=loadAnimation("image/donut1.png","image/donut2.png");
    playImg=loadImage("image/resume.png");
    candyImg=loadImage("image/candy3.png");
    music=loadSound("track_frozen.mp3");
}

function setup()
{
    canvas=createCanvas(windowWidth, windowHeight);
    back=createSprite(width/2,height/2);
    back.addImage("back1",back2Img);

    back.addImage("back2",back1Img);
    back.addImage("back3",back3Img);

    back.scale=1.3;

    playbtn=createSprite(width/2,height/2);
    playbtn.addImage("play",playImg);
    playbtn.scale=0.3;
    

    //UPPER WALL
   
    wall1=createSprite(width/2,height/9,width,10);
    wall1.visible=false;

    //LOWER WALL
    wall2=createSprite(width/2,height/1.5,width,10);
    wall2.visible=false;

    //LEFT WALL
    wall3=createSprite(width/9,height/2,10,height);
    wall3.visible=false;

    //RIGHT WALL
    wall4=createSprite(width/1.5,height/2,10,height);
    wall4.visible=false;

    //WALL's GROUP
    wall=new Group();

   cakeG=new Group();
   
   }

function draw()
{

    background(0);
    drawSprites();

    playbtn.visible=false;
    console.log(gamestate);
    console.log(t);
   
    if(gamestate===g1)
    {
       if(!music.isPlaying())
      {
        music.play();
       }
  
       
        back.addImage("back1",back2Img);
        back.scale=1.2;
        var candy= createSprite(width/2,height/2);
        candy.addImage("candy",candyImg);
        candy.scale=0.8;
        candy.rotationSpeed=7;
        
        if(frameCount%50===0)
        {
            t--;
        }
        if(t<5)
        {
            gamestate=g2;
        }    
    }

    if(gamestate===g2)
    {
       

        back.changeImage("back2",back1Img);
       
        if(frameCount%50===0)
        {
            t--;
        } 
        if(t<0)
        {
            gamestate=g3;
        }      
    
        colliding();

    }

    if(gamestate===g3)
    {
        var candy= createSprite(width/2,height/2);
        candy.addImage("candy",candyImg);
        candy.scale=0.8;
        candy.rotationSpeed=7;

        var candy2= createSprite(width/3,height/3);
        candy2.addImage("candy2",candyImg);
        candy2.scale=0.8;
        candy2.rotationSpeed=7;

        
        var candy3= createSprite(width/1.5,height/3);
        candy3.addImage("candy2",candyImg);
        candy3.scale=0.8;
        candy3.rotationSpeed=7;


        cakeG.destroyEach();
        back.changeImage("back3",back3Img);
        back.scale=1.8;
        textSize(64);
        textFont("Brush Script MT")
        stroke("deeppink");
        fill(39, 6, 147);
        strokeWeight(8);
        text("Happy Birthday To You",width/10, height/5);
       
       // noBackround();
    }
}  



   


function colliding()
{
    wall.add(wall1);
    wall.add(wall2);
    wall.add(wall3);
    wall.add(wall4);

    if(frameCount%20===0)
    {
        cake= createSprite(width/3,height/2),
         cake.addImage("cake",cakeImg);

         cake2=createSprite(width/3,height/2);
        cake2.addAnimation("cake2",cake2Img);
        cake.x=cake.x++;        cake2.x=cake.x++;

       cake.rotationSpeed=random(2,3);
        cake2.rotationSpeed=random(2,3);
         cake.velocityX=random(-4,4);
            cake2.velocityX=random(-4,4);

            cake.velocityY=random(-4,4);
            cake2.velocityY=random(-4.4);
        cakeG.add(cake);
        cakeG.add(cake2);
    }

}
