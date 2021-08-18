const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "___Vite Primum Help___",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/avatars/758785943426564187/0d2e89ab452cb53f5cb7eaf14295470b.png?size=2048`)
    .setAuthor(`Vite Primum Bot`, `https://media.discordapp.net/attachments/844858412969230376/877331773690900480/image0.png`)
    .setDescription(`

___User Commands___
\`${PREFIX}invite\` - \`${PREFIX}support\` - \`${PREFIX}about\`
\`${PREFIX}ping\` - \`${PREFIX}prefix\` - \`${PREFIX}uptime\`
\`${PREFIX}avatar\` - \`${PREFIX}se\` - \`${PREFIX}invites\`


___Music Commands___
\`${PREFIX}play\` - \`${PREFIX}skip\` - \`${PREFIX}skipto\`
\`${PREFIX}stop\` - \`${PREFIX}volume\` - \`${PREFIX}nowplaying\`
\`${PREFIX}shuffle\` - \`${PREFIX}search\` - \`${PREFIX}resume\`
\`${PREFIX}remove\` - \`${PREFIX}queue\` - \`${PREFIX}filter\`
\`${PREFIX}loop\` - \`${PREFIX}lyrics\` - \`${PREFIX}radio\`


___Modration Commands___
\`${PREFIX}lock\` - \`${PREFIX}unlock\` - \`${PREFIX}ban\`
\`${PREFIX}unban\` - \`${PREFIX}slowmode\` - \`${PREFIX}giveaway\`

___Links___
[support](https://discord.gg/XjFRdjuvUC)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=848190280595013672&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#00bde7");
   message.react("<a:emoji_43:877689301025054801>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
