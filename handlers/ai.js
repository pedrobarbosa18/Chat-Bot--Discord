import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Mantém histórico por canal
const conversationHistory = new Map();

export async function getAIResponse(channelId, userMessage) {
  if (!conversationHistory.has(channelId)) {
    conversationHistory.set(channelId, []);
  }

  const history = conversationHistory.get(channelId);

  history.push({ role: 'user', content: userMessage });

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: 'Você é um assistente útil em um servidor do Discord. Seja conciso e amigável.',
    messages: history,
  });

  const assistantMessage = response.content[0].text;

  history.push({ role: 'assistant', content: assistantMessage });

  // Limita histórico a 20 mensagens para não explodir o contexto
  if (history.length > 20) history.splice(0, 2);

  return assistantMessage;
}