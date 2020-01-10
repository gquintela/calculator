// global variables
var acum = 0;
var pressed_number = 0;
var screen_value = document.getElementById("screen").innerHTML;
var write_new_number = true;
var mode = acum; 


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

// events: numbers
document.getElementById("double_zero").addEventListener("click", () => write('00'));
document.getElementById("zero").addEventListener("click", () => write(0));
document.getElementById("one").addEventListener("click", () => write(1));

addEventListener("keydown", function(event) {
	switch(event.keyCode){
		case 48:
		case 96:
			write(0);
			break;
		case 49:
		case 97:
			write(1);
			break;
		case 50:
		case 98:
			write(2);
			break;
		case 51:
		case 99:
			write(3);
			break;
		case 52:
		case 100:
			write(4);
			break;
		case 53:
		case 101:
			write(5);
			break;
		case 54:
		case 102:
			write(6);
			break;
		case 55:
		case 103:
			write(7);
			break;
		case 56:
		case 104:
			write(8);
			break;
		case 57:
		case 105:
			write(9);
			break;
		case 107:
		case 187:
			add(pressed_number);
			break;
		case 109:
		case 189:
			substract(pressed_number);
			break;
		case 56:
		case 106:
			multiply(pressed_number);
			break;
		case 111:
		case 191:
			division(pressed_number);
			break;
		case 27:
			reset();
			break;
		case 8:
			div_10(pressed_number);
			break;
		case 110:
		case 190:
			write('.');
			break;
	}
});

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



function init_function(){
	document.getElementById("screen").innerHTML = 0;	
}

function add(pressed_number){
	if (isNormalInteger(pressed_number ) && isNormalInteger(acum) ) {
	acum += parseInt(pressed_number);
	} else {
	acum += parseFloat(pressed_number);
	}
	document.getElementById("screen").innerHTML = acum;
	write_new_number = true;
}

function substract(pressed_number){
	if (isNormalInteger(pressed_number ) && isNormalInteger(acum) ) {
	acum -= parseInt(pressed_number);
	} else {
	acum -= parseFloat(pressed_number);
	}
	document.getElementById("screen").innerHTML = acum;
	write_new_number = true;
}

function multiply(pressed_number){
	if (isNormalInteger(pressed_number ) && isNormalInteger(acum) ) {
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
		if (isNormalInteger(pressed_number ) && isNormalInteger(acum) ) {
		acum /= parseInt(pressed_number);
		} else {
		acum /= parseFloat(pressed_number);
		}
		document.getElementById("screen").innerHTML = acum;
		write_new_number = true;
	}
}

function pow(pressed_number){
	if (isNormalInteger(pressed_number)) {
		acum = acum**parseInt(pressed_number);		
	}else{
		acum = acum**parseFloat(pressed_number);
	}
	document.getElementById("screen").innerHTML = acum;
	write_new_number = true;
}

function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}


function div_10(){
	if (Math.abs(document.getElementById("top_screen").innerHTML) < 10 && (isNormalInteger(document.getElementById("top_screen").innerHTML))){	
		document.getElementById("top_screen").innerHTML = 0;
		pressed_number = 0;
		write_new_number = true;
	} else if (isNormalInteger(document.getElementById("top_screen").innerHTML)){
		pressed_number = Math.floor(pressed_number / 10);
		document.getElementById("top_screen").innerHTML = pressed_number;
	} else {
		pressed_number = 0;
		document.getElementById("top_screen").innerHTML = pressed_number;
		write_new_number = true;
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
	reset();
	document.getElementById("normal_btn").style.borderColor = 'red';
	document.getElementById("acum_btn").style.borderColor = 'black';
	document.getElementById("normal_btn").classList.remove('animation');
	document.getElementById("acum_btn").classList.add('animation');
	document.getElementById("equal_btn").classList.add('animation');
	document.getElementById("normal_btn").style.cursor = "auto";
	document.getElementById("acum_btn").style.cursor = "pointer";
	document.getElementById("equal_btn").style.opacity = 1;
}

function acum_mode(){
	reset();
	document.getElementById("normal_btn").style.borderColor = 'black';
	document.getElementById("acum_btn").style.borderColor = 'red';
	document.getElementById("normal_btn").classList.add('animation');
	document.getElementById("acum_btn").classList.remove('animation');
	document.getElementById("equal_btn").classList.remove('animation');
	document.getElementById("acum_btn").style.cursor = "auto";
	document.getElementById("acum_btn").style.cursor = "pointer";
	document.getElementById("equal_btn").style.opacity = 0.5;
}

