const discord = require("discord.js");

module.exports = {
    name: 'kick',
    description: "Espelle una persona dal server",
    execute(message, args, client) {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Non puoi usarlo')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('Non ho il permesso di farlo.')
        if(!args[0]) return message.channel.send('Specifica un utente');

        const member = message.mentions.members.first();
        let motivo = args.slice(1).join(" ");

        if(!motivo) motivo = 'Non specificato';

        if(member) {
            member.kick(motivo).then(() => {
                const embed = new discord.MessageEmbed()
                .setTitle("JDS-Bot  | Espulsione")
                .setTimestamp()
                .setThumbnail(member.user.displayAvatarURL())
                .addField('Membro Espulso', `<@${member.id}>`)
                .addField('Motivo', motivo)
                .setFooter('Espulsione', client.user.displayAvatarURL())

                message.channel.send(embed);
            }).catch(err => {
                if(err) return message.channel.send('Errore');
            })
        } else {
            message.reply("questo utente non è nel server!");
        }
    }
}
