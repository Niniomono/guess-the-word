Puntaje = 0;
function updatePuntaje() {
    Puntaje = Puntaje + 1;
    document.GetElementById("Puntaje").InnerHTML = "Puntaje:" + Puntaje;
}

function saveScore() {
    localStorage.setItem("Puntaje", Puntaje);
}

function nextPage() {
    window.location = "activity_2.HTML";
}