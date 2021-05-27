const discord = require("discord.js"); //โมดูลหลัก npm install discord.js
const { MessageButton } = require('discord-buttons'); //โมดูลรอง npm install discord-buttons

const execute = (client, message, args) => { 

    const embed = new discord.MessageEmbed()
    .setTitle("<MESSAGE>") ////////////ขี้เกียจอธิบาย
    .setColor("GREEN") ////////////ขี้เกียจอธิบาย

    const yes = new MessageButton()
    .setStyle("green") ////////////ขี้เกียจอธิบาย
    .setLabel("Yes") ////////////ขี้เกียจอธิบาย
    .setID("smart") ////////////ขี้เกียจอธิบาย
 
    const no = new MessageButton() 
    .setStyle("red") ////////////ขี้เกียจอธิบาย
    .setLabel("No") ////////////ขี้เกียจอธิบาย
    .setID('dumbass') ////////////ขี้เกียจอธิบาย
  
    message.channel.send({
        buttons: [yes, no], ////////////ขี้เกียจอธิบาย
        embed: embed ////////////ขี้เกียจอธิบาย
    })
    console.log(no) ////////////ขี้เกียจอธิบาย
    console.log(yes) ////////////ขี้เกียจอธิบาย
    console.error() ////////////ขี้เกียจอธิบาย
}

module.exports = {
    name: 'buttons',
    execute,
};