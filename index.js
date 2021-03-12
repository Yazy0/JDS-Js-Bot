const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix } = require('./config.json');
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () =>{
   console.log(`${client.user.tag} is online.`);
   client.user.setActivity(".help");
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Moderazione
    if(command === 'kick'){
        client.commands.get('kick').execute(message, args, client);
    }
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args, client);
    }
     if(command ==='unban'){
            client.commands.get('unban').execute(message, args, client);
    }
    // Comandi vari
    if(command === 'help'){
        client.commands.get('help').execute(message, args, client);
    }
    if(command ==='clear'){
        client.commands.get('clear').execute(message, args, client);
    }
    if(command ==='assistenza'){
        client.commands.get('assistenza').execute(message, args, client);
    }
    if(command ==='github'){
        client.commands.get('github').execute(message, args, client);
    }
    if(command ==='youtube'){
        client.commands.get('youtube').execute(message, args, client);
    }
    if(command ===''){
        client.commands.get('').execute(message, args, client);
    }
});
client.login(token);
