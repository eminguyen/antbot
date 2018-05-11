module.exports = {
  commands: [
    "ping",
    "hello",
    "botid",
    "userid",
    "avatar",
    "say",
    "invite"
  ],

  "ping": {
    usage: "ping",
    description: "Returns pong!",
    method: (client, message, argument) => {
      message.channel.send("pong!");
    }
  },

  "hello": {
    usage: "hello",
    description: "Tells the user hello",
    method: (client, message, argument) => {
      message.channel.send(`Hello ${message.author}!`);
    }
  },

  "botid": {
    usage: "botid",
    description: "Gives the id of the bot",
    method: (client, message, argument) => {
      message.channel.send(`My id is ${client.user.id}.`);
    }
  },

  "userid": {
    usage: "userid <User Name> (optional)",
    description: "Tells the user their id",
    method: (client, message, argument) => {
      try {
        if(argument && argument != message.author.username) {
          message.channel.send(`${argument}'s id is ${client.users.find("username", argument).id}.`);
        }
        else {
          message.reply(`your user id is \n${message.author.id}.`);
        }
      }
      catch(error) {
        message.channel.send("User is not in this server");
      }
    }
  },

  "avatar": {
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
        message.reply("User has no avatar!")
      }
    }
  },

  "say": {
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
  },

  "invite": {
    usage: "invite",
    description: "Creates an invite link for the bot",
    method: (client, message, argument) => {
      message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot`)
    }
  }

}
