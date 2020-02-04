const Discord = require('discord.js')
const ytdl = require('ytdl-core')

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function shucmd(message, client, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
    if (!serverQueue) return message.channel.send('There is no song that I could skip!');
    console.log(serverQueue.songs)
    var queueToShuffle = serverQueue.songs.splice(0,1)
    var queueShuffled = shuffle(queueToShuffle)
    var newQueue = serverQueue.songs.splice(1)
    serverQueue.songs = newQueue.concat(queueShuffled)
    console.log(newQueue.concat(queueShuffled))
    message.react('🔀')
}

module.exports = shucmd