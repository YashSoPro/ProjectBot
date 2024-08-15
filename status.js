const axios = require('axios');

module.exports = {
    name: 'status',
    description: 'Checks if the ProjectAd website is up or down',
    async execute(message) {
        const url = 'https://yashsopro.github.io/projectAd/';

        try {
            const response = await axios.get(url);
            if (response.status === 200) {
                message.channel.send(`The website ${url} is up and running.`);
            } else {
                message.channel.send(`The website ${url} returned status code ${response.status}.`);
            }
        } catch (error) {
            message.channel.send(`The website ${url} is down or unreachable. Error: ${error.message}`);
        }
    },
};
