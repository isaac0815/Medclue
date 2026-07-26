// =============================
// MedClue Diagnosis System
// =============================


let selectedDiagnosis = null;

let primaryDiagnosis = null;

let secondaryDiagnosis = [];




// Load diagnosis cards

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




// Drop primary diagnosis

function dropPrimary(event){


    event.preventDefault();


    primaryDiagnosis =
    event.dataTransfer.getData("diagnosis");



    document.getElementById("primaryDiagnosis").innerHTML =

    "🥇 " + primaryDiagnosis;



    document.getElementById("selected").innerHTML =

    "🏆 " + primaryDiagnosis;


}





// Drop secondary diagnosis

function dropSecondary(event){


    event.preventDefault();


    let diagnosis =
    event.dataTransfer.getData("diagnosis");



    secondaryDiagnosis.push(diagnosis);



    document.getElementById("secondaryDiagnosis").innerHTML =

    secondaryDiagnosis.join("<br>");


}




// Submit final diagnosis

function submitDiagnosis(){


    selectedDiagnosis = primaryDiagnosis;



    let result =
    document.getElementById("result");



    let correct =
    selectedDiagnosis === currentCase.diagnosis;



    // Send to scoring engine

    awardDiagnosisScore(correct);



    if(correct){


        result.innerHTML =
        "🏆 Correct diagnosis!";


    }
    let consultantFeedback =
    generateConsultantFeedback();


    document.getElementById("feedback").innerHTML =

    consultantFeedback.join("<br><br>");

    
    {


        result.innerHTML =
        "❌ Incorrect diagnosis";


    }



    let performance =
    calculateClinicalPerformance();



    console.log(
        "Clinical Performance:",
        performance + "%"
    );


}