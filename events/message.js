module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return; ////////////ขี้เกียจอธิบาย

    const prefix = client.config.discord.prefix; ////////////ขี้เกียจอธิบาย

    if (message.content.indexOf(prefix) !== 0) return; ////////////ขี้เกียจอธิบาย

    const args = message.content.slice(prefix.length).trim().split(/ +/g); ////////////ขี้เกียจอธิบาย
    const command = args.shift().toLowerCase(); ////////////ขี้เกียจอธิบาย

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command)); ////////////ขี้เกียจอธิบาย

    if (cmd) cmd.execute(client, message, args); ////////////ขี้เกียจอธิบาย
}; 

