const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
	bot.user.setPresence({ game: { name: 'Fait des test', type: "streaming", url: "https://www.twitch.tv/kortexbot"}});
  console.log("Connecte")
});

bot.on("guildMemberAdd", member => {
 	member.guild.channels.find("id", "570851457016922122").send(`Bienvenue ${member.user.name} sur le serveur de la Kortex !`)
 });










bot.login('NTcxMzY0MjAwMjQ5Njg4MTAz.XMMq8g.mVY0S3mZg_TbyFIGCoLKr7XZPDM');

