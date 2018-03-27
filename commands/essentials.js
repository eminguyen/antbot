module.exports = {
  commands: [
    "ping",
    "hello",
    "userid",
    "say"
  ],

  ping: {
    usage: "!ping",
    description: "Returns pong!",
    method: (client, message, argument) => {
      message.channel.send("pong!");
    }
  },

  hello: {
    usage: "!hello",
    description: "Tells the user hello",
    method: (client, message, argument) => {
      message.channel.send("Hello " + message.author + "!");
    }
  },

  userid: {
    usage: "!userid",
    description: "Tells the user their id",
    method: (client, message, argument) => {
      message.reply("your user id is \n" + message.author.id);
    }
  },

  say: {
    usage: "say <message>",
    description: "Makes AntBot repeat the message",
    method: (client, message, argument) => {
      if(!argument) {
        message.channel.send("Did you want me to say something?");
      }
      else {
        message.channel.send(argument);
      }
    }
  }

}
