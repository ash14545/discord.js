const { client } = require('../index');
const { prefix, rainbowRoleId } = require('../config.json');

client.on("ready", async () => {
    console.log(client.user.tag, 'is now online');
    prefix ? console.log(`Prefix: ${prefix}`) : console.log()

    //rainbow role
    if (rainbowRoleId == null) return;
    if (!client.guilds.cache.get(guild).me.hasPermission('MANAGE_ROLES')) return console.log(`
I'm not powerful enough to edit ${rainbowRole.name} in ${client.guilds.cache.get(guild).name}.
Missing Permission: MANAGE_ROLES
`);

    const rainbowRole = client.guilds.cache.get(guild).roles.cache.find(r => r.id === role);
    if (!rainbowRole) return console.log(`
\`${role}\` doesn't seem to be a valid role in ${client.guilds.cache.get(guild).name}.
`);
    if (rainbowRole.position >= client.guilds.cache.get(guild).members.cache.get(client.user.id).roles.highest.position) return console.log(`
I'm not powerful enough to edit ${rainbowRole.name} in ${client.guilds.cache.get(guild).name}.
`);

    function clientRainbow(rainbowRole) {
        let random = "#" + ((Math.random() * 0xffffff) << 0).toString(16);

        rainbowRole.edit({ color: random }).catch(e => {
            console.log(e);
        });
    }

    let rainbow = setInterval(() => {
        clientRainbow(rainbowRole);
    }, 90000);

    console.log(`Starting rainbow role on ${rainbowRole.name}`)
    console.log()
});