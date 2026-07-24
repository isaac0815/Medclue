let historyQuestions = [

{
question:"What is the main complaint?",
evidence:"Chief complaint identified"
},

{
question:"When did the symptoms start?",
evidence:"Onset of symptoms recorded"
},

{
question:"What makes it better or worse?",
evidence:"Aggravating and relieving factors identified"
},

{
question:"Any associated symptoms?",
evidence:"Associated symptoms documented"
},

{
question:"Any previous medical problems?",
evidence:"Past medical history obtained"
}

];



function startHistoryTaking(){


let historyBox =
document.getElementById("history");

historyBox.innerHTML="";


historyQuestions.forEach(item=>{


let button =
document.createElement("button");


button.innerHTML =
"🗣️ " + item.question;



button.onclick=function(){


addEvidence({

title:"History Finding",

finding:item.evidence,

strength:1

});


button.disabled=true;

button.innerHTML =
"✅ Asked";


};



historyBox.appendChild(button);


});


}