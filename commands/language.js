/* Module: language.js
 * Author: Emily Nguyen
 * Description: Plays around with other languages
 */

module.exports = {

  /* A list of the available commands in this module*/
  commands: [
    "quote",
    "yoda",
  ],

  /* Command: Quote
   * Returns a random famous quote
   */
  "quote": {
    usage: "quote",
    description: "Returns a random famous quote",
    method: (client, message, argument) => {
      try {
        let config = require("../config.json");

        let request = require('request');

        let options = {
          headers: {
            'X-Mashape-Key': process.env.MASHAPE || config.mashape
          },
          method: "GET",
          url: `https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous`,
        }

        request(options, (error, response, body) => {
          if (!error && response.statusCode == 200) {
            let famousQuote = JSON.parse(body)[0];
            message.channel.send(`"${famousQuote.quote}" - ${famousQuote.author}`);
          }
          else {
            message.reply("I'm all out of quotes!");
          }
        });

      }
      catch(error) {
        message.reply("I'm all out of quotes!");
      }
    }
  },

  /* Command: Yoda
   * Translates a message into yoda's language
   */
  "yoda": {
    usage: "yoda <message>",
    description: "Translates your message to yoda speak",
    method: (client, message, argument) => {

      let config = require("../config.json");

      let request = require('request');

      let options = {
        headers: {
          'X-Mashape-Key': process.env.MASHAPE || config.mashape
        },
        method: "POST",
        url: `https://yodish.p.mashape.com/yoda?text=${argument}`
      }

      request(options, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          let yoda = JSON.parse(body);
          message.channel.send(yoda.contents.translated);
        }
        else {
          console.log(response);
        }
      });
    }
  },

}
