import Player from './player.js';
import Board from './board.js';

const players = [new Player(),new Player(),new Player(),new Player()];
const board = new Board();
var player_with_turn = Math.floor(Math.random() * 4);

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



























