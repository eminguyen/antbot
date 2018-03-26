module.exports = {
  commands: [
    "ping"
  ],

  ping: {
    usage: "!ping",
    description: "Returns pong!",
    method: (client, message, argument) => {
    message.channel.send("pong!");
    }
  },

}
