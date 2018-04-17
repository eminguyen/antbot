module.exports = {
  commands: [
    "hearthstone"
  ],

  "hearthstone": {
    usage: "!hearthstone",
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
        if (!error) {
          var stats = JSON.parse(body);
          console.log(stats);

          let statsText =
          {embed:
            {
              color: 3447003,
              title: `Stats for ${stats}`,
            fields: [
              {
                name: ':trophy: Victory Royales',
                value: `test`
              },
              {
                name: ':chart_with_upwards_trend: Win Rate',
                value: `test`
              },
              {
                name: ':gun: Kills',
                value: `test`
              },
              {
                name: ':skull: Deaths',
                value: `test`
              },
              {
                name: ':black_heart: K/D',
                value: `test`
              },
              {
                name: ':clock1: Time played',
                value: `test`
              },
            ],
              timestamp: new Date(),
              footer: {
                text: "Fortnite Battle Royale"
              }
            }
          };
          message.channel.send(statsText);
        }
            else {console.log(response)};
      });
      }
      catch (error) {
        console.log(error);
        message.reply("I am unable to retrieve Fortnite statistics");
      }
    },
  }
}
