class Player{
   cards = [];
   beads = 0;
   score = 0;
    constructor(){
        this.beads = 4;
        this.score = 0;
    }

    displayStatus(name){
        this.cards.sort(function(a, b){return a-b});
        console.log("\t"+name+"["+this.beads+"]: "+this.cards);
    }

    calcScore(){
        // this.cards.sort();
        this.score = this.cards[0];

        for(var a=1;a<this.cards.length;a++){
            if(this.cards[a] > this.cards[a-1] + 1){
                this.score += this.cards[a];
            }
        }

        this.score -= this.beads;
    }

    //need to update for user input
    addOrPass(){
        return Math.random() > 0.5;
    }
    // addCard(){

    // }
    // passCard(){

    // }
}

export default Player;