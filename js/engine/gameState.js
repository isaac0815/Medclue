// =============================
// MedClue Global Simulation State
// =============================

let gameState = {

    currentCase: null,


    // Investigation data

    evidence: [],


    // Diagnostic reasoning

    primaryDiagnosis: null,

    secondaryDiagnoses: [],


    // Assessment

    score: {

        diagnosis: 0,

        evidence: 0,

        reasoning: 0,

        management: 0

    },


    clinicalPerformance: 0


};