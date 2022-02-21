require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.commands = new Discord.Collection();

const prefix = "+";

// Load the command files on startup
const commandFiles = fs.readdirSync('./commands');
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.login(process.env.BOT_TOKEN)
client.on('ready', () => {
    console.log('starting a new journey...');
  })
client.on('error', console.error);


client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
  
    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(message, args, Discord);
    } catch (error) {
      console.error(error);
      message.reply('There was an error trying to execute that command!');
    }
  })
  