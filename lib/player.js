class Player{
   cards = [];
   beads = 0;
    constructor(){
        this.beads = 4;
    }

    displayStatus(name){
        console.log("\t"+name+"["+this.beads+"]: "+this.cards);
    }

    //need to update for user input
    addOrPass(){
        return Math.random() > 0.5;
    }
}

export default Player;