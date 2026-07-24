let score = 0;

let evidence = [];


let currentCase =
cases[Math.floor(Math.random() * cases.length)];



// Patient profile

document.getElementById("patient").innerHTML = `

<p>
👤 ${currentCase.patient.age} year old ${currentCase.patient.sex}
</p>

<p>
Chief Complaint:
${currentCase.patient.complaint}
</p>

`;



// Evidence system

function addEvidence(item){

evidence.push(item);


let board=document.getElementById("evidence");


board.innerHTML="";



evidence.forEach(e=>{


let card=document.createElement("div");


card.className="evidence-card";


card.innerHTML=`

<h3>🧾 ${e.title}</h3>

<p>
<b>Finding:</b><br>
${e.finding}
</p>


<p>
<b>Interpretation:</b><br>
${e.interpretation}
</p>


<p>
<b>Diagnostic Strength:</b>
${"⭐".repeat(e.strength)}
</p>


<p>
Category:
${e.category}
</p>

`;



board.appendChild(card);


});


}



// Create investigation rooms

let rooms=document.getElementById("rooms");



function createRoom(name, clues){


let button=document.createElement("button");


button.innerHTML="🚪 Investigate "+name;



button.onclick=function(){


let randomClue =
clues[Math.floor(Math.random()*clues.length)];


addEvidence(randomClue);


button.disabled=true;


button.innerHTML=
"✅ "+name+" Investigated";


};



rooms.appendChild(button);


}



createRoom(
"History Room",
currentCase.history
);


createRoom(
"Examination Room",
currentCase.examination
);


createRoom(
"Laboratory",
currentCase.investigations
);



// Diagnosis buttons

let optionBox =
document.getElementById("options");



currentCase.options.forEach(option=>{


let button=document.createElement("button");


button.textContent=option;



button.onclick=function(){


if(option===currentCase.diagnosis){

score+=100;


document.getElementById("result").innerHTML=
"🏆 Correct Diagnosis! +100 XP";


}

else{


document.getElementById("result").innerHTML=
"❌ Wrong Diagnosis. Try again.";


}



document.getElementById("score").innerHTML=
score;


};


optionBox.appendChild(button);


});