module.exports = {
  commands: [
  ],

  "hearthstone": {
    usage: "hearthstone <player name>",
    description: "Returns Hearthstone statitics for a player",
    method: (client, message, argument) => {
      try {
        let config = require("../config.json");

        var request = require('request');

        var options = {
          method: "GET",
          url: `https://omgvamp-hearthstone-v1.p.mashape.com/cards/${argument}`,
          headers: {
            'X-Mashape-Key': config.hearthstone
          }
        }

        request(options, (error, response, body) => {
          var info = JSON.parse(body);
          console.log(info);

          let infoText =
          {embed:
            {
              color: 3447003,
              title: ` Card: ${info.name}`,
            fields: [
              {
                name: 'Rarity',
                value: info.rarity
              },
              {
                name: 'Health',
                value: info.health
              },
              {
                name: 'Description',
                value: info.flavor
              },
              {
                name: 'Artist',
                value: info.artist
              }
            ],
              timestamp: new Date(),
              footer: {
                text: "Hearthstone"
              }
            }
          };
          message.channel.send(infoText);
      });
      }
      catch (error) {
        console.log(error);
        message.reply("I am unable to retrieve Fortnite statistics");
      }
    },
  }
}
