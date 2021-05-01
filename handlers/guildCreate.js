const { client } = require('../index');
const { prefix } = require('../config.json');

client.on("guildCreate", async guild => {
    getFirstChannel = guild.channels.cache.filter(channel => channel.type == 'text').find(x => x.position == 0);

    let invite = await getFirstChannel.createInvite({
        maxUses: 1,
        maxAge: 0
    }).catch(console.log)

    console.log();
    console.log(client.user.tag);
    console.log(`Joined guild: ${guild.name}`);
    console.log(`Guild invite: ${invite ? invite : 'Unable to create invite...'}`)
    console.log();

    try {
        getFirstChannel.send(`
> Hey! I'm **${client.user.username}**, a multi-purpose discord bot.
            
To get started, send \`${prefix}help\`. All commands are run using the \`${prefix}\` prefix.
                            
This bot is developed using **node.js**. If you have any requests/suggestions, feel free to tag me with your suggestion.

**Important Mentions**
    Bot developer - <@${client.developer.id}>
`);
    } catch (e) {
        console.log(e)
    }
});
