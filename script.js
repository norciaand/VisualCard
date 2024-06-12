let clean;
let project_title = "Visual Cards"

//PULSANTI
const header1 = document.getElementById("title");
const button_n = document.getElementById("button_n");
const button_plus = document.getElementById("button_plus");
const button_ref = document.getElementById("button_ref");
const button_full = document.getElementById("button_full");
const button_rin = document.getElementById("rin");
const main = document.getElementById("main");

const colori = ["#ffd0d0", "#d0d1ff", "#d8ffd0", "#fffad0"];
let arrayCard = [];


const isWhitespaceString = str => !str.replace(/\s/g, '').length

button_rin.addEventListener('click',() => {
    project_title = window.prompt("Rinomina il titolo del Progetto",project_title);
    if (isWhitespaceString(project_title)){
        project_title = "Visual Cards"
    } 
    header1.textContent = project_title;
});

function randomColor(){
    
    return colori[Math.floor(Math.random() * 4)];
}

button_n.addEventListener('click', () =>{
    alert("Note Attuali: " + button_n.textContent);
});

button_plus.addEventListener('click', () =>{
    if (clean){
        main.innerHTML = ""
        clean = false;
        main.style.height = "fit-content";
    }
    button_n.textContent++;
    let nuovaCard = document.createElement('div');
    nuovaCard.classList.add("card");
    nuovaCard.style.backgroundColor = randomColor();
    let titolo = document.createElement('input');
    titolo.type = "text";  
    let testo = document.createElement('textarea');
    testo.cols = 40;
    testo.rows = 5;
    nuovaCard.appendChild(titolo);
    nuovaCard.appendChild(testo);   


    arrayCard.push(nuovaCard);
    main.appendChild(nuovaCard);

    nuovaCard.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        let x = prompt("Inserisci il colore: \n1: Rosso\n2: Blu\n3: Verde\n4: Giallo", "0");
        if (x > 4 || x < 1){
            x = randomColor();
        } else {
            x = colori[x-1];
        }
        nuovaCard.style.backgroundColor = x;
    }, false);

});

button_ref.addEventListener('click', () =>{
    arrayCard.forEach((item) => {
        main.removeChild(item);
    });

    arrayCard.length = 0;
    button_n.textContent=0;

    main.style.height = "10vh";
    main.innerHTML = "<h3>PREMI + PER INIZIARE</h3>"
    clean = true;
});

addEventListener("DOMContentLoaded", () => {
    header1.textContent = project_title;
    main.style.height = "10vh";
    main.innerHTML = "<h3>PREMI + PER INIZIARE</h3>"
    clean = true;
});