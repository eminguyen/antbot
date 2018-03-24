

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

function commandCheck(message)
{
  if(!message.author.bot)
  {
    if(message.content.startsWith(config.prefix))
    {
      var command = message.content.split(" ")[0].substring(config.prefix.length);
      var argument = message.content.substring(command.length+config.prefix.length+1);
    }
    else if(message.isMentioned(client.user))
    {
      try
      {
        var command = message.content.split(" ")[1];
        var argument = message.content.substring(client.user.mention().length+command.length+config.prefix.length+1);
      }
      catch(error)
      {
        message.channel.send("Type '!help' or '@" + client.user.username + " help' for a list of commands");
      }
    }
  }
}

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('pong!')
  }
  commandCheck(message);
});

client.login(config.token);
