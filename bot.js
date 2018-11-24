const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  game: { 
     type: 0,
     name: 'Fu*king Girls',
     details: `Still One To Fu*k`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `Fu*king Girls`,
    application_id: '279221610408312834',
     assets: {
        small_image: `512537205466726400`,
        small_text: 'Get Out Of Here.',
        large_image: `515879640905154560`,
        large_text: `Hot.` }

  }
    });
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
