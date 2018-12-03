const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : Slayers');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: '.وِمعظٌمۂم ليّسً لۂ محًل منٌ ٱلٱعرٱبّ',
  
     url: 'https://m.twitch.tv/twitchpresents',
     state: `ٱبّدُأ بّنٌفُسًك,يّتُغّيّر ٱلكوِنٌ منٌ حًوِلك`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'فضولي 😕',
        large_image: `377480353259978752`,
        large_text: `خليك في نفسك😑` }

  }
    });
});


client.login(process.env.BOT_TOKEN);
