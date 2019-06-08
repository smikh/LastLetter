class Dictionary {
    
    constructor() {
        this.words = ['friend', 'design', 'network', 'key', 'yacht'];        
        this.currentWord = this.words[0];
        this.usedWords = [ this.currentWord ];
        this.error = "";
    }

    getWords() {
        return this.words;
    }

    getCurrentWord() {
        return this.currentWord;
    }

    setCurrentWord(word) {
        this.currentWord = word;
    }

    markAsUsed(word) {
        this.usedWords.push(word);
    }

    getError() {
        return this.error;
    }

    haveMoreWords() {
        return this.words.length > this.usedWords.length;
    }

    getNextWord(word) {
        var lastSymbol = word.charAt(word.length - 1);
        for (var i = 0; i < this.words.length; i++) {
            var currWord = this.words[i];
            if(currWord.charAt(0) === lastSymbol) {
                if(!this.usedWords.includes(currWord))
                {
                    return currWord;
                }
            }
        }
        return "";
    }

    verify(word) {
        this.error = "";

        if(this.usedWords.includes(word)) {
            this.error = "\"" + word + "\" was already used!";
            return false;
        }

        var lastSymbol = this.currentWord.charAt(this.currentWord.length - 1);
        if(word.charAt(0) != lastSymbol) {
            this.error = "Your word should begin with \"" + lastSymbol + "\"!";
            return false;
        }

        if(!this.words.includes(word)) {
            this.error = "Sorry, \"" + word + "\" is unknown...";
            return false;
        }
        
        return true;
    }
}

module.exports = Dictionary;

