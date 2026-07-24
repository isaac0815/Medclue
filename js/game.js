let score = 0;


// Select random case

let currentCase =
cases[Math.floor(Math.random() * cases.length)];



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




// =======================
// Diagnosis Buttons
// =======================


let optionBox =
document.getElementById("options");



currentCase.options.forEach(option=>{


    let button =
    document.createElement("button");



    button.textContent = option;



    button.onclick = function(){



        if(option === currentCase.diagnosis){


            score += 100;


            document.getElementById("result").innerHTML =
            "🏆 Correct Diagnosis! +100 XP";


        }

        else{


            document.getElementById("result").innerHTML =
            "❌ Wrong Diagnosis. Try again.";


        }



        document.getElementById("score").innerHTML =
        score;



    };



    optionBox.appendChild(button);



});