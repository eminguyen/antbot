module.exports = {
  commands: [
    "yoda",
  ],

  "yoda": {
    usage: "yoda",
    description: "Translates your message to yoda speak",
    method: (client, message, argument) => {
      try {

        var config = require("../config.json");

        var request = require('request');

        var options = {
          headers: {
            'X-Mashape-Key': process.env.MASHAPE || config.mashape
          },
          method: "POST",
          url: `https://yodish.p.mashape.com/yoda?text=${argument}`,
          datatype: 'json',
        }

        request(options, (error, response, body) => {
          if (!error && response.statusCode == 200) {
            let yoda = JSON.parse(body);
            message.channel.send(yoda.contents.translated);
          }
          else {
            console.log(response);
          }
        })
      }

      catch(error) {
        console.log(error);
      }
    }
  }

}
