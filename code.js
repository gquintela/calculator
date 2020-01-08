// global variables
var acum = 0;
var pressed_number = 0;
var screen_value = document.getElementById("screen").innerHTML;
var write_new_number = true;
var acum_mode = true; 

// events: numbers
document.getElementById("double_zero").addEventListener("click", () => write('00'));
document.getElementById("zero").addEventListener("click", () => write(0));
document.getElementById("one").addEventListener("click", () => write(1));
document.getElementById("two").addEventListener("click", () => write(2));
document.getElementById("three").addEventListener("click", () => write(3));
document.getElementById("four").addEventListener("click", () => write(4));
document.getElementById("five").addEventListener("click", () => write(5));
document.getElementById("six").addEventListener("click", () => write(6));
document.getElementById("seven").addEventListener("click", () => write(7));
document.getElementById("eight").addEventListener("click", () => write(8));
document.getElementById("nine").addEventListener("click", () => write(9));
document.getElementById("dot").addEventListener("click", () => write('.'));

// events: operations
document.getElementById("add").addEventListener("click", () => add(pressed_number));
document.getElementById("substract").addEventListener("click", () => substract(pressed_number));
document.getElementById("div_10").addEventListener("click", () => div_10());
document.getElementById("multiply").addEventListener("click", () => multiply(pressed_number));
document.getElementById("division").addEventListener("click", () => division(pressed_number));
document.getElementById("pow").addEventListener("click", () => pow(pressed_number));


// events: change mode
document.getElementById("normal_btn").addEventListener("click", () => normal_mode());
document.getElementById("acum_btn").addEventListener("click", () => acum_mode());

// events: reset
document.getElementById("reset").addEventListener("click", () => reset());


function isInt(n){
    return Number(n) === n && n % 1 === 0;
}


function write(n) {
	if (write_new_number) {
		document.getElementById("top_screen").innerHTML = n;
		pressed_number = n;
		write_new_number = false;
	} else {
		document.getElementById("top_screen").innerHTML = document.getElementById("top_screen").innerHTML.concat(n);
		pressed_number = document.getElementById("top_screen").innerHTML;
	}
}

function init_function(){
	document.getElementById("screen").innerHTML = 0;	
}

function add(pressed_number){
	if (isInt(pressed_number ) && isInt(acum) ) {
	acum += parseInt(pressed_number);
	} else {
	acum += parseFloat(pressed_number);
	}
	document.getElementById("screen").innerHTML = acum;
	write_new_number = true;
}

function substract(pressed_number){
	if (isInt(pressed_number ) && isInt(acum) ) {
	acum -= parseInt(pressed_number);
	} else {
	acum -= parseFloat(pressed_number);
	}
	document.getElementById("screen").innerHTML = acum;
	write_new_number = true;
}

function multiply(pressed_number){
	if (isInt(pressed_number ) && isInt(acum) ) {
	acum *= parseInt(pressed_number);
	} else {
	acum *= parseFloat(pressed_number);
	}
	document.getElementById("screen").innerHTML = acum;
	write_new_number = true;
}

function division(pressed_number){
	if (pressed_number == 0) {
		alert("You can't divide by 0!");
		write_new_number = true;
	} else {
		if (isInt(pressed_number ) && isInt(acum) ) {
		acum /= parseInt(pressed_number);
		} else {
		acum /= parseFloat(pressed_number);
		}
		document.getElementById("screen").innerHTML = acum;
		write_new_number = true;
	}
}

function pow(pressed_number){
	acum = acum**parseInt(pressed_number);
	document.getElementById("screen").innerHTML = acum;
	write_new_number = true;
}


function div_10(){
	if (Math.abs(document.getElementById("top_screen").innerHTML) == 0) {
		write_new_number = true;
	} else if (Math.abs(document.getElementById("top_screen").innerHTML < 10)){	
		document.getElementById("top_screen").innerHTML = 0;
		write_new_number = true;
	} else {
		pressed_number = Math.floor(acum / 10);
		document.getElementById("top_screen").innerHTML = Math.floor(document.getElementById("top_screen").innerHTML / 10);
	}
}

function reset(){
	acum = 0;
	pressed_number = 0;
	document.getElementById("screen").innerHTML = acum;	
	document.getElementById("top_screen").innerHTML = acum;	
	write_new_number = true;
}

function normal_mode(){
	document.getElementById("normal_btn").style.background = '#6c69fd';
	document.getElementById("acum_btn").style.background = '#aaaede';
	document.getElementById("equal_btn").style.background = '#aaaede';
	document.getElementById("equal_btn").style.cursor.hover = "pointer";
}

function acum_mode(){
	document.getElementById("normal_btn").style.background = '#aaaede';
	document.getElementById("acum_btn").style.background = '#6c69fd';
	document.getElementById("equal_btn").style.background = 'grey';
	document.getElementById("normal_btn").style.cursor.hover = 'auto';
}
