class Bot {
    
    constructor(dictionary) {
        this.dictionary = dictionary;    
    }
     
    getInput(word) {        
        this.dictionary.markAsUsed(word);
        var nextWord = this.dictionary.getNextWord(word);

        if(nextWord.length > 0) {
            this.dictionary.setCurrentWord(nextWord);
            this.dictionary.markAsUsed(nextWord);
        }
    }
}

module.exports = Bot;