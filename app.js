const chalk = require('chalk');
const test = require('./helpers.js');
const readlineSync = require('readline-sync');

console.log(chalk.blue('Hello world!'));
test();

//console.log(process.argv);

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

console.log("Game over");