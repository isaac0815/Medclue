let selectedDiagnosis = null;

let primaryDiagnosis = null;

let secondaryDiagnosis = [];



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




function dropPrimary(event){

event.preventDefault();


primaryDiagnosis =
event.dataTransfer.getData("diagnosis");


document.getElementById("primaryDiagnosis").innerHTML =
"🥇 " + primaryDiagnosis;



// Update final diagnosis automatically

document.getElementById("selected").innerHTML =
"🏆 " + primaryDiagnosis;


}



function dropSecondary(event){

event.preventDefault();


let diagnosis =
event.dataTransfer.getData("diagnosis");


secondaryDiagnosis.push(diagnosis);


document.getElementById("secondaryDiagnosis").innerHTML =

secondaryDiagnosis.join("<br>");



}




function submitDiagnosis(){


selectedDiagnosis = primaryDiagnosis;



let result =
document.getElementById("result");



if(selectedDiagnosis === currentCase.diagnosis){


    let diagnosisResult =
    calculateDiagnosisScore(selectedDiagnosis);


    result.innerHTML =
    "🏆 " + diagnosisResult;


}

else{


    let diagnosisResult =
    calculateDiagnosisScore(selectedDiagnosis);


    result.innerHTML =
    "❌ " + diagnosisResult;


}



document.getElementById("score").innerHTML =
score;