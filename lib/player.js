class Player{
   cards = [];
   beads = 0;
    constructor(){
        this.beads = 4;
    }

    displayStatus(name){
        console.log("\t"+name+"["+this.beads+"]: "+this.cards);
    }
}

export default Player;