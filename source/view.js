const chalk = require('chalk');

class View {
    
    constructor() {
        
        }
     
    displayInfo(message) {
        console.log(chalk.green(message));
    }

    displayMessage(message) {
        console.log(chalk.yellow(message));
    }

    displayError(message) {
        console.log(chalk.red(message));
    }

    displayServiceInfo(message) {
        console.log(chalk.blue(message));
    }
}

module.exports = View;

