/* Module: hearthstone.js
 * Author: Emily Nguyen
 * Description: Returns Hearthstone player and card statistics
 */

module.exports = {

  /* A list of the available commands in this module*/
  commands: [
    "hearthstone"
  ],

  /* Command: Hearthstone
   * Returns information about a card from the game Hearthstone
   */
  "hearthstone": {
    usage: "hearthstone <card name>",
    description: "Returns details for a Hearthstone card",
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

        // Performs a request to a Hearthstone Mashape API in order to retrieve
        // card info
        request(options, (error, response, body) => {

          try {
            var info = JSON.parse(body)[0];

            // Formats the card information into an embed to return to user
            let infoText =
            {embed:
              {
                color: 3447003,
                title: `Card: ${info.name}`,
                image: {
                  url: info.img,
                },
              fields: [

                // The card's rarity
                {
                  name: ':ring: Rarity',
                  value: info.rarity
                },

                // The card's health
                {
                  name: ':heart: Health',
                  value: info.health
                },

                // The card's flavor text
                {
                  name: ':book: Description',
                  value: info.flavor
                },

                // The card's artist
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

          // Error catching if API returns undefined
          catch (error) {
            message.reply("I can't seem to find the card");
          }
      });
      }

      // Error catching for non-API related issues
      catch (error) {
        console.log(error)
        message.reply("I can't seem to find the card");
      }
    },
  }
}
