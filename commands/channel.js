module.exports = {
  commands: [
    "topic",
    "channelname",
    "createvoice",
  ],

  "topic": {
    usage: "!topic <topic>",
    description: "Set the channel's topic",
    method: (client, message, argument) => {
      try {
        message.channel.setTopic(argument);
        message.channel.send("The channel's topic has been set to " + argument + ".");
      }
      catch(error) {
        message.channel.send("I can't change the channel's topic.");
      }
    }
  },

  "channelname": {
    usage: "!channelname <name of channel>",
    description: "Set the channel's name",
    method: (client, message, argument) => {
      try {
        message.channel.setName(argument);
        message.channel.send("The channel's name has been set to " + argument + ".");
      }
      catch(error) {
        message.channel.send("I can't change the channel's name.");
      }
    }
  },

  "createvoice": {
    usage: "!createvoice <name of channel>",
    description: "Creates a voice channel with the desired name",
    method: (client, message, argument) => {
      try {
        message.guild.createChannel(argument, "voice");
        message.channel.send("I have made the channel " + argument);
      }
      catch(error) {
        console.log(error);
        message.channel.send("I can't make a voice channel.");
      }
    }
  }

}
