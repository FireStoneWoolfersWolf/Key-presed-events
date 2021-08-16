canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

Nasa_Mars_Array = ["mars.jpg", "Mars1.jpg", "Mars2.jpg","Mars3.jpg" ];
RandomNum = Math.floor(Math.random()*4);


rover_width = 100;
rover_height = 90;
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
background_img = Nasa_Mars_Array[RandomNum];

function Back_Back_img(){
    background_imgTag.src = background_img;
}

window.addEventListener("keydown" ,KeyDown);
function KeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

	if((keyPressed >=97 && keyPressed<=122) (keyPressed >=65 && keyPressed <=90))
    {
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet Key";
		console.log("alphabet key");
	}
	if(keyPressed >=48 && keyPressed<=57) 
    {
		numberkey();
		document.getElementById("d1").innerHTML="You pressed Number Key";
		console.log("number key");
	}
	if(keyPressed >=37 && keyPressed<=40) 
    {
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed Arrow Key";
		console.log("arrow key");
	}
}
function aplhabetkey(){
background_img = "Alpkey.png"
}
function numberkey(){
background_img = "numkey.png"	
}
function arrowkey(){
background_img = "Arrkey.png"	
}