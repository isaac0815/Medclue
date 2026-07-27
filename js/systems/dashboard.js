console.log("Dashboard JS loaded");

console.log("Cases inside dashboard:", cases);


function loadDashboard(){

    console.log("Loading dashboard function started");

    let dashboard =
    document.getElementById("dashboard");

    console.log("Dashboard element:", dashboard);

    dashboard.innerHTML="";


    cases.forEach(caseData=>{


        let card =
        document.createElement("div");


        card.className="patient-card";


        card.innerHTML = `

        <h3>🛏️ Patient</h3>


        <p>
        <b>Age:</b>
        ${caseData.patient.age}
        </p>


        <p>
        <b>Sex:</b>
        ${caseData.patient.sex}
        </p>


        <p>
        <b>Chief Complaint:</b><br>
        ${caseData.patient.chiefComplaint}
        </p>


        <p>
        <b>Triage:</b>
        ${caseData.triage}
        </p>


        <button>
        See Patient
        </button>

        `;



        card.querySelector("button")
        .onclick=function(){


            currentCase = caseData;


            startCase();


        };


        dashboard.appendChild(card);


    });


}
