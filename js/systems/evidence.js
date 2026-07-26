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


    collectedEvidence.forEach(item=>{


        let card=document.createElement("div");


        card.className="evidence-card";


        card.innerHTML=`

        <h3>🧾 ${item.title}</h3>


        <p>
        <b>Finding:</b><br>
        ${item.finding}
        </p>


        <p>
        <b>Supports:</b><br>
        ${item.supports ? item.supports.join(", ") : "Pending interpretation"}
        </p>


        `;


        board.appendChild(card);


    });


}