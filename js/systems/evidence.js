let collectedEvidence = [];


function addEvidence(evidence){

    collectedEvidence.push(evidence);


    gameState.evidence.push(evidence);


    awardEvidenceScore();


    updateEvidenceBoard();

}



function updateEvidenceBoard(){

    const board =
    document.getElementById("evidence");


    board.innerHTML="";


    let categories = {

        History:[],
        Examination:[],
        Investigation:[]

    };



    collectedEvidence.forEach(item=>{


        if(categories[item.category]){

            categories[item.category].push(item);

        }


    });



    Object.keys(categories).forEach(category=>{


        if(categories[category].length > 0){



            let section =
            document.createElement("div");


            section.innerHTML =
            `<h2>${getCategoryIcon(category)} ${category}</h2>`;


            categories[category].forEach(item=>{


                let card =
                document.createElement("div");


                card.className="evidence-card";


                card.innerHTML=`

                <h3>🧾 ${item.title}</h3>


                <p>
                <b>Finding:</b><br>
                ${item.finding}
                </p>


                <p>
                <b>Reference:</b><br>
                ${item.reference || "Not provided"}
                </p>

                `;


                section.appendChild(card);


            });



            board.appendChild(section);


        }


    });


}



function getCategoryIcon(category){


    if(category==="History")
        return "🕒";


    if(category==="Examination")
        return "🩺";


    if(category==="Investigation")
        return "🧪";


    return "📋";

}