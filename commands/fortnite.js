module.exports = {
  commands: [
    "fortnite"
  ],

  "fortnite": {
    usage: "fortnite <player name>",
    description: "Returns Fortnite statistics for a player",
    method: (client, message, argument) => {
      try {
        let config = require("../config.json");

        var request = require('request');

        var options = {
          method: "GET",
          url: `https://fortnite.y3n.co/v2/player/${argument}`,
          headers: {
            'User-Agent': 'nodejs request',
            'X-Key':  process.env.FORTNITE || config.fortnite
          }
        };

        request(options, (error, response, body) => {
          if (!error && response.statusCode == 200) {
            var stats = JSON.parse(body);
          };
        });

        let statsText =
        {embed:
          {
            color: 3447003,
            title: `Stats for ${stats.displayName}`,
            fields: [
              {
                name: ':trophy: Victory Royales',
                value: `${stats.br.stats.pc.all.wins}`
              },
              {
                name: ':chart_with_upwards_trend: Win Rate',
                value: `${stats.br.stats.pc.all.winRate}%`
              },
              {
                name: ':gun: Kills',
                value: `${stats.br.stats.pc.all.kills}`
              },
              {
                name: ':skull: Deaths',
                value: `${stats.br.stats.pc.all.deaths}`
              },
              {
                name: ':black_heart: K/D',
                value: `${stats.br.stats.pc.all.kpd}`
              },
              {
                name: ':clock1: Time played',
                value: `${stats.br.stats.pc.all.minutesPlayed} minutes`
              },
            ],
            timestamp: new Date(),
            footer: {
              text: "Fortnite Battle Royale"
            }
          }
        };
      }
      catch (error) {
        console.log(error);
        message.reply("I am unable to retrieve Fortnite statistics");
      }
    },
  }
}
