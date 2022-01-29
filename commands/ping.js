module.exports = {
    commands: 'ping',
    minArgs: 0,
    maxArgs: 0,
    description: 'Just a simple Ping Pong command!',
    callback: (message, arguments, text) => {
      message.reply('Pong!')
    },
  }