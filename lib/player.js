import readline from 'readline';

class Player{
   cards = [];
   beads = 0;
   score = 0;
    constructor(){
        this.beads = 4;
        this.score = 0;
    }

    // print player status
    displayStatus(name){
        this.cards.sort(function(a, b){return a-b});
        console.log("\t"+name+"["+this.beads+"]: "+this.cards);
    }
    
    // calculate player score
    calcScore(){
        this.score = this.cards[0];

        for(var a=1;a<this.cards.length;a++){
            if(this.cards[a] > this.cards[a-1] + 1){
                this.score += this.cards[a];
            }
        }

        this.score -= this.beads;
    }

    // addCard or passCard
    addOrPass(){
        return Math.random() > 0.5;
    }

    // add cards to player
    addCard(card, bead){
        this.cards.push(card);
        this.beads += bead;
    }
    
    //pass the card
    passCard(){
        this.beads--;
    }

    // 'add' or 'a' to add
    readAddOrPass(query) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        return new Promise(resolve => rl.question(query, ans => {
            rl.close();
            resolve(ans);
        }))
    }
}

export default Player;