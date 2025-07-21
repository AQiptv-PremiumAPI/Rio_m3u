import p from './playlist';

export default (r, s) => {
  const { name } = r.query, ua = r.headers['user-agent'] || '', url = r.url || '', id = url.split(/\/(?:key|mpd|key1|mpd1|key2|mpd2)\//).pop().split('?')[0], u = (process.env.USER_ID || '').split(',').map(e => e.split(':')).find(([n]) => n === name);
  if (!u) return s.status(404).send('Incorrect Token, Telegram:@RioUniverse');
  if (!u[1] || new Date() > new Date(u[1])) return s.status(403).send('Token Expired - Buy Now!,Telegram:@RioUniverse');
  if (!url.includes(`tplay/${name}`)) return s.status(404).send('Invalid Request');

  const validUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36';
  if ((url.includes('/key/') || url.includes('/mpd/')) && ua !== validUA) return s.status(401).send('Unauthorized Access, Telegram:@RioUniverse');
  if ((url.includes('/key1/') || url.includes('/mpd1/'))) {
    if (!['459','841','1104','1110','1113','1115','1120','1125','1131','1136','1151','1153','1154','1155','1176','1375','1389','3096','3097','3098','3269','3276'].includes(id)) return s.status(403).send('Incorrect ID, Telegram:@RioUniverse');
    if (ua !== 'RioIptv') return s.status(401).send('Unauthorized Access, Telegram:@RioUniverse');
  }
  if ((url.includes('/key2/') || url.includes('/mpd2/'))) {
    if (![''].includes(id)) return s.status(403).send('Incorrect ID, Telegram:@RioUniverse');
    if (ua !== 'RioIptv') return s.status(401).send('Unauthorized Access, Telegram:@RioUniverse');
  }
  
  if (url.includes('/key/')) return s.redirect(307, `https://tp.kliv.fun/tp8/key.php?id=${id}`);
  if (url.includes('/mpd/')) return s.redirect(307, `http://103.168.18.108/tpo/manifest.mpd?id=${id}`);
  if (url.includes('/key1bb/')) return s.redirect(307, `https://tsiptv.fun/play/HOME/jio/jio-dash/ch-ori.key?id=${id}`);
  if (url.includes('/mpd1bbn/')) return s.redirect(307, `https://tsiptv.fun/play/HOME/jio/jio-dash/ch-ori.mpd?id=${id}`);
  
  p(r, s);
};
