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
     state: `ٱبّحًثً فُيّ عيّوِبّك وِٱتُرك عيّوِبّ ٱلنٌٱسً💔`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: ' 💞',
        large_image: `517390013714137098`,
        large_text: `سًيّحًبّك ٱلنٌٱسً يّوِمٱ مٱ` }

  }
    });
});


client.login(process.env.BOT_TOKEN);
