/* Um Redundanzen zu vermeiden, werde ich mit Interface und Objekten arbeiten! */

interface Aufgaben {
    todosText: string;
    todosChecked: boolean;
}

let aufgabenArray: Aufgaben[] = []; 

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

/* Hinzufügen zweier neuen Variablen*/

var counterOffenDOMElement: HTMLElement;
var counterErledigtDOMElement: HTMLElement;

window.addEventListener("load", function(): void {
    
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    counterOffenDOMElement = document.querySelector("#counterOffen");
    counterErledigtDOMElement = document.querySelector("#counterErledigt");

    addButtonDOMElement.addEventListener("click", addTodo);
 
    drawListToDOM();
});

function drawListToDOM(): void {

    todosDOMElement.innerHTML = "";
 
    for (let index: number = 0; index < aufgabenArray.length; index++) {
 
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
 
        todo.innerHTML =  "<span class='check " + aufgabenArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                             + aufgabenArray[index].todosText +
                             "<span class='trash fas fa-trash-alt'></span>";
 
        todo.querySelector(".check").addEventListener("click", function(): void {

            toggleCheckState(index);
        });
         todo.querySelector(".trash").addEventListener("click", function(): void {
            
            deleteTodo(index);
        });
        
        todosDOMElement.appendChild(todo);
    }

    /* Funktion für die insgesamten, offenen und erledigten Aufgaben */

    updateCounter();
    updateCounterOffen();
    updateCounterErledigt();
}
 
function updateCounter(): void {
    counterDOMElement.innerHTML = aufgabenArray.length + " in total";
}

function updateCounterOffen(): void {
    let counterOffen: number = 0;
    for (let index: number = 0; index < aufgabenArray.length; index++) {
        if (aufgabenArray[index].todosChecked == false)
        counterOffen++;
    }
    counterOffenDOMElement.innerHTML = counterOffen + " open";
}

function updateCounterErledigt(): void {
    let counterErledigt: number = 0;
    for (let index: number = 0; index < aufgabenArray.length; index++) {
        if (aufgabenArray[index].todosChecked == true)
        counterErledigt++;

        console.log(aufgabenArray);
    }
    counterErledigtDOMElement.innerHTML = counterErledigt + " done";
}

function addTodo(): void {
    if (inputDOMElement.value != "") {

        /* Hinzufügen einer neuen Aufgabe */

        aufgabenArray.push ({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
        
        inputDOMElement.value = "";

        drawListToDOM();
    }
}
 
function toggleCheckState(index: number): void {

    /* todosChecked[index] = !todosChecked[index]; */

    aufgabenArray[index].todosChecked = !aufgabenArray[index].todosChecked;
    
    drawListToDOM();
}

function deleteTodo(index: number): void {
    
    /* Löschen einer Stelle im Array */

    aufgabenArray.splice(index, 1);

    drawListToDOM();
 }

 /* Spracheingabe */

 declare var Artyom: any;

 window.addEventListener("click", function () {
    var artyom = new Artyom();
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    
    startContinuousArtyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            aufgabenArray.push({
                todosText: wildcard,
                todosChecked: false
            });
            drawListToDOM();
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    document.querySelector("#spracheingabe").addEventListener("click", function () {
        startContinuousArtyom();
    });
});