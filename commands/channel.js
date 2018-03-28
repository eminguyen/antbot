module.exports = {
  commands: [
    "topic"
  ],

  topic: {
    usage: "!topic",
    description: "Set the channel's topic",
    method: (client, message, argument) => {
      try {
        message.channel.setTopic(argument);
        message.channel.send("The channel's topic has been set to " + argument);
      }
      catch(error) {
        message.channel.send("I can't change the channel's topic");
      }
    }
  }

}
