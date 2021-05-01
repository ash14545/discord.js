const { client } = require('../index');
const { prefix } = require('../config.json');

client.on("guildDelete", async guild => {
    console.log();
    console.log(client.user.tag);
    console.log(`Kicked from guild: ${guild.name}`);
    console.log();
});
