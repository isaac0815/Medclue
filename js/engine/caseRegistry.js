function getSpecialties(){

    return [...new Set(

        cases.map(caseData => caseData.specialty)

    )];

}



function getCasesBySpecialty(specialty){

    return cases.filter(

        caseData => caseData.specialty === specialty

    );

}



function getCaseById(id){

    return cases.find(

        caseData => caseData.id === id

    );

}