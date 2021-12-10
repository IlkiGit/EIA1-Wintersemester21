window.addEventListener("load", function(): void {
    /* Variablendeklaration */

    const beschreibung: HTMLInputElement = document.querySelector("#beschreibung") as HTMLInputElement;
    const liste: HTMLElement = document.querySelector("#liste");
    const addTask: HTMLElement = document.querySelector("#addTask");
    let zaehler: number = 0;

    /* Hinzufügen einer Aufgabe */

    addTask.addEventListener("click", function(): void {
        
        let aufgaben: HTMLLIElement = document.createElement("li"); /* HTMLLIElement: Listenmanipulation */
        aufgaben.innerHTML = beschreibung.value;
        liste.appendChild(aufgaben); /* appendChild: Anhängen eines "Kindes" am Ende der Liste */
        beschreibung.value = "";
        zaehler = zaehler +1;
        document.querySelector("h2").innerHTML = zaehler + " in total";
        
        /* Hinzufügen der Checkbox ohne Haken */

        const cbohneHaken: HTMLElement = document.createElement("cb");
        aufgaben.appendChild(cbohneHaken);
        cbohneHaken.classList.add("far", "fa-circle");

        /* Hinzufügen der Checkbox mit Haken */

        const cbmitHaken: HTMLElement = document.createElement("cb");
        aufgaben.appendChild(cbmitHaken);
        cbmitHaken.classList.add("far", "fa-check-circle", "isHidden");

        /* Funktion der Checkbox ohne Haken */

        cbohneHaken.addEventListener("click", function(): void {

            cbohneHaken.classList.add("isHidden");
            cbmitHaken.classList.remove("isHidden"); 

        });
            
        /* Funktion der Checkbox mit Haken */

        cbmitHaken.addEventListener("click", function(): void {

            cbmitHaken.classList.add("isHidden");
            cbohneHaken.classList.remove("isHidden"); 
        });

        /* Hinzufügen des Löschens */

        const loeschen: HTMLElement = document.createElement("l");
        aufgaben.appendChild(loeschen);
        loeschen.classList.add("far", "fa-trash-alt");

        /* Funktion des Löschens */

        loeschen.addEventListener("click", function(): void {

            aufgaben.classList.add("isHidden");
            zaehler = zaehler - 1;
            document.querySelector("h2").innerHTML = zaehler + " in total";
        });
    });

    /* die gleiche Prozedur für die Enter-Taste */

    beschreibung.addEventListener("keypress",  function (keyboardEvent: KeyboardEvent): void {

        if (keyboardEvent.key == "Enter") {
            
            let aufgaben: HTMLLIElement = document.createElement("li"); /* HTMLLIElement: Listenmanipulation */
            aufgaben.innerHTML = beschreibung.value;
            liste.appendChild(aufgaben); /* appendChild: Anhängen eines "Kindes" am Ende der Liste */
            beschreibung.value = "";
            zaehler = zaehler +1;
            document.querySelector("h2").innerHTML = zaehler + " in total";
            
            /* Hinzufügen der Checkbox ohne Haken */

            const cbohneHaken: HTMLElement = document.createElement("cb");
            aufgaben.appendChild(cbohneHaken);
            cbohneHaken.classList.add("far", "fa-circle");

            /* Hinzufügen der Checkbox mit Haken */

            const cbmitHaken: HTMLElement = document.createElement("cb");
            aufgaben.appendChild(cbmitHaken);
            cbmitHaken.classList.add("far", "fa-check-circle", "isHidden");

            /* Funktion der Checkbox ohne Haken */

            cbohneHaken.addEventListener("click", function(): void {

                cbohneHaken.classList.add("isHidden");
                cbmitHaken.classList.remove("isHidden"); 

            });
                
            /* Funktion der Checkbox mit Haken */

            cbmitHaken.addEventListener("click", function(): void {

                cbmitHaken.classList.add("isHidden");
                cbohneHaken.classList.remove("isHidden"); 
            });

            /* Hinzufügen des Löschens */

            const loeschen: HTMLElement = document.createElement("l");
            aufgaben.appendChild(loeschen);
            loeschen.classList.add("far", "fa-trash-alt");

            /* Funktion des Löschens */

            loeschen.addEventListener("click", function(): void {

                aufgaben.classList.add("isHidden");
                zaehler = zaehler - 1;
                document.querySelector("h2").innerHTML = zaehler + " in total";
            });
        };
    });
})
