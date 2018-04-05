module.exports = {
  commands: [
    "coinflip",
    "diceroll",
    "8ball",
  ],

  "coinflip": {
    usage: "!coinflip",
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

  "diceroll": {
    usage: "!diceroll <number of sides> (optional)",
    description: "Rolls a dice with a given number of sides",
    method: (client, message, argument) => {
      if(!argument) {
        argument = 6;
      }
      let result = (Math.floor(Math.random() * Math.floor(argument)));
      message.channel.send(`I rolled ${result + 1}!`);
    }
  },

  "8ball" : {
    usage: "!8ball <question>",
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
