
// Require Discord.js library and Node.js
try {
  var Discord = require("discord.js");
  console.log("Starting AntBot with\nNode.js " + process.version + "\nDiscord.js "
  + Discord.version + "\n----------");
}
catch (error) {
  console.log(error);
  console.log("Please update Node and make sure library is installed.");
}

// Load configuration file
try {
  var config = require("./config.json");
  console.log("Configuration file loaded with the following settings:\nToken: "
  + config.token + "\nPrefix: " + config.prefix + "\n----------");
}
catch(error) {
  console.log(error);
  console.log("There was an error loading the configurations file.");
}

// Log the bot in
var client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logging in as ${client.user.tag}!`);
  client.user.setActivity('with my code');
});

// Load commands list
const path = require('path');
const fs = require('fs');

var commandsList = [];
const modulesPath = './commands/';
const modulesList = fs.readdirSync(modulesPath);
modulesList.forEach(modulePath => require(path.resolve(modulesPath, modulePath)));
for(var i = 0; i < modulesList.length; i++) {
  var module = require(modulesPath + modulesList[i]);
  for(var j = 0; j < module.commands.length; j++) {
    var commandName = module.commands[j];
    commandsList[commandName] = module[commandName];
  }
}

/*
//Load commands list
try { //try loading plugins from a non standalone install first
    plugin_directory = "./commands/";
    plugin_folders = getDirectories(plugin_directory);
} catch(eror){//load paths for an Electrify install
    exec_dir = path.dirname(process.execPath) + "/resources/default_app/"; //need this to change node prefix for npm installs
    plugin_directory = path.dirname(process.execPath) + "/resources/default_app/plugins/";
    plugin_folders = getDirectories(plugin_directory);
}*/

// Function to check for commands and isolate name and arguments
var commandCheck = (message) => {
  if(!message.author.bot)
  {

    // Checks if the message starts with the prefix and if so, isolate command and arguments
    if(message.content.startsWith(config.prefix)) {
      var command = message.content.split(" ")[0].substring(config.prefix.length);
      var argument = message.content.substring(command.length + config.prefix.length + 1);
    }

    // Checks if bot is mentioned and if so, isolate command and arguments
    // Put in try catch block because if bot could be mentioned without command
    else if(message.isMentioned(client.user)) {
      try {
        var command = message.content.split(" ")[1];
        var argument = message.content.substring(client.user.mention().length +
        command.length+config.prefix.length + 1);
      }
      catch(error) {
        message.channel.send("What do you want?");
      }
    }

    //Attempts to call the command
    try {
      commandsList[command].method(client, message, argument);
      return;
    }
    catch(error) {
      console.log(commandsList);
      message.channel.send("Command not found");
      return;
    }
  }
  return;
}

client.on('message', message => {
  commandCheck(message);
});

client.login(config.token);
