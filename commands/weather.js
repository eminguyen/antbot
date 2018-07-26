/* Module: weather.js
 * Author: Emily Nguyen
 * Description: Returns weather information
 */

module.exports = {

  /* A list of the available commands in this module*/
  commands: [
    "weather"
  ],

  /* Command: Weather
   * Returns information about the current weather
   */
  "weather": {
    usage: "weather <location name>",
    description: "Returns the weather for a location",
    method: (client, message, argument) => {

      try {

        let request = require('request');
        let config = require("../config.json");
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${argument}&units=imperial&appid=${config.weather}`;

        // Performs a request to OpenWeatherMap to retrieve weather info
        request(url, function (err, response, body) {

          let weather = JSON.parse(body);

          if(weather.main == undefined) {
            message.reply("I am unable to fetch the weather");
          }
          else {

            let weatherText =
            {embed:
              {
                color: 3447003,
                title: `Weather for ${weather.name}`,
              fields: [
                /*
                {
                  name: ':white_sun_rain_cloud:  Conditions',
                  value: ` ${weather.weather.description}`
                },
                */

                // The current temperature
                {
                  name: ':thermometer: Temperature',
                  value: `${weather.main.temp} °F `
                },

                // The current humidity
                {
                  name: ':droplet: Humidity',
                  value: `${weather.main.humidity} % `
                },

                // The current number of clouds
                {
                  name: ':cloud: Clouds',
                  value: `${weather.clouds.all} %`
                },

                // The current wind speed
                {
                  name: ':dash: Wind Speed',
                  value: ` ${weather.wind.speed} mph`
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

      // Error catching for any problems
      catch (error) {
        console.log(error);
        message.reply("I am unable to fetch the weather");
      }
    },
  }
}
