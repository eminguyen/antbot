module.exports = {
  commands: [
    "coinflip",
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

}
