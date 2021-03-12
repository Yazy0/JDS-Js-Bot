const discord = require("discord.js")

module.exports = {
    name: 'help',
    description: 'lista di tutti i comandi',
    execute(message, args, client ) {
        embed = new discord.MessageEmbed()
        .setTitle('Comandi')
        .setThumbnail('https://cdn.discordapp.com/avatars/784064287207325706/9a64c070b4fa8d121b153068983a3877.png')
        .addField('Moderazione','.ban .kick .unban')
        .addField('Varie','.help  .clear .youtube .github' )
        message.channel.send(embed);
    }
}