/* Module: games.js
 * Author: Emily Nguyen
 * Description: Contains various games to play with the user
 */

module.exports = {

  /* A list of the available commands in this module*/
  commands: [
    "coinflip",
    "diceroll",
    "8ball",
  ],

  /* Command: CoinFlip
   * Flips a coin returning either head or tails
   */
  "coinflip": {
    usage: "coinflip",
    description: "Returns heads or tails!",
    method: (client, message, argument) => {
      let random = (Math.floor(Math.random() * Math.floor(2)));
      if(random === 0) {
        message.channel.send("I flipped heads!");
      }
      else {
        message.channel.send("I flipped tails!");
      }
    }
  },

  /* Command: DiceRoll
   * Rolls a dice with any number of sides; default is 6 sides
   */
  "diceroll": {
    usage: "diceroll <number of sides>*",
    description: "Rolls a dice with a given number of sides",
    method: (client, message, argument) => {
      if(!argument) {
        argument = 6;
      }
      let result = (Math.floor(Math.random() * Math.floor(argument)));
      message.channel.send(`I rolled ${result + 1}!`);
    }
  },

  /* Command: 8Ball
   * Gives the user a random response based on the 8Ball toy
   */
  "8ball" : {
    usage: "8ball <question>",
    description: "Gives the user a response to their question",
    method: (client, message, argument) => {
      if(!argument) {
        message.reply("Please ask me a question.");
      }
      else {
        let eightball = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
        ];
        let index = (Math.floor(Math.random() * Math.floor(20)));
        message.reply(eightball[index]);
      }
    }
  }
}
