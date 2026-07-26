// =============================
// MedClue Clinical Scoring
// =============================


function awardDiagnosisScore(correct){


    if(correct){

        gameState.score.diagnosis = 40;

    }

    else{

        gameState.score.diagnosis = 0;

    }


    updatePerformance();


}




function awardEvidenceScore(){


    let total = 0;


    gameState.evidence.forEach(item=>{


        total += item.strength || 0;


    });



    gameState.score.evidence =
    Math.min(total,30);



    updatePerformance();


}




function updatePerformance(){


    let total =

    gameState.score.diagnosis +

    gameState.score.evidence +

    gameState.score.reasoning +

    gameState.score.management;



    gameState.clinicalPerformance = total;



    let display =
    document.getElementById("performance");


    if(display){

        display.innerHTML =
        total;

    }


}