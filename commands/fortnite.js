module.exports = {
  commands: [
    "fortnite"
  ],

  "fortnite": {
    usage: "!fortnite",
    description: "Returns Fortnite statitics for a player",
    method: (client, message, argument) => {
      try {
        let config = require("../config.json");

        var request = require('request');

        var options = {
        method: "GET",
        url: `https://fortnite.y3n.co/v2/player/${argument}`,
        headers: {
        'User-Agent': 'nodejs request',
        'X-Key': config.fortnite
         }
        }

        request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          var stats = JSON.parse(body);
          message.channel.send(`${argument} k/d: ${stats.br.stats.pc.all.kpd}`);
        }
      });
      }
      catch (error) {
        console.log(error);
        message.reply("I am unable to retrieve Fortnite statistics");
      }
    },
  }
}
