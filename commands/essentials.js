/* Module: essentials.js
 * Author: Emily Nguyen
 * Description: Contains basic commands for a discord bot
 */

/* A list of the available commands in this module*/
module.exports = {
  commands: [
    "ping",
    "hello",
    "botid",
    "userid",
    "avatar",
    "say",
    "invite",
    "activity",
  ],

  /* Command: Ping
   * The bot messages pong to indicate that it is alive
   */
  "ping": {
    usage: "ping",
    description: "Returns pong!",
    method: (client, message, argument) => {
      message.channel.send("pong!");
    }
  },

  /* Command: Hello
   * Replies Hello! to the user
   */
  "hello": {
    usage: "hello",
    description: "Tells the user hello",
    method: (client, message, argument) => {
      message.channel.send(`Hello ${message.author}!`);
    }
  },

  /* Command: BotID
   * Returns the ID of the bot
   */
  "botid": {
    usage: "botid",
    description: "Gives the id of the bot",
    method: (client, message, argument) => {
      message.channel.send(`My id is ${client.user.id}.`);
    }
  },

  /* Command: UserID
   * Replies ID of a specified user
   */
  "userid": {
    usage: "userid <user name>*",
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

  /* Command: Avatar
   * Returns a link to a user's avatar
   */
  "avatar": {
    usage: "avatar <user name>*",
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

  /* Command: Say
   * Makes the bot repeat a message
   */
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

  /* Command: Invite
   * Returns an invite link for the bot
   */
  "invite": {
    usage: "invite",
    description: "Creates an invite link for the bot",
    method: (client, message, argument) => {
      message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot`)
    }
  },

  /* Command: activity
   * Allows the user to change the bot's current activity
   */
  "activity": {
    usage: "activity <activity description>",
    description: "Allows you to change the bot's activity",
    method: (client, message, argument) => {
      if(message.author.id == '117543813563547648') {
        client.user.setActivity(argument);
        message.channel.send(`I am now playing ${argument}`)
      }
      else {
        message.channel.send("You do not have permission to do that.")
      }
    }
  }

}
