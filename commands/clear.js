const discord = require("discord.js");

module.exports = {
    name : 'clear',
    description : 'Cancella i mess!',
    async execute(message, args, client){
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Non puoi usarlo')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('Non ho il permesso di farlo.')
        
        if (!args[0]) return message.reply("Per favore inserisci il numero di messagi che vuoi eliminare");
        if(isNaN(args[0])) return message.reply("Per favore inserisci un vero numero")

        if(args[0] > 100) return message.reply("Non puoi cancellare più di 100 messagi")
        if(args[0] < 1) return message.reply("Devi cancellare almeno un messagio!")
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);

        
        });
    }
}