const { client } = require('../index');

client.on("messageUpdate", async (message) => {
    if (message.author.bot) return;

    client.snipeEditMsgs.set(message.channel.id, message)
});
