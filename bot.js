const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const developers = ["279221610408312834"]
const adminprefix = "$";

client.user.setGame(".وِمعظٌمۂم ليّسً لۂ محًل منٌ ٱلٱعرٱبّ", "https://m.twitch.tv/twitchpresents");

client.login(process.env.BOT_TOKEN);
