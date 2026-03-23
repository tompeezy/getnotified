import { NextRequest, NextResponse } from 'next/server';

const BOT_TOKEN = '8751451365:AAHwkyNNM44co3CjdNeJoj6EtXPQfr66k04';
const CHAT_ID = 7015765248;
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

async function sendTelegramMessage(text: string): Promise<void> {
  const res = await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: `🎙️ [JARVIS Voice]: ${text}`,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Telegram send failed: ${err}`);
  }
}

async function getLastUpdateId(): Promise<number> {
  const res = await fetch(`${TELEGRAM_API}/getUpdates?limit=1&offset=-1`);
  const data = await res.json();
  if (data.result && data.result.length > 0) {
    return data.result[data.result.length - 1].update_id;
  }
  return 0;
}

async function pollForReply(afterUpdateId: number, timeoutMs: number): Promise<string | null> {
  const deadline = Date.now() + timeoutMs;
  let offset = afterUpdateId + 1;

  while (Date.now() < deadline) {
    const remaining = deadline - Date.now();
    const waitSeconds = Math.min(Math.floor(remaining / 1000), 25);
    if (waitSeconds <= 0) break;

    const res = await fetch(
      `${TELEGRAM_API}/getUpdates?offset=${offset}&timeout=${waitSeconds}&limit=10`,
      { signal: AbortSignal.timeout(remaining + 2000) }
    );

    if (!res.ok) {
      await new Promise(r => setTimeout(r, 1000));
      continue;
    }

    const data = await res.json();
    if (!data.result || data.result.length === 0) continue;

    for (const update of data.result) {
      offset = update.update_id + 1;
      const msg = update.message || update.channel_post;
      if (!msg) continue;

      const fromId = msg.chat?.id || msg.from?.id;
      if (String(fromId) !== String(CHAT_ID)) continue;

      // Skip messages that look like the forwarded voice message
      const text = msg.text || msg.caption || '';
      if (text.startsWith('🎙️ [JARVIS Voice]:')) continue;

      if (text) return text;
    }
  }

  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    // Get current update ID before sending
    const lastUpdateId = await getLastUpdateId();

    // Send message to Telegram
    await sendTelegramMessage(message);

    // Poll for reply (up to 30 seconds)
    const reply = await pollForReply(lastUpdateId, 30000);

    if (reply) {
      return NextResponse.json({ reply });
    } else {
      return NextResponse.json({
        reply: "I didn't receive a response in time. Please try again.",
      });
    }
  } catch (err: unknown) {
    console.error('Jarvis API error:', err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Internal server error', details: message },
      { status: 500 }
    );
  }
}
