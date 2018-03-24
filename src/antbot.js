

// Require Discord.js library and Node.js
try
{
  var Discord = require("discord.js");
  console.log("Starting AntBot with\nNode.js " + process.version + "\nDiscord.js "
  + Discord.version + "\n----------");
}
catch (error)
{
  console.log(error);
  console.log("Please update Node and make sure library is installed.");
}

// Load configuration file
try
{
  var config = require("./config.json");
  console.log("Configuration file loaded with the following settings:\nToken: "
  + config.token + "\nPrefix: " + config.prefix + "\n----------");
}
catch(error)
{
  console.log(error);
  console.log("There was an error loading the configurations file.");
}

// Log the bot in
var client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logging in as ${client.user.tag}!`);
  client.user.setActivity('with my code');
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('pong!')
  }
});

client.login(config.token);
