module.exports = {
    commands: 'saprdd',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the TS3 SAPR Delivery Document',
    callback: (message, arguments, text) => {
      message.reply('https://docs.google.com/document/d/14lLQfE2vDhg_Kqrndq2jHb5kggSVF33OXwPRvJUu2yM/edit')
    },
  }