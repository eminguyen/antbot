module.exports = {
  commands: [
    "meme",
  ],

  "meme": {
    usage: "owner",
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
  }

}
