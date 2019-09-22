const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

var player = {
    lives: 3,
    diceroll: function () {
        var dicerolls = [dice.roll,dice.roll,dice.roll,dice.roll,dice.roll]
        return dicerolls;
    }
}

var playerlist = [];
var firstturn = true;
var numplayers;
var currentplayer = 0;
var direction;
var callout = false;
var finalcount;
var currentcall = {
    count: 0,
    suit: 0
}

function initializematch() {
    readline.question(`How many players?`, (numplayers) => {
        readline.close()
      })
    numplayers = parseInt(numplayers,10);

    for (var i = 0; i< numplayers; i++) {
        playerlist.push(player);
    }
}

function round() {
    for (var i = 0; i< numplayers; i++) {
        playerlist[i].diceroll;
    }
    while(!callout) {
        //prompt current player for call
        if (firstturn){
            //prompt user for direction
        }
        if(!firstturn){
            //also give player option for callout
        }
        if(direction == 'right'){
            if(currentplayer == numplayers){
                currentplayer = 0;
            }
            else {currentplayer++;}
        }
        else {
            if(currentplayer == 0){
                currentplayer = numplayers;
            }
            else{currentplayer--;}
        }
    }

    for (var i = 0; i<numplayers; i++) {
        for (var j = 0; j < 5; j++) {
            if (playerlist[i].dicerolls[j] == currentcall.suit){
                finalcount++;
            }
        }
    }

    if (currentcall.count <= finalcount) {
        if(direction == 'right'){
            if(currentplayer == 0){
                playerlist[numplayers].lives = playerlist[numplayers].lives - 1;
                currentplayer = numplayers;
            }
            else {
                playerlist[currentplayer-1].lives = playerlist[currentplayer-1].lives - 1;
                currentplayer --;
            }
        }
        else {
            if(currentplayer == numplayers){
                playerlist[0].lives = playerlist[0].lives - 1;
                currentplayer = 0;
            }
            else {
                playerlist[currentplayer+1].lives = playerlist[currentplayer+1].lives - 1;
                currentplayer ++;
            }
        }
    }
    else {
        playerlist[currentplayer].lives = playerlist[currentplayer].lives - 1;
    }

    callout = false
    firstturn = true
}
