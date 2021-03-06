module.exports = {
  commands: ['check', 'checkrole', 'checkroles'],
  minArgs: 2,
  expectedArgs: "<Target user's @> <The role name>",
  permissions: 'MANAGE_MESSAGES',
  callback: (message, arguments) => {
    const targetUser = message.mentions.users.first()
    if (!targetUser) {
      message.reply('Please specify someone to check.')
      return
    }

    arguments.shift()

    const roleName = arguments.join(' ')
    const { guild } = message

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName
    })
    if (!role) {
      message.reply(`There is no role with the name "${roleName}"`)
      return
    }

    const member = guild.members.cache.get(targetUser.id)

    if (member.roles.cache.get(role.id)) {
      message.reply(`That user has the "${roleName}" role`)
    } else {
      message.reply(`That user does not have the "${roleName}" role`)
    }
  },
}
