const discord = require("discord.js")

module.exports = {
	name : "unban",
	description: 'Sbanna le persone',
	execute(message, args, client){
		if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Non puoi usarlo')
		if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('Non ho il permesso di farlo.')
		if(!args[0]) return message.channel.send('Specifica un utente');

		message.guild.members.unban(args[0])

		embed = new discord.MessageEmbed()
		.setTitle("JDS-Bot | Sban")
		.addField('Unban','Membro Sbannato',)

		message.channel.send(embed);

	}
}
