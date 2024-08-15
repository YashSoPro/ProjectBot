module.exports = {
    name: 'suggestion',
    description: 'Allows users to submit suggestions',
    execute(message, args) {
        const suggestion = args.join(' ');
        if (!suggestion) {
            return message.channel.send('Please provide a suggestion.');
        }

        // Replace 'YOUR_SUGGESTIONS_CHANNEL_ID' with the ID of the channel where you want to send suggestions
        const channel = message.guild.channels.cache.get('YOUR_SUGGESTIONS_CHANNEL_ID');
        if (channel) {
            channel.send(`New suggestion from ${message.author.tag}: ${suggestion}`);
            message.channel.send('Your suggestion has been sent.');
        } else {
            message.channel.send('Suggestions channel not found.');
        }
    },
};
