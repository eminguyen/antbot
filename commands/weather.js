module.exports = {
  commands: [
    "weather"
  ],

  "weather": {
    usage: "!weather",
    description: "Returns the weather for a location",
    method: (client, message, argument) => {
      try {
        let request = require('request');
        let config = require("../config.json");
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${argument}&units=imperial&appid=${config.weather}`
        request(url, function (err, response, body) {
          let weather = JSON.parse(body)
          if(weather.main == undefined){
                message.reply("I am unable to fetch the weather");
          } else {
            let weatherText =
            `Current Weather for ${weather.name}` + "\n" +
            `:thermometer: temperature: ${weather.main.temp}` + "\n" +
            `:cloud: clouds: ${weather.clouds.all}` + "\n" +
            `:dash: wind: ${weather.wind.speed}`;

              message.channel.send(weatherText);
          }
        });
      }
      catch (error) {
        console.log(error);
        message.reply("I am unable to fetch the weather");
      }
    },
  }
}
