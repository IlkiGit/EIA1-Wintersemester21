/* in Zusammenarbeit mit J. Kühne; Informationen: https://www.thatsoftwaredude.com */
/* Variablen-Deklaration */
let symbole = ["gelb", "orange", "blau", "grün"];
let werte = ["1", "2", "3", "4", "5", "6", "7", "8"];
let deck = [];
let spielerkarten = [];
let computerkarten = [];
let ablagekarten = [];
let spielerZug = true;
let spielEnde = false;
/* 32 Karten für das Deck werden erstellt */
for (let i = 0; i < symbole.length; i++) {
    for (let x = 0; x < werte.length; x++) {
        let karte = { wert: werte[x], symbol: symbole[i] };
        deck.push(karte);
    }
}
/* Deck wird gemischt */
function mischen(kartendeck) {
    for (let i = 0; i < 3200; i++) {
        let location1 = Math.floor((Math.random() * kartendeck.length));
        let location2 = Math.floor((Math.random() * kartendeck.length));
        let tmp = kartendeck[location1];
        kartendeck[location1] = kartendeck[location2];
        kartendeck[location2] = tmp;
    }
}
mischen(deck);
/* 5 Spieler- und Computerkarten werden ausgeteilt */
for (var y = 0; y < 5; y++) {
    spielerkarten.push(deck.pop());
    computerkarten.push(deck.pop());
}
/* eine Deckkarte kommt auf die Ablagekarten */
ablagekarten.push(deck.pop());
/* DOM-Manipulation */
window.addEventListener("load", function () {
    /* Spieler zieht eine Karte vom Deck */
    function spielerZieht() {
        if (!spielEnde) {
            spielerkarten.push(deck.pop());
            zugBeenden();
        }
    }
    /* Computer zieht eine Karte vom Deck */
    function computerZieht() {
        computerkarten.push(deck.pop());
        zugBeenden();
    }
    /* Spieler klickt auf Deck, um eine Karte zu ziehen */
    document.getElementById("deck").addEventListener("click", function () {
        spielerZieht();
    });
    /* Karten werden erstellt */
    kartenErstellen();
    function kartenErstellen() {
        /* Leerung der Spielkartenbereiche*/
        document.getElementById("ablagekarten").innerHTML = "";
        document.getElementById("spielerkarten").innerHTML = "";
        document.getElementById("computerkarten").innerHTML = "";
        /* Spielerkarten werden erstellt */
        for (let i = 0; i < spielerkarten.length; i++) {
            let card = document.createElement("div");
            let wert = document.createElement("p");
            card.className = spielerkarten[i].symbol;
            wert.innerHTML = spielerkarten[i].wert;
            card.appendChild(wert);
            document.getElementById("spielerkarten").appendChild(card);
            if (spielerZug) {
                /* Spieler legt eine Spielerkarte auf die Ablagekarten */
                if (spielerkarten[i].symbol == ablagekarten[0].symbol || spielerkarten[i].wert == ablagekarten[0].wert) {
                    /* Spielerkarten werden "klickbar" gemacht */
                    card.addEventListener("click", function () {
                        /* Spielerkarten sind nicht gleich null: Spieler legt eine Spielerkarte auf die Ablagekarten und Spielerzug wird beendet  */
                        if (!spielEnde) {
                            ablagekarten.unshift(spielerkarten[i]);
                            spielerkarten.splice(i, 1);
                            zugBeenden();
                        }
                    });
                }
            }
        }
        /* Computerkarten werden erstellt */
        for (let i = 0; i < computerkarten.length; i++) {
            let card = document.createElement("div");
            document.getElementById("computerkarten").appendChild(card);
        }
        /* oberste Ablagekarte wird erstellt */
        document.getElementById("ablagekarten").innerHTML = "";
        /* HTMLParagraphElement: Element-Manipulation */
        let ablagecard = document.createElement("div");
        let ablagewert = document.createElement("p");
        ablagecard.className = ablagekarten[0].symbol;
        ablagewert.innerHTML = ablagekarten[0].wert;
        ablagecard.appendChild(ablagewert);
        document.getElementById("ablagekarten").appendChild(ablagecard);
    }
    /* Computer am Zug */
    function computerSpielt() {
        for (let x = 0; x < computerkarten.length; x++) {
            /* Computer legt eine passende Computerkarte auf die Ablagekarten und beendet seinen Zug */
            if (computerkarten[x].symbol == ablagekarten[0].symbol || computerkarten[x].wert == ablagekarten[0].wert) {
                ablagekarten.unshift(computerkarten[x]);
                computerkarten.splice(x, 1);
                zugBeenden();
                /* "break", um zu verhindern, dass der Computer nicht mehr als einen Zug macht */
                break;
            }
        }
        /* Computer zieht eine Karte, falls Computer keine Computerkarte ablegen kann */
        if (!spielerZug) {
            computerZieht();
        }
    }
    /* Zug beenden */
    function zugBeenden() {
        spielerZug = !spielerZug;
        kartenErstellen();
        /* Gewinnbedingung für den Spieler; */
        if (spielerkarten[0] == undefined) {
            let spielerText = document.createElement("p");
            document.getElementById("spielerkarten").appendChild(spielerText);
            spielerText.innerHTML = "Spieler gewinnt!";
            spielEnde = true;
        }
        /* Gewinnbedingung für den Computer */
        else if (computerkarten[0] == undefined) {
            let computerText = document.createElement("p");
            document.getElementById("computerkarten").appendChild(computerText);
            computerText.innerHTML = "Computer gewinnt!";
            spielEnde = true;
        }
        /* Ablagekarten (bis auf eine) kommen ins Deck und werden gemischt */
        else {
            if (deck[0] == undefined) {
                for (let y = 0; y < ablagekarten.length; y++) {
                    if (ablagekarten[y + 1] != undefined) {
                        deck.push(ablagekarten[y + 1]);
                        ablagekarten.splice(y + 1, 1);
                        mischen(deck);
                    }
                }
            }
            /* Spielerzug am Ende und das Spiel ist nicht zu Ende */
            if (spielerZug == false && !spielEnde) {
                computerSpielt();
            }
        }
    }
});
//# sourceMappingURL=script.js.map