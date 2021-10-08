class matchingCard {
    
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.name = document.getElementById('name').value;
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
                // check for match
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
    
    cardsAreMatching(card1, card2){
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');

        if(this.matchedCards.length === this.cardsArray.length){
            this.victory();
        }
    }

    cardsDidNotMatched(card1, card2){
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }

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
        localStorage.setItem(this.name, this.timeRemaining + ' seconds left');
        this.hideCards();
    }
    
    shuffleCards(){
        // Fisher and Yates Shuffle
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

