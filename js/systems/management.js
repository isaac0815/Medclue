let selectedManagement = null;


function loadManagement(){


    let box =
    document.getElementById("management");


    box.innerHTML="";


    currentCase.management.forEach(action=>{


        let button =
        document.createElement("button");


        button.innerHTML =
        "💊 " + action.name;



        button.onclick=function(){


            selectedManagement =
            action.name;



            document.querySelectorAll(
            "#management button"
            )
            .forEach(btn=>{
                btn.disabled=true;
            });



            button.innerHTML =
            "✅ " + action.name;


            evaluateManagement();


        };


        box.appendChild(button);


    });


}



function evaluateManagement(){


let result =
document.getElementById("outcome");



let correct =

currentCase.management.find(

item =>
item.name === selectedManagement

);



if(correct.correct){


result.innerHTML =
"❤️ Patient condition improved";


}

else{


result.innerHTML =
"⚠️ Management was not optimal";


}


}
