const increment= document.querySelector(".increase");
const decrement= document.querySelector(".decrease");
const reset=document.querySelector(".reset");
let result= document.querySelector("#count");
let output=0;
increment.addEventListener("click", function(){
	output=output+1;
	if(output>0){
		result.style.color="green";
	}
	else if(output===0){
		result.style.color="black";
	}
	result.textContent=output;
})
decrement.addEventListener("click", function(){
	output=output-1;
	if(output<0){
		result.style.color="red";
	}
	else if(output===0){
		result.style.color="black";
	}
	result.textContent=output;
})
reset.addEventListener("click", function(){
	output=0;
	result.textContent=output;
	result.style.color="black";
})