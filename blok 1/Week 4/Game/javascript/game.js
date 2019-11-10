var questions = [
    ["links of rechts 1", true, "Je bent neergestoken door een aardappel"],
    ["ga je door de deur links of het gordijn rechts?", true, "je word neergeschoten door buitenaardse technologie"],
    ["Ga je links of rechts?", false, "Je bent overvallen door een aantal bruine aliens"],
    ["links of rechts 4", true, "Je bent neergestoken door een yandere anime girl"],
    ["links of rechts 5", false, "Je bent in elkaar geslagen door een alien"],
    ["Je ziet links een roze en rechts een paarse deur", false, "je vind een wapen, maar gebruikt de verkeerde kant van het geweer"],
    ["Je ziet links een rode en rechts een groen gat", false, "je vind een vriendelijke alien en ontsnapt de ruimte in"],
    ["Je ziet links een rode en rechts een groen leuk", true, "je word neergehaald door de honden"],
    ["Je ziet links een rode en rechts een groen gordijn", false, "Jeff Kaplan verwijderd je uit de game"],
    ["Je ziet links een rode en rechts een groene deur", false, "Je ontsnapt weer de vrije wereld in"],

];
var index = 0;

var audio;

function nextQuestion() {
    if (index < questions.length) {
        if (confirm(questions i[index][0] + "Ok is naar links, Annuleer is naar rechts") === questions[index][1]) {
            // next
            index++;
            nextQuestion();
        }
        else {
            // wrong
            wrong();
        }
    }
    else {
        // won
        audio.pause();
        new Audio("../music/Engi.wav").play();
    }
}

function wrong() {
    alert(questions[index][2]);

    audio.pause();
    new Audio("../music/niceman.mp3").play();
}

function start() {
    document.getElementById("startButton").remove();
    audio = new Audio("../music/Fir.mp3");
    audio.play();
    audio.addEventListener("ended", function (){
        this.play();
    });

    nextQuestion();
}