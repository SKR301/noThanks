import Player from './player.js';
import Board from './board.js';

const players = [new Player(),new Player(),new Player(),new Player()];
const board = new Board();
var player_with_turn = Math.floor(Math.random() * 4);
var turn = 0;
var added = true;

const display = (player_with_turn) => {
    var a = 0;
    players.forEach(player => {
        if(a == player_with_turn){
            process.stdout.write('>');
        }
        player.displayStatus(a);
        a++
    });
    
    board.displayStatus();
}




display(player_with_turn);

while(board.cards.length > 0){
    if(added){
        board.drawCard();
    }
    console.log("\n\n-----------------------"+"turn:"+turn+"|"+player_with_turn+"-----------------------");
    display(player_with_turn);

    if(players[player_with_turn].addOrPass()){
        console.log('\tADDed');

        players[player_with_turn].cards.push(board.currCard);
        players[player_with_turn].beads += board.beads;
        board.beads = 0;
        
        added = true;
    } else {
        console.log('\tPASSed');

        players[player_with_turn].beads--;
        board.beads++;

        player_with_turn = (player_with_turn + 1) % 4;
        added = false;
    }
    turn++;
}



// display(player_with_turn);


























