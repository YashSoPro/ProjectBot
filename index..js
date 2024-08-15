const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '!';

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        message.channel.send('Available commands: !help, !movie [title], !search [query], !recent, !addwatchlist [title], !watchlist, !random, !suggestion [message], !bug [message]');
    } else if (command === 'movie') {
        // Implement movie info retrieval here
    } else if (command === 'search') {
        // Implement movie search here
    } else if (command === 'recent') {
        // Implement recently watched movies here
    } else if (command === 'addwatchlist') {
        // Implement add to watchlist here
    } else if (command === 'watchlist') {
        // Implement display watchlist here
    } else if (command === 'random') {
        // Implement random movie suggestion here
    } else if (command === 'suggestion') {
        const suggestion = args.join(' ');
        message.channel.send(`Suggestion received: ${suggestion}`);
    } else if (command === 'bug') {
        const bug = args.join(' ');
        message.channel.send(`Bug report received: ${bug}`);
    }
});

client.login('YOUR_BOT_TOKEN_HERE');
