const { client } = require('../index');

client.on("messageDelete", async message => {
    if (message.author.bot) return;

    if (message.attachments.map(a => a.proxyURL).length > 0) {
        let attArr = [];
        for (att of message.attachments.map(a => a.proxyURL)) {
            attArr.push(att);
        }

        client.snipeAttMsgs.set(message.channel.id, {
            attachmentURL: attArr,
            author: {
                id: message.author.id,
                displayAvatarURL: message.author.displayAvatarURL({ dynamic: true, size: 4096 }),
                tag: message.author.tag
            }
        });
    }
    else {
        client.snipeDelMsgs.set(message.channel.id, message);
    };
});
