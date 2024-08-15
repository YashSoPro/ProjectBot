module.exports = {
    name: 'bug',
    description: 'Allows users to report bugs',
    execute(message, args) {
        const bugReport = args.join(' ');
        if (!bugReport) {
            return message.channel.send('Please provide a bug report.');
        }

        // Replace 'YOUR_BUG_REPORT_CHANNEL_ID' with the ID of the channel where you want to send bug reports
        const channel = message.guild.channels.cache.get('YOUR_BUG_REPORT_CHANNEL_ID');
        if (channel) {
            channel.send(`New bug report from ${message.author.tag}: ${bugReport}`);
            message.channel.send('Your bug report has been sent.');
        } else {
            message.channel.send('Bug report channel not found.');
        }
    },
};
