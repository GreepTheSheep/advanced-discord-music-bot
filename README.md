# advanced-discord-music-bot
A complete script to use Youtube music with discord.js (only Youtube)

(script based on https://www.gabrieltanner.org/blog/dicord-music-bot )

[![DeepScan grade](https://deepscan.io/api/teams/6175/projects/9669/branches/128632/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=6175&pid=9669&bid=128632)

## Installation
- Clone this repo
- invite your bot with OAuth pannel in discordapp.com/developers
- Install FFMPEG [(Windows)](https://ffmpeg.zeranoe.com/builds/) (Linux: `apt install ffmpeg`)
- open a terminal and execute `npm install`, then follow instructions
(if setup will not start, start it manually with `node installation`)
- start with `npm start`, or `pm2 start index.js` (if you have pm2 installed, else install it with `npm i -g pm2`)
- here we go, free music :)

## Commands

- `play <Youtube URL>` - `playnow <Youtube URL>`
- `skip`
- `stop`
- `nowplaying` - `queue`

And that's it!

(You can test it on my server here: https://discord.gg/Nzherng. prefix: `m!`)
