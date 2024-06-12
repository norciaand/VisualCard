const button_new = document.getElementById("button_new");
const container_card = document.getElementById("container_card");

function aggiungiCard() {
    let card = document.createElement('div');
    card.classList.add("card");
    container_card.appendChild(card);
}


button_new.addEventListener('click', aggiungiCard);