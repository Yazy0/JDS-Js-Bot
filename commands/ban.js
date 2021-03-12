const discord = require("discord.js");

module.exports = {
    name: 'ban',
    description: "Banna una persona dal server",
    execute(message, args, client) {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Non puoi usarlo')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Non ho il permesso di farlo.')
        if(!args[0]) return message.channel.send('Specifica un utente');

        const member = message.mentions.members.first();
        let motivo = args.slice(1).join(" ");

        if(!motivo) motivo = 'Non specificato';

        if(member) {
            member.ban({reason: motivo}).then(() => {
                const embed = new discord.MessageEmbed()
                .setTitle("JDS-Bot | Ban")
                .setTimestamp()
                .setThumbnail(member.user.displayAvatarURL())
                .addField('Membro Bannato', `<@${member.id}>`)
                .addField('Motivo', motivo)
                .setFooter('Ban', client.user.displayAvatarURL())

                message.channel.send(embed);
            }).catch(err => {
                if(err) return console.log(err);
            })
        } else {
            message.reply("questo utente non è nel server!");
        }
    }
}
