import playlist from './playlist';

export async function onRequest(context) {
  const { name } = context.params;
  const { request, env } = context;
  const ua = request.headers.get('user-agent') || '';
  const url = new URL(request.url);
  const path = url.pathname;

  // Get ID from path like /mpd/:id or /key/:id
  let id = '';
  try {
    id = path.split(/\/(?:key|mpd|key1|mpd1|key2|mpd2|key1bb|mpd1bbn)\//).pop().split('?')[0];
  } catch (e) {
    id = '';
  }

  // Environment check
  const userList = (env.USER_ID || '').split(',').map(e => e.split(':'));
  const user = userList.find(([n]) => n === name);

  if (!user) {
    return new Response('Incorrect Token, Telegram:@RioUniverse', { status: 404 });
  }

  const [username, expiry] = user;
  if (!expiry || new Date() > new Date(expiry)) {
    return new Response('Token Expired - Buy Now!, Telegram:@RioUniverse', { status: 403 });
  }

  if (!path.includes(`/m3u/${name}`)) {
    return new Response('Invalid Request Path', { status: 404 });
  }

  // Allowed IDs
  const allowIDs = ['459','841','1104','1110','1113','1115','1120','1125','1131','1136','1151','1153','1154','1155','1176','1375','1389','3096','3097','3098','3269','3276'];

  // ✅ Smarter User-Agent Check
  const allowUAs = ['Mozilla', 'OTT', 'TiviMate', 'ExoPlayerLib', 'RioIptv'];

  const isUAAllowed = allowUAs.some(tag => ua.includes(tag));

  // ✅ Handle /key/ and /mpd/
  if ((path.includes('/key/') || path.includes('/mpd/')) && !isUAAllowed) {
    return new Response('Unauthorized Access, Telegram:@RioUniverse', { status: 401 });
  }

  // ✅ Handle /key1/ and /mpd1/
  if ((path.includes('/key1/') || path.includes('/mpd1/')) && (!allowIDs.includes(id) || !ua.includes('RioIptv'))) {
    return new Response('Unauthorized Access or Incorrect ID, Telegram:@RioUniverse', { status: 403 });
  }

  // ✅ Handle /key2/ and /mpd2/
  if ((path.includes('/key2/') || path.includes('/mpd2/')) && (id !== '' || !ua.includes('RioIptv'))) {
    return new Response('Unauthorized Access or Incorrect ID, Telegram:@RioUniverse', { status: 403 });
  }

  // ✅ Handle redirects
  const redirects = {
    '/key/':     `https://tp.kliv.fun/tp8/key.php?id=${id}`,
    '/mpd/':     `http://103.168.18.108/tpo/manifest.mpd?id=${id}`,
    '/key1bb/':  `https://tsiptv.fun/play/HOME/jio/jio-dash/ch-ori.key?id=${id}`,
    '/mpd1bbn/': `https://tsiptv.fun/play/HOME/jio/jio-dash/ch-ori.mpd?id=${id}`,
  };

  for (const key in redirects) {
    if (path.includes(key)) {
      return Response.redirect(redirects[key], 307);
    }
  }

  // ✅ If none matched, return playlist
  return playlist(context);
}
