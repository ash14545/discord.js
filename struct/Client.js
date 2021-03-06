const { Client, Collection } = require('discord.js');

module.exports = class extends Client {
    constructor(config) {
        super({
            disableMentions: "everyone"
        });

        this.developer = {
            id: '109838176574509056'
        }

        this.prefix = new Collection();

        this.commands = new Collection();

        this.cooldowns = new Collection();

        this.queue = new Map();

        this.config = config;

        this.snipeDelMsgs = new Collection();
        this.snipeEditMsgs = new Collection();
        this.snipeAttMsgs = new Collection();
    }
}