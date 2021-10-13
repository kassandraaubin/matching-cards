class matchingCard {
    
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
    }
    startGame() {
        this.cardToCheck = null;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.shuffleCards();
            this.countDown = this.startCountingDown();
            this.busy = false;
        }, 500);// Attendre 500 ms avant de run le code présent dans la fonction
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        const scoresTab = document.getElementById('scores-tab');

        // Je récupère au dessus l'élément de mon DOM qui m'intéresse pour afficher les résultats stockées dans mon local storage en parsant le tableau de données ci-dessous.
        for( let i = 0; i < localStorage.length ; i++ ){
            const key = localStorage.key(i);
            const valeur = localStorage.getItem(key);
            // J'affiche le résultat sous forme de liste.
            scoresTab.innerHTML += `<ul><li>${key}: ${valeur}</li></ul>`;

        }
    }
    
    hideCards(){
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        })
    }
    
    flipCard(card){
        if(this.canFlipCard(card)){
            card.classList.add('visible');
            if(this.cardToCheck){
                this.checkForCardMatch(card);
            } else {
                this.cardToCheck = card;
            }
        }
    }
    
    checkForCardMatch(card){
        if(this.getCardType(card) === this.getCardType(this.cardToCheck)){
            this.cardsAreMatching(card, this.cardToCheck);
        } else {
            this.cardsDidNotMatched(card, this.cardToCheck);
        }

        this.cardToCheck = null;
    }
    
    // Je vérifie si j'ai un match, si c'est le cas je pousse mes deux cartes dans mon tableau "matchedCards". Une fois que la longueur de ce tableau est strictement égale à la longueur de mon tableau de carte, j'ai gagné !
    cardsAreMatching(card1, card2){
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');

        if(this.matchedCards.length === this.cardsArray.length){
            this.victory();
        }
    }

    // Si mes cartes ne matchent pas, je retir la classe visible pour qu'elle se retourne à nouveau. Busy me sert à empêcher de cliquer sur d'autres cartes le temps que le match s'invalide.

    cardsDidNotMatched(card1, card2){
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }

    // Je me sers de ma source d'image pour récupérer la valeur de chaque carte et voir dans une autre fonction si elles matchent.
    getCardType(card){
        return card.getElementsByClassName('card-value')[0].src;
    }


    startCountingDown(){
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0){
                this.gameOver();
            }
        }, 1000);
    }
    
    gameOver(){
        clearInterval(this.countDown);
        document.getElementById('game-over').classList.add('visible');
    }

    victory(){
        clearInterval(this.countDown);
        document.getElementById('victory').classList.add('visible');

        const name = document.getElementById('name').value;
        const time = this.timeRemaining + ' seconds left';
    
        if(name && time){
            localStorage.setItem(name, time);
        }

        this.hideCards();
    }
    

    shuffleCards(){
        // Fisher et Yates Shuffle : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        for(let i = this.cardsArray.length - 1 ; i > 0 ; i--){
            let randomI = Math.floor(Math.random() * (i+1));
            this.cardsArray[randomI].style.order = i;
            this.cardsArray[i].style.order = randomI;
        }
    }
    
    canFlipCard(card){
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}



function ready(){
    let overlays = Array.from(document.getElementsByClassName('overlay'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new matchingCard(120, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        })
    })
    
}


if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}