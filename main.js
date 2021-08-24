var canvas = document.getElementById('canvaslol');
var canvaslol = canvas.getContext('2d'); 
var roverwidth = 100 
var roverheight = 90; 
var roverx  = 10 
var rovery  = 10; 
var background = "mars.jpg" 
var roverimg = "rover.png" 
var marsarray = ["mars1.png", "mars2.png", "mars3.png", "mars4.png"]
var randomnumber = Math.floor(Math.random() * 4) 
background = marsarray[randomnumber]
function justarandomfunction() {
    var stupidimages = new Image(); 
    stupidimages.onload = anotherbackgroundfunction; 
    stupidimages.src = background;  
    var ihatemars = new Image(); 
    ihatemars.onload = roverimgfunciton; 
    ihatemars.src = roverimg;  
}
function anotherbackgroundfunction() {  
    canvaslol.drawImage(background, 0, 0, canvas.width, canvas.height);
}
function roverimgfunciton() { 
    canvaslol.drawImage(roverimg, roverx, rovery, roverwidth, roverheight);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    var keypress = e.keyCode;  
    if (keypress == '37') {
        console.log("left")
        left();
    }
    if (keypress == '38') {
        console.log("up")
        up();
    }
    if (keypress == '39') {
        console.log("right")
        right();
    }
    if (keypress == '40') {
        console.log("down")
        down();
    }
}
function up() {
    if (rovery >= 0) {
        rovery = rovery - 10; 
        anotherbackgroundfunction() 
        roverimgfunciton() 
    } 
}
function down() {
    if (rovery <= 500) {
        rovery = rovery + 10; 
        anotherbackgroundfunction() 
        roverimgfunciton() 
    } 
}
function left() {
    if (roverx >= 0) {
        roverx = roverx - 10; 
        anotherbackgroundfunction() 
        roverimgfunciton() 
    } 
}
function right() {
    if (roverx <= 700) {
        roverx = roverx + 10; 
        anotherbackgroundfunction() 
        roverimgfunciton() 
    } 
}
