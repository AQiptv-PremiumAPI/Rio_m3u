export async function onRequest(context) {
  const { params, request } = context;
  const name = params.name;
  const ua = request.headers.get('user-agent') || '';
  const url = new URL(request.url);
  const path = url.pathname;
  const id = path.split(/\/(?:key|mpd|key1|mpd1|key2|mpd2)\//).pop().split('?')[0];
  
  const USER_ID = (context.env.USER_ID || '').split(',').map(e => e.split(':'));
  const user = USER_ID.find(([n]) => n === name);
  if (!user) return new Response("Incorrect Token, Telegram:@RioUniverse", { status: 404 });

  if (!user[1] || new Date() > new Date(user[1])) {
    return new Response("Token Expired - Buy Now!, Telegram:@RioUniverse", { status: 403 });
  }

  const validUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36';

  if ((path.includes('/key/') || path.includes('/mpd/')) && ua !== validUA)
    return new Response("Unauthorized Access, Telegram:@RioUniverse", { status: 401 });

  if ((path.includes('/key1/') || path.includes('/mpd1/'))) {
    const allowList = ['459','841','1104','1110','1113','1115','1120','1125','1131','1136','1151','1153','1154','1155','1176','1375','1389','3096','3097','3098','3269','3276'];
    if (!allowList.includes(id)) return new Response("Incorrect ID, Telegram:@RioUniverse", { status: 403 });
    if (ua !== 'RioIptv') return new Response("Unauthorized Access, Telegram:@RioUniverse", { status: 401 });
  }

  if (path.includes('/key/')) return Response.redirect(`https://tp.kliv.fun/tp8/key.php?id=${id}`, 307);
  if (path.includes('/mpd/')) return Response.redirect(`http://103.168.18.108/tpo/manifest.mpd?id=${id}`, 307);

  return new Response("Playlist Loaded: " + name);
}
