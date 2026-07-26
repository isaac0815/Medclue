let investigationOptions = [

{
name:"ECG",

category:"Investigation",

result:
"ST elevation in leads II, III, aVF",

reference:
"No ST elevation expected",

strength:5,

supports:[
"STEMI"
]

},



{
name:"Troponin I",

category:"Investigation",

result:
"Troponin I: 250 ng/L",

reference:
"Normal: <14 ng/L",

strength:5,

supports:[
"STEMI"
]

},



{
name:"Full Blood Count",

category:"Investigation",

result:
"WBC: 8.5 x10⁹/L",

reference:
"Normal: 4-11 x10⁹/L",

strength:1,

supports:[
""
]

},



{
name:"Chest X-Ray",

category:"Investigation",

result:
"No acute lung infiltrates",

reference:
"Normal chest appearance",

strength:1,

supports:[
""
]

},



{
name:"CT Scan",

category:"Investigation",

result:
"No aortic dissection seen",

reference:
"Normal aorta",

strength:2,

supports:[
"Aortic Dissection"
]

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

title:test.name,

category:test.category,

finding:test.result,

reference:test.reference,

strength:test.strength,

supports:test.supports

});



button.disabled=true;


button.innerHTML =
"✅ " + test.name + " Done";


};



investigationBox.appendChild(button);



});


}