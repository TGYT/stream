const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setGame(argresult, "https://www.twitch.tv/M3roof");
  client.user.setPresence({
  game: { 
     type: 0,
     name: 'Fu*king Girls.',
     url: 'http://twitch.tv/M7md_Salih',
     state: `Fu*king Girls.`,
    application_id: '377479790195769345',
     assets: {
        small_image: `515880221216342018`,
        small_text: 'Get Out If Here.',
        large_image: `515879640905154561`,
        large_text: `Hot.` }

  }
    });
});




client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
