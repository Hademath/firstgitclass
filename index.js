

// this is done to select a random items from an array hands

//randomArr= ""
let proof = document.getElementById('print')
let hands = ["Rock", "Paper", "Scissor",  "monkey", "school", "Milk"];

let randomIndex =  Math.floor(Math.random() *6);
let randomIndex2 =  Math.floor(Math.random() *6);

function ranArr(){
		result1 =  hands[randomIndex];
		result2 =  hands[randomIndex2];
		result = result1 + " " + result2
		return result
		
		
}

console.log(ranArr())
proof.innerHTML = ranArr()

if (randomIndex == randomIndex2 ) {
	let result = document.getElementById('result')
		result.innerHTML ="GAME OVER";
			 console.log("GAME OVER")
}


function startGame(){
	ranArr()
}