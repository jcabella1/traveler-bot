module.exports = {
    name: 'choose',
    description: '',
    aliases: ['c'],
    execute: async(message, args) => {
        // Split args by commas and rejoin them into an array
        const choices = args.join(" ").trim(" ").split(",");

        let finalChoice = choices[Math.floor(Math.random()*choices.length)];
        return message.channel.send(finalChoice).catch(console.error);
    }
}