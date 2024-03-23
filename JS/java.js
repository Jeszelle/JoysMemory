// "cards" in de console
console.log("cards");

// array met namen van img voor de cards
const cardImages = ['boba', 'bubbles', 'chick', 'dino', 'frog', 'guard', 'guitar', 'rock', 'boba', 'bubbles', 'chick', 'dino', 'frog', 'guard', 'guitar', 'rock'];

// houd bij welke kaarten zijn omgedraaid, heb dit chatgpt gevraagd 
let flippedCards = [];

// controleert of de rotation wordt uitgevoerd 
let isFlipping = false;

// voert functie uit op alle elementen met de class "card"
document.querySelectorAll(".card").forEach((card, index) => {
    // stelt het 'data-image' attribuut in voor elke card, heb aan chatgpt gevraagd hoe ik de img element moest aanspreken
    card.dataset.image = cardImages[index];

    // voegt een event listener toe zodat de cards klikbaar zijn, heb aan chatgpt gevraagd hoe een card blijft staan als er op wordt geklikt
    card.addEventListener('click', () => {
        // als een 1 of 2 kaarten wordt omgedraaid blijven ze staan
        if (isFlipping || flippedCards.length === 2) return;
        // return wordt gebruikt om de functie vroegtijdig te verlaten als aan een van de voorwaarden wordt voldaan

        // draait een card om
        card.classList.toggle('flip'); //  de 'flip' is verantwoordelijk voor het toepassen van een omdraai-effect via CSS
        flippedCards.push(card); //  de card die is omgedraaid wordt toegevoegd aan de flippedCards array

        // als 2 kaarten zijn omgedraaid en ze kloppen blijven ze staan
        if (flippedCards.length === 2) {
            isFlipping = true;
            setTimeout(function() { // setTimeout wordt gebruikt om een vertraging in te stellen voordat de functie binnen de tijd wordt uitgevoerd
                // als de img overeenkomt met de andere omgedraaide img blijven ze staan, heb aan chatgpt gevraagd hoe je 2 kaarten vergelijkt 
                if (flippedCards[0].dataset.image === flippedCards[1].dataset.image) {
                    flippedCards = []; 
                } else {
                    // als de img niet overeenkomen, draaien de kaarten terug
                    setTimeout(function() { // setTimeout creëert een vertraging voordat de omgedraaide kaarten weer worden teruggedraaid
                        flippedCards.forEach(card => card.classList.toggle('flip'));
                        flippedCards = [];
                    }, 300);
                }
                isFlipping = false; // de rotate animatie wordt opnieuw geactiveerd
            }, 300);
        }
    });
});