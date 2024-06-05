new Vue({
    el: '#app',
    data: {
        numberToGuess: null,
        userGuess: null,
        message: 'Start guessing',
    },
    methods: {
        generateRandomNumber() {
            this.numberToGuess = Math.floor(Math.random() * 100) + 1;
        },
        checkGuess() {
            if (this.userGuess == this.numberToGuess) {
                this.message = 'You got it!';
            } else if (this.userGuess < this.numberToGuess) {
                this.message = 'Guess higher';
            } else {
                this.message = 'Guess lower';
            }
        },
        giveUp() {
            this.message = `The number was ${this.numberToGuess}`;
        },
        startOver() {
            this.generateRandomNumber();
            this.message = 'Start guessing';
            this.userGuess = null;
        }
    },
    mounted() {
        this.startOver();
    }
});
