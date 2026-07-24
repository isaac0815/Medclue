const cases = [

{
    diagnosis:"STEMI",

    patient:{
        age:55,
        sex:"Male",
        complaint:"Severe crushing chest pain"
    },


    history:[

        {
            title:"Chest pain history",
            finding:"Pain radiates to left arm",
            interpretation:"Suggests cardiac ischemia",
            strength:4,
            category:"History"
        },

        {
            title:"Risk factors",
            finding:"Patient is diabetic and smoker",
            interpretation:"Increases risk of coronary artery disease",
            strength:3,
            category:"History"
        }

    ],


    examination:[

        {
            title:"Vital signs",
            finding:"Blood pressure 160/90 mmHg",
            interpretation:"Possible cardiovascular stress",
            strength:2,
            category:"Examination"
        }

    ],


    investigations:[

        {
            title:"ECG",
            finding:"ST elevation detected",
            interpretation:"Suggests acute myocardial infarction",
            strength:5,
            category:"Investigation"
        },

        {
            title:"Troponin",
            finding:"Troponin level elevated",
            interpretation:"Indicates myocardial injury",
            strength:5,
            category:"Investigation"
        }

    ],


   differentials:[

    {
        name:"STEMI",
        correct:true
    },


    {
        name:"Pulmonary Embolism",
        correct:false
    },


    {
        name:"Acute Pericarditis",
        correct:false
    },


    {
        name:"Aortic Dissection",
        correct:false
    }

]

}

];