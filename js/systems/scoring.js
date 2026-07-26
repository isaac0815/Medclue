let clinicalScore = 0;


function calculateDiagnosisScore(selectedDiagnosis){


    if(selectedDiagnosis === currentCase.diagnosis){

        clinicalScore += 40;

        return "Diagnosis correct +40%";

    }

    else{

        clinicalScore += 0;

        return "Diagnosis incorrect +0%";

    }

}



function calculateEvidenceScore(){


    let evidenceScore = 0;


    evidence.forEach(item=>{


        if(item.strength >= 5){

            evidenceScore += 10;

        }

        else if(item.strength >= 3){

            evidenceScore += 5;

        }

        else{

            evidenceScore += 2;

        }


    });



    clinicalScore += evidenceScore;


    return "Evidence gathering +" + evidenceScore + "%";

}




function getClinicalScore(){


    if(clinicalScore > 100){

        clinicalScore = 100;

    }


    return clinicalScore;


}