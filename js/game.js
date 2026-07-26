let score = 0;


// Select random case

loadRandomCase();

let currentCase = getCurrentCase();



// =======================
// Patient Profile
// =======================

document.getElementById("patient").innerHTML = `

<p>
👤 ${currentCase.patient.age} year old ${currentCase.patient.sex}
</p>

<p>
Chief Complaint:
${currentCase.patient.complaint}
</p>

`;

loadDifferentialDiagnosis();


// =======================
// Investigation Rooms
// =======================

let rooms = document.getElementById("rooms");


console.log("Game started");



function createRoom(name, clues){


    let button = document.createElement("button");


    button.innerHTML = "🚪 Investigate " + name;



    button.onclick = function(){


        let randomClue =
        clues[Math.floor(Math.random() * clues.length)];



        // Send evidence to evidence system

        addEvidence(randomClue);



        button.disabled = true;


        button.innerHTML =
        "✅ " + name + " Investigated";


    };



    rooms.appendChild(button);


}




let historyButton =
document.createElement("button");


historyButton.innerHTML =
"🚪 Enter History Room";


historyButton.onclick=function(){

startHistoryTaking();

historyButton.disabled=true;

};


rooms.appendChild(historyButton);



let examinationButton =
document.createElement("button");


examinationButton.innerHTML =
"🚪 Enter Examination Room";


examinationButton.onclick=function(){

startExamination();

examinationButton.disabled=true;

examinationButton.innerHTML =
"✅ Examination Completed";

};


rooms.appendChild(examinationButton);



let investigationButton =
document.createElement("button");


investigationButton.innerHTML =
"🚪 Enter Investigation Room";


investigationButton.onclick=function(){

startInvestigation();


investigationButton.disabled=true;


investigationButton.innerHTML =
"✅ Investigations Completed";


};


rooms.appendChild(investigationButton);







