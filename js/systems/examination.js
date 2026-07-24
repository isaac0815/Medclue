let examinationOptions = [

{
name:"Cardiovascular Examination",
evidence:"Heart sounds and cardiovascular findings obtained"
},

{
name:"Respiratory Examination",
evidence:"Respiratory findings obtained"
},

{
name:"Abdominal Examination",
evidence:"Abdominal findings obtained"
},

{
name:"Neurological Examination",
evidence:"Neurological findings obtained"
},

{
name:"General Examination",
evidence:"General physical findings obtained"
}

];



function startExamination(){


let examBox =
document.getElementById("examination");


examBox.innerHTML="";



examinationOptions.forEach(item=>{


let button =
document.createElement("button");


button.innerHTML =
"🩺 " + item.name;



button.onclick=function(){


addEvidence({

title:"Physical Examination",

finding:item.evidence,

strength:1

});


button.disabled=true;


button.innerHTML =
"✅ Exam Done";


};



examBox.appendChild(button);



});


}