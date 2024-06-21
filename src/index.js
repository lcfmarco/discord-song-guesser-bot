require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
// Client = our bot - need to initialize a new client (it is a class)

const client = new Client({
  intents: [
    // Intents = a set of perms bot can use to access a set of events
    // Guild = server
    IntentsBitField.Flags.Guilds, // access to servers
    IntentsBitField.Flags.GuildMembers, // access to members
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent, // Find more guilds on discord docs
  ]
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
}); // Listens when our bot is ready

client.on('messageCreate', (message) => {
  // Checks if the message author is bot or not - if it is then just return
  if (message.author.bot) {
    return;
  }
  if (message.content === 'hello') {
    message.reply('Hey!');
  }
});

// Need to pass in token : bot password
client.login(process.env.TOKEN);





