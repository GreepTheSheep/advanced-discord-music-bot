const Discord = require('discord.js')

function cmds_index(message, client, prefix, serverQueue, queue){

    const play = require('./play.js')

    if (message.content.toLowerCase().startsWith(`${prefix}play`) || message.content.toLowerCase().startsWith(`${prefix}p`)) {
        const execute = require('./execute.js')
		execute(message, play, serverQueue, queue);
	} else if (message.content.toLowerCase() == `${prefix}skip`) {
        const skip = require('./skip.js')
		skip(message, serverQueue);
	} else if (message.content.toLowerCase() == `${prefix}stop` || message.content.toLowerCase() == `${prefix}leave`) {
        const stop = require('./stop.js')
		stop(message, serverQueue);
	} else if (message.content.toLowerCase() == `${prefix}queue` || message.content.toLowerCase() == `${prefix}q`) {
        const queue = require('./queue.js')
		queue(message, serverQueue);
	}else {
		message.react('✖')
	}
}

module.exports = cmds_index