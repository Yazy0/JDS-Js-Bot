const discord = require("discord.js");

module.exports = {
    name: 'youtube',
    description: "il mio canale youtube",
    execute(message, args, client) {
        const embed = new discord.MessageEmbed()
        .setTitle("Canale Youtube")
        .setThumbnail("https://cdn.discordapp.com/avatars/784064287207325706/9a64c070b4fa8d121b153068983a3877.png?size=256")
        .addField("Link","https://bit.ly/3l5gu9o")
        message.channel.send(embed);
    }
}