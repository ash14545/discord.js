const { client } = require('../index');

client.on("messageUpdate", async (oldMessage, newMessage) => {
    if (message.author.bot) return;

    client.snipeEditMsgs.set(message.channel.id, message)
});
