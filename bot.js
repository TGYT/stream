const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.user.setPresence({
  status: 'online',
  game: { 
     type: 0,
     name: 'هاي يوتيوووب',
     details: `هاي يوتيوب`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `هاي يوتيوب`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'هاي يوتيوب',
        large_image: `377480353259978752`,
        large_text: `هاي يوتيوب` }

  }
    });
});

const developers = ["279221610408312834"]
const adminprefix = "$";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'play')) {
    client.user.setGame(argresult);
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'watching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'listen')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Status You  ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'stream')) {
    client.user.setPresence({
  status: 'online',
  game: { 
     type: 0,
     name: 'هاي يوتيوووب',
     details: `هاي يوتيوب`,
     url: 'https://m.twitch.tv/twitchpresents',
     state: `هاي يوتيوب`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'هاي يوتيوب',
        large_image: `377480353259978752`,
        large_text: `هاي يوتيوب` }

  }
    });
});
      message.channel.send(`**Status You ${argresult} **`)
}
});




client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
