module.exports = {
	name: 'ping',
	cooldown: 5,
	description: 'Ping!',
	guildOnly: true,
	execute(message) {
		message.channel.send('Pong.');
	},
};