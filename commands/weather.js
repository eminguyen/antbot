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
            {embed:
              {
                color: 3447003,
                title: `Weather for ${weather.name}`,
              fields: [
                {
                  name: ':white_sun_rain_cloud:  Conditions',
                  value: ` ${weather.weather.description}`
                },
                {
                  name: ':thermometer: Temperature',
                  value: `${weather.main.temp} °F `
                },
                {
                  name: ':droplet: Humidity',
                  value: `${weather.main.humidity} % `
                },
                {
                  name: ':cloud: Clouds',
                  value: `${weather.clouds.all}`
                },
                {
                  name: ':dash: Wind Speed',
                  value: ` ${weather.wind.speed}`
                }
              ],
                timestamp: new Date(),
                footer: {
                  text: "Current Forecast"
                }
              }
            };

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
