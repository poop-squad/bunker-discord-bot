const { randomIntFromInterval } = require('../utils/math-utils');
const palettes = require('nice-color-palettes/1000');
const Canvas = require('canvas');


module.exports = {
	name: 'palette',
	aliases: ['colors'],
	guildOnly: true,
	cooldown: 5,
	description: 'generates a color palette',
	execute(message) {
		const randomNum = randomIntFromInterval(0, 1000);
		const paletteHex = palettes[randomNum];
		const canvas = Canvas.createCanvas(750, 185);
		const ctx = canvas.getContext('2d');

		let increment = 0;
		for (let i = 0; i < 750; i += 150) {
			ctx.fillStyle = paletteHex[increment];
			ctx.fillRect(i, 0, 150, 185);
			++increment;
		}

		const fileOpts = {
			attachment: canvas.toBuffer(),
		};

		message.channel.send({ files:[fileOpts] }).catch(console.error);
	},
};