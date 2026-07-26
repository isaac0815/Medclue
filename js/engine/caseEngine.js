// =============================
// MedClue Case Engine
// =============================

function loadRandomCase(){

    gameState.currentCase =
        cases[Math.floor(Math.random() * cases.length)];

    return gameState.currentCase;

}


function getCurrentCase(){

    return gameState.currentCase;

}