const { Client } = require('discord-rpc');
const clientids = require('../clientIds.json');

const rpc = new Client({
    transport: "ipc"
});

module.exports = class cc {
    constructor() {
        rpc.on('ready', () => {
            rpc.setActivity({
                details: "Tp if you need me!",
                startTimestamp: new Date(),
                largeImageKey: "cc",
                largeIconText: "what are you doing here?",
            });
            console.log(`\n RPC status: running. Authed for user: ${rpc.user.username}.`); 
        });
        rpc.login({
            clientId: clientids.CC.id
        })

    }
}