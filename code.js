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

// events: operations
document.getElementById("add").addEventListener("click", () => add(pressed_number));
document.getElementById("substract").addEventListener("click", () => substract(pressed_number));
document.getElementById("mod_10").addEventListener("click", () => mod_10());


// events: change mode
document.getElementById("normal_btn").addEventListener("click", () => normal_mode());
document.getElementById("acum_btn").addEventListener("click", () => acum_mode());

// events: reset
document.getElementById("reset").addEventListener("click", () => reset());



function write(n) {
	if (write_new_number) {
		document.getElementById("screen").innerHTML = n;
		pressed_number = n;
		write_new_number = false;
	} else {
		document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML.concat(n);
		pressed_number = document.getElementById("screen").innerHTML;
	}
}

function init_function(){
	document.getElementById("screen").innerHTML = 0;	
}

function add(pressed_number){
	acum += parseInt(pressed_number);
	document.getElementById("screen").innerHTML = acum;
	write_new_number = true;
}

function substract(pressed_number){
	acum -= parseInt(pressed_number);
	document.getElementById("screen").innerHTML = acum;
	write_new_number = true;
}

function mod_10(){
	if (Math.abs(document.getElementById("screen").innerHTML) == 0) {
		write_new_number = true;
	} else if (Math.abs(document.getElementById("screen").innerHTML < 10)){	
		document.getElementById("screen").innerHTML = 0;
		write_new_number = true;
	} else {
		acum = acum % 10;
		document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML % 10;
	}
}

function reset(){
	acum = 0;
	pressed_number = 0;
	document.getElementById("screen").innerHTML = acum;	
	write_new_number = true;
}

function normal_mode(){
	document.getElementById("normal_btn").style.background = '#6c69fd';
	document.getElementById("acum_btn").style.background = '#aaaede';
}

function acum_mode(){
	document.getElementById("normal_btn").style.background = '#aaaede';
	document.getElementById("acum_btn").style.background = '#6c69fd';
}