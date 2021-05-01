const { Collection } = require('discord.js');
const DiscordClient = require("./struct/Client.js");
const client = new DiscordClient();
const { token } = require('./config')

require('./functions')(client);

client.commands = new Collection();
client.aliases = new Collection();

client.login(token);

module.exports = {
    client: client
};
