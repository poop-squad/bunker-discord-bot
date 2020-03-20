const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
	name: 'covid19',
	aliases: ['corona'],
	guildOnly: true,
	cooldown: 5,
	usage: '<country> (OPTIONAL arg, will return stats for specific country, other wise will return global stats)',
	description: 'Returns statistics related to COVID19',
	execute(message, args) {
		if (!args.length) {
			axios.get('https://corona.lmao.ninja/all')
				.then((response) => {
					const exampleEmbed = new Discord.MessageEmbed()
						.setColor('#E2C16B')
						.setTitle('COVID19 statistics worldwide')
						.setDescription('Confirmed cases, deaths, and recovered worldwide')
						.addFields(
							{ name: 'Confirmed cases', value: response.data.cases },
							{ name: 'Total deaths', value: response.data.deaths },
							{ name: 'Total recovered', value: response.data.recovered },
						)
						.setTimestamp();

					message.channel.send(exampleEmbed);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		else {
			axios.get(`https://corona.lmao.ninja/countries/${args[0]}`)
				.then((response) => {
					const exampleEmbed = new Discord.MessageEmbed()
						.setColor('#E2C16B')
						.setTitle(`COVID19 statistics for ${args[0]}`)
						.addFields(
							{ name: 'Country', value: response.data.country },
							{ name: 'Confirmed cases', value: response.data.cases, inline: true },
							{ name: 'Cases today', value: response.data.todayCases, inline: true },
							{ name: 'Cases per 1 million', value: response.data.casesPerOneMillion, inline: true },
							{ name: 'Total deaths', value: response.data.deaths, inline: true },
							{ name: 'Deaths today', value: response.data.todayDeaths, inline: true },
							{ name: '\u200B', value: '\u200B', inline: true },
							{ name: 'Total recovered', value: response.data.recovered, inline: true },
							{ name: 'Total active cases', value: response.data.active, inline: true },
							{ name: 'Total critical cases', value: response.data.critical, inline: true },
						)
						.setTimestamp();

					message.channel.send(exampleEmbed);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	},
};