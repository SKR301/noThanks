class Player{
   cards = [];
   beads = 0;
   score = 0;
    constructor(){
        this.beads = 4;
        this.score = 0;
    }

    displayStatus(name){
        console.log("\t"+name+"["+this.beads+"]: "+this.cards);
    }

    calcScore(){
        this.score = this.cards.reduce((x, y) => x + y);
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