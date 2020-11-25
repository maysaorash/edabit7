
function colorInvert(rgb) {
	return rgb.map(x=>255-x)
}

function missingAngle(angle1, angle2) {
	let x=angle1 + angle2;
	if(x<90){
		return "obtuse" 
	} else if(x>90){
		return "acute"
	}else if(x===90){
		return "right"
	}
} 


function cubeSquareRoot(num) {
  return Math.sqrt(num * num * num)
}

function squareAreasDifference(r) {
	return 2 * r ** 2;
}

function halfQuarterEighth(n) {
	let arr = [];
	arr.push(n/2, n/4, n/8);
	return arr;
}


function spaceMeOut(str) {
	return str.split('').join(' ');
}


function totalAmountAdjectives(obj) {
	return Object.values(obj).length;
}

function sayWhat(obj) {
	return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`
}

function sayWhat(obj) {
	return obj[1] + " " + obj[2] + " " + obj[3] + " " + obj[2];
}


function nSidedShape(n) {
	let shape = [
		"circle",
	"semi-circle",
	"triangle",
	"square",
	"pentagon",
	"hexagon",
	"heptagon",
	"octagon",
	"nonagon",
	"decagon",
		]
	return shape[n-1]
}

function nSidedShape(n) {
	const shapes = ["filler", "circle", "semi-circle", "triangle", "square", "pentagon",
								 "hexagon", "heptagon", "octagon", "nonagon", "decagon"]
	return shapes[n];
}

function firstLast(arr) {
	return [arr[0], arr[arr.length-1]]
}

function firstLast(arr) {
	return [arr.shift(), arr.pop()]
}

function dividesEvenly(a, b) {
	return a%b===0
}


function operation(num1, num2) {
	if (num1 + num2 == 24) {return "added"}
	if (num1 - num2 == 24) {return "subtracted"}
	if (num1 * num2 == 24) {return "multiplied"}
	if (num1 / num2 == 24) {return "divided"}
	return null
}

function operation(num1, num2) {
	if (num1 + num2 === 24) {
		return 'added';
	} else if (num1 * num2 === 24) {
		return 'multiplied';
	} else if (num1 - num2 === 24) {
		return 'subtracted';
	} else if (num1 / num2 === 24) {
		return 'divided';
	} else {
		return null;
	}
}


function operation(num1, num2) {
	let answer = 24
	switch (24){
		case (num1 * num2 ):
			return 'multiplied'
			break
		case (num1 + num2):
			return 'added'
			break
		case (num1 / num2):
			return 'divided'
			break
		case (num1 - num2):
		return 'subtracted'
			break
		default: return null
	}
}


function operation(num1, num2) {
	if(num1 + num2 === 24){
	return 'added';
	}else if (num1 - num2 === 24){
	return "subtracted" ;
	}else if(num1 * num2 === 24){
		return "multiplied";
	}else if(num1 / num2 === 24){
		return "divided";
	}else{
		return null
	}
}


function factorial(int) {
  if (int < 0) {
        return -1;
	}else if (int == 0) {
      return 1;
	}else {
        return (int * factorial(int - 1));
		}	
		}


    function totalCups(n) {
	return n + Math.floor(n/6);
}

const totalCups = n => ~~(n / 6) + n;

function totalCups(n) {
	return Math.floor(n / 6) + n
}


function damage(damage, speed, time) {
	if (damage < 0 || speed < 0) return "invalid";
	return damage * speed * {second:1, minute:60, hour:3600}[time];
}

function damage(damage, speed, time) {
	return damage > 0 && speed > 0 ? {
	  	second: 1,
	  	minute: 60,
	  	hour: 3600
	}[time] * damage * speed : 'invalid'
}

function damage(damage, speed, time) {
	if (damage < 0 || speed < 0) {
		return "invalid"
	} else if (time === "second") {
		return damage * speed
	}else if (time === "minute") {
		return damage * speed * 60
	} else if (time === "hour") {
		return damage * speed * 3600
	}
}


function volPizza(radius, height) {
	return Math.round(radius*radius*height*Math.PI)	
}

function volPizza(radius, height) {
	return Math.round(Math.pow(radius, 2) * height * Math.PI);
}

function volPizza(radius, height) {
	return Math.round(Math.pow(radius, 2) * height * Math.PI);
}


function distanceHome(arr) {
	let c = 0;
	for ( let i = 0; i < arr.length; i++){
		c += arr[i]; 
	}
	return Math.abs(c);
}

function calculator(str) {
	return eval(str)
}

const calculator = eval;

const calculator = str => eval(str);