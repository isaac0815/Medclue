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

            strength:4,

            category:"History",

            supports:[
                "STEMI"
            ]
        },


        {
            title:"Risk factors",

            finding:"Patient is diabetic and smoker",

            strength:3,

            category:"History",

            supports:[
                "STEMI"
            ]
        }

    ],



    examination:[

        {
            title:"Vital signs",

            finding:"Blood pressure 160/90 mmHg",

            strength:2,

            category:"Examination",

            supports:[
                "STEMI"
            ]
        }

    ],



    investigations:[

        {
            title:"ECG",

            finding:"ST elevation detected",

            strength:5,

            category:"Investigation",

            supports:[
                "STEMI"
            ]
        },


        {
            title:"Troponin",

            finding:"Troponin level elevated",

            strength:5,

            category:"Investigation",

            supports:[
                "STEMI"
            ]
        }

    ],



    differentials:[

        {
            name:"STEMI",
            correct:true,
            priority:5
        },


        {
            name:"Aortic Dissection",
            correct:false,
            priority:3
        },


        {
            name:"Pulmonary Embolism",
            correct:false,
            priority:2
        },


        {
            name:"Acute Pericarditis",
            correct:false,
            priority:1
        }

    ]

}

];