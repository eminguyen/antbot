const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log("Listening on Port 3000");
});

const http = require("http");
setInterval(() => {
  http.get("http://antbotjs.herokuapp.com");
}, 300000);

// Require Discord.js library and Node.js
try {
  const Discord = require("discord.js");
  console.log("Starting AntBot with\nNode.js " + process.version + "\nDiscord.js "
  + Discord.version + "\n----------");
}
catch (error) {
  console.log(error);
  console.log("Please update Node and make sure library is installed.");
}

// Load configuration file
try {
  const config = require("./config.json");
  console.log("Configuration file loaded with the following settings:\nToken: "
  + config.token + "\nPrefix: " + config.prefix + "\n----------");
  const token = config.token;
}
catch(error) {
  console.log(error);
  console.log("There was an error loading the configurations file.");
}

if(!token) {
  token = process.env.API_KEY;
}

// Log the bot in
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logging in as ${client.user.tag}!`);
  client.user.setActivity('at http://antbot.net');
});

// Load commands list
const path = require('path');
const fs = require('fs');

let commandsList = {};
const modulesPath = './commands/';
const modulesList = fs.readdirSync(modulesPath);
modulesList.forEach(modulePath => require(path.resolve(modulesPath, modulePath)));
for(let i = 0; i < modulesList.length; i++) {
  let module = require(modulesPath + modulesList[i]);
  for(let j = 0; j < module.commands.length; j++) {
    let commandName = module.commands[j];
    commandsList[commandName] = module[commandName];
  }
}

app.use(express.static("public"));

app.get('/', (req, res) => {
  handlebarsObject = {
    invite: `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot`,
    users: client.users.size,
    servers: client.guilds.size,
    uptime: (Math.floor(client.uptime / 86400000)) + " days " + (Math.floor(client.uptime / 3600000)) % 24
            +" hr " + (Math.floor(client.uptime / 60000) % 60) + " min",
    prefix: config.prefix
  }
  res.render('home', handlebarsObject);
})

app.get('/about', (req, res) => {
  handlebarsObject = {
    commands: commandsList
  }
  res.render('about', handlebarsObject);
})

app.get('/commands', (req, res) => {
  handlebarsObject = {
    commands: commandsList
  }
  res.render('commands', handlebarsObject);
})

// Function to check for commands and isolate name and arguments
let commandCheck = (message) => {
  if(!message.author.bot)
  {

    // Checks if the message starts with the prefix and if so, isolate command and arguments
    if(message.content.startsWith(config.prefix)) {
      let command = message.content.split(" ")[0].substring(config.prefix.length);
      let argument = message.content.substring(command.length + config.prefix.length + 1);
    }

    // Checks if bot is mentioned and if so, isolate command and arguments
    // Put in try catch block because if bot could be mentioned without command
    else if(message.isMentioned(client.user)) {
      try {
        let command = message.content.split(" ")[1];
        let argument = message.content.substring(message.content.split(" ")[0].length +
        command.length + 2);
      }
      catch(error) {
        console.log(error);
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

client.on('message', (message) => {
  commandCheck(message);
});

client.login(token);
