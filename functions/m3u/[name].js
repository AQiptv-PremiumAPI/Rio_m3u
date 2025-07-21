import playlist from './playlist';

export async function onRequest(context) {
  const { name } = context.params;
  const { request, env } = context;
  const ua = request.headers.get('user-agent') || '';
  const url = new URL(request.url);
  const path = url.pathname;
  const id = path.split(/\/(?:key|mpd|key1|mpd1|key2|mpd2|key1bb|mpd1bbn)\//).pop().split('?')[0];

  const users = (env.USER_ID || '').split(',').map(e => e.split(':'));
  const u = users.find(([n]) => n === name);

  // ✅ Token check
  if (!u) return new Response('Incorrect Token, Telegram:@RioUniverse', { status: 404 });
  if (!u[1] || new Date() > new Date(u[1])) return new Response('Token Expired - Buy Now!, Telegram:@RioUniverse', { status: 403 });

  // ✅ Check only restricted paths for validation
  const isM3U = path === `/m3u/${name}`;
  const isKey = path.includes('/key/');
  const isMPD = path.includes('/mpd/');
  const isKey1 = path.includes('/key1/');
  const isMPD1 = path.includes('/mpd1/');
  const isKey2 = path.includes('/key2/');
  const isMPD2 = path.includes('/mpd2/');
  const isKey1bb = path.includes('/key1bb/');
  const isMPD1bbn = path.includes('/mpd1bbn/');

  if (!isM3U && !isKey && !isMPD && !isKey1 && !isMPD1 && !isKey2 && !isMPD2 && !isKey1bb && !isMPD1bbn)
    return new Response('Invalid Request', { status: 404 });

  // ✅ First validate User-Agent for secured routes
  const validUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36';

  if ((isKey || isMPD) && ua !== validUA)
    return new Response('Unauthorized Access, Telegram:@RioUniverse', { status: 401 });

  if ((isKey1 || isMPD1)) {
    const validIDs = ['459','841','1104','1110','1113','1115','1120','1125','1131','1136','1151','1153','1154','1155','1176','1375','1389','3096','3097','3098','3269','3276'];
    if (!validIDs.includes(id)) return new Response('Incorrect ID, Telegram:@RioUniverse', { status: 403 });
    if (ua !== 'RioIptv') return new Response('Unauthorized Access, Telegram:@RioUniverse', { status: 401 });
  }

  if ((isKey2 || isMPD2)) {
    if (![''].includes(id)) return new Response('Incorrect ID, Telegram:@RioUniverse', { status: 403 });
    if (ua !== 'RioIptv') return new Response('Unauthorized Access, Telegram:@RioUniverse', { status: 401 });
  }

  // ✅ Then redirect if everything valid
  if (isKey) return Response.redirect(`https://tp.kliv.fun/tp8/key.php?id=${id}`, 307);
  if (isMPD) return Response.redirect(`http://103.168.18.108/tpo/manifest.mpd?id=${id}`, 307);
  if (isKey1bb) return Response.redirect(`https://tsiptv.fun/play/HOME/jio/jio-dash/ch-ori.key?id=${id}`, 307);
  if (isMPD1bbn) return Response.redirect(`https://tsiptv.fun/play/HOME/jio/jio-dash/ch-ori.mpd?id=${id}`, 307);

  // ✅ If it’s a /m3u/:name request, then return playlist
  if (isM3U) return playlist(context);

  return new Response('Unhandled Request', { status: 400 });
}
