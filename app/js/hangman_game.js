var STATE_STATED = "Game Started";
var STATE_WON = "You won";
var STATE_LOST = "You lost";
var STATE_LETTER_USED = "Letter used";
var STATE_CORRECT_GUESS = "Correct guess";
var STATE_WRONG_GUESS = "Wrong guess";

function Game(word) {
  this.turn_left = 7;
  this.game_state = STATE_STATED;
  this.letters = word.split("");
  this.used = [];

  this.display = function(x, y) {
    text(game.masked(), x, y);
    text(game.turn_left, x, y + 25);
    text(game.game_state, x, y + 50);
  }
  
  this.masked = function() {
    if (this.game_state == STATE_WON || this.game_state == STATE_LOST) {
      return this.letters.join(" ");
    } else {
      var list = this.letters.map(x => this.used.includes(x) ? x : "_");
      return list.join(" ");
    }
  }
  
  this.entered = function(pressed){
    if (this.game_state == STATE_WON || this.game_state == STATE_LOST) {
      return;
    }
    
    if (this.used.includes(pressed)) {
      this.game_state = STATE_LETTER_USED;
    } else {
      this.used.push(pressed);
      
      if (this.letters.includes(pressed)) {
        this.game_state = STATE_CORRECT_GUESS;
        
        var diff = this.letters.filter(x => this.used.includes(x));
        if (diff.length == this.letters.length) {
          this.game_state = STATE_WON;
        }
      } else {
        this.turn_left--;

        if (this.turn_left == 0) {
          this.game_state = STATE_LOST;
        } else {
          this.game_state = STATE_WRONG_GUESS;
        }
      }
    }
  }
}