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
            'X-Mashape-Key': process.env.MASHAPE || config.mashape
          }
        }

        request(options, (error, response, body) => {

          try {
            var info = JSON.parse(body)[0];

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
                  name: ':ring: Rarity',
                  value: info.rarity
                },
                {
                  name: ':heart: Health',
                  value: info.health
                },
                {
                  name: ':book: Description',
                  value: info.flavor
                },
                {
                  name: ':paintbrush: Artist',
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
          }
          catch (error) {
            message.reply("I can't seem to find the card");
          }
      });
      }
      catch (error) {
        message.reply("I can't seem to find the card");
      }
    },
  }
}
