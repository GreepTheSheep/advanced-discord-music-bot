const Discord = require('discord.js')
const ytdl = require('ytdl-core')

function play(guild, song, queue) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		console.log(`Queue ended in ${guild.name}`)
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log(`${song.title} ended in ${guild.name}`)
			if (serverQueue.loop == false) serverQueue.songs.shift();
			play(guild, serverQueue.songs[0], queue);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
}

module.exports = play
