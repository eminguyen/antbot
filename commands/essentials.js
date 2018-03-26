module.exports = {
  commands: [
    "ping",
    "hello",
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
  }

}
