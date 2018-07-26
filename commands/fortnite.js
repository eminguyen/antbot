/* Module: fortnite.js
 * Author: Emily Nguyen
 * Description: Returns Fortnite statistics
 */

 /* A list of the available commands in this module*/
module.exports = {
  commands: [
    "fortnite"
  ],

  /* Command: Fortnite
   * Gives the player's Fortnite's statistics
   */
  "fortnite": {
    usage: "fortnite <player name>",
    description: "Returns Fortnite statistics for a player",
    method: (client, message, argument) => {

      let config = require("../config.json");

      let request = require('request');

      let options = {
        method: "GET",
        url: `https://fortnite.y3n.co/v2/player/${argument}`,
        headers: {
          'User-Agent': 'nodejs request',
          'X-Key':  process.env.FORTNITE || config.fortnite
        }
      };

      // Performs a request to a Fortnite API in order to retrieve user info
      request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          let stats = JSON.parse(body);
        };
        try {

          // Formats the statistics into an embed to return to the user
          let statsText =

          {embed:
            {
              color: 3447003,
              title: `Stats for ${stats.displayName}`,
              fields: [

                // The user's wins
                {
                  name: ':trophy: Victory Royales',
                  value: `${stats.br.stats.pc.all.wins}`
                },

                // The user's win rate
                {
                  name: ':chart_with_upwards_trend: Win Rate',
                  value: `${stats.br.stats.pc.all.winRate}%`
                },

                // The user's kills
                {
                  name: ':gun: Kills',
                  value: `${stats.br.stats.pc.all.kills}`
                },

                // The user's deaths
                {
                  name: ':skull: Deaths',
                  value: `${stats.br.stats.pc.all.deaths}`
                },

                // The user's kill / death ratio
                {
                  name: ':black_heart: K/D',
                  value: `${stats.br.stats.pc.all.kpd}`
                },

                // The user's time played
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
          message.channel.send(statsText);
        }

        // Error catching if API returns undefined
        catch (error) {
          message.reply("I am unable to retrieve Fortnite statistics");
        }
      });
    },
  }
}
