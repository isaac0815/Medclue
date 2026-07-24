let investigationOptions = [

{
name:"ECG",
finding:"ECG performed and cardiac rhythm assessed",
strength:2
},

{
name:"Full Blood Count",
finding:"Blood cell profile obtained",
strength:1
},

{
name:"Troponin",
finding:"Cardiac biomarker level obtained",
strength:3
},

{
name:"Chest X-Ray",
finding:"Chest imaging findings obtained",
strength:2
},

{
name:"CT Scan",
finding:"Cross-sectional imaging findings obtained",
strength:2
}

];



function startInvestigation(){


let investigationBox =
document.getElementById("investigation");


investigationBox.innerHTML="";



investigationOptions.forEach(test=>{


let button =
document.createElement("button");


button.innerHTML =
"🧪 Order " + test.name;



button.onclick=function(){


addEvidence({

title:"Investigation Result",

finding:test.finding,

strength:test.strength

});



button.disabled=true;


button.innerHTML =
"✅ " + test.name + " Done";


};



investigationBox.appendChild(button);



});


}