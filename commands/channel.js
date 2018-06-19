/* Module: channel.js
 * Author: Emily Nguyen
 * Description: Contains commands for manipulating Discord channels
 */

module.exports = {

  /* A list of the available commands in this module*/
  commands: [
    "channelid",
    "channelname",
    "createvoice",
    "createtext",
    "topic"
  ],

  /* Command: ChannelID
   * Returns the ID of the channel that the message is sent from
   */
  "channelid": {
    usage: "channelid",
    description: "Gives the id of the current channel",
    method: (client, message, argument) => {
      message.channel.send(`The current channel's id is ${message.channel.id}`);
    }
  },

  /* Command: ChannelName
   * Changes the name of the channel that the message is sent from
   */
  "channelname": {
    usage: "channelname <name of channel>",
    description: "Set the channel's name",
    method: (client, message, argument) => {
      try {
        message.channel.setName(argument);
        message.channel.send(`The channel's name has been set to ${argument}.`);
      }
      catch(error) {
        message.channel.send("I can't change the channel's name.");
      }
    }
  },

  /* Command: CreateVoice
   * Creates a new voice channel in the server that the message is sent from
   */
  "createvoice": {
    usage: "createvoice <name of channel>",
    description: "Creates a voice channel with the desired name",
    method: (client, message, argument) => {
      try {
        message.guild.createChannel(argument, "voice");
        message.channel.send(`I have made the channel ${argument}`);
      }
      catch(error) {
        message.channel.send("I can't make a voice channel.");
      }
    }
  },

  /* Command: CreateText
   * Creates a new text channel in the server that the message is sent from
   */
  "createtext": {
    usage: "createtext <name of channel>",
    description: "Creates a text channel with the desired name",
    method: (client, message, argument) => {
      try {
        message.guild.createChannel(argument, "text");
        message.channel.send(`I have made the channel ${argument}`);
      }
      catch(error) {
        message.channel.send("I can't make a text channel.");
      }
    }
  },

  /* Command: Topic
   * Changes the topic of the channel that the message is sent from
   */
  "topic": {
    usage: "topic <channel topic>",
    description: "Set the channel's topic",
    method: (client, message, argument) => {
      try {
        if(!argument) {
          message.reply("what do you want to set the topic to?");
        }
        else {
          message.channel.setTopic(argument);
          message.channel.send(`The channel's topic has been set to ${argument}.`);
        }
      }
      catch(error) {
        message.channel.send("I can't change the channel's topic.");
      }
    }
  },

}
