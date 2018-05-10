var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
  console.log("Listening on Port 3000");
});

var http = require("http");
setInterval(function() {
    http.get("http://antbotjs.herokuapp.com");
}, 300000);

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
  var token = config.token;
}
catch(error) {
  console.log(error);
  console.log("There was an error loading the configurations file.");
}

if(!token) {
  token = process.env.API_KEY;
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

var commandsList = {};
const modulesPath = './commands/';
const modulesList = fs.readdirSync(modulesPath);
modulesList.forEach(modulePath => require(path.resolve(modulesPath, modulePath)));
for(var i = 0; i < modulesList.length; i++) {
  var module = require(modulesPath + modulesList[i]);
  for(var j = 0; j <= module.commands.length; j++) {
    var commandName = module.commands[j];
    commandsList[commandName] = module[commandName];
  }
}

app.get('/', function (req, res) {
  console.log('ok');
  console.log(commandsList)
  handlebarsObject = {
    users: client.users.size,
    servers: client.guilds.size,
    uptime: client.uptime / 60,
    commands: commandsList
  }
  res.render('home', handlebarsObject);
})

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

    if(command)
      //Attempts to call the command
      try {
        commandsList[command].method(client, message, argument);
        return;
      }
      catch(error) {
        message.channel.send("Command not found");
        return;
      }
    }
  return;
}

client.on('message', message => {
  commandCheck(message);
});

client.login(token);
