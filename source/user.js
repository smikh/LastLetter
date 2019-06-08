const readlineSync = require('readline-sync');

class User {
    
    getInput() {
        return readlineSync.question('Your word? ');
    }     
}

module.exports = User;