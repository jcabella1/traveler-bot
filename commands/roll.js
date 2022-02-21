const DiceRoller = require('rpg-dice-roller');

module.exports = {
    name: 'roll',
    description: 'Roll a dice using standard dice notation.',
    aliases: ['r'],
    usage:'[dice-notation]',
    args: false,
    execute: async(message, args) => {
        // New instance of DiceRoller
        let d = new DiceRoller.DiceRoller();
        let input = args[0] ? args[0] : '1d6';   // Defaults to 6-sided dice if no arguments given

        d.roll(input);
        let result = d.log.shift(); // Retrieve the last dice rolls from the log
        let msg = `${message.author} rolled ${result.toString()}`;

        return message.channel.send(msg).catch(console.error);
    }
}