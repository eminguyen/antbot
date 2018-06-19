/* Module: meme.js
 * Author: Emily Nguyen
 * Description: Returns memes to the user
 */
 
module.exports = {

  /* A list of the available commands in this module*/
  commands: [
    "meme",
  ],

  /* WORK IN PROGRESS */
  /* Command: Meme
   * Returns a random meme
   */
  "meme": {
    usage: "meme",
    description: "Returns a random meme",
    method: (client, message, argument) => {

    try {
      var request = require('request');

      var options = {
        method: "GET",
        url: "https://api.imgflip.com/get_memes",
      };

      request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          let meme = JSON.parse(body);
          let random =(Math.floor(Math.random() * Math.floor(100)));
          message.channel.send(meme.data.memes[random].url);
        };
      })
    }
      catch (error) {
        console.log(error);
      }
    }
  },

}
