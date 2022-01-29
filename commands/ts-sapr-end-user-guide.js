module.exports = {
    commands: 'sapreug',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the TS3 SAPR End User Guide!',
    callback: (message, arguments, text) => {
      message.reply('https://docs.google.com/presentation/d/16mHIkPljoJQvqcRKR8fEYNkhb6WtjM7BRRCqi5EGcDU/edit?usp=sharing')
    },
  }