const { randomIntFromInterval } = require('../utils/math-utils');

const generateFeedBack = percentage => {
	switch(true) {
	case percentage >= 1 && percentage < 25:
		return 'Don\'t even try!';
	case percentage >= 25 && percentage < 50:
		return 'You could do better!';
	case percentage >= 50 && percentage < 75:
		return 'Pretty good!';
	case percentage >= 75 && percentage <= 100:
		return 'Tap \'em and cuff \'em';
	}
};

module.exports = {
	name: 'lovecalc',
	aliases: ['love'],
	guildOnly: true,
	args: true,
	cooldown: 5,
	usage: '<first person> <second person>',
	description: 'Checks love compatibility between 2 people',
	execute(message, args) {
		const random = randomIntFromInterval(0, 100);
		const feedback = generateFeedBack(random);
		message.channel.send(`**${args[0]}** x **${args[1]}**? Compatibility is at **${random}%** :hearts: \n**${feedback}**`);
	},
};