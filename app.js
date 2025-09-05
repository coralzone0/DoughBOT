// app.js
import 'dotenv/config';
import express from 'express';
import {
  InteractionType,
  InteractionResponseType,
  verifyKeyMiddleware,
} from 'discord-interactions';
import { getDoughPhrase } from './commands.js';

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to verify Discord requests
app.post(
  '/interactions',
  verifyKeyMiddleware(process.env.CLIENT_PUBLIC_KEY),
  async (req, res) => {
    const { type, data } = req.body;

    // Discord PING verification
    if (type === InteractionType.PING) {
      return res.send({ type: InteractionResponseType.PONG });
    }

    // Slash command handling
    if (type === InteractionType.APPLICATION_COMMAND) {
      const { name } = data;

      if (name === 'dough') {
        const randomPhrase = getDoughPhrase();
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: { content: randomPhrase },
        });
      }

      console.error(`Unknown command: ${name}`);
      return res.status(400).json({ error: 'Unknown command' });
    }

    console.error('Unknown interaction type', type);
    return res.status(400).json({ error: 'Unknown interaction type' });
  }
);

// Start server
app.listen(PORT, () => {
  console.log(`DoughBOT listening on port ${PORT}`);
});
