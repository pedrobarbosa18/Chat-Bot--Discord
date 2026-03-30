import 'dotenv/config';
import { client } from './client.js';
import { handleMessage } from './handlers/message.js';

client.once('ready', () => {
  console.log(`✅ Bot online como ${client.user.tag}`);
});

client.on('messageCreate', handleMessage);

client.login(process.env.DISCORD_TOKEN);