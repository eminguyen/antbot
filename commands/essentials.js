module.exports = {
  commands: [
    "ping",
    "hello",
    "userid",
    "avatar",
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

  avatar: {
    usage: "avatar",
    description: "Sends a link to the user's avatar",
    method: (client, message, argument) => {
      try {
        if(argument) {
          message.reply(client.users.find("username", argument).avatarURL);
        }
        else {
          message.reply(message.author.avatarURL);
        }
      }
      catch(error) {
        console.log(error);
        message.reply("User has no avatar!")
      }
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
