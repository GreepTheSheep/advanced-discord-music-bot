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
                        if (serverQueue.shuffle == true) {
                            if (serverQueue.loop == true) console.log(`${guild.name} - Shuffle actived, but loop actived: doing nothing.`)
                            else if (serverQueue.loop == false) {
                                let random = Math.floor(Math.random() * serverQueue.songs.length)
                                var newFirst = serverQueue.songs[random]
                                if (newFirst > -1) {
                                    serverQueue.songs.splice(newFirst, 1);
				    serverQueue.songs.unshift(newFirst)
				} else {
				    console.error(`Error while shuffling queue on ${guild.name} , ignoring...`)
                                }
                            }
                        }
                        play(guild, serverQueue.songs[0], queue);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
}

module.exports = play
