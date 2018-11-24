const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
console.log('By : m7md');
client.user.setGame("Hello", "https://www.twitch.tv/M3roof");    


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
