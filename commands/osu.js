/* Module: osu.js
 * Author: Emily Nguyen
 * Description: Returns OSU player and song statistics
 */

module.exports = {

  /* A list of the available commands in this module*/
  commands: [
  ],

  /* WORK IN PROGRESS */
  /* Command: Osu
   * Returns a player's Osu! statistics
   */
  "osu": {
    usage: "osu <player name>",
    description: "Returns OSU statitics for a player",
    method: (client, message, argument) => {
      try {
        let config = require("../config.json");

        let request = require('request');

        let options = {
          method: "GET",
          url: `http://osu.ppy.sh/api/get_user/?k=${config.osu}u=${argument}`,
        }

        request(options, (error, response, body) => {
          if (!error) {
            try {
              let stats = body[0];
              console.log(body);
              console.log(response);
              console.log(stats);
              let statsText =
              {embed: {
                  color: 3447003,
                  title: `Stats for ${argument}`,
                fields: [
                  {
                    name: ':trophy: Chicken Dinners',
                    value: `test`
                  },
                  {
                    name: ':chart_with_upwards_trend: Win Rate',
                    value: `test%`
                  },
                  {
                    name: ':gun: Kills',
                    value: `test}`
                  },
                  {
                    name: ':skull: Suicides',
                    value: `test`
                  },
                  {
                    name: ':black_heart: K/D',
                    value: `test`
                  },
                ],
                  timestamp: new Date(),
                  footer: {
                    text: "OSU!"
                  }
                }
              };
              message.channel.send(statsText);
            }
            catch(error) {
              message.reply("Could not retrieve osu statistics")
            }
          }
          else {console.log("oh");console.log(response)};
        });
      }
      catch (error) {
        console.log(error);
        message.reply("I am unable to retrieve PUBG statistics");
      }
    },
  }
}
