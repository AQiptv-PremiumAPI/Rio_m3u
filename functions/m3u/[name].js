import p from './playlist';

export async function onRequest(context) {
  const { name } = context.params;
  const { request, env } = context;
  const ua = request.headers.get('user-agent') || '';
  const url = new URL(request.url);
  const path = url.pathname;
  const id = path.split(/\/(?:key|mpd|key1|mpd1|key2|mpd2|key1bb|mpd1bbn)\//).pop().split('?')[0];

  const users = (env.USER_ID || '').split(',').map(e => e.split(':'));
  const u = users.find(([n]) => n === name);

  if (!u) return new Response('Incorrect Token, Telegram:@RioUniverse', { status: 404 });
  if (!u[1] || new Date() > new Date(u[1])) return new Response('Token Expired - Buy Now!, Telegram:@RioUniverse', { status: 403 });
  if (!path.includes(`/m3u/${name}`)) return new Response('Invalid Request', { status: 404 });

  const validUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36';

  if ((path.includes('/key/') || path.includes('/mpd/')) && ua !== validUA)
    return new Response('Unauthorized Access, Telegram:@RioUniverse', { status: 401 });

  if ((path.includes('/key1/') || path.includes('/mpd1/'))) {
    const validIDs = ['459','841','1104','1110','1113','1115','1120','1125','1131','1136','1151','1153','1154','1155','1176','1375','1389','3096','3097','3098','3269','3276'];
    if (!validIDs.includes(id)) return new Response('Incorrect ID, Telegram:@RioUniverse', { status: 403 });
    if (ua !== 'RioIptv') return new Response('Unauthorized Access, Telegram:@RioUniverse', { status: 401 });
  }

  if ((path.includes('/key2/') || path.includes('/mpd2/'))) {
    if (![''].includes(id)) return new Response('Incorrect ID, Telegram:@RioUniverse', { status: 403 });
    if (ua !== 'RioIptv') return new Response('Unauthorized Access, Telegram:@RioUniverse', { status: 401 });
  }

  if (path.includes('/key/')) return Response.redirect(`https://tp.kliv.fun/tp8/key.php?id=${id}`, 307);
  if (path.includes('/mpd/')) return Response.redirect(`http://103.168.18.108/tpo/manifest.mpd?id=${id}`, 307);
  if (path.includes('/key1bb/')) return Response.redirect(`https://tsiptv.fun/play/HOME/jio/jio-dash/ch-ori.key?id=${id}`, 307);
  if (path.includes('/mpd1bbn/')) return Response.redirect(`https://tsiptv.fun/play/HOME/jio/jio-dash/ch-ori.mpd?id=${id}`, 307);

  return p(context); // Custom fallback handler (if needed)
}
