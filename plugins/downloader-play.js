import axios from "axios";
import yts from "yt-search";
import fs from "fs";
import path from "path";
import ffmpeg from "fluent-ffmpeg";
import { promisify } from "util";
import { pipeline } from "stream";

const streamPipe = promisify(pipeline);

const handler = async (msg, { conn, text }) => {
  const pref = global.prefixes?.[0] || ".";

  if (!text || !text.trim()) {
    return conn.sendMessage(
      msg.key.remoteJid,
      { text: `✳️ Usa:\n${pref}play <término>\nEj: *${pref}play* bad bunny diles` },
      { quoted: msg }
    );
  }

  await conn.sendMessage(msg.key.remoteJid, {
    react: { text: "🕒", key: msg.key }
  });

  const res = await yts(text);
  const video = res.videos[0];
  if (!video) {
    return conn.sendMessage(
      msg.key.remoteJid,
      { text: "❌ Sin resultados." },
      { quoted: msg }
    );
  }

  const { url: videoUrl, title, timestamp: duration, author, thumbnail } = video;
  const artista = author.name;

  try {
    const infoMsg = `
> *𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁*

🎵 *𝚃𝚒𝚝𝚞𝚕𝚘:* ${title}
🎤 *𝙰𝚛𝚝𝚒𝚜𝚝𝚊:* ${artista}
🕑 *𝙳𝚞𝚛𝚊𝚌𝚒ó𝚗:* ${duration}
`.trim();

    await conn.sendMessage(
      msg.key.remoteJid,
      { image: { url: thumbnail }, caption: infoMsg },
      { quoted: msg }
    );

    const api = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(videoUrl)}&type=audio&quality=128kbps&apikey=russellxz`;
    const r = await axios.get(api);
    if (!r.data?.status || !r.data.data?.url) throw new Error("No se pudo obtener el audio");

    const tmp = path.join(process.cwd(), "tmp");
    if (!fs.existsSync(tmp)) fs.mkdirSync(tmp);
    const inFile = path.join(tmp, `${Date.now()}_in.m4a`);
    const outFile = path.join(tmp, `${Date.now()}_out.mp3`);

    const dl = await axios.get(r.data.data.url, { responseType: "stream" });
    await streamPipe(dl.data, fs.createWriteStream(inFile));

    await new Promise((res, rej) =>
      ffmpeg(inFile)
        .audioCodec("libmp3lame")
        .audioBitrate("128k")
        .format("mp3")
        .save(outFile)
        .on("end", res)
        .on("error", rej)
    );

    const buffer = fs.readFileSync(outFile);

    await conn.sendMessage(
      msg.key.remoteJid,
      {
        audio: buffer,
        mimetype: "audio/mpeg",
        fileName: `${title}.mp3`,
        ptt: false
      },
      { quoted: msg }
    );

    fs.unlinkSync(inFile);
    fs.unlinkSync(outFile);

    await conn.sendMessage(msg.key.remoteJid, {
      react: { text: "✅", key: msg.key }
    });
  } catch (e) {
    console.error(e);
    await conn.sendMessage(
      msg.key.remoteJid,
      { text: "⚠️ Error al descargar el audio." },
      { quoted: msg }
    );
  }
};

handler.command = ["play"];

export default handler;