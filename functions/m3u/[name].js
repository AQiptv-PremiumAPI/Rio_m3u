import playlist from './playlist';

export async function onRequest(context) {
  const { request, params, env } = context;
  const { name } = params;
  const ua = request.headers.get('user-agent') || '';
  const url = new URL(request.url);
  const pathname = url.pathname;

  const id = pathname.split(/\/(?:key|mpd|key1|mpd1|key2|mpd2|key1bb|mpd1bbn)\//).pop().split('?')[0];
  const users = (env.USER_ID || '').split(',').map(entry => entry.split(':'));
  const userEntry = users.find(([n]) => n === name);

  // 1. Token validation
  if (!userEntry) {
    return new Response("Incorrect Token. Telegram: @RioUniverse", { status: 404 });
  }

  const [_, expiry] = userEntry;
  if (!expiry || new Date() > new Date(expiry)) {
    return new Response("Token Expired - Buy Now! Telegram: @RioUniverse", { status: 403 });
  }

  // 2. Path must contain proper tokenized request like /m3u/:name
  if (!pathname.includes(`/m3u/${name}`)) {
    return new Response("Invalid Request", { status: 404 });
  }

  // 3. Main User-Agent check for /key/ or /mpd/
  const validMainUA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36";
  if ((pathname.includes("/key/") || pathname.includes("/mpd/")) && ua !== validMainUA) {
    return new Response("Unauthorized Access - Invalid UA, Telegram: @RioUniverse", { status: 401 });
  }

  // 4. For /key1/ and /mpd1/ - Restricted Channels with UA=RioIptv
  const restrictedIds = ['459','841','1104','1110','1113','1115','1120','1125','1131','1136','1151','1153','1154','1155','1176','1375','1389','3096','3097','3098','3269','3276'];
  if ((pathname.includes("/key1/") || pathname.includes("/mpd1/"))) {
    if (!restrictedIds.includes(id)) {
      return new Response("Incorrect ID for Protected Stream", { status: 403 });
    }
    if (ua !== 'RioIptv') {
      return new Response("Unauthorized UA - Use RioIptv App", { status: 401 });
    }
  }

  // 5. For /key2/ or /mpd2/ - Reserved section (currently not active)
  if ((pathname.includes("/key2/") || pathname.includes("/mpd2/"))) {
    return new Response("Reserved Stream Not Available", { status: 403 });
  }

  // 6. Redirection
  if (pathname.includes("/key/")) {
    return Response.redirect(`https://tp.kliv.fun/tp8/key.php?id=${id}`, 307);
  }
  if (pathname.includes("/mpd/")) {
    return Response.redirect(`http://103.168.18.108/tpo/manifest.mpd?id=${id}`, 307);
  }
  if (pathname.includes("/key1bb/")) {
    return Response.redirect(`https://tsiptv.fun/play/HOME/jio/jio-dash/ch-ori.key?id=${id}`, 307);
  }
  if (pathname.includes("/mpd1bbn/")) {
    return Response.redirect(`https://tsiptv.fun/play/HOME/jio/jio-dash/ch-ori.mpd?id=${id}`, 307);
  }

  // 7. Final fallback: fetch playlist
  return playlist(context);
}
