class Board{
    cards = [];
    currCard = '';
    beads = 0;

    constructor(){
        this.cards = Array(35 - 3 + 1).fill().map((item, index) => 3 + index);
        this.currCard = 0;
        this.beads = 0;
    }

    displayStatus(){
        console.log("\tBoard"+"["+this.beads+" | "+this.currCard+"]: "+this.cards);
    }

}

export default Board;