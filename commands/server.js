/* Module: server.js
 * Author: Emily Nguyen
 * Description: Returns server statistics
 */
 
module.exports = {

  /* A list of the available commands in this module*/
  commands: [
    "owner",
  ],

  /* Command: Owner
   * Returns the owner of the server's name
   */
  "owner": {
    usage: "owner",
    description: "Gives the owner of the server",
    method: (client, message, argument) => {
      message.channel.send(`The server's owner is ${message.channel.guild.owner.user.username}.`);
    }
  },

}
