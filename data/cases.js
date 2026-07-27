const cases = [

{

    id:"CARD001",

    title:"Acute ST-Elevation Myocardial Infarction",

    specialty:"Cardiology",

    system:"Cardiovascular",

    difficulty:"Intermediate",

    triage:"🔴 RED",

    diagnosis:"STEMI",


    patient:{

        age:55,

        sex:"Male",

        chiefComplaint:"Severe crushing chest pain"

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

            interpretation:"Possible cardiovascular stress",

            strength:2,

            category:"Examination"

        }

    ],



    investigations:[


        {

            title:"ECG",

            finding:"ST elevation detected",

            reference:"No ST elevation expected",

            strength:5,

            category:"Investigation",

            supports:[
                "STEMI"
            ]

        },


        {

            title:"Troponin I",

            finding:"Troponin I: 250 ng/L",

            reference:"Normal: <14 ng/L",

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


    ],



    management:[


        {

            name:"Give Aspirin and activate PCI pathway",

            correct:true

        },


        {

            name:"Discharge patient with antacid",

            correct:false

        },


        {

            name:"Start antibiotics",

            correct:false

        },


        {

            name:"Observe at home",

            correct:false

        }


    ]


}

];