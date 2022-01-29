module.exports = {
    commands: 'rtogl',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the RTO Guidelines',
    callback: (message, arguments, text) => {
      message.reply('https://docs.google.com/document/d/1_GVHjNV3Pl3xi74D2pkA9CQtzLZZE2INclS_84WiqN0/edit?usp=sharing')
    },
  }