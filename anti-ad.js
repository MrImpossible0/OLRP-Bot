module.exports = (client) => {
    const isInvite = code => {
        guild.fetchInvites().then(invites => {
            console.log(invites)
        })
    }

    client.on('message', (message) => {
        const { guild, member, content } = message

        // discord.gg/23RTF8

        if (content.includes('discord.gg/')) {
            isInvite(guild, '')
        }
    })
}