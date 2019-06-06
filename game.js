const chalk = require('chalk');
const readlineSync = require('readline-sync');
const User = require('./user.js');
const State = require('./state.js');
const Bot = require('./bot.js');
const Dictionary = require('./dictionary.js');

class Game {
    
    constructor() {
        this.user = new User();
        this.bot = new Bot();
        this.dictionary = new Dictionary();
        this.state = new State();
    }

    Play() {
        var gameOver = false;
        while(!gameOver)
        {
            var color;

            var userName = readlineSync.question('May I have your name? ');

            if(userName === "<exit>") {
                gameOver = true;
            }

            console.log(chalk.green('Hello, ' + userName + '!'));
        }

        console.log(chalk.red("Game over"));
    }
     
}

module.exports = Game;

