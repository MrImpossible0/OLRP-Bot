module.exports = {
    commands: 'rp',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the OLRP Retirement Policy',
    callback: (message, arguments, text) => {
      message.reply('https://docs.google.com/document/d/1kxbKtWwGICtkOV5lDgQGRGQpUAeFK5O4xAK88jhKCkg/edit?usp=sharing')
    },
  }