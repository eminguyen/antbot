module.exports = {
  commands: [
    "coinflip",
    "diceroll",
  ],

  coinflip: {
    usage: "!coinflip",
    description: "Returns heads or tails!",
    method: (client, message, argument) => {
      var random = (Math.floor(Math.random() * Math.floor(2)));
      if(random === 0) {
        message.channel.send("I flipped heads!");
      }
      else {
        message.channel.send("I flipped tails!");
      }
    }
  },

  diceroll: {
    usage: "!diceroll <number of sides> (optional)",
    description: "Rolls a dice with a given number of sides",
    method: (client, message, argument) => {
      if(!argument) {
        argument = 6;
      }
      var result = (Math.floor(Math.random() * Math.floor(argument)));
      message.channel.send("I rolled " + (result + 1) + "!");
    }
  }

}
