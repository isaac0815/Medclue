let selectedDiagnosis = null;



function loadDifferentialDiagnosis(){


let diagnosisBox =
document.getElementById("diagnosis");

diagnosisBox.innerHTML="";



currentCase.differentials.forEach(item=>{


let card =
document.createElement("div");


card.className="diagnosis-card";


card.draggable=true;


card.innerHTML =
"🧠 " + item.name;



card.ondragstart=function(event){

event.dataTransfer.setData(
"diagnosis",
item.name
);

};



diagnosisBox.appendChild(card);


});


}




function dropDiagnosis(event){


event.preventDefault();


selectedDiagnosis =
event.dataTransfer.getData("diagnosis");



document.getElementById("selected").innerHTML=

"Selected: 🧠 " + selectedDiagnosis;


}




function submitDiagnosis(){


let result =
document.getElementById("result");


if(selectedDiagnosis===currentCase.diagnosis){


score+=100;


result.innerHTML =
"🏆 Correct Diagnosis +100 XP";


}

else{


result.innerHTML =
"❌ Incorrect Diagnosis";


}



document.getElementById("score").innerHTML =
score;


}