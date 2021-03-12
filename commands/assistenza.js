const discord = require("discord.js")

module.exports = {
    name :'assistenza',
    description: 'chiama un membro dello staff',
    execute(message, args, client){
        const staffid = '794311767894261801';
        message.reply(`un membro dei <@&${staffid}> sarà subito da lei!`);
    }
}