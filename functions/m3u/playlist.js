export async function onRequest(context) {
  const playlistContent = `
#EXTM3U
#EXTINF:-1 tvg-id="1001" tvg-name="Sample Channel" tvg-logo="https://example.com/logo.png" group-title="Entertainment",Sample Channel
https://example.com/stream/sample.m3u8
  `.trim();

  return new Response(playlistContent, {
    headers: {
      "Content-Type": "application/x-mpegURL",
      "Cache-Control": "no-store"
    },
  });
}
