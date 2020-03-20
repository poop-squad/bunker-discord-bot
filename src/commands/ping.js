module.exports = {
	name: 'ping',
	aliases: ['angelo', 'test'],
	cooldown: 5,
	description: 'Ping!',
	guildOnly: true,
	execute(message) {
		message.channel.send('Pong.');
	},
};