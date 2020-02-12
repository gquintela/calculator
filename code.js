// global variables
let acum = "";
let pressed_number = undefined;
let screen_value = document.getElementById("screen").innerHTML;
let write_new_number = true;
let mode = "acum"; 
document.getElementById("top_screen").innerHTML = "";
document.getElementById("screen").innerHTML = "";

function init_function(){
	document.getElementById("screen").innerHTML = 0;
	acum = 0;
	pressed_number = 0;
	screen_value = document.getElementById("screen").innerHTML;
	write_new_number = true;
	acum_mode();
}

function write(n) {
	if (mode == "normal") {
		if (write_new_number) {
			document.getElementById("screen").innerHTML = n;
			pressed_number = n;
			write_new_number = false;
	}	else{
			document.getElementById("top_screen").innerHTML = document.getElementById("top_screen").innerHTML.concat(n);
			pressed_number = document.getElementById("top_screen").innerHTML;
		}
	} else {
		if (write_new_number) {
			document.getElementById("top_screen").innerHTML = n;
			pressed_number = n;
			write_new_number = false;
	}	else{
			document.getElementById("top_screen").innerHTML = document.getElementById("top_screen").innerHTML.concat(n);
			pressed_number = document.getElementById("top_screen").innerHTML;
		}
	}

}

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
document.getElementById("memory_01_store").addEventListener("click", () => store_01());
document.getElementById("memory_02_store").addEventListener("click", () => store_02());
document.getElementById("memory_01_load").addEventListener("click", () => load_01());
document.getElementById("memory_02_load").addEventListener("click", () => load_02());
document.getElementById("memory_01_clear").addEventListener("click", () => clear_01());
document.getElementById("memory_02_clear").addEventListener("click", () => clear_02());
document.getElementById("copy_btn").addEventListener("click", () => copy_to_clipboard());
document.getElementById("paste_btn").addEventListener("click", () => paste_from_clipboard());

function animation_keyboard(key){
	document.getElementById(key).classList.add('key_pressed');
	setTimeout( () => document.getElementById(key).classList.remove('key_pressed'), 100);
}

addEventListener("keydown", function(event) {
	switch(event.keyCode){
		case 48:
		case 96:
			write(0);
			animation_keyboard("zero");
			break;
		case 49:
		case 97:
			write(1);
			animation_keyboard("one");
			break;
		case 50:
		case 98:
			write(2);
			animation_keyboard("two");
			break;
		case 51:
		case 99:
			write(3);
			animation_keyboard("three");
			break;
		case 52:
		case 100:
			write(4);
			animation_keyboard("four");
			break;
		case 53:
		case 101:
			write(5);
			animation_keyboard("five");
			break;
		case 54:
		case 102:
			write(6);
			animation_keyboard("six");
			break;
		case 55:
		case 103:
			write(7);
			animation_keyboard("seven");
			break;
		case 56:
		case 104:
			write(8);
			animation_keyboard("eight");
			break;
		case 57:
		case 105:
			write(9);
			animation_keyboard("nine");
			break;
		case 107:
		case 187:
			add(pressed_number);
			animation_keyboard("add");
			break;
		case 109:
		case 189:
			substract(pressed_number);
			animation_keyboard("substract");
			break;
		case 56:
		case 106:
			multiply(pressed_number);
			animation_keyboard("multiply");
			break;
		case 111:
		case 191:
			divide(pressed_number);
			animation_keyboard("divide");
			break;
		case 27:
			reset();
			animation_keyboard("reset");
			break;
		case 8:
			div_10(pressed_number);
			animation_keyboard("div_10");
			break;
		case 110:
		case 190:
			write('.');
			animation_keyboard("dot");
			break;
		case 67:
			copy_to_clipboard();
			animation_keyboard("copy_btn");			
			break;
		case 86:
			paste_from_clipboard();	
			animation_keyboard("paste_btn");		
			break;
	}
});


// events: operations
document.getElementById("add").addEventListener("click", () => add(pressed_number));
document.getElementById("substract").addEventListener("click", () => substract(pressed_number));
document.getElementById("div_10").addEventListener("click", () => div_10());
document.getElementById("multiply").addEventListener("click", () => multiply(pressed_number));
document.getElementById("divide").addEventListener("click", () => divide(pressed_number));
document.getElementById("pow").addEventListener("click", () => pow(pressed_number));




//about mode
document.getElementById("about_btn").addEventListener("click", () => about_mode());

//credits
document.getElementById("credits_btn").addEventListener("click", () => show_credits());

//return
document.getElementById("return_btn").addEventListener("click", () => return_to_calc());

// events: reset
document.getElementById("reset").addEventListener("click", () => reset());





