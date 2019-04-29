const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
	bot.user.setPresence({ game: { name: 'Aide Mewthree à gerer le serveur!', type: "streaming", url: "https://www.twitch.tv/kortexbot"}});
  console.log("Connecte")
});

bot.on("guildMemberAdd", member => {
 	member.guild.channels.find("id", "570851457016922122").send(`Bienvenue ${member.user.name} sur le serveur de la Kortex !`)
 });










bot.login(process.env.TOKEN)

