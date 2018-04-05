module.exports = {
  commands: [
    "owner",
  ],

  "owner": {
    usage: "!owner",
    description: "Gives the owner of the server",
    method: (client, message, argument) => {
      message.channel.send(`The server's owner is ${message.channel.guild.owner.user.username}.`);
    }
  },

}
