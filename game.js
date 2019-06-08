const chalk = require('chalk');
const readlineSync = require('readline-sync');
const User = require('./user.js');
const State = require('./state.js');
const Bot = require('./bot.js');
const Challenge = require('./challenge.js');
const Dictionary = require('./dictionary.js');

class Game {

    constructor() {
        this.user = new User();
        this.bot = new Bot();
        this.dictionary = new Dictionary();
        this.state = new State();
        this.challenge = new Challenge(this.currentWord);
    }

    Play() {
        var gameOver = false;
        console.log(chalk.blue('Hello, common play!'));
        console.log(chalk.blue('Enter <exit> to quit.'));
        console.log(chalk.yellow('My word is: ' + this.dictionary.getCurrentWord()));

        while(!gameOver)
        {
            var goodWord = false;
            
            while(!goodWord)
            {
                var userInput = readlineSync.question('Your word? ');

                if(userInput === "<exit>") {
                    gameOver = true;
                    goodWord = true;
                }

                if(!gameOver) {
                    if(!this.dictionary.verify(userInput)) {
                        console.log(chalk.red(this.dictionary.getError()));
                        continue;
                    }
                }

                console.log(chalk.green('You entered: ' + userInput));
                console.log(chalk.yellow('My word is: ' + this.dictionary.getCurrentWord()));
                
                goodWord = true;
            }

            if(this.dictionary.getCurrentWord().length == 0 || !this.dictionary.haveMoreWords()) {
                console.log(chalk.blue("Sorry, I have no more words to play..."));        
                gameOver = true;
            }
        }

        console.log(chalk.blue("Game over"));
    }
     
}

module.exports = Game;

