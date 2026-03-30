<div align="center">

<img src="https://img.shields.io/badge/-Discord%20Bot-5865F2?style=for-the-badge&logo=discord&logoColor=white" />

# 🤖 Chatoboto

**Bot de Discord inteligente alimentado pela API do Claude (Anthropic)**  
Conversas naturais, memória por canal, e respostas que fazem sentido.

---

![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js&logoColor=white)
![discord.js](https://img.shields.io/badge/discord.js-v14-5865F2?style=flat-square&logo=discord&logoColor=white)
![Anthropic](https://img.shields.io/badge/Claude-Sonnet-D97706?style=flat-square&logo=anthropic&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-57F287?style=flat-square)

</div>

---

## ✨ Funcionalidades

| Feature | Descrição |
|---|---|
| 🧠 **IA Contextual** | Memória de conversa por canal com histórico rolante de 20 mensagens |
| ⚡ **Resposta Rápida** | Indicador "digitando..." enquanto o Claude processa |
| 💬 **Menção Direta** | Responde somente quando mencionado — sem spam no servidor |
| 📄 **Mensagens Longas** | Divide automaticamente respostas maiores que 2000 caracteres |

---

## 🛠️ Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| 🟢 Node.js | `v20+` | Runtime JavaScript |
| 🔵 discord.js | `v14` | Wrapper da API do Discord |
| 🤖 Anthropic SDK | `latest` | Integração com Claude |
| 🔐 dotenv | `v16` | Variáveis de ambiente |

---

## 🚀 Como Rodar

### 1. Clone e instale as dependências

```bash
git clone https://github.com/pedrobarbosa18/Chat-Bot--Discord
cd Chat-Bot--Discord
npm install
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DISCORD_TOKEN=seu_token_aqui
ANTHROPIC_API_KEY=sk-ant-...
```

> ⚠️ **Nunca suba o `.env` para o Git.** Adicione-o ao `.gitignore`.

### 3. Ative o Message Content Intent

No [Discord Developer Portal](https://discord.com/developers/applications):  
**Bot → Privileged Gateway Intents → ✅ MESSAGE CONTENT INTENT**

### 4. Inicie o bot

```bash
node src/index.js
```

> ✅ Você verá `Bot online como Chatoboto#0000` no terminal.

---

## 💡 Como Usar

Mencione o bot em qualquer canal do servidor:

```
# O bot responde quando mencionado
@Chatoboto Olá! Quem foi Alan Turing?

# O bot mantém contexto da conversa
@Chatoboto E qual foi sua contribuição para a computação?
```

---

## 📁 Estrutura do Projeto

```
discord-bot/
├── src/
│   ├── index.js          # Entry point
│   ├── client.js         # Configuração do Discord client
│   └── handlers/
│       ├── message.js    # Lida com mensagens recebidas
│       └── ai.js         # Integração com a API do Claude
├── .env                  # Variáveis de ambiente (não comitar!)
├── .gitignore
└── package.json
```

---

## 🔑 Onde obter os tokens

**Discord Token:**
1. Acesse [discord.com/developers/applications](https://discord.com/developers/applications)
2. Crie uma Application → **Bot** → **Reset Token**
3. Ative o **Message Content Intent**

**Anthropic API Key:**
1. Acesse [console.anthropic.com](https://console.anthropic.com)
2. **API Keys** → **Create Key**

---

<div align="center">

Feito com 💜 · Powered by [discord.js](https://discord.js.org) & [Anthropic Claude](https://anthropic.com)

</div>
