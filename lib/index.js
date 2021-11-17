import Player from './player.js';
import Board from './board.js';

const players = [new Player(),new Player(),new Player(),new Player()];
const board = new Board();
var player_with_turn = Math.floor(Math.random() * 4);
var turn = 0;
var added = true;

//display status of all players
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
//find winner
const winner = () => {
    var scores = [];
    players.forEach(player => {
        player.calcScore()
        scores.push(player.score);
    });

    var winningScore = scores.sort(function(a, b){return a-b})[0];

    var a = 0;
    players.forEach(player => {
        process.stdout.write(player.score.toString());
        if(winningScore == player.score){
            process.stdout.write('!!!');
        }
        player.displayStatus(a);
        a++
    });
}

// ------------------------------------------------GAME BEGIN--------------------------------------------------------
display(player_with_turn);

while(board.cards.length > 0 || board.currCard != 0){
    if(added){
        board.drawCard();
    }

    console.log("\n\n-----------------------"+"turn:"+turn+"|"+player_with_turn+"-----------------------");
    display(player_with_turn);

    if(board.currCard != 0){
        if(players[player_with_turn].beads > 0){
            if(players[player_with_turn].addOrPass()){
                console.log('\tADDed');

                players[player_with_turn].addCard(board.currCard, board.beads);
                board.beads = 0;

                added = true;
            } else {
                console.log('\tPASSed');
                
                players[player_with_turn].passCard();
                board.beads++;

                player_with_turn = (player_with_turn + 1) % 4;
                added = false;
            }
        } else {
            console.log('\tADDed');
            
            players[player_with_turn].addCard(board.currCard, board.beads);
            board.beads = 0;

            added = true;
        }
    }
    turn++;
}

console.log("\n\n-----------------------"+"FINAL"+"-----------------------");
winner();

























