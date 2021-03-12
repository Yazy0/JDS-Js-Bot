const discord = require("discord.js")

module.exports = {
    name: 'github',
    description: 'my github profile',
    execute(message, args, client) {
        const embed = new discord.MessageEmbed()
        .setTitle("Profilo Github")
        .setThumbnail("https://cdn.discordapp.com/avatars/784064287207325706/9a64c070b4fa8d121b153068983a3877.png?size=256")
        .addField("Link","https://github.com/Yazydev")
        message.channel.send(embed);
    }
}
        