function add(pressed_number){
	if(mode == 'normal'){
		if (isNormalInteger(pressed_number ) && isNormalInteger(acum) ) {
			acum += parseInt(pressed_number);
		} else {
			acum += parseFloat(pressed_number);
		}
		if (document.getElementById("top_screen").innerHTML == "0") {
			document.getElementById("top_screen").innerHTML =  pressed_number + "+";
		} else{
			document.getElementById("top_screen").innerHTML = document.getElementById("top_screen").innerHTML + pressed_number + "+";
		}
			write_new_number = true;
			document.getElementById("screen").innerHTML = acum;
	}else{
		if (isNormalInteger(pressed_number ) && isNormalInteger(acum) ) {
			acum += parseInt(pressed_number);
		} else {
			acum += parseFloat(pressed_number);
		}
		document.getElementById("screen").innerHTML = acum;
		write_new_number = true;
	}
}

function substract(pressed_number){
	if(mode == 'normal'){
		document.getElementById("top_screen").innerHTML = document.getElementById("top_screen").innerHTML.concat('-');
	}else{
		if (isNormalInteger(pressed_number ) && isNormalInteger(acum) ) {
			acum -= parseInt(pressed_number);
		} else {
			acum -= parseFloat(pressed_number);
		}
		document.getElementById("screen").innerHTML = acum;
		write_new_number = true;
	}
}

function multiply(pressed_number){
	if(mode == 'normal'){
		document.getElementById("top_screen").innerHTML = document.getElementById("top_screen").innerHTML.concat('*');
	}else{
		if (isNormalInteger(pressed_number ) && isNormalInteger(acum) ) {
			acum *= parseInt(pressed_number);
		} else {
			acum *= parseFloat(pressed_number);
		}
		document.getElementById("screen").innerHTML = acum;
		write_new_number = true;
	}
}

function divide(pressed_number){
	if(mode == 'normal'){
		document.getElementById("top_screen").innerHTML = document.getElementById("top_screen").innerHTML.concat('/');
	}else{
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
}

function pow(pressed_number){
	if(mode == 'normal'){

	}else{
		if (isNormalInteger(pressed_number)) {
			acum = acum**parseInt(pressed_number);		
		}else{
			acum = acum**parseFloat(pressed_number);
		}
		document.getElementById("screen").innerHTML = acum;
		write_new_number = true;
	}
}

function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}


function div_10(){
	if(mode == 'normal'){
		let str= document.getElementById("top_screen").innerHTML;
		let newStr = str.substring(0, str.length - 1);
		document.getElementById("top_screen").innerHTML = newStr;
	}else{
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
	mode = 'normal';
	document.getElementById("equal_btn").style.opacity = 1;
}

function acum_mode(){
	reset();
	mode = 'acum';
}

function hide_calc(){
	document.getElementById("calculator").classList.add('hide');
}

function show_calc(){
	document.getElementById("calculator").classList.remove('hide');
}


function about_mode(){
	hide_calc();
	document.getElementById("return_btn").classList.remove('hide');
	document.getElementById("about_container").classList.remove('hide');
	document.getElementById("memory_01").classList.add('hide');
	document.getElementById("memory_02").classList.add('hide');
}

function return_to_calc(){
	show_calc();
	document.getElementById("return_btn").classList.add('hide');
	document.getElementById("credits_container").classList.add('hide');
	document.getElementById("about_container").classList.add('hide');
	document.getElementById("memory_01").classList.remove('hide');
	document.getElementById("memory_02").classList.remove('hide');
}

function show_credits(){
	hide_calc();
	document.getElementById("return_btn").classList.remove('hide');
	document.getElementById("credits_container").classList.remove('hide');
	document.getElementById("memory_01").classList.add('hide');
	document.getElementById("memory_02").classList.add('hide');

}

function equal (){
	let expression = document.getElementById("top_screen").innerHTML;
	parenthesis = validate_parenthesis(expression);
	if (!parenthesis){
		alert("sintax error!");
	} else{
		document.getElementById("screen").innerHTML = compute_value(expression);
	}
}

function store_01(){
	document.getElementById("screen_memory_01").innerHTML = document.getElementById("screen").innerHTML;
}

function store_02(){
	document.getElementById("screen_memory_02").innerHTML = document.getElementById("screen").innerHTML;
}

function clear_01(){
	document.getElementById("screen_memory_01").innerHTML = 0;
}

function clear_02(){
	document.getElementById("screen_memory_02").innerHTML = 0;
}

function load_01(){
	document.getElementById("top_screen").innerHTML = document.getElementById("screen_memory_01").innerHTML;
	pressed_number = document.getElementById("screen_memory_01").innerHTML;
	write_new_number = false;
}

function load_02(){
	document.getElementById("top_screen").innerHTML = document.getElementById("screen_memory_02").innerHTML;
	pressed_number = document.getElementById("screen_memory_02").innerHTML;
	write_new_number = false;
}

function copy_to_clipboard(){
	
	let elm = document.getElementById("screen");
	let selection = window.getSelection();
	let range = document.createRange();
	range.selectNodeContents(elm);
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand("Copy");
	setTimeout( () => selection.removeAllRanges() , 250); // visual effect to copy
	
}

async function paste_from_clipboard(){
  const value = await navigator.clipboard.readText();
  document.getElementById("top_screen").innerHTML = value;
  pressed_number = value;
  let write_new_number = true;
  }

