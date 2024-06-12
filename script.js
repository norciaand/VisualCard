const button_new_card = document.getElementById("button_new_card");
const container_card = document.getElementById("container_card");

function aggiungiCard() {
    let card = document.createElement('div');
    card.classList.add("card");
    container_card.appendChild(card);
}


button_new_card.addEventListener('click', aggiungiCard);