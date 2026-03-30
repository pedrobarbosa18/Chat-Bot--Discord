import { getAIResponse } from './ai.js';

export async function handleMessage(message) {
  if (message.author.bot) return;

  // Bot responde quando mencionado ou em canal específico
  const isMentioned = message.mentions.has(message.client.user);
  if (!isMentioned) return;

  const userText = message.content
    .replace(`<@${message.client.user.id}>`, '')
    .trim();

  if (!userText) return message.reply('Me diz algo! 😄');

  await message.channel.sendTyping(); // mostra "digitando..."

  try {
    const reply = await getAIResponse(message.channel.id, userText);

    // Discord tem limite de 2000 chars por mensagem
    if (reply.length > 2000) {
      const chunks = reply.match(/.{1,2000}/gs);
      for (const chunk of chunks) await message.channel.send(chunk);
    } else {
      await message.reply(reply);
    }
  } catch (err) {
    console.error(err);
    message.reply('Ocorreu um erro ao processar sua mensagem.');
  }
}