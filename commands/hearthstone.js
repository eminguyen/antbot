module.exports = {
  commands: [
    "hearthstone"
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
            'X-Mashape-Key': config.mashape
          }
        }

        request(options, (error, response, body) => {
          var info = JSON.parse(body)[0];
          console.log(info);

          let infoText =
          {embed:
            {
              color: 3447003,
              title: `Card: ${info.name}`,
              image: {
                url: info.img,
              },
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
