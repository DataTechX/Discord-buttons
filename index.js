
/**
 * Npm Package
 * 1. $ npm i discord-buttons
 * 2. $ npm install discord-buttons
 * 
 * Setup
 * 1. config
 * 2. edit token and prefix
 * 
 * Editor Messages
 * Indulgent
 */



const discord = require('discord.js'); ////////////ขี้เกียจอธิบาย
const fs = require('fs'); ////////////ขี้เกียจอธิบาย
const client = new discord.Client(); ////////////ขี้เกียจอธิบาย

require('discord-buttons')(client) ////////////ขี้เกียจอธิบาย


client.config = require('./config/fix'); ////////////ขี้เกียจอธิบาย
client.commands = new discord.Collection(); ////////////ขี้เกียจอธิบาย
const { MessageButton } = require("discord-buttons"); ////////////ขี้เกียจอธิบาย

client.on('ready', () => { ////////////ขี้เกียจอธิบาย
    console.log(`Logged in as ${client.user.tag}!`); ////////////ขี้เกียจอธิบาย
});

client.on('clickButton', async (button) => {////////////ขี้เกียจอธิบาย
    if (button.id === 'dumbass') { ////////////ขี้เกียจอธิบาย
        button.defer()////////////ขี้เกียจอธิบาย
      button.channel.send(` :x: ${button.clicker.user.tag} คุณไม่ได้ทำการเลือก`); ////////////ขี้เกียจอธิบาย
    }

    if(button.id === 'smart') { ////////////ขี้เกียจอธิบาย
        button.defer()////////////ขี้เกียจอธิบาย

        const embed = new discord.MessageEmbed()
        .setTitle("<MESSAGE>") ////////////ขี้เกียจอธิบาย
        .setDescription("<MESSAGE>") ////////////ขี้เกียจอธิบาย
        .setColor("RANDOM") ////////////ขี้เกียจอธิบาย

        const sub = new MessageButton()
        .setStyle("url") ////////////ขี้เกียจอธิบาย
        .setLabel("Subcribe") ////////////ขี้เกียจอธิบาย
        .setURL("https://www.youtube.com/sasstudio") ////////////ขี้เกียจอธิบาย

        button.message.edit({button: sub, embed: embed})////////////ขี้เกียจอธิบาย
    }
  });


fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js')); ////////////ขี้เกียจอธิบาย

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`); ////////////ขี้เกียจอธิบาย
        console.log(`${commands}`) ////////////ขี้เกียจอธิบาย
        client.commands.set(command.name.toLowerCase(), command); ////////////ขี้เกียจอธิบาย
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js')); ////////////ขี้เกียจอธิบาย


for (const file of events) {
    const event = require(`./events/${file}`); ////////////ขี้เกียจอธิบาย
    console.log(`${events}`) ////////////ขี้เกียจอธิบาย
    client.on(file.split(".")[0], event.bind(null, client));////////////ขี้เกียจอธิบาย
};


client.login(client.config.discord.token); ////////////ขี้เกียจอธิบาย