module.exports = {
    name: 'addwatchlist',
    description: 'Adds a movie to the watchlist',
    execute(message, args) {
        const movieTitle = args.join(' ');
        // Implement adding to watchlist here
        message.channel.send(`Added "${movieTitle}" to your watchlist.`);
    },
};
