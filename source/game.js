const chalk = require('chalk');
const User = require('./user.js');
const Bot = require('./bot.js');
const View = require('./view.js');
const Dictionary = require('./dictionary.js');

class Game {

    constructor() {
        this.dictionary = new Dictionary();
        this.user = new User();                
        this.bot = new Bot(this.dictionary);
        this.view = new View();
    }

    Play() {
        var gameOver = false;
        this.view.displayServiceInfo('Hello, common play!');
        this.view.displayServiceInfo('Enter <exit> to quit.');
        this.view.displayMessage('My word is: ' + this.dictionary.getCurrentWord());

        while(!gameOver)
        {
            while(true)
            {
                var userInput = this.user.getInput();

                if(userInput === "<exit>") {
                    gameOver = true;
                }

                if(!gameOver) {
                    if(!this.dictionary.verify(userInput)) {
                        this.view.displayError(this.dictionary.getError());
                        continue;
                    }
                    else {
                        this.bot.getInput(userInput);
                    }
                    this.view.displayInfo('You entered: ' + userInput);
                    this.view.displayMessage('My word is: ' + this.dictionary.getCurrentWord());
                }
                break;
            }

            if(this.dictionary.getCurrentWord().length == 0 || !this.dictionary.haveMoreWords()) {
                this.view.displayServiceInfo("Sorry, I have no more words to play...");
                gameOver = true;
            }
        }

        this.view.displayServiceInfo("Game over");
    }
     
}

module.exports = Game;

