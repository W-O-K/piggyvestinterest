let package = document.getElementById("inputPackage");
let rate = document.getElementById("rate");
let intRate = 0;
let capital = document.getElementById("inputPrincipal");
let capValue =  0;
let period = document.getElementById("inputPeriod");
let periodValue =  0;
let submit = document.getElementById("submit");
let amount = document.getElementById("amount");
let currency = "#";

package.onchange = function() {
	switch(package.value){
		case 'Piggybank':
		intRate = 10;
		break;
		case 'Flex Naira':
		intRate = 10;
		break;
		case 'Safelock':
		intRate = 13;
		break;
		case 'Target':
		intRate = 10;
		break;
		case 'Flex Dollar':
		intRate = 6;
		currency = "$";
		break;	
	}   
	rate.value = `${intRate}%`;
	return rate.value;
}

capital.oninput = function(){
	capValue = Number(capital.value);
}

period.oninput = function(){
	periodValue = Number(period.value);
}

function calcInt(){
	var final = Math.round(capValue * (Math.pow(1 + intRate/100, periodValue/12) - 1))	
	amount.value = `${currency}${final}`
}
submit.addEventListener("click", calcInt, false);
