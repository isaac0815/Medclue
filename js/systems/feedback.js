function generateConsultantFeedback(){


let feedback = [];


// Diagnosis feedback

if(selectedDiagnosis === currentCase.diagnosis){


feedback.push(
"✅ Final diagnosis was correct."
);


}
else{


feedback.push(
"❌ Final diagnosis was incorrect."
);


}



// Evidence feedback

let evidenceCount =
collectedEvidence.length;



if(evidenceCount >= 3){


feedback.push(
"✅ Good evidence collection."
);


}
else{


feedback.push(
"⚠️ Consider collecting more clinical information."
);


}



// Investigation feedback

let investigationFound =

collectedEvidence.some(
item =>
item.category === "Investigation"
);



if(investigationFound){


feedback.push(
"✅ Appropriate investigations were performed."
);


}
else{


feedback.push(
"⚠️ Important investigations were not performed."
);


}



return feedback;


}