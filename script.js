let clean;

//PULSANTI
const button_n = document.getElementById("button_n");
const button_plus = document.getElementById("button_plus");
const button_ref = document.getElementById("button_ref");
const button_full = document.getElementById("button_full");
const main = document.getElementById("main");
let arrayCard = [];

function randomColor(){
    const colori = ["#ffd0d0", "#d0d1ff", "#d8ffd0", "#fffad0"];
    return colori[Math.floor(Math.random() * 4)];
}


button_n.addEventListener('click', () =>{
    alert("Colonne Attuali: " + button_n.textContent);
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
    main.style.height = "10vh";
    main.innerHTML = "<h3>PREMI + PER INIZIARE</h3>"
    clean = true;
});