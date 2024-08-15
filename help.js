module.exports = {
    name: 'help',
    description: 'Lists all available commands',
    execute(message) {
        message.channel.send('Available commands: !help, !movie [title], !search [query], !recent, !addwatchlist [title], !watchlist, !random, !suggestion [message], !bug [message]');
    },
};
