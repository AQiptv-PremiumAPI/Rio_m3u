export default function handler(req, res) {
  const { name } = req.query;
  const ua = req.headers['user-agent'] || '';
  const host = req.headers.host;
  const base = `https://${host}`;
  const defaultUA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36';
  const user = (process.env.USER_ID || '').split(',').map(e => e.split(':')).find(([n]) => n === name);
  if (!user || !user[1]) return res.status(404).send('User Not Found or Expired');
  if (/(Mozilla|Chrome|Safari|Firefox|Edge)/i.test(ua) && !/NSPlayer/i.test(ua)) return res.setHeader('Content-Type', 'text/html'), res.status(200).send('<meta http-equiv="refresh" content="0;url=https://t.me/RioUniverse">');

  const [username, expiry] = user;
  const exp = Math.floor(new Date(expiry).getTime() / 1000);

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(`#EXTM3U billed-till="${exp}" billed-msg="✨TG @RioUniverse Premium✨"

#EXTM3U × "RioIptv Premium Subscription"

// © API Script by @AQiptv //

#EXTM3U x-tvg-url="https://tsepg.cf/epg.xml.gz"
#EXTM3U x-tvg-url="https://avkb.short.gy/tsepg.xml.gz"

#EXTINF:-1 group-logo="https://i.ibb.co/Z6cSjRKv/TG-Rio-Iptv.png" group-title="Contact Us", group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/qNXKQBk/20240724-160959.png",TELEGRAM: @RIOUNIVERSE
#EXTVLCOPT:http-user-agent=@RioIptv
https://aqiptv.vercel.app/intro.ts

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/840
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts840" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56386-kfc14w60-v4/imageContent-56386-kfc14w60-m4.png",Shirdi Sai Baba
${base}/tplay/${username}/mpd/840|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/842
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts842" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56389-kfdgngts-v3/imageContent-56389-kfdgngts-m3.png",Somnath Temple
${base}/tplay/${username}/mpd/842|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/121
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts121" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-405-j5jr3sz4-v2/imageContent-405-j5jr3sz4-m2.png",Tata Play Fitness
${base}/tplay/${username}/mpd/121|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/618
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts618" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12282-ja02jlp4-v2/imageContent-12282-ja02jlp4-m2.png",Tata Play Beauty
${base}/tplay/${username}/mpd/618|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/641
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts641" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23495-jf92iycg-v3/imageContent-23495-jf92iycg-m4.png",Tata Play Cooking
${base}/tplay/${username}/mpd/641|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/959
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts959" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67692-kwmxxw08-v2/imageContent-67692-kwmxxw08-m3.png",Tata Play Romance
${base}/tplay/${username}/mpd/959|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/8
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts8" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25307-jhrhflww-v1/imageContent-25307-jhrhflww-m1.png",STAR Plus HD
${base}/tplay/${username}/mpd/8|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/244
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts244" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-6895-j6vqhqnc-v2/imageContent-6895-j6vqhqnc-m2.png",Star Bharat HD
${base}/tplay/${username}/mpd/244|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/15
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts15" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-43-j5fca4k0-v3/imageContent-43-j5fca4k0-m4.png",SET HD
${base}/tplay/${username}/mpd/15|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/556
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts556" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12074-j9oat6qw-v6/imageContent-12074-j9oat6qw-m6.png",SET
${base}/tplay/${username}/mpd/556|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/48
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts48" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-141-j5fpeji0-v3/imageContent-141-j5fpeji0-m3.png",SONY SAB HD
${base}/tplay/${username}/mpd/48|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/559
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts559" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12081-j9oc38xc-v8/imageContent-12081-j9oc38xc-m7.png",SONY SAB
${base}/tplay/${username}/mpd/559|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/40
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts40" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-117-j5fl7440-v1/imageContent-117-j5fl7440-m1.png",&tv HD
${base}/tplay/${username}/mpd/40|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/578
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts578" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12129-j9p7kluo-v2/imageContent-12129-j9p7kluo-m3.png",&TV
${base}/tplay/${username}/mpd/578|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/63
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts63" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11073-j95e7nyo-v1/imageContent-11073-j95e7nyo-m1.png",Zee TV HD
${base}/tplay/${username}/mpd/63|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/557
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts557" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12077-j9ob4gm0-v2/imageContent-12077-j9ob4gm0-m2.png",Zee TV
${base}/tplay/${username}/mpd/557|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/811
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts811" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52369-k7e829a0-v5/imageContent-52369-k7e829a0-m5.png",Tata Play Adbhut Kahaniyan
${base}/tplay/${username}/mpd/811|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/52
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts52" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-155-j5frd2uo-v1/imageContent-155-j5frd2uo-m1.png",Colors HD
${base}/tplay/${username}/mpd/52|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/543
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts543" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12053-j9o3yhko-v1/imageContent-12053-j9o3yhko-m1.png",Colors
${base}/tplay/${username}/mpd/543|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/95
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts95" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-304-j5ji9otc-v2/imageContent-304-j5ji9otc-m2.png",Tata Play Javed Akhtar
${base}/tplay/${username}/mpd/95|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/943
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts943" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65443-kty2tkwo-v2/imageContent-65443-kty2tkwo-m2.png",Tata Play Videshi Kahaniyan
${base}/tplay/${username}/mpd/943|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/964
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts964" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPCTV_Thumbnail-v4/TPCTV_Thumbnail.png",Tata Play Classic TV
${base}/tplay/${username}/mpd/964|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/986
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts986" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-70821-l3edt8uw-v1/imageContent-70821-l3edt8uw-m3.png",Tata Play Zindagi
${base}/tplay/${username}/mpd/986|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1276
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1276" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/INVESTDISHD_Thumbnail-v1/INVESTDISHD_Thumbnail.png",Investigation Discovery HD
${base}/tplay/${username}/mpd/1276|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/633
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts633" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49002-k5cch1cg-v2/imageContent-49002-k5cch1cg-m5.png",Investigation Discovery
${base}/tplay/${username}/mpd/633|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/551
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts551" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12060-j9o91vfc-v2/imageContent-12060-j9o91vfc-m2.png",STAR Utsav
${base}/tplay/${username}/mpd/551|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/523
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts523" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11969-j9luigc0-v2/imageContent-11969-j9luigc0-m2.png",Zee Anmol
${base}/tplay/${username}/mpd/523|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/438
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts438" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/RIS_Thumbnail-v3/RIS_Thumbnail.png",Colors Rishtey
${base}/tplay/${username}/mpd/438|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/554
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts554" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12071-j9oa4gbc-v5/imageContent-12071-j9oa4gbc-m4.png",Sony Pal
${base}/tplay/${username}/mpd/554|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/54
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts54" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-150-j5frd0jc-v3/imageContent-150-j5frd0jc-m5.png",The Q
${base}/tplay/${username}/mpd/54|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/297
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts297" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11266-j9j2spmg-v1/imageContent-11266-j9j2spmg-m1.png",Big Magic
${base}/tplay/${username}/mpd/297|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/51
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts51" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-158-j5frd560-v2/imageContent-158-j5frd560-m3.png",Dangal
${base}/tplay/${username}/mpd/51|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/180
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts180" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-765-j5m2mbjk-v2/imageContent-765-j5m2mbjk-m2.png",Anjan TV
${base}/tplay/${username}/mpd/180|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/818
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts818" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52945-ka1wdss8-v2/imageContent-52945-ka1wdss8-m2.png",Shemaroo TV
${base}/tplay/${username}/mpd/818|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/888
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts888" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/Ishara_Thumbnail-v3/Ishara_Thumbnail.png",Ishara
${base}/tplay/${username}/mpd/888|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1045
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1045" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SHEUM_Thumbnail-v2/SHEUM_Thumbnail.png",Shemaroo UMANG
${base}/tplay/${username}/mpd/1045|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/965
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts965" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67799-kx7m7rhc-v1/imageContent-67799-kx7m7rhc-m2.png",Manoranjan Grand
${base}/tplay/${username}/mpd/965|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/191
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts191" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-795-j5m7axrc-v1/imageContent-795-j5m7axrc-m1.png",DD National
${base}/tplay/${username}/mpd/191|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/326
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts326" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11350-j9jpk8pk-v1/imageContent-11350-j9jpk8pk-m1.png",DD Kisan
${base}/tplay/${username}/mpd/326|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/808
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts808" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49809-k7454ppk-v3/imageContent-49809-k7454ppk-m6.png",Tata Play Hits
${base}/tplay/${username}/mpd/808|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/187
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts187" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1577-j5xrm7fc-v1/imageContent-1577-j5xrm7fc-m1.png",Colors Infinity HD
${base}/tplay/${username}/mpd/187|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/544
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts544" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-18305-jcqmvp7s-v1/imageContent-18305-jcqmvp7s-m1.png",Colors Infinity
${base}/tplay/${username}/mpd/544|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/486
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts486" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-43899-jyofyk1s-v4/imageContent-43899-jyofyk1s-m4.png",Tata Play Bollywood Premiere
${base}/tplay/${username}/mpd/486|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/789
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts789" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-48748-k4jbpl00-v2/imageContent-48748-k4jbpl00-m3.png",Tata Play Hollywood Local
${base}/tplay/${username}/mpd/789|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/245
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts245" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-19212-jd2xwa4w-v1/imageContent-19212-jd2xwa4w-m1.png",Star GOLD HD
${base}/tplay/${username}/mpd/245|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1130
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1130" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BMSLA_Thumbnail-v2/BMSLA_Thumbnail.png",Tata Play Bollywood Masala
${base}/tplay/${username}/mpd/1130|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/80
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts80" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-243-j5fyl2f4-v3/imageContent-243-j5fyl2f4-m4.png",SONY MAX HD
${base}/tplay/${username}/mpd/80|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/132
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts132" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-441-j5jt3mmg-v3/imageContent-441-j5jt3mmg-m3.png",SONY MAX
${base}/tplay/${username}/mpd/132|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/741
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts741" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-44333-jz3hpme0-v4/imageContent-44333-jz3hpme0-m8.png",Tata Play Classic Cinema
${base}/tplay/${username}/mpd/741|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/503
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts503" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11915-j9l5clzs-v1/imageContent-11915-j9l5clzs-m1.png",Zee Cinema HD
${base}/tplay/${username}/mpd/503|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/123
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts123" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11027-j8yjr8k0-v1/imageContent-11027-j8yjr8k0-m1.png",Zee Cinema
${base}/tplay/${username}/mpd/123|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/175
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts175" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31233-jli1wlvc-v1/imageContent-31233-jli1wlvc-m1.png",Zee Bollywood
${base}/tplay/${username}/mpd/175|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/727
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts727" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-42199-jxh2zlj4-v1/imageContent-42199-jxh2zlj4-m1.png",Zee Classic
${base}/tplay/${username}/mpd/727|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/666
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts666" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31419-jmb48u74-v3/imageContent-31419-jmb48u74-m4.png",Tata Play Theatre HD
${base}/tplay/${username}/mpd/666|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/267
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts267" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11173-j9hth720-v1/imageContent-11173-j9hth720-m1.png",&pictures HD
${base}/tplay/${username}/mpd/267|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/148
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts148" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-499-j5jydp7s-v1/imageContent-499-j5jydp7s-m1.png",&pictures
${base}/tplay/${username}/mpd/148|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1183
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1183" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/XPOHD_Thumbnail-v1/XPOHD_Thumbnail.png",&Xplor HD
${base}/tplay/${username}/mpd/1183|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/677
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts677" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-34170-jok0hf00-v7/imageContent-34170-jok0hf00-m8.PNG",Tata Play ShortsTV
${base}/tplay/${username}/mpd/677|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/61
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts61" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-183-j5fsqz5c-v2/imageContent-183-j5fsqz5c-m2.png",Colors Cineplex HD
${base}/tplay/${username}/mpd/61|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/53
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts53" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-149-j5frd0jc-v2/imageContent-149-j5frd0jc-m2.png",Colors Cineplex
${base}/tplay/${username}/mpd/53|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/730
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts730" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/B4UKad_Thumbnail-v5/B4UKad_Thumbnail.png",B4U Kadak
${base}/tplay/${username}/mpd/730|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/100
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts100" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11024-j8yix4g8-v1/imageContent-11024-j8yix4g8-m1.png",Zee Action
${base}/tplay/${username}/mpd/100|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1003
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1003" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72254-l6dn8nco-v3/imageContent-72254-l6dn8nco-m4.png",Tata Play South Talkies
${base}/tplay/${username}/mpd/1003|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/56
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts56" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-198-j5fsr7mw-v2/imageContent-198-j5fsr7mw-m3.png",Sony Wah
${base}/tplay/${username}/mpd/56|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/7
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts7" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-18-j5f9ui8g-v1/imageContent-18-j5f9ui8g-m1.png",B4U Movies
${base}/tplay/${username}/mpd/7|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/120
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts120" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-402-j5jq1gko-v3/imageContent-402-j5jq1gko-m4.png",SONY MAX 2
${base}/tplay/${username}/mpd/120|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/276
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts276" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11200-j9i4gzig-v3/imageContent-11200-j9i4gzig-m4.png",WoW Cinema One
${base}/tplay/${username}/mpd/276|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/194
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts194" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-798-j5m7esnc-v4/imageContent-798-j5m7esnc-m11.png",Dangal 2
${base}/tplay/${username}/mpd/194|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/296
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts296" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11263-j9j1tch4-v2/imageContent-11263-j9j1tch4-m5.png",BFLIX
${base}/tplay/${username}/mpd/296|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/64
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts64" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11090-j95hdh6o-v1/imageContent-11090-j95hdh6o-m1.png",Zee Anmol Cinema
${base}/tplay/${username}/mpd/64|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1000
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1000" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-71752-l5hqgxso-v2/imageContent-71752-l5hqgxso-m1.png",Colors Cineplex Bollywood
${base}/tplay/${username}/mpd/1000|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1321
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1321" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ATMOV_Thumbnail-v1/ATMOV_Thumbnail.png",ALL Time MOVIES
${base}/tplay/${username}/mpd/1321|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/823
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts823" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-53943-kblsqraw-v3/imageContent-53943-kblsqraw-m4.png",Goldmines
${base}/tplay/${username}/mpd/823|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/731
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts731" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-43106-jxzlt6x4-v2/imageContent-43106-jxzlt6x4-m7.png",Manoranjan TV
${base}/tplay/${username}/mpd/731|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/12
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts12" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ZACINE_Thumbnail-v3/ZACINE_Thumbnail.png",Zee Anmol Cinema 2
${base}/tplay/${username}/mpd/12|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/173
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts173" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-748-j5l5fnts-v1/imageContent-748-j5l5fnts-m1.png",Movies Now
${base}/tplay/${username}/mpd/173|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/234
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts234" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1017-j5ngpo2g-v1/imageContent-1017-j5ngpo2g-m1.png",MNX
${base}/tplay/${username}/mpd/234|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1269
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1269" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/CHUMBKTV_Thumbnail-v2/CHUMBKTV_Thumbnail.png",Chumbak TV
${base}/tplay/${username}/mpd/1269|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1499
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1499" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/9H4S51CN/Goldmines-Movies-Rioiptv.png",Goldmines Movies
${base}/tplay/${username}/mpd/1499|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1050
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1050" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/fdTfVfbV/Goldmines-Bollywood-Rioiptv.png",Goldmines Bollywood
${base}/tplay/${username}/mpd/1050|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/32
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts32" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-93-j5fjv614-v3/imageContent-93-j5fjv614-m3.png",SONY PIX HD
${base}/tplay/${username}/mpd/32|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/558
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts558" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12080-j9obub60-v6/imageContent-12080-j9obub60-m6.png",SONY PIX
${base}/tplay/${username}/mpd/558|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/562
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts562" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12095-j9ooixfs-v1/imageContent-12095-j9ooixfs-m1.png",Movies Now HD
${base}/tplay/${username}/mpd/562|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/210
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts210" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-826-j5m9kx5c-v1/imageContent-826-j5m9kx5c-m1.png",MN+ HD
${base}/tplay/${username}/mpd/210|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/599
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts599" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12216-j9qm5hjs-v2/imageContent-12216-j9qm5hjs-m2.png",MNX HD
${base}/tplay/${username}/mpd/599|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/174
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts174" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-751-j5l5kb9k-v3/imageContent-751-j5l5kb9k-m3.png",Romedy Now
${base}/tplay/${username}/mpd/174|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/223
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts223" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-941-j5mhk5fc-v1/imageContent-941-j5mhk5fc-m1.png",DD Sports
${base}/tplay/${username}/mpd/223|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/78
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts78" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8301-j7hc0820-v1/imageContent-8301-j7hc0820-m1.png",Star Sports 1 HD
${base}/tplay/${username}/mpd/78|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/235
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts235" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1021-j5nj3c68-v1/imageContent-1021-j5nj3c68-m1.png",Star Sports 2 HD
${base}/tplay/${username}/mpd/235|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/24
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts24" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-60-j5fdr6a0-v1/imageContent-60-j5fdr6a0-m1.png",Star Sports 1 Hindi HD
${base}/tplay/${username}/mpd/24|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1489
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1489" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://dvdh7g0f0hwck.cloudfront.net/assets/images/channel/TataPlayFancodeSports_Thumbnail_a8760439-8b96-4183-b56d-1cddd0f3971b.png",Tata Play Fancode Sports
${base}/tplay/${username}/mpd/1489|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/246
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts246" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-7891-j75vq7k0-v1/imageContent-7891-j75vq7k0-m1.PNG",Star Sports Select 1 HD
${base}/tplay/${username}/mpd/246|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/463
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts463" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11791-j9kyqpy8-v1/imageContent-11791-j9kyqpy8-m1.png",Star Sports Select 2 HD
${base}/tplay/${username}/mpd/463|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/81
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts81" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-261-j5fz9bvk-v4/imageContent-261-j5fz9bvk-m4.png",SONY SPORTS TEN 1 HD
${base}/tplay/${username}/mpd/81|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/150
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts150" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-513-j5jzouqw-v5/imageContent-513-j5jzouqw-m7.png",SONY SPORTS TEN 1
${base}/tplay/${username}/mpd/150|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/462
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts462" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11784-j9kylfd4-v2/imageContent-11784-j9kylfd4-m3.png",SONY SPORTS TEN 2 HD
${base}/tplay/${username}/mpd/462|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/170
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts170" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-742-j5l50le0-v5/imageContent-742-j5l50le0-m7.png",SONY SPORTS TEN 2
${base}/tplay/${username}/mpd/170|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/464
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts464" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11787-j9kynnm0-v3/imageContent-11787-j9kynnm0-m3.png",SONY SPORTS TEN 3 HD
${base}/tplay/${username}/mpd/464|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/171
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts171" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-739-j5l4y6yw-v5/imageContent-739-j5l4y6yw-m5.png",SONY SPORTS TEN 3
${base}/tplay/${username}/mpd/171|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/35
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts35" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-108-j5fl5wwg-v3/imageContent-108-j5fl5wwg-m3.png",SONY SPORTS TEN 5 HD
${base}/tplay/${username}/mpd/35|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1033
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1033" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/3yzGqYbx/SS2-Hindi-HD.png",Star Sports 2 Hindi HD
${base}/tplay/${username}/mpd/1033|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/980
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts980" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/bjdC28Dc/SS2Hindi.png",Star Sports 2 Hindi
${base}/tplay/${username}/mpd/980|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/812
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts812" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52842-k980h8vc-v1/imageContent-52842-k980h8vc-m2.png",Eurosport HD
${base}/tplay/${username}/mpd/812|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/693
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts693" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35309-jqxwmcq0-v4/imageContent-35309-jqxwmcq0-m4.png",Eurosport
${base}/tplay/${username}/mpd/693|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/691
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts691" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-34886-jqc7dybs-v2/imageContent-34886-jqc7dybs-m2.png",DD News HD
${base}/tplay/${username}/mpd/691|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/322
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts322" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DDNW_Thumbnail-v3/DDNW_Thumbnail.png",DD News
${base}/tplay/${username}/mpd/322|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/177
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts177" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-759-j5m13014-v2/imageContent-759-j5m13014-m3.png",ABP News
${base}/tplay/${username}/mpd/177|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/783
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts783" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-47647-k2lbp2q8-v2/imageContent-47647-k2lbp2q8-m2.png",Tata Play Seniors
${base}/tplay/${username}/mpd/783|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/179
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts179" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-483-j5jx9x48-v1/imageContent-483-j5jx9x48-m1.png",NDTV India
${base}/tplay/${username}/mpd/179|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/22
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts22" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52679-k7zx7qqg-v1/imageContent-52679-k7zx7qqg-m2.png",News World India
${base}/tplay/${username}/mpd/22|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/689
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts689" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-34652-jpmey8gw-v1/imageContent-34652-jpmey8gw-m1.png",Aaj Tak HD
${base}/tplay/${username}/mpd/689|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/153
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts153" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-537-j5kwkd88-v1/imageContent-537-j5kwkd88-m1.png",Aaj Tak
${base}/tplay/${username}/mpd/153|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/259
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts259" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11110-j95ioyag-v1/imageContent-11110-j95ioyag-m1.png",Zee News
${base}/tplay/${username}/mpd/259|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/872
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts872" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-58613-kj283ly8-v2/imageContent-58613-kj283ly8-m2.png",Tata Play Astro Duniya
${base}/tplay/${username}/mpd/872|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/104
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts104" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8568-j7lnde80-v1/imageContent-8568-j7lnde80-m1.png",India TV
${base}/tplay/${username}/mpd/104|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1056
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1056" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/HAGHAR_Thumbnail-v1/HAGHAR_Thumbnail.png",Tata Play Har Ghar Startup
${base}/tplay/${username}/mpd/1056|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/209
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts209" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-849-j5m9tmf4-v1/imageContent-849-j5m9tmf4-m1.png",News 24
${base}/tplay/${username}/mpd/209|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/929
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts929" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-64069-kra2o75k-v2/imageContent-64069-kra2o75k-m2.png",Tata Play JEE Prep
${base}/tplay/${username}/mpd/929|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/928
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts928" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-64066-kra2j2qo-v2/imageContent-64066-kra2j2qo-m2.png",Tata Play NEET Prep
${base}/tplay/${username}/mpd/928|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/106
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts106" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-339-j5jm6kko-v1/imageContent-339-j5jm6kko-m1.png",News18 India
${base}/tplay/${username}/mpd/106|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/514
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts514" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ZEEBH_Thumbnail-v2/ZEEBH_Thumbnail.png",Zee Bharat
${base}/tplay/${username}/mpd/514|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/696
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts696" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35599-jrm11j9c-v1/imageContent-35599-jrm11j9c-m1.PNG",R Bharat
${base}/tplay/${username}/mpd/696|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/183
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts183" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-774-j5m3h6nk-v1/imageContent-774-j5m3h6nk-m1.png",India News
${base}/tplay/${username}/mpd/183|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/36
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts36" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-114-j5fl632o-v1/imageContent-114-j5fl632o-m1.png",News Nation
${base}/tplay/${username}/mpd/36|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/706
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts706" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67672-kwly0m4w-v1/imageContent-67672-kwly0m4w-m1.png",TV9 Bharatvarsh
${base}/tplay/${username}/mpd/706|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/485
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts485" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11859-j9l2n36w-v2/imageContent-11859-j9l2n36w-m2.png",TOTAL TV
${base}/tplay/${username}/mpd/485|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/932
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts932" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-64606-krslbshs-v1/imageContent-64606-krslbshs-m2.png",Times Now Navbharat HD
${base}/tplay/${username}/mpd/932|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/966
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts966" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67796-kx7lokw8-v2/imageContent-67796-kx7lokw8-m4.png",Times Now Navbharat
${base}/tplay/${username}/mpd/966|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/831
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts831" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-55547-kdzeosow-v3/imageContent-55547-kdzeosow-m6.png",News India 24x7
${base}/tplay/${username}/mpd/831|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1010
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1010" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BH24_Thumbnail-v3/BH24_Thumbnail.png",Bharat 24
${base}/tplay/${username}/mpd/1010|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1031
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1031" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72980-l8fn3f28-v2/imageContent-72980-l8fn3f28-m4.png",Surya Samachar
${base}/tplay/${username}/mpd/1031|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/475
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts475" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11831-j9kzkn40-v1/imageContent-11831-j9kzkn40-m1.png",Sudarshan News
${base}/tplay/${username}/mpd/475|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1051
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1051" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BHEXP_Thumbnail-v2/BHEXP_Thumbnail.png",Bharat Express
${base}/tplay/${username}/mpd/1051|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1084
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1084" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/INDLive_Thumbnail-v2/INDLive_Thumbnail.png",India Daily 24x7
${base}/tplay/${username}/mpd/1084|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1395
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1395" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/LIVETIMES_Thumbnail-v2/LIVETIMES_Thumbnail.png",Live Times
${base}/tplay/${username}/mpd/1395|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1442
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1442" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TV100_Thumbnail-v2/TV100_Thumbnail.png",TV 100
${base}/tplay/${username}/mpd/1442|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/286
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts286" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-17573-jclve4rc-v1/imageContent-17573-jclve4rc-m1.png",APN News
${base}/tplay/${username}/mpd/286|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/950
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts950" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-66223-ku9gfjug-v1/imageContent-66223-ku9gfjug-m1.png",ET Now Swadesh
${base}/tplay/${username}/mpd/950|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/685
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts685" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-34516-jp9bj0qg-v4/imageContent-34516-jp9bj0qg-m4.png",India Voice
${base}/tplay/${username}/mpd/685|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/415
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts415" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NEW11B_Thumbnail-v4/NEW11B_Thumbnail.png",News 11 Bharat
${base}/tplay/${username}/mpd/415|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/414
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts414" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11634-j9k0pbr4-v1/imageContent-11634-j9k0pbr4-m1.png",News 1 India
${base}/tplay/${username}/mpd/414|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/344
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts344" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11467-j9jr3k80-v2/imageContent-11467-j9jr3k80-m2.png",Hindi Khabar
${base}/tplay/${username}/mpd/344|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/291
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts291" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BSAMAA_Thumbnail-v1/BSAMAA_Thumbnail.png",Bharat Samachar
${base}/tplay/${username}/mpd/291|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/384
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts384" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11527-j9jtx9hk-v2/imageContent-11527-j9jtx9hk-m2.png",Khabarain Abhi Tak
${base}/tplay/${username}/mpd/384|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/848
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts848" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56488-kfgbqzso-v3/imageContent-56488-kfgbqzso-m5.png",Network 10
${base}/tplay/${username}/mpd/848|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/701
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts701" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-37210-jswmlty0-v2/imageContent-37210-jswmlty0-m2.PNG",Jantantra TV
${base}/tplay/${username}/mpd/701|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/988
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts988" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-70993-l3v760zc-v1/imageContent-70993-l3v760zc-m4.png",Har Khabar
${base}/tplay/${username}/mpd/988|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1274
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1274" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SWANEWS_Thumbnail-v4/SWANEWS_Thumbnail.png",Swadesh News
${base}/tplay/${username}/mpd/1274|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/260
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts260" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11120-j95jyuao-v1/imageContent-11120-j95jyuao-m1.png",Zee Business
${base}/tplay/${username}/mpd/260|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/278
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts278" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11206-j9icarsw-v2/imageContent-11206-j9icarsw-m2.png",Good News Today
${base}/tplay/${username}/mpd/278|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/204
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts204" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-846-j5m9p55k-v1/imageContent-846-j5m9p55k-m1.png",CNBC Awaaz
${base}/tplay/${username}/mpd/204|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/213
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts213" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SANSTV1_Thumbnail-v3/SANSTV1_Thumbnail.png",Sansad TV 1
${base}/tplay/${username}/mpd/213|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/212
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts212" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SANSTV2_Thumbnail-v2/SANSTV2_Thumbnail.png",Sansad TV 2
${base}/tplay/${username}/mpd/212|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/208
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts208" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-834-j5m9nrrs-v1/imageContent-834-j5m9nrrs-m1.png",NDTV 24x7
${base}/tplay/${username}/mpd/208|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/547
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts547" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11853-j9l1tvhs-v4/imageContent-11853-j9l1tvhs-m5.png",Times Now World
${base}/tplay/${username}/mpd/547|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/90
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts90" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-303-j5ji8zco-v3/imageContent-303-j5ji8zco-m3.png",TIMES NOW
${base}/tplay/${username}/mpd/90|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-3-j5dkuhwo-v1/imageContent-3-j5dkuhwo-m2.png",INDIA TODAY
${base}/tplay/${username}/mpd/1|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/206
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts206" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-843-j5m9oyzc-v1/imageContent-843-j5m9oyzc-m1.png",CNN News18.
${base}/tplay/${username}/mpd/206|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/189
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts189" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8012-j7a2doxc-v1/imageContent-8012-j7a2doxc-m1.png",NewsX
${base}/tplay/${username}/mpd/189|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/591
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts591" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12189-j9plqlf4-v1/imageContent-12189-j9plqlf4-m1.png",Mirror Now
${base}/tplay/${username}/mpd/591|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/255
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts255" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9000-j7rkz0m0-v1/imageContent-9000-j7rkz0m0-m1.png",WION
${base}/tplay/${username}/mpd/255|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/72
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts72" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-231-j5fxh0ag-v1/imageContent-231-j5fxh0ag-m1.png",REPUBLIC TV
${base}/tplay/${username}/mpd/72|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/304
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts304" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11284-j9j4sn4o-v2/imageContent-11284-j9j4sn4o-m2.png",CNBC TV18
${base}/tplay/${username}/mpd/304|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/324
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts324" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DDIND_Thumbnail.png-v4/DDIND_Thumbnail.png.png",DD India
${base}/tplay/${username}/mpd/324|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/93
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts93" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NDTPRNW_Thumbnail-v3/NDTPRNW_Thumbnail.png",NDTV Profit Prime
${base}/tplay/${username}/mpd/93|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/168
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts168" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-731-j5l3muhs-v1/imageContent-731-j5l3muhs-m1.png",CNBC TV18 Prime HD
${base}/tplay/${username}/mpd/168|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/88
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts88" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-6904-j6vreaps-v1/imageContent-6904-j6vreaps-m1.png",ET NOW
${base}/tplay/${username}/mpd/88|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1136
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1136" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BLOOTE_Thumbnail-v1/BLOOTE_Thumbnail.png",Bloomberg Television
${base}/tplay/${username}/mpd/1136|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/243
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts243" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-4154-j69pdmvk-v1/imageContent-4154-j69pdmvk-m1.png",CNN International
${base}/tplay/${username}/mpd/243|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/188
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts188" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BBCWNW_Thumbnail-v3/BBCWNW_Thumbnail.png",BBC World News
${base}/tplay/${username}/mpd/188|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/190
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts190" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-789-j5m5m0uw-v1/imageContent-789-j5m5m0uw-m1.png",Al Jazeera
${base}/tplay/${username}/mpd/190|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/157
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts157" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-548-j5kxtaig-v1/imageContent-548-j5kxtaig-m1.png",Channel News Asia
${base}/tplay/${username}/mpd/157|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/131
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts131" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-435-j5jsyz6o-v1/imageContent-435-j5jsyz6o-m1.png",France 24
${base}/tplay/${username}/mpd/131|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/65
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts65" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-204-j5ftndtc-v1/imageContent-204-j5ftndtc-m1.png",TV5 Monde Asie
${base}/tplay/${username}/mpd/65|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/60
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts60" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-186-j5fsr1go-v1/imageContent-186-j5fsr1go-m1.png",DW
${base}/tplay/${username}/mpd/60|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/98
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts98" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-312-j5jjsfhs-v1/imageContent-312-j5jjsfhs-m1.png",Russia Today
${base}/tplay/${username}/mpd/98|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/976
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts976" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69827-l1dh5izk-v1/imageContent-69827-l1dh5izk-m1.png",NHK World Japan
${base}/tplay/${username}/mpd/976|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/587
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts587" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35365-jr3xz4uo-v5/imageContent-35365-jr3xz4uo-m6.png",Super Hungama
${base}/tplay/${username}/mpd/587|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/114
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts114" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1356-j5tdnwmw-v1/imageContent-1356-j5tdnwmw-m1.png",Disney
${base}/tplay/${username}/mpd/114|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/71
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts71" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25721-jia4i70o-v2/imageContent-25721-jia4i70o-m3.PNG",Tata Play English in Hindi
${base}/tplay/${username}/mpd/71|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/433
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts433" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11658-j9k5lvgo-v1/imageContent-11658-j9k5lvgo-m1.png",Nick HD+
${base}/tplay/${username}/mpd/433|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/138
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts138" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-465-j5jw9va0-v1/imageContent-465-j5jw9va0-m1.png",Nick
${base}/tplay/${username}/mpd/138|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/626
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts626" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-13094-jbdzlsfs-v2/imageContent-13094-jbdzlsfs-m2.png",Tata Play Fun Learn Preschool
${base}/tplay/${username}/mpd/626|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/627
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts627" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-13097-jbdzn9og-v2/imageContent-13097-jbdzn9og-m2.png",Tata Play Fun Learn Junior
${base}/tplay/${username}/mpd/627|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/681
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts681" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-34164-jok06xoo-v1/imageContent-34164-jok06xoo-m1.png",Cartoon Network HD+
${base}/tplay/${username}/mpd/681|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/238
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts238" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11161-j99h67u8-v1/imageContent-11161-j99h67u8-m1.png",Cartoon Network
${base}/tplay/${username}/mpd/238|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/239
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts239" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-2694-j638bugw-v1/imageContent-2694-j638bugw-m1.png",Pogo
${base}/tplay/${username}/mpd/239|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/119
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts119" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-24724-jgvwokqw-v1/imageContent-24724-jgvwokqw-m1.png",Discovery Kids
${base}/tplay/${username}/mpd/119|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/127
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts127" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8018-j7a7n1a8-v1/imageContent-8018-j7a7n1a8-m1.png",Sonic
${base}/tplay/${username}/mpd/127|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/45
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts45" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-132-j5fpedbs-v4/imageContent-132-j5fpedbs-m6.png",SONY YAY!
${base}/tplay/${username}/mpd/45|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/994
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts994" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-71550-l4zi50uw-v2/imageContent-71550-l4zi50uw-m5.png",Tata Play Toons+
${base}/tplay/${username}/mpd/994|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/867
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts867" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-57985-khvdchrs-v2/imageContent-57985-khvdchrs-m2.png",Gubbare
${base}/tplay/${username}/mpd/867|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1340
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1340" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ETVBBHD_Thumbnail-v1/ETVBBHD_Thumbnail.png",ETV Bal Bharat HD
${base}/tplay/${username}/mpd/1340|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/905
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts905" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62236-kny7yzaw-v1/imageContent-62236-kny7yzaw-m1.png",ETV Bal Bharat
${base}/tplay/${username}/mpd/905|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1363
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1363" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPANML_Thumbnail-v2/TPANML_Thumbnail.png",Tata Play Anime Local
${base}/tplay/${username}/mpd/1363|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/118
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts118" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-390-j5jpps1s-v1/imageContent-390-j5jpps1s-m1.png",Nick Jr
${base}/tplay/${username}/mpd/118|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/144
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts144" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35368-jr3xz7xs-v1/imageContent-35368-jr3xz7xs-m1.png",Disney Junior
${base}/tplay/${username}/mpd/144|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/816
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts816" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52868-k9af4lxs-v1/imageContent-52868-k9af4lxs-m1.png",CBeeBies
${base}/tplay/${username}/mpd/816|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/111
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts111" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-352-j5jmrkqw-v2/imageContent-352-j5jmrkqw-m2.png",Tata Play Smart Manager
${base}/tplay/${username}/mpd/111|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/167
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts167" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-703-j5l1wgco-v2/imageContent-703-j5l1wgco-m2.png",Tata Play Vedic Maths
${base}/tplay/${username}/mpd/167|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/605
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts605" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12234-j9qoqc54-v1/imageContent-12234-j9qoqc54-m1.png",National Geographic HD
${base}/tplay/${username}/mpd/605|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/137
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts137" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-462-j5jw44hk-v2/imageContent-462-j5jw44hk-m3.png",National Geographic
${base}/tplay/${username}/mpd/137|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/413
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts413" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11631-j9k0ndjc-v1/imageContent-11631-j9k0ndjc-m1.png",Nat Geo Wild HD
${base}/tplay/${username}/mpd/413|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/184
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts184" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-438-j5jt26xc-v2/imageContent-438-j5jt26xc-m2.png",Nat Geo Wild
${base}/tplay/${username}/mpd/184|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/341
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts341" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11396-j9jq7jg0-v1/imageContent-11396-j9jq7jg0-m1.png",Discovery HD World
${base}/tplay/${username}/mpd/341|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/219
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts219" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-876-j5mcolzc-v2/imageContent-876-j5mcolzc-m2.png",Discovery Channel
${base}/tplay/${username}/mpd/219|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/287
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts287" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-44915-jzuyh3w0-v1/imageContent-44915-jzuyh3w0-m1.png",Animal Planet HD World
${base}/tplay/${username}/mpd/287|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/130
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts130" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-432-j5jsx754-v4/imageContent-432-j5jsx754-m4.png",Animal Planet
${base}/tplay/${username}/mpd/130|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/113
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts113" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-369-j5jo9i3s-v1/imageContent-369-j5jo9i3s-m1.png",Discovery Science
${base}/tplay/${username}/mpd/113|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/616
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts616" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12267-j9qx2si0-v3/imageContent-12267-j9qx2si0-m3.png",History TV18 HD
${base}/tplay/${username}/mpd/616|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/172
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts172" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-745-j5l54bnc-v2/imageContent-745-j5l54bnc-m2.png",History TV18
${base}/tplay/${username}/mpd/172|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/460
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts460" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SOBBHD1_Thumbnail-v4/SOBBHD1_Thumbnail.png",SONY BBC Earth HD
${base}/tplay/${username}/mpd/460|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/158
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts158" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SOBB_Thumbnail-v6/SOBB_Thumbnail.png",SONY BBC Earth
${base}/tplay/${username}/mpd/158|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/923
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts923" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-63764-kr1kzw28-v2/imageContent-63764-kr1kzw28-m2.png",TravelXP 4K HDR
${base}/tplay/${username}/mpd/923|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/126
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts126" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EPI_Thumbnail-v2/EPI_Thumbnail.png",EPIC
${base}/tplay/${username}/mpd/126|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/646
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts646" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23855-jg9jt83c-v2/imageContent-23855-jg9jt83c-m8.png",DD Gyan Darshan
${base}/tplay/${username}/mpd/646|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/480
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts480" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11858-j9l1v6k8-v3/imageContent-11858-j9l1v6k8-m4.png",TLC HD
${base}/tplay/${username}/mpd/480|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/135
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts135" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-453-j5jtup5s-v2/imageContent-453-j5jtup5s-m2.png",TLC
${base}/tplay/${username}/mpd/135|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/136
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts136" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-42020-jxb7qjw8-v1/imageContent-42020-jxb7qjw8-m1.png",GOOD TiMES
${base}/tplay/${username}/mpd/136|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/228
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts228" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-967-j5mr8tw8-v1/imageContent-967-j5mr8tw8-m1.png",Discovery Turbo
${base}/tplay/${username}/mpd/228|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/484
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts484" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11862-j9l2p61c-v1/imageContent-11862-j9l2p61c-m1.png",Travelxp HD
${base}/tplay/${username}/mpd/484|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/55
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts55" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-157-j5frd4e8-v1/imageContent-157-j5frd4e8-m1.png",Travelxp
${base}/tplay/${username}/mpd/55|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/117
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts117" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-384-j5jpj9hc-v1/imageContent-384-j5jpj9hc-m1.png",Food Food
${base}/tplay/${username}/mpd/117|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/227
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts227" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-959-j5mipsnk-v1/imageContent-959-j5mipsnk-m1.png",Fashion TV
${base}/tplay/${username}/mpd/227|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/735
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts735" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-44321-jz2zb8pk-v3/imageContent-44321-jz2zb8pk-m3.png",Tata Play Ibaadat
${base}/tplay/${username}/mpd/735|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/406
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts406" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11610-j9jzore8-v2/imageContent-11610-j9jzore8-m2.png",MTV HD
${base}/tplay/${username}/mpd/406|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/103
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts103" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-330-j5jl5on4-v2/imageContent-330-j5jl5on4-m2.png",MTV
${base}/tplay/${username}/mpd/103|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/139
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts139" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-468-j5jwdbi8-v1/imageContent-468-j5jwdbi8-m1.png",9XM
${base}/tplay/${username}/mpd/139|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/96
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts96" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-24696-jgrq09a8-v1/imageContent-24696-jgrq09a8-m1.png",Zoom
${base}/tplay/${username}/mpd/96|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/224
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts224" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-946-j5mip6a0-v1/imageContent-946-j5mip6a0-m1.png",E24
${base}/tplay/${username}/mpd/224|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/9
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts9" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-24-j5fb33y0-v1/imageContent-24-j5fb33y0-m1.png",B4U Music
${base}/tplay/${username}/mpd/9|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/17
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts17" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-57-j5fdr2f4-v1/imageContent-57-j5fdr2f4-m1.png",Mastiii
${base}/tplay/${username}/mpd/17|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/517
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts517" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11993-j9luua9c-v1/imageContent-11993-j9luua9c-m1.png",Zing
${base}/tplay/${username}/mpd/517|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/39
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts39" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-102-j5fl5pyg-v1/imageContent-102-j5fl5pyg-m1.png",9X Jalwa
${base}/tplay/${username}/mpd/39|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/733
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts733" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/Showbox_Thumbnail-v2/Showbox_Thumbnail.png",Showbox
${base}/tplay/${username}/mpd/733|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/742
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts742" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TSARAD_Thumbnail-v6/TSARAD_Thumbnail.png",Tata Play Aradhana
${base}/tplay/${username}/mpd/742|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/38
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts38" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-105-j5fl5t1k-v1/imageContent-105-j5fl5t1k-m1.png",Aastha
${base}/tplay/${username}/mpd/38|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/43
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts43" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-123-j5fnf1fc-v1/imageContent-123-j5fnf1fc-m1.png",Sanskar
${base}/tplay/${username}/mpd/43|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/446
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts446" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11725-j9kw030w-v4/imageContent-11725-j9kw030w-m4.png",Paras Gold One
${base}/tplay/${username}/mpd/446|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/397
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts397" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11590-j9jyx4so-v1/imageContent-11590-j9jyx4so-m1.png",MH One Shraddha
${base}/tplay/${username}/mpd/397|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/447
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts447" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11746-j9kwfmfs-v2/imageContent-11746-j9kwfmfs-m2.png",Sadhna TV
${base}/tplay/${username}/mpd/447|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/385
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts385" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11547-j9ju62m8-v3/imageContent-11547-j9ju62m8-m3.png",Sharnam TV
${base}/tplay/${username}/mpd/385|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/420
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts420" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11664-j9kcouh4-v1/imageContent-11664-j9kcouh4-m1.png",Peace of Mind
${base}/tplay/${username}/mpd/420|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/373
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts373" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11507-j9jto5k0-v1/imageContent-11507-j9jto5k0-m1.png",Jinvani Channel
${base}/tplay/${username}/mpd/373|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/288
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts288" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ARIH_Thumbnail-v2/ARIH_Thumbnail.png",Dharma Sandesh
${base}/tplay/${username}/mpd/288|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/594
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts594" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12196-j9q3ez54-v1/imageContent-12196-j9q3ez54-m1.png",Ishwar TV
${base}/tplay/${username}/mpd/594|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/456
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts456" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11767-j9kwretk-v1/imageContent-11767-j9kwretk-m1.png",Satsang TV
${base}/tplay/${username}/mpd/456|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/458
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts458" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11775-j9kwuk8w-v1/imageContent-11775-j9kwuk8w-m1.png",Shubh TV
${base}/tplay/${username}/mpd/458|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1372
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1372" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BKSR_Thumbnail-v1/BKSR_Thumbnail.png",Bhaktisagar
${base}/tplay/${username}/mpd/1372|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/283
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts283" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11212-j9icd8jc-v1/imageContent-11212-j9icd8jc-m1.png",Aastha Bhajan
${base}/tplay/${username}/mpd/283|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/500
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts500" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11903-j9l4wxy8-v1/imageContent-11903-j9l4wxy8-m1.png",Vedic
${base}/tplay/${username}/mpd/500|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/728
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts728" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-43103-jxzlrb0o-v2/imageContent-43103-jxzlrb0o-m2.png",Subharti TV
${base}/tplay/${username}/mpd/728|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/775
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts775" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11408-j9jqmlvs-v6/imageContent-11408-j9jqmlvs-m4.png",DIVYA
${base}/tplay/${username}/mpd/775|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/935
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts935" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65100-kspm2814-v1/imageContent-65100-kspm2814-m2.png",Awakening
${base}/tplay/${username}/mpd/935|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/911
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts911" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62610-koxujv2g-v2/imageContent-62610-koxujv2g-m3.png",Santwani
${base}/tplay/${username}/mpd/911|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/969
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts969" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69024-kzo68h3c-v1/imageContent-69024-kzo68h3c-m1.png",Aadinath TV
${base}/tplay/${username}/mpd/969|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/802
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts802" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/STU1PLS_Thumbnail-v2/STU1PLS_Thumbnail.png",Studio One +
${base}/tplay/${username}/mpd/802|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/837
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts837" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/HareKrsna_Thumbnail-v1/HareKrsna_Thumbnail.png",Hare Krsna
${base}/tplay/${username}/mpd/837|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/790
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts790" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-48807-k4m7ud0o-v2/imageContent-48807-k4m7ud0o-m2.png",Ek Onkar
${base}/tplay/${username}/mpd/790|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/970
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts970" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69027-kzo69re0-v1/imageContent-69027-kzo69re0-m2.png",MH One Dil Se
${base}/tplay/${username}/mpd/970|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/814
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts814" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52853-k982u9ts-v1/imageContent-52853-k982u9ts-m1.png",Zee Biskope
${base}/tplay/${username}/mpd/814|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/830
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts830" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-55553-kdzetu0o-v3/imageContent-55553-kdzetu0o-m8.png",Filamchi Bhojpuri
${base}/tplay/${username}/mpd/830|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/181
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts181" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-768-j5m31cfs-v1/imageContent-768-j5m31cfs-m1.png",Bhojpuri Cinema
${base}/tplay/${username}/mpd/181|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/431
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts431" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/OSMOV_Thumbnail-v3/OSMOV_Thumbnail.png",Oscar Movies Bhojpuri.
${base}/tplay/${username}/mpd/431|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/729
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts729" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-43109-jxzlyrjc-v1/imageContent-43109-jxzlyrjc-m1.png",B4U Bhojpuri
${base}/tplay/${username}/mpd/729|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/899
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts899" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62150-knicubns-v2/imageContent-62150-knicubns-m2.png",Pasand
${base}/tplay/${username}/mpd/899|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1165
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1165" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/RPCHK_Thumbnail-v2/RPCHK_Thumbnail.png",Raapchik
${base}/tplay/${username}/mpd/1165|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/838
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts838" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-56320-kf6aheeo-v2/imageContent-56320-kf6aheeo-m3.png",Kashish News
${base}/tplay/${username}/mpd/838|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/79
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts79" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23223-jeyhnzfs-v1/imageContent-23223-jeyhnzfs-m1.png",News18 Uttar Pradesh Uttarakhand
${base}/tplay/${username}/mpd/79|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/637
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts637" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-21315-je85i72w-v1/imageContent-21315-je85i72w-m5.png",Zee Uttar Pradesh Uttarakhand
${base}/tplay/${username}/mpd/637|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/166
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts166" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23206-jey39grs-v1/imageContent-23206-jey39grs-m2.png",News18 Bihar Jharkhand
${base}/tplay/${username}/mpd/166|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/20
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts20" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11140-j96syfuo-v1/imageContent-11140-j96syfuo-m1.png",Zee Bihar Jharkhand
${base}/tplay/${username}/mpd/20|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/30
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts30" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9007-j7ss7x80-v1/imageContent-9007-j7ss7x80-m1.png",India News UP UK
${base}/tplay/${username}/mpd/30|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/613
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts613" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12252-j9qrkgu8-v3/imageContent-12252-j9qrkgu8-m2.png",News State UP Uttarakhand
${base}/tplay/${username}/mpd/613|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/827
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts827" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-55124-kd89b0f4-v1/imageContent-55124-kd89b0f4-m4.png",Sadhna Plus News
${base}/tplay/${username}/mpd/827|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1267
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1267" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/HNNNEWS_Thumbnail-v1/HNNNEWS_Thumbnail.png",HNN News
${base}/tplay/${username}/mpd/1267|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1344
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1344" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NAXNEWS_Thumbnail-v1/NAXNEWS_Thumbnail.png",Naxatra News
${base}/tplay/${username}/mpd/1344|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1213
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1213" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DDUK_Thumbnail-v1/DDUK_Thumbnail.png",DD Uttarakhand
${base}/tplay/${username}/mpd/1213|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/316
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts316" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DDBH_Thumbnail-v2/DDBH_Thumbnail.png",DD Bharati
${base}/tplay/${username}/mpd/316|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/339
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts339" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11389-j9jq2ybk-v1/imageContent-11389-j9jq2ybk-m1.png",DD Uttar Pradesh
${base}/tplay/${username}/mpd/339|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/317
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts317" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11321-j9jlxaz4-v1/imageContent-11321-j9jlxaz4-m1.png",DD Bihar
${base}/tplay/${username}/mpd/317|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/203
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts203" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23266-jez523so-v1/imageContent-23266-jez523so-m2.png",News18 Madhya Pradesh Chhattisgarh
${base}/tplay/${username}/mpd/203|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/512
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts512" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11981-j9lunvjs-v1/imageContent-11981-j9lunvjs-m1.png",Zee Madhya Pradesh Chattisgarh
${base}/tplay/${username}/mpd/512|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/27
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts27" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-78-j5fikkk8-v1/imageContent-78-j5fikkk8-m1.png",IBC 24
${base}/tplay/${username}/mpd/27|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/652
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts652" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25494-ji1a6ym0-v2/imageContent-25494-ji1a6ym0-m2.png",Bansal News
${base}/tplay/${username}/mpd/652|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/698
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts698" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35622-jrr5mvig-v1/imageContent-35622-jrr5mvig-m1.png",INH 24X7
${base}/tplay/${username}/mpd/698|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/222
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts222" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8971-j7rffd40-v1/imageContent-8971-j7rffd40-m1.png",India News MP CG
${base}/tplay/${username}/mpd/222|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/643
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts643" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31191-jldnwhhs-v1/imageContent-31191-jldnwhhs-m1.png",News State MP CG
${base}/tplay/${username}/mpd/643|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/577
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts577" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12143-j9p7vx9c-v1/imageContent-12143-j9p7vx9c-m1.png",Swaraj Express SMBC
${base}/tplay/${username}/mpd/577|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/829
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts829" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-55112-kd88u9so-v1/imageContent-55112-kd88u9so-m2.png",Sadhna News MP CG
${base}/tplay/${username}/mpd/829|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/902
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts902" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62181-knrp5974-v1/imageContent-62181-knrp5974-m1.png",News 24 Madhyapradesh Chattisgarh
${base}/tplay/${username}/mpd/902|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/937
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts937" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65108-ksr7d028-v1/imageContent-65108-ksr7d028-m2.png",Anaadi TV
${base}/tplay/${username}/mpd/937|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1009
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1009" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72340-l6nkcw74-v1/imageContent-72340-l6nkcw74-m1.png",TV27 News
${base}/tplay/${username}/mpd/1009|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1074
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1074" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TV24N_Thumbnail-v2/TV24N_Thumbnail.png",TV 24
${base}/tplay/${username}/mpd/1074|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1159
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1159" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NDTVMP_Thumbnail-v2/NDTVMP_Thumbnail.png",NDTV MPCG
${base}/tplay/${username}/mpd/1159|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1315
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1315" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/VISTAARMPCG_Thumbnail-v2/VISTAARMPCG_Thumbnail.png",Vistaar News
${base}/tplay/${username}/mpd/1315|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1353
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1353" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Regional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DPNEWS_Thumbnail-v2/DPNEWS_Thumbnail.png",DA News Plus
${base}/tplay/${username}/mpd/1353|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1376
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1376" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BS_TV_Thumbnail-v1/BS_TV_Thumbnail.png",BS TV
${base}/tplay/${username}/mpd/1376|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1400
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1400" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SAPNEWS_Thumbnail-v3/SAPNEWS_Thumbnail.png",Sadhna Prime News
${base}/tplay/${username}/mpd/1400|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/330
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts330" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11351-j9jpmdvc-v1/imageContent-11351-j9jpmdvc-m1.png",DD Madhya Pradesh
${base}/tplay/${username}/mpd/330|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/205
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts205" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23226-jeyiac80-v1/imageContent-23226-jeyiac80-m1.png",News18 Rajasthan
${base}/tplay/${username}/mpd/205|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/583
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts583" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12158-j9pd883k-v1/imageContent-12158-j9pd883k-m1.png",Zee Rajasthan News
${base}/tplay/${username}/mpd/583|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/650
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts650" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25048-jhir0kko-v1/imageContent-25048-jhir0kko-m1.png",First India Rajasthan
${base}/tplay/${username}/mpd/650|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/14
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts14" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9012-j7ssufeo-v1/imageContent-9012-j7ssufeo-m1.png",India News Rajasthan
${base}/tplay/${username}/mpd/14|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/870
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts870" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-58492-kixkb2ug-v1/imageContent-58492-kixkb2ug-m1.png",Jan TV
${base}/tplay/${username}/mpd/870|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1075
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1075" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SACHB_Thumbnail-v2/SACHB_Thumbnail.png",Sach Bedhadak
${base}/tplay/${username}/mpd/1075|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1152
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1152" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NDTVRA_Thumbnail-v3/NDTVRA_Thumbnail.png",NDTV Rajasthan
${base}/tplay/${username}/mpd/1152|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/332
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts332" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11375-j9jpws3k-v1/imageContent-11375-j9jpws3k-m1.png",DD Rajasthan
${base}/tplay/${username}/mpd/332|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/354
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts354" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ETVUR_Thumbnail-v4/ETVUR_Thumbnail.png",News18 Jammu Kashmir Ladakh Himachal Haryana
${base}/tplay/${username}/mpd/354|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/518
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts518" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ZESA_Thumbnail-v4/ZESA_Thumbnail.png",Salaam TV
${base}/tplay/${username}/mpd/518|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/161
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts161" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-7906-j7684flk-v1/imageContent-7906-j7684flk-m1.png",Channel WIN
${base}/tplay/${username}/mpd/161|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/365
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts365" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11455-j9jqz61k-v2/imageContent-11455-j9jqz61k-m4.png",Gulistan News
${base}/tplay/${username}/mpd/365|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/338
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts338" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11384-j9jq29mo-v2/imageContent-11384-j9jq29mo-m3.png",DD Urdu
${base}/tplay/${username}/mpd/338|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/308
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts308" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-16764-jcix3xpc-v2/imageContent-16764-jcix3xpc-m2.PNG",Colors Marathi HD
${base}/tplay/${username}/mpd/308|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/134
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts134" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-450-j5jtumug-v3/imageContent-450-j5jtumug-m3.png",Colors Marathi
${base}/tplay/${username}/mpd/134|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/501
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts501" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11930-j9l5hv1c-v1/imageContent-11930-j9l5hv1c-m1.png",Zee Marathi HD
${base}/tplay/${username}/mpd/501|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/251
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts251" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8846-j7pq3jmo-v2/imageContent-8846-j7pq3jmo-m3.png",Zee Marathi
${base}/tplay/${username}/mpd/251|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/622
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts622" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12925-jb5xf2nc-v2/imageContent-12925-jb5xf2nc-m2.png",Tata Play Marathi Cinema
${base}/tplay/${username}/mpd/622|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/469
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts469" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/9rq9xyc/20240721-153133.png",Star Pravah HD
${base}/tplay/${username}/mpd/469|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/248
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts248" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11136-j96p4r28-v1/imageContent-11136-j96p4r28-m1.png",Zee YUVA
${base}/tplay/${username}/mpd/248|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/658
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts658" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-30959-jky1nic8-v2/imageContent-30959-jky1nic8-m3.png",Sony Marathi
${base}/tplay/${username}/mpd/658|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1444
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1444" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPMARCLS_Thumbnail-v1/TPMARCLS_Thumbnail.png",Tata Play Marathi Classics
${base}/tplay/${username}/mpd/1444|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/515
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts515" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11987-j9lura8g-v1/imageContent-11987-j9lura8g-m1.png",Zee Talkies HD
${base}/tplay/${username}/mpd/515|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/249
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts249" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8842-j7pp0me8-v2/imageContent-8842-j7pp0me8-m2.png",Zee Talkies
${base}/tplay/${username}/mpd/249|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/192
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts192" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-801-j5m7jg34-v2/imageContent-801-j5m7jg34-m2.png",Fakt Marathi
${base}/tplay/${username}/mpd/192|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/800
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts800" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49025-k5lxf84o-v2/imageContent-49025-k5lxf84o-m2.png",Shemaroo MarathiBana
${base}/tplay/${username}/mpd/800|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/155
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts155" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/STMJNW_Thumbnail-v3/STMJNW_Thumbnail.png",ABP Majha
${base}/tplay/${username}/mpd/155|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/140
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts140" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12140-j9p7vga8-v1/imageContent-12140-j9p7vga8-m1.png",News18 Lokmat
${base}/tplay/${username}/mpd/140|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/261
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts261" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11156-j96xbrfk-v1/imageContent-11156-j96xbrfk-m1.png",Zee 24 Taas
${base}/tplay/${username}/mpd/261|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/546
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts546" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12056-j9o5hia8-v1/imageContent-12056-j9o5hia8-m1.png",Saam TV
${base}/tplay/${username}/mpd/546|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/233
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts233" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1014-j5ngcjug-v2/imageContent-1014-j5ngcjug-m2.png",Jai Maharashtra
${base}/tplay/${username}/mpd/233|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/97
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts97" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-315-j5jjsht4-v2/imageContent-315-j5jjsht4-m2.png",TV9 Marathi
${base}/tplay/${username}/mpd/97|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/826
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts826" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/LKSHIMAR_Thumbnail-v4/LKSHIMAR_Thumbnail.png",Lokshahi Marathi
${base}/tplay/${username}/mpd/826|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1102
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1102" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PDNEWS_Thumbnail-v2/PDNEWS_Thumbnail.png",Pudhari News
${base}/tplay/${username}/mpd/1102|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1343
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1343" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NDTVMAR_Thumbnail-v1/NDTVMAR_Thumbnail.png",NDTV MARATHI
${base}/tplay/${username}/mpd/1343|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/336
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts336" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11378-j9jq0f9s-v1/imageContent-11378-j9jq0f9s-m1.png",DD Sahyadri
${base}/tplay/${username}/mpd/336|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/217
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts217" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-870-j5mb6j80-v1/imageContent-870-j5mb6j80-m1.png",Sangeet Marathi
${base}/tplay/${username}/mpd/217|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/305
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts305" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11287-j9j4tl2w-v2/imageContent-11287-j9j4tl2w-m3.png",Colors Bangla HD
${base}/tplay/${username}/mpd/305|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/26
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts26" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-75-j5fikj0o-v1/imageContent-75-j5fikj0o-m1.png",Colors Bangla
${base}/tplay/${username}/mpd/26|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/522
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts522" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11970-j9luk5ag-v1/imageContent-11970-j9luk5ag-m1.png",Zee Bangla HD
${base}/tplay/${username}/mpd/522|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/468
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts468" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/STJHD_Thumbnail-v3/STJHD_Thumbnail.png",Star Jalsha HD
${base}/tplay/${username}/mpd/468|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/34
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts34" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-94-j5fjveio-v3/imageContent-94-j5fjveio-m2.png",SONY AATH
${base}/tplay/${username}/mpd/34|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/129
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts129" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-267-j5j8x17s-v1/imageContent-267-j5j8x17s-m2.png",Aakaash Aath
${base}/tplay/${username}/mpd/129|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/3
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts3" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9-j5f6oezc-v1/imageContent-9-j5f6oezc-m1.png",Ruposhi Bangla
${base}/tplay/${username}/mpd/3|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/788
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts788" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-48494-k3zd1a80-v1/imageContent-48494-k3zd1a80-m4.png",Enterr10 Bangla
${base}/tplay/${username}/mpd/788|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/537
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts537" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11514-j9jtp5tk-v1/imageContent-11514-j9jtp5tk-m2.png",Jalsha Movies HD
${base}/tplay/${username}/mpd/537|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/254
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts254" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11009-j8xbk7js-v1/imageContent-11009-j8xbk7js-m1.png",Zee Bangla Cinema
${base}/tplay/${username}/mpd/254|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/896
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts896" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/CLRBANG_Thumbnail-v2/CLRBANG_Thumbnail.png",Colors Bangla Cinema
${base}/tplay/${username}/mpd/896|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/379
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts379" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-27017-jjo92wyg-v1/imageContent-27017-jjo92wyg-m1.png",Khushboo Bangla
${base}/tplay/${username}/mpd/379|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1132
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1132" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/RONGEEN_Thumbnail-v1/RONGEEN_Thumbnail.png",Rongeen TV
${base}/tplay/${username}/mpd/1132|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/102
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts102" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-321-j5jl5g5k-v2/imageContent-321-j5jl5g5k-m2.png",ABP Ananda
${base}/tplay/${username}/mpd/102|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/258
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts258" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/1JssQY2/20240502-132414.png",Zee 24 Ghanta
${base}/tplay/${username}/mpd/258|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/381
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts381" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11533-j9jtxqgo-v1/imageContent-11533-j9jtxqgo-m1.png",Kolkata TV
${base}/tplay/${username}/mpd/381|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/23
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts23" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-22186-jenuxy6g-v2/imageContent-22186-jenuxy6g-m5.png",News18 Bangla
${base}/tplay/${username}/mpd/23|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/873
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts873" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-59401-kjudpa1c-v2/imageContent-59401-kjudpa1c-m3.png",TV9 Bangla
${base}/tplay/${username}/mpd/873|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/890
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts890" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-61251-klylf4u0-v2/imageContent-61251-klylf4u0-m9.png",Republic Bangla
${base}/tplay/${username}/mpd/890|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/207
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts207" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-852-j5m9xe80-v1/imageContent-852-j5m9xe80-m1.png",News Time Bangla
${base}/tplay/${username}/mpd/207|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/311
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts311" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11299-j9j61p1k-v1/imageContent-11299-j9j61p1k-m1.png",CTVN AKD Plus
${base}/tplay/${username}/mpd/311|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/648
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts648" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-24685-jgrl9bqg-v1/imageContent-24685-jgrl9bqg-m2.png",Calcutta News
${base}/tplay/${username}/mpd/648|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/368
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts368" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/C53c0gMH/News-Live-Bangla.png",News Live Bangla
${base}/tplay/${username}/mpd/368|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/314
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts314" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11314-j9j8kcxk-v1/imageContent-11314-j9j8kcxk-m1.png",DD Bangla
${base}/tplay/${username}/mpd/314|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/215
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts215" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-864-j5mava4o-v1/imageContent-864-j5mava4o-m1.png",Sangeet Bangla
${base}/tplay/${username}/mpd/215|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/635
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts635" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-21304-je859a3c-v1/imageContent-21304-je859a3c-m1.png",Zee Telugu HD
${base}/tplay/${username}/mpd/635|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/250
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts250" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8845-j7ppmm28-v3/imageContent-8845-j7ppmm28-m7.png",Zee Telugu
${base}/tplay/${username}/mpd/250|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/355
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts355" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11444-j9jqx6a8-v1/imageContent-11444-j9jqx6a8-m1.png",Gemini TV HD
${base}/tplay/${username}/mpd/355|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/956
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts956" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-25361-jhsvr3nc-v1/imageContent-25361-jhsvr3nc-m1.png",STAR Maa HD
${base}/tplay/${username}/mpd/956|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/359
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts359" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11418-j9jqpvxs-v1/imageContent-11418-j9jqpvxs-m1.png",ETV HD
${base}/tplay/${username}/mpd/359|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/145
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts145" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-492-j5jxvaeo-v1/imageContent-492-j5jxvaeo-m1.png",ETV Telugu
${base}/tplay/${username}/mpd/145|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/361
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts361" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11437-j9jqv7ao-v2/imageContent-11437-j9jqv7ao-m2.png",Gemini Life
${base}/tplay/${username}/mpd/361|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1342
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1342" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ETVPLHD_Thumbnail-v1/ETVPLHD_Thumbnail.png",ETV Plus HD
${base}/tplay/${username}/mpd/1342|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/352
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts352" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11423-j9jqqegg-v1/imageContent-11423-j9jqqegg-m1.png",ETV Plus
${base}/tplay/${username}/mpd/352|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/590
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts590" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12186-j9plqam8-v4/imageContent-12186-j9plqam8-m5.png",Telugu Naaptol
${base}/tplay/${username}/mpd/590|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/585
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts585" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12164-j9phk5iw-v1/imageContent-12164-j9phk5iw-m1.png",Vissa TV
${base}/tplay/${username}/mpd/585|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/645
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts645" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-23721-jg0fhacg-v2/imageContent-23721-jg0fhacg-m2.PNG",Tata Play English in Telugu
${base}/tplay/${username}/mpd/645|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1389
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1389" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/MAHAMAX_Thumbnail-v2/MAHAMAX_Thumbnail.png",Mahaa Max
${base}/tplay/${username}/mpd/1389|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/362
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts362" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11438-j9jqvyaw-v1/imageContent-11438-j9jqvyaw-m1.png",Gemini Movies HD
${base}/tplay/${username}/mpd/362|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/387
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts387" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-18348-jcqpx9ns-v1/imageContent-18348-jcqpx9ns-m1.PNG",Star Maa Movies HD
${base}/tplay/${username}/mpd/387|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/388
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts388" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11553-j9julvag-v3/imageContent-11553-j9julvag-m6.png",Star Maa Gold
${base}/tplay/${username}/mpd/388|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1168
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1168" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPHLTE_Thumbnail-v5/TPHLTE_Thumbnail.png",Tata Play Hollywood Local Telugu
${base}/tplay/${username}/mpd/1168|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/636
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts636" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-21307-je859sm0-v1/imageContent-21307-je859sm0-m2.png",Zee Cinemalu HD
${base}/tplay/${username}/mpd/636|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/252
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts252" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8849-j7pqmypc-v2/imageContent-8849-j7pqmypc-m3.png",Zee Cinemalu
${base}/tplay/${username}/mpd/252|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1341
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1341" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ETVCINHD_Thumbnail-v1/ETVCINHD_Thumbnail.png",ETV Cinema HD
${base}/tplay/${username}/mpd/1341|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/128
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts128" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-426-j5jsm1wo-v1/imageContent-426-j5jsm1wo-m1.png",ETV Cinema
${base}/tplay/${username}/mpd/128|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1073
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1073" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPTECL_Thumbnail-v1/TPTECL_Thumbnail.png",Tata Play Telugu Classics
${base}/tplay/${username}/mpd/1073|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/268
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts268" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ETVLI_Thumbnail-v5/ETVLI_Thumbnail.png",ETV Life
${base}/tplay/${username}/mpd/268|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/358
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts358" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11417-j9jqpcnc-v1/imageContent-11417-j9jqpcnc-m1.png",ETV Abhiruchi
${base}/tplay/${username}/mpd/358|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/596
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts596" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12260-j9qv0lz4-v1/imageContent-12260-j9qv0lz4-m1.png",Sakshi TV
${base}/tplay/${username}/mpd/596|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/146
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts146" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-498-j5jy7i80-v1/imageContent-498-j5jy7i80-m1.png",ETV Andhra Pradesh
${base}/tplay/${username}/mpd/146|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/320
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts320" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11329-j9jot000-v2/imageContent-11329-j9jot000-m2.png",TV5 News
${base}/tplay/${username}/mpd/320|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/11
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts11" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-30-j5fc0v80-v2/imageContent-30-j5fc0v80-m2.png",TV9 Telugu
${base}/tplay/${username}/mpd/11|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/160
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts160" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-586-j5kz3qkw-v1/imageContent-586-j5kz3qkw-m1.png",NTV Telugu
${base}/tplay/${username}/mpd/160|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/225
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts225" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-951-j5mipdzs-v1/imageContent-951-j5mipdzs-m1.png",ABN Andhra Jyothy
${base}/tplay/${username}/mpd/225|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/49
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts49" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-145-j5fpfoe8-v1/imageContent-145-j5fpfoe8-m1.png",T News
${base}/tplay/${username}/mpd/49|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/274
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts274" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11194-j9i4cz80-v1/imageContent-11194-j9i4cz80-m1.png",V6 Telugu
${base}/tplay/${username}/mpd/274|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/83
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts83" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-255-j5fz95pc-v1/imageContent-255-j5fz95pc-m1.png",ETV Telangana
${base}/tplay/${username}/mpd/83|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/349
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts349" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11470-j9jr4uio-v1/imageContent-11470-j9jr4uio-m1.png",HM TV
${base}/tplay/${username}/mpd/349|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/430
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts430" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11697-j9kjhxs0-v3/imageContent-11697-j9kjhxs0-m3.png",Raj News Telugu
${base}/tplay/${username}/mpd/430|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/266
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts266" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-17564-jclrk6pk-v1/imageContent-17564-jclrk6pk-m1.png",10 TV
${base}/tplay/${username}/mpd/266|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1027
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1027" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-73187-l8ou8wo8-v1/imageContent-73187-l8ou8wo8-m4.png",Swatantra TV
${base}/tplay/${username}/mpd/1027|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/774
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts774" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-47248-k1vn9ouw-v2/imageContent-47248-k1vn9ouw-m4.png",4tv News
${base}/tplay/${username}/mpd/774|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1099
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1099" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PR9NEWS_Thumbnail-v4/PR9NEWS_Thumbnail.png",Prime9 Plus
${base}/tplay/${username}/mpd/1099|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1100
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1100" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BGTVTEL_Thumbnail-v2/BGTVTEL_Thumbnail.png",BIG TV Telugu
${base}/tplay/${username}/mpd/1100|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1151
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1151" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/MHNEWS_Thumbnail-v1/MHNEWS_Thumbnail.png",MAHAA NEWS
${base}/tplay/${username}/mpd/1151|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1194
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1194" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BRKNEWS_Thumbnail-v1/BRKNEWS_Thumbnail.png",BRK News
${base}/tplay/${username}/mpd/1194|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1288
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1288" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ZTELNEWS_Thumbnail-v1/ZTELNEWS_Thumbnail.png",Zee Telugu News
${base}/tplay/${username}/mpd/1288|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/337
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts337" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11381-j9jq1pkg-v1/imageContent-11381-j9jq1pkg-m1.png",DD Saptagiri
${base}/tplay/${username}/mpd/337|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/548
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts548" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11392-j9jq3lgw-v3/imageContent-11392-j9jq3lgw-m2.png",DD Yadagiri
${base}/tplay/${username}/mpd/548|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/429
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts429" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11691-j9kj50i0-v1/imageContent-11691-j9kj50i0-m1.png",Raj Musix Telugu
${base}/tplay/${username}/mpd/429|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/290
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts290" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11242-j9irisyw-v2/imageContent-11242-j9irisyw-m2.png",Bhakti TV
${base}/tplay/${username}/mpd/290|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/445
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts445" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11745-j9kwb568-v2/imageContent-11745-j9kwb568-m3.png",Shubhavaarta TV
${base}/tplay/${username}/mpd/445|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/285
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts285" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11224-j9iclykw-v1/imageContent-11224-j9iclykw-m2.png",Aradana TV
${base}/tplay/${username}/mpd/285|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/351
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts351" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-33495-jnqw9k9c-v4/imageContent-33495-jnqw9k9c-m5.png",Swara Sagar
${base}/tplay/${username}/mpd/351|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/630
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts630" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-18536-jct505dc-v2/imageContent-18536-jct505dc-m2.png",Hindu Dharmam
${base}/tplay/${username}/mpd/630|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1378
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1378" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NRKHNTV_Thumbnail-v1/NRKHNTV_Thumbnail.png",Nireekshana TV
${base}/tplay/${username}/mpd/1378|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/521
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts521" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11960-j9lu9vow-v1/imageContent-11960-j9lu9vow-m1.png",Sun TV HD
${base}/tplay/${username}/mpd/521|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1260
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1260" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPTAMCL_Thumbnail-v1/TPTAMCL_Thumbnail.png",Tata Play Tamil Classics
${base}/tplay/${username}/mpd/1260|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/474
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts474" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11837-j9kzms9s-v2/imageContent-11837-j9kzms9s-m3.png",Sun Life
${base}/tplay/${username}/mpd/474|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/496
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts496" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11909-j9l52epk-v2/imageContent-11909-j9l52epk-m4.png",Star Vijay HD
${base}/tplay/${username}/mpd/496|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1167
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1167" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPHLT_Thumbnail-v4/TPHLT_Thumbnail.png",Tata Play Hollywood Local Tamil
${base}/tplay/${username}/mpd/1167|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/608
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts608" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11997-j9lux9ig-v1/imageContent-11997-j9lux9ig-m5.png",Zee Tamil HD
${base}/tplay/${username}/mpd/608|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/257
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts257" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9006-j7rlwsns-v2/imageContent-9006-j7rlwsns-m4.png",Zee Tamil
${base}/tplay/${username}/mpd/257|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/674
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts674" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-33814-jo5jba9s-v3/imageContent-33814-jo5jba9s-m3.PNG",Colors Tamil HD
${base}/tplay/${username}/mpd/674|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/418
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts418" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-21152-je6orzfk-v1/imageContent-21152-je6orzfk-m1.png",Colors Tamil
${base}/tplay/${username}/mpd/418|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/708
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts708" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-38738-juc4a1ig-v5/imageContent-38738-juc4a1ig-m8.png",Jaya TV HD
${base}/tplay/${username}/mpd/708|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/200
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts200" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-819-j5m8fsfs-v1/imageContent-819-j5m8fsfs-m1.png",Kalaignar TV
${base}/tplay/${username}/mpd/200|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/439
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts439" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11700-j9ksbotk-v1/imageContent-11700-j9ksbotk-m1.png",Raj TV
${base}/tplay/${username}/mpd/439|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/99
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts99" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-44904-jzu8ri4o-v1/imageContent-44904-jzu8ri4o-m1.png",D Tamil
${base}/tplay/${username}/mpd/99|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/426
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts426" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11679-j9khnqag-v1/imageContent-11679-j9khnqag-m1.png",Raj Digital Plus
${base}/tplay/${username}/mpd/426|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/37
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts37" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-111-j5fl5xo8-v1/imageContent-111-j5fl5xo8-m1.png",Mega TV
${base}/tplay/${username}/mpd/37|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/723
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts723" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-41267-jwjjvrt4-v5/imageContent-41267-jwjjvrt4-m7.png",Tamil Naaptol
${base}/tplay/${username}/mpd/723|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/499
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts499" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11900-j9l4vygg-v1/imageContent-11900-j9l4vygg-m1.png",Vasanth TV
${base}/tplay/${username}/mpd/499|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/611
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts611" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12244-j9qq7k1c-v1/imageContent-12244-j9qq7k1c-m1.png",Sirippoli
${base}/tplay/${username}/mpd/611|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/272
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts272" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11188-j9i480zc-v1/imageContent-11188-j9i480zc-m1.png",Polimer TV
${base}/tplay/${username}/mpd/272|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/392
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts392" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11565-j9jv0np4-v1/imageContent-11565-j9jv0np4-m1.png",Makkal TV
${base}/tplay/${username}/mpd/392|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/659
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts659" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31187-jldgeg1k-v2/imageContent-31187-jldgeg1k-m2.png",Vendhar TV
${base}/tplay/${username}/mpd/659|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1322
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1322" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/THANTIO_Thumbnail-v4/THANTIO_Thumbnail.png",Thanthi One
${base}/tplay/${username}/mpd/1322|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/380
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts380" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11536-j9jty5w8-v1/imageContent-11536-j9jty5w8-m1.png",KTV HD
${base}/tplay/${username}/mpd/380|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/201
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts201" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-816-j5m8dqd4-v1/imageContent-816-j5m8dqd4-m1.png",J Movies
${base}/tplay/${username}/mpd/201|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1182
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1182" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ZETIHD_Thumbnail-v2/ZETIHD_Thumbnail.png",Zee Thirai HD
${base}/tplay/${username}/mpd/1182|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/797
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts797" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49016-k5lx1za0-v2/imageContent-49016-k5lx1za0-m2.png",Zee Thirai
${base}/tplay/${username}/mpd/797|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/444
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts444" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11724-j9kvwnkg-v1/imageContent-11724-j9kvwnkg-m1.png",Travelxp Tamil
${base}/tplay/${username}/mpd/444|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/220
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts220" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-882-j5mdrg4o-v1/imageContent-882-j5mdrg4o-m1.png",Puthiya Thalaimurai
${base}/tplay/${username}/mpd/220|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/524
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts524" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11966-j9luich4-v1/imageContent-11966-j9luich4-m1.png",Thanthi TV
${base}/tplay/${username}/mpd/524|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/198
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts198" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-810-j5m84h14-v1/imageContent-810-j5m84h14-m1.png",Jaya Plus
${base}/tplay/${username}/mpd/198|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/509
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts509" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11942-j9lthi34-v1/imageContent-11942-j9lthi34-m1.png",Polimer News
${base}/tplay/${username}/mpd/509|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/58
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts58" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/JCPCTyH/20240729-221753.png",News18 Tamil Nadu
${base}/tplay/${username}/mpd/58|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/44
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts44" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-126-j5fnf4ig-v2/imageContent-126-j5fnf4ig-m2.png",Seithigal TV
${base}/tplay/${username}/mpd/44|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/525
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts525" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12002-j9nrtf08-v2/imageContent-12002-j9nrtf08-m2.png",Raj News Tamil.
${base}/tplay/${username}/mpd/525|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/455
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts455" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11764-j9kwqj6o-v1/imageContent-11764-j9kwqj6o-m1.png",Sathiyam TV
${base}/tplay/${username}/mpd/455|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/391
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts391" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/MAMUR_Thumbnail-v2/MAMUR_Thumbnail.png",MalaiMurasu Seithigal
${base}/tplay/${username}/mpd/391|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/702
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts702" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-37207-jswmhmpk-v1/imageContent-37207-jswmhmpk-m1.PNG",News J
${base}/tplay/${username}/mpd/702|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/968
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts968" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69018-kzo65wi0-v1/imageContent-69018-kzo65wi0-m2.png",News Tamil 24x7
${base}/tplay/${username}/mpd/968|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1317
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1317" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TAMILJNM_Thumbnail-v6/TAMILJNM_Thumbnail.png",Tamil Janam
${base}/tplay/${username}/mpd/1317|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/199
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts199" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-807-j5m7zoyo-v1/imageContent-807-j5m7zoyo-m1.png",Jaya Max
${base}/tplay/${username}/mpd/199|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/425
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts425" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11682-j9khxjoo-v1/imageContent-11682-j9khxjoo-m1.png",Raj Musix
${base}/tplay/${username}/mpd/425|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/647
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts647" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-24578-jgotgry0-v1/imageContent-24578-jgotgry0-m1.png",Isaiaruvi
${base}/tplay/${username}/mpd/647|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/411
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts411" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11616-j9k04eo0-v1/imageContent-11616-j9k04eo0-m1.png",Murasu TV
${base}/tplay/${username}/mpd/411|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/400
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts400" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11583-j9jype8w-v3/imageContent-11583-j9jype8w-m3.png",Mega Musiq
${base}/tplay/${username}/mpd/400|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/434
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts434" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11712-j9kt9fbs-v2/imageContent-11712-j9kt9fbs-m2.png",Jothi TV
${base}/tplay/${username}/mpd/434|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/390
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts390" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11562-j9juzmns-v1/imageContent-11562-j9juzmns-m1.png",Madha TV
${base}/tplay/${username}/mpd/390|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/282
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts282" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11230-j9icx1i0-v1/imageContent-11230-j9icx1i0-m1.png",Angel TV
${base}/tplay/${username}/mpd/282|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/408
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts408" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11622-j9k0845k-v2/imageContent-11622-j9k0845k-m2.png",Nambikkai TV
${base}/tplay/${username}/mpd/408|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1459
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1459" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPDeiveegam_Thumbnail-v1/TPDeiveegam_Thumbnail.png",Tata Play Deiveegam
${base}/tplay/${username}/mpd/1459|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/490
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts490" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11882-j9l3qcrs-v1/imageContent-11882-j9l3qcrs-m1.png",SVBC 2
${base}/tplay/${username}/mpd/490|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/334
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts334" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DDTAM_Thumbnail-v2/DDTAM_Thumbnail.png",DD Tamil
${base}/tplay/${username}/mpd/334|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/492
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts492" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11883-j9l3rjzc-v1/imageContent-11883-j9l3rjzc-m1.png",Udaya TV HD
${base}/tplay/${username}/mpd/492|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/612
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts612" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12249-j9qr87hc-v5/imageContent-12249-j9qr87hc-m5.png",Colors Kannada HD
${base}/tplay/${username}/mpd/612|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/108
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts108" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-345-j5jmkws0-v2/imageContent-345-j5jmkws0-m4.png",Colors Kannada
${base}/tplay/${username}/mpd/108|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/467
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts467" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11816-j9kz224o-v1/imageContent-11816-j9kz224o-m1.png",Star Suvarna HD
${base}/tplay/${username}/mpd/467|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/675
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts675" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-33827-jo5kcr1c-v4/imageContent-33827-jo5kcr1c-m5.png",Zee Kannada HD
${base}/tplay/${username}/mpd/675|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/256
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts256" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11030-j8yk2g3s-v1/imageContent-11030-j8yk2g3s-m1.png",Zee Kannada
${base}/tplay/${username}/mpd/256|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/372
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts372" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12323-jaa5pzxs-v1/imageContent-12323-jaa5pzxs-m1.png",Jeevan TV
${base}/tplay/${username}/mpd/372|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/533
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts533" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-18308-jcqnzl68-v1/imageContent-18308-jcqnzl68-m1.PNG",Colors SUPER
${base}/tplay/${username}/mpd/533|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/566
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts566" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-45791-k0696crk-v3/imageContent-45791-k0696crk-m5.png",Kannada Naaptol
${base}/tplay/${username}/mpd/566|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/940
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts940" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65190-ktai1xtk-v1/imageContent-65190-ktai1xtk-m1.png",SIRIKANNADA Alltime
${base}/tplay/${username}/mpd/940|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/231
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts231" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1002-j5nf74c0-v1/imageContent-1002-j5nf74c0-m1.png",Udaya Movies
${base}/tplay/${username}/mpd/231|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/540
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts540" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12038-j9o0554o-v2/imageContent-12038-j9o0554o-m2.png",Star Suvarna Plus
${base}/tplay/${username}/mpd/540|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/667
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts667" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31454-jmirfosw-v2/imageContent-31454-jmirfosw-m2.png",Colors Kannada Cinema
${base}/tplay/${username}/mpd/667|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1181
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1181" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/VQBQ4Ms/20240623-163952.png",Zee Picchar HD
${base}/tplay/${username}/mpd/1181|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/810
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts810" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52310-k7bd8ixk-v2/imageContent-52310-k7bd8ixk-m4.png",Zee Picchar
${base}/tplay/${username}/mpd/810|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/661
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts661" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31188-jldk0joo-v2/imageContent-31188-jldk0joo-m2.png",Public Movies
${base}/tplay/${username}/mpd/661|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/152
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts152" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-531-j5kuelug-v2/imageContent-531-j5kuelug-m2.png",TV9 Kannada
${base}/tplay/${username}/mpd/152|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/85
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts85" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9824-j85wb88o-v1/imageContent-9824-j85wb88o-m1.png",News18 Kannada
${base}/tplay/${username}/mpd/85|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/33
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts33" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-98-j5fjwu7s-v2/imageContent-98-j5fjwu7s-m3.png",Public TV
${base}/tplay/${username}/mpd/33|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/555
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts555" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11963-j9lui4rc-v3/imageContent-11963-j9lui4rc-m4.png",Asianet Suvarna News
${base}/tplay/${username}/mpd/555|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/629
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts629" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-19066-jczvvocg-v1/imageContent-19066-jczvvocg-m1.png",TV5 Kannada
${base}/tplay/${username}/mpd/629|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/510
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts510" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11948-j9ltrfc8-v1/imageContent-11948-j9ltrfc8-m1.png",Raj News Kannada
${base}/tplay/${username}/mpd/510|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/342
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts342" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/RKANN_Thumbnail-v2/RKANN_Thumbnail.png",R Kannada
${base}/tplay/${username}/mpd/342|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/824
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts824" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-53941-kblrui1c-v3/imageContent-53941-kblrui1c-m3.png",Power TV
${base}/tplay/${username}/mpd/824|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/913
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts913" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NWS1ST_Thumbnail-v3/NWS1ST_Thumbnail.png",News 1st Kannada
${base}/tplay/${username}/mpd/913|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1287
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1287" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ZKANNEWS_Thumbnail-v1/ZKANNEWS_Thumbnail.png",Zee Kannada News
${base}/tplay/${username}/mpd/1287|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/321
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts321" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11338-j9jozdxs-v1/imageContent-11338-j9jozdxs-m1.png",DD Chandana
${base}/tplay/${username}/mpd/321|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/427
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts427" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11685-j9kipky0-v1/imageContent-11685-j9kipky0-m2.png",Raj Musix Kannada
${base}/tplay/${username}/mpd/427|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/424
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts424" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11676-j9khi3cw-v1/imageContent-11676-j9khi3cw-m1.png",Public Music
${base}/tplay/${username}/mpd/424|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/477
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts477" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11788-j9kypa94-v1/imageContent-11788-j9kypa94-m2.png",Sri Sankara TV
${base}/tplay/${username}/mpd/477|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/660
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts660" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11257-j9iy8oj4-v2/imageContent-11257-j9iy8oj4-m2.png",Ayush TV
${base}/tplay/${username}/mpd/660|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/971
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts971" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69020-kzo676so-v1/imageContent-69020-kzo676so-m1.png",SVBC 3
${base}/tplay/${username}/mpd/971|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/107
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts107" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ETVGUJ_Thumbnail-v3/ETVGUJ_Thumbnail.png",Colors Gujarati
${base}/tplay/${username}/mpd/107|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/772
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts772" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-47224-k1uh5c4g-v2/imageContent-47224-k1uh5c4g-m2.png",Tata Play Gujarati Cinema
${base}/tplay/${username}/mpd/772|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/692
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts692" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35306-jqxwmaeo-v1/imageContent-35306-jqxwmaeo-m2.png",Colors Gujarati Cinema
${base}/tplay/${username}/mpd/692|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/489
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts489" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11874-j9l376yg-v2/imageContent-11874-j9l376yg-m2.png",TV9 Gujarati
${base}/tplay/${username}/mpd/489|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/552
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts552" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12068-j9o9t9jc-v1/imageContent-12068-j9o9t9jc-m1.png",Gujarat Samachar TV
${base}/tplay/${username}/mpd/552|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/586
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts586" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12167-j9phnio0-v2/imageContent-12167-j9phnio0-m2.png",Sandesh News
${base}/tplay/${username}/mpd/586|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/303
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts303" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11281-j9j4lf3k-v1/imageContent-11281-j9j4lf3k-m1.png",CNBC Bajaar
${base}/tplay/${username}/mpd/303|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/6
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts6" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-15-j5f97j2o-v4/imageContent-15-j5f97j2o-m3.png",News18 Gujarati
${base}/tplay/${username}/mpd/6|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/73
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts73" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-228-j5fxgzio-v2/imageContent-228-j5fxgzio-m2.png",ABP Asmita
${base}/tplay/${username}/mpd/73|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/497
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts497" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11912-j9l58n8w-v2/imageContent-11912-j9l58n8w-m4.png",VTV News
${base}/tplay/${username}/mpd/497|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/507
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts507" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11924-j9l5fs6w-v3/imageContent-11924-j9l5fs6w-m3.png",Zee 24 Kalak
${base}/tplay/${username}/mpd/507|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/654
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts654" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-26589-jj9w5h54-v1/imageContent-26589-jj9w5h54-m2.png",India News Gujarat
${base}/tplay/${username}/mpd/654|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/974
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts974" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/1STGUJ_Thumbnail-v2/1STGUJ_Thumbnail.png",1st Gujarat
${base}/tplay/${username}/mpd/974|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1286
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1286" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/newscap_Thumbnail-v1/newscap_Thumbnail.png",News Capital
${base}/tplay/${username}/mpd/1286|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/323
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts323" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11341-j9jpdu00-v1/imageContent-11341-j9jpdu00-m1.png",DD Girnar
${base}/tplay/${username}/mpd/323|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1097
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1097" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ASTHAGUJ_Thumbnail-v2/ASTHAGUJ_Thumbnail.png",Aastha Gujarati
${base}/tplay/${username}/mpd/1097|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1350
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1350" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPLKSH_Thumbnail-v1/TPLKSH_Thumbnail.png",Tata Play Lakshya TV
${base}/tplay/${username}/mpd/1350|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1349
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1349" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPKARTV_Thumbnail-v1/TPKARTV_Thumbnail.png",Tata Play Kartavya TV
${base}/tplay/${username}/mpd/1349|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1351
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1351" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPKALYANTV_Thumbnail-v2/TPKALYANTV_Thumbnail.png",Tata Play Kalyan TV
${base}/tplay/${username}/mpd/1351|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/893
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts893" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TPVALM_Thumbnail-v2/TPVALM_Thumbnail.png",Tata Play Valam TV
${base}/tplay/${username}/mpd/893|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/597
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts597" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12207-j9qlt5vk-v2/imageContent-12207-j9qlt5vk-m2.png",Zee Sarthak
${base}/tplay/${username}/mpd/597|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/978
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts978" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69926-l1ooghuw-v3/imageContent-69926-l1ooghuw-m3.png",Sidharth TV
${base}/tplay/${username}/mpd/978|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/421
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts421" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11667-j9kdkb6w-v1/imageContent-11667-j9kdkb6w-m1.png",Peppers TV
${base}/tplay/${username}/mpd/421|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1170
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1170" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SIDGL_Thumbnail-v2/SIDGL_Thumbnail.png",Sidharth GOLD
${base}/tplay/${username}/mpd/1170|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/376
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts376" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12271-j9to48zc-v1/imageContent-12271-j9to48zc-m2.png",Kanak News
${base}/tplay/${username}/mpd/376|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/375
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts375" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11513-j9jtooug-v1/imageContent-11513-j9jtooug-m1.png",Kalinga TV
${base}/tplay/${username}/mpd/375|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/41
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts41" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-13243-jbirprzs-v1/imageContent-13243-jbirprzs-m1.png",News18 Odia
${base}/tplay/${username}/mpd/41|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/448
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts448" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11733-j9kw4100-v4/imageContent-11733-j9kw4100-m4.png",News7
${base}/tplay/${username}/mpd/448|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/805
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts805" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49597-k6k8ts8g-v2/imageContent-49597-k6k8ts8g-m2.png",Nandighosha TV
${base}/tplay/${username}/mpd/805|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/907
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts907" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62573-kop7duow-v6/imageContent-62573-kop7duow-m9.png",Argus News
${base}/tplay/${username}/mpd/907|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/333
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts333" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11366-j9jpvkw0-v1/imageContent-11366-j9jpvkw0-m1.png",DD Odia
${base}/tplay/${username}/mpd/333|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1169
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1169" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/JJAG_Thumbnail-v1/JJAG_Thumbnail.png",Jay Jagannath.
${base}/tplay/${username}/mpd/1169|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/230
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts230" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1005-j5nfiy9c-v1/imageContent-1005-j5nfiy9c-m1.png",Surya TV
${base}/tplay/${username}/mpd/230|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/292
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts292" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11246-j9iw5g74-v3/imageContent-11246-j9iw5g74-m3.png",Asianet HD
${base}/tplay/${username}/mpd/292|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/294
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts294" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11254-j9ixwlcg-v1/imageContent-11254-j9ixwlcg-m1.png",Asianet Plus
${base}/tplay/${username}/mpd/294|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/694
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts694" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35312-jqy146c8-v3/imageContent-35312-jqy146c8-m8.png",Zee Keralam HD
${base}/tplay/${username}/mpd/694|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/684
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts684" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-9003-j7rlh2aw-v2/imageContent-9003-j7rlh2aw-m2.png",Zee Keralam
${base}/tplay/${username}/mpd/684|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/10
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts10" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-27-j5fbpbbs-v1/imageContent-27-j5fbpbbs-m1.png",Flowers
${base}/tplay/${username}/mpd/10|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/395
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts395" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11577-j9jv8mqg-v1/imageContent-11577-j9jv8mqg-m1.png",Mazhavil Manorama HD
${base}/tplay/${username}/mpd/395|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/31
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts31" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-90-j5fjv4hk-v1/imageContent-90-j5fjv4hk-m1.png",Mazhavil Manorama
${base}/tplay/${username}/mpd/31|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/25
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts25" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-33-j5fc5fko-v1/imageContent-33-j5fc5fko-m1.png",Kairali TV
${base}/tplay/${username}/mpd/25|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/553
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts553" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12065-j9o9phqg-v1/imageContent-12065-j9o9phqg-m1.png",We TV
${base}/tplay/${username}/mpd/553|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/178
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts178" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-762-j5m21xqw-v1/imageContent-762-j5m21xqw-m1.png",Amrita TV
${base}/tplay/${username}/mpd/178|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/229
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts229" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1008-j5nfqjeo-v1/imageContent-1008-j5nfqjeo-m1.png",Surya Movies
${base}/tplay/${username}/mpd/229|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/293
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts293" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11251-j9ixmaz4-v1/imageContent-11251-j9ixmaz4-m1.png",Asianet Movies
${base}/tplay/${username}/mpd/293|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/436
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts436" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11709-j9kt6bg0-v1/imageContent-11709-j9kt6bg0-m1.png",Safari TV
${base}/tplay/${username}/mpd/436|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/532
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts532" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12020-j9ntf12w-v1/imageContent-12020-j9ntf12w-m1.png",Asianet News
${base}/tplay/${username}/mpd/532|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/66
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts66" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12309-ja9ac8n4-v1/imageContent-12309-ja9ac8n4-m1.png",News18 Kerala
${base}/tplay/${username}/mpd/66|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/87
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts87" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-279-j5jcwqts-v1/imageContent-279-j5jcwqts-m2.png",Manorama News
${base}/tplay/${username}/mpd/87|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/394
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts394" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11572-j9jv7wi0-v1/imageContent-11572-j9jv7wi0-m1.png",Mathrubhumi News
${base}/tplay/${username}/mpd/394|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/211
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts211" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-855-j5ma1eig-v2/imageContent-855-j5ma1eig-m2.png",Kairali News
${base}/tplay/${username}/mpd/211|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/370
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts370" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11495-j9jtg2ns-v2/imageContent-11495-j9jtg2ns-m2.png",Jaihind TV
${base}/tplay/${username}/mpd/370|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/576
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts576" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/MEON_Thumbnail-v3/MEON_Thumbnail.png",Media One
${base}/tplay/${username}/mpd/576|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/270
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts270" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11179-j9i3nhs8-v2/imageContent-11179-j9i3nhs8-m3.png",Janam TV
${base}/tplay/${username}/mpd/270|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/378
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts378" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11524-j9jtu07c-v2/imageContent-11524-j9jtu07c-m2.png",Kaumudy TV
${base}/tplay/${username}/mpd/378|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/428
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts428" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11694-j9kjc0tc-v1/imageContent-11694-j9kjc0tc-m1.png",Raj News Malayalam
${base}/tplay/${username}/mpd/428|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/799
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts799" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49022-k5lxarmw-v2/imageContent-49022-k5lxarmw-m2.png",Twenty Four
${base}/tplay/${username}/mpd/799|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1124
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1124" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/RETV_Thumbnail-v2/RETV_Thumbnail.png",Reporter TV
${base}/tplay/${username}/mpd/1124|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1313
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1313" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SHEKINAH_Thumbnail-v2/SHEKINAH_Thumbnail.png",SHEKINAH
${base}/tplay/${username}/mpd/1313|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1367
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1367" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NEWSMAL_Thumbnail-v1/NEWSMAL_Thumbnail.png",News Malayalam 24x7
${base}/tplay/${username}/mpd/1367|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/328
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts328" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11354-j9jpno60-v1/imageContent-11354-j9jpno60-m1.png",DD Malayalam
${base}/tplay/${username}/mpd/328|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/541
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts541" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11688-j9kiz1zs-v1/imageContent-11688-j9kiz1zs-m1.png",Raj Musix Malayalam
${base}/tplay/${username}/mpd/541|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/377
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts377" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11520-j9jtr0y8-v1/imageContent-11520-j9jtr0y8-m1.png",Kappa TV
${base}/tplay/${username}/mpd/377|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/269
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts269" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11176-j9i3lv54-v2/imageContent-11176-j9i3lv54-m2.png",Goodness
${base}/tplay/${username}/mpd/269|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/356
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts356" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11449-j9jqxsns-v1/imageContent-11449-j9jqxsns-m1.png",God TV
${base}/tplay/${username}/mpd/356|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/457
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts457" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11772-j9kwsqns-v1/imageContent-11772-j9kwsqns-m1.png",Shalom TV
${base}/tplay/${username}/mpd/457|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/348
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts348" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35638-jruyxl0g-v4/imageContent-35638-jruyxl0g-m7.PNG",Harvest TV 24x7
${base}/tplay/${username}/mpd/348|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1364
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1364" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/POWERVISN_Thumbnail-v1/POWERVISN_Thumbnail.png",Powervision
${base}/tplay/${username}/mpd/1364|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/571
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts571" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-68739-kywk7vq0-v1/imageContent-68739-kywk7vq0-m1.png",Tata Play Punjab De Rang
${base}/tplay/${username}/mpd/571|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/796
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts796" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49009-k5g6nid4-v1/imageContent-49009-k5g6nid4-m1.png",Zee Punjabi
${base}/tplay/${username}/mpd/796|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/122
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts122" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-408-j5jr93k8-v1/imageContent-408-j5jr93k8-m1.png",PTC Punjabi
${base}/tplay/${username}/mpd/122|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/399
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts399" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11586-j9jyt26w-v1/imageContent-11586-j9jyt26w-m1.png",MH One
${base}/tplay/${username}/mpd/399|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/624
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts624" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PITAA_Thumbnail-v2/PITAA_Thumbnail.png",Pitaara Movies
${base}/tplay/${username}/mpd/624|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/794
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts794" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-48860-k4nlxy14-v2/imageContent-48860-k4nlxy14-m2.png",PTC Punjabi Gold
${base}/tplay/${username}/mpd/794|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/580
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts580" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12155-j9pd5ug8-v1/imageContent-12155-j9pd5ug8-m1.png",Zee Punjab Haryana Himachal Pradesh
${base}/tplay/${username}/mpd/580|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/91
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts91" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-300-j5ji8seo-v1/imageContent-300-j5ji8seo-m1.png",PTC News
${base}/tplay/${username}/mpd/91|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/232
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts232" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ETHANW_Thumbnail-v3/ETHANW_Thumbnail.png",News18 Punjab
${base}/tplay/${username}/mpd/232|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/366
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts366" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/INWPUB_Thumbnail-v2/INWPUB_Thumbnail.jpg",India News Punjab
${base}/tplay/${username}/mpd/366|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/13
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts13" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8968-j7rcix2w-v1/imageContent-8968-j7rcix2w-m1.png",India News Haryana
${base}/tplay/${username}/mpd/13|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/371
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts371" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11502-j9jtlmi8-v3/imageContent-11502-j9jtlmi8-m4.png",Janta TV
${base}/tplay/${username}/mpd/371|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/401
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts401" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11587-j9jyvxl4-v1/imageContent-11587-j9jyvxl4-m1.png",MH One News
${base}/tplay/${username}/mpd/401|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/787
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts787" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-48498-k3zd4bsg-v1/imageContent-48498-k3zd4bsg-m3.png",ANB NEWS
${base}/tplay/${username}/mpd/787|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/793
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts793" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-57445-kg7p5yk8-v2/imageContent-57445-kg7p5yk8-m3.png",Living India News
${base}/tplay/${username}/mpd/793|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/972
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts972" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69238-kzt9ig3k-v1/imageContent-69238-kzt9ig3k-m2.png",Khabar Fast
${base}/tplay/${username}/mpd/972|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/262
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts262" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-35649-jrz9mhq0-v2/imageContent-35649-jrz9mhq0-m2.PNG",Zee Delhi NCR Haryana
${base}/tplay/${username}/mpd/262|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/989
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts989" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-71064-l427mi60-v2/imageContent-71064-l427mi60-m3.png",STV Haryana News
${base}/tplay/${username}/mpd/989|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1078
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1078" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DAILYP_Thumbnail-v3/DAILYP_Thumbnail.png",Daily Post Punjab Haryana Himachal
${base}/tplay/${username}/mpd/1078|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1411
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1411" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NewsStatePunjabHaryanaHimachal_Thumbnail-v1/NewsStatePunjabHaryanaHimachal_Thumbnail.png",News State Punjab Haryana Himachal
${base}/tplay/${username}/mpd/1411|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/335
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts335" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11374-j9jpwgiw-v1/imageContent-11374-j9jpwgiw-m1.png",DD Punjabi
${base}/tplay/${username}/mpd/335|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/92
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts92" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-297-j5ji8qv4-v1/imageContent-297-j5ji8qv4-m1.png",PTC Chak De
${base}/tplay/${username}/mpd/92|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/922
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts922" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-63498-kqq89g5k-v2/imageContent-63498-kqq89g5k-m3.png",PTC Music
${base}/tplay/${username}/mpd/922|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/193
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts193" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-792-j5m75dww-v1/imageContent-792-j5m75dww-m1.png",Chardikla Time TV
${base}/tplay/${username}/mpd/193|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/773
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts773" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-47242-k1vmve74-v1/imageContent-47242-k1vmve74-m2.png",PTC Simran
${base}/tplay/${username}/mpd/773|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/567
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts567" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Regional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12106-j9ooxpug-v2/imageContent-12106-j9ooxpug-m2.png",Nepal 1
${base}/tplay/${username}/mpd/567|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/101
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts101" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-333-j5jl5q6o-v1/imageContent-333-j5jl5q6o-m1.png",Rang
${base}/tplay/${username}/mpd/101|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/214
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts214" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-860-j5mao56o-v1/imageContent-860-j5mao56o-m1.png",Rengoni TV
${base}/tplay/${username}/mpd/214|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1047
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1047" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SPDON_Thumbnail-v1/SPDON_Thumbnail.png",Spondon
${base}/tplay/${username}/mpd/1047|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1082
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1082" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ASMON_Thumbnail-v1/ASMON_Thumbnail.png",Tata Play Asomiya Monoronjan
${base}/tplay/${username}/mpd/1082|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1352
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1352" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PEARTV_Thumbnail-v1/PEARTV_Thumbnail.png",Pear TV
${base}/tplay/${username}/mpd/1352|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/47
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts47" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/JONTV_Thumbnail-v3/JONTV_Thumbnail.png",Jonack TV
${base}/tplay/${username}/mpd/47|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/353
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts353" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11411-j9jqocds-v1/imageContent-11411-j9jqocds-m1.png",DY 365
${base}/tplay/${username}/mpd/353|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/68
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts68" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12390-jai3fgy0-v1/imageContent-12390-jai3fgy0-m1.png",News18 Assam North East
${base}/tplay/${username}/mpd/68|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/226
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts226" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-956-j5mipkxs-v1/imageContent-956-j5mipkxs-m1.png",NEWS LIVE
${base}/tplay/${username}/mpd/226|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/221
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts221" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-879-j5mdmlqw-v1/imageContent-879-j5mdmlqw-m1.png",Protidin Time
${base}/tplay/${username}/mpd/221|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/423
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts423" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11673-j9kfe73s-v1/imageContent-11673-j9kfe73s-m1.png",Prag News
${base}/tplay/${username}/mpd/423|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/417
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts417" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Regional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11644-j9k1gjow-v1/imageContent-11644-j9k1gjow-m1.png",North East Live
${base}/tplay/${username}/mpd/417|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/894
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts894" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NKTVPLUS_Thumbnail-v2/NKTVPLUS_Thumbnail.png",NKTV PLUS
${base}/tplay/${username}/mpd/894|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/898
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts898" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Regional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/HORNBLTV_Thumbnail-v2/HORNBLTV_Thumbnail.png",Hornbill TV
${base}/tplay/${username}/mpd/898|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/977
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts977" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-69824-l1dfgvcg-v1/imageContent-69824-l1dfgvcg-m3.png",ND24-Newsdaily.in
${base}/tplay/${username}/mpd/977|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1076
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1076" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NBNEWS_Thumbnail-v2/NBNEWS_Thumbnail.png",NB News
${base}/tplay/${username}/mpd/1076|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1115
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1115" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PTKB_Thumbnail-v1/PTKB_Thumbnail.png",Pratham Khabar 24x7
${base}/tplay/${username}/mpd/1115|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1268
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1268" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NENEWS_Thumbnail-v1/NENEWS_Thumbnail.png",NE NEWS
${base}/tplay/${username}/mpd/1268|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/758
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts758" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-44752-jzn44a8w-v1/imageContent-44752-jzn44a8w-m10.png",DD Arunprabha
${base}/tplay/${username}/mpd/758|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/331
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts331" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11363-j9jprc40-v1/imageContent-11363-j9jprc40-m1.png",DD North East
${base}/tplay/${username}/mpd/331|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/325
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts325" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Regional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11345-j9jpidkw-v1/imageContent-11345-j9jpidkw-m1.png",DD Kashir
${base}/tplay/${username}/mpd/325|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/449
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts449" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Assamese" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11728-j9kw1zp4-v1/imageContent-11728-j9kw1zp4-m1.png",Ramdhenu
${base}/tplay/${username}/mpd/449|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/991
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts991" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-71497-l4stx05k-v3/imageContent-71497-l4stx05k-m5.png",DD Meghalaya
${base}/tplay/${username}/mpd/991|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1285
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1285" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SANATV_Thumbnail-v2/SANATV_Thumbnail.png",Sana TV
${base}/tplay/${username}/mpd/1285|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1284
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1284" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SANPLTV_Thumbnail-v1/SANPLTV_Thumbnail.png",Sana Plus TV
${base}/tplay/${username}/mpd/1284|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1281
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1281" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SAM24NEWS_Thumbnail-v1/SAM24NEWS_Thumbnail.png",Samachar 24 News
${base}/tplay/${username}/mpd/1281|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1278
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1278" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/PRIMETV_Thumbnail.png-v2/PRIMETV_Thumbnail.png.png",Prime TV
${base}/tplay/${username}/mpd/1278|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/849
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts849" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/KSVW_Thumbnail-v8/KSVW_Thumbnail.png",Kashi Vishwanath Temple, Varanasi
${base}/tplay/${username}/mpd/849|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/930
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts930" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-59645-kk72iwh4-v3/imageContent-59645-kk72iwh4-m3.png",Buletin India
${base}/tplay/${username}/mpd/930|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/791
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts791" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Punjabi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-48804-k4m7nz2w-v1/imageContent-48804-k4m7nz2w-m1.png",Fateh TV
${base}/tplay/${username}/mpd/791|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/912
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts912" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62613-koxw351c-v1/imageContent-62613-koxw351c-m1.png",Haryana Beats
${base}/tplay/${username}/mpd/912|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/807
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts807" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-49633-k6lny7mw-v1/imageContent-49633-k6lny7mw-m1.png",In Goa 24x7
${base}/tplay/${username}/mpd/807|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/782
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts782" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kannada" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-47615-k2jwaqug-v1/imageContent-47615-k2jwaqug-m3.png",Namma TV
${base}/tplay/${username}/mpd/782|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/781
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts781" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-47612-k2jw4vfc-v1/imageContent-47612-k2jw4vfc-m4.png",Prudent
${base}/tplay/${username}/mpd/781|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/819
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts819" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-53443-kanbrwjs-v1/imageContent-53443-kanbrwjs-m1.png",RDX Goa
${base}/tplay/${username}/mpd/819|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1290
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1290" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TVRIW_Thumbnail-v2/TVRIW_Thumbnail.png",TVRI World
${base}/tplay/${username}/mpd/1290|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/865
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts865" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BBHAKTI_Thumbnail-v3/BBHAKTI_Thumbnail.png",Bangla Bhakti
${base}/tplay/${username}/mpd/865|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/866
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts866" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-57969-khu0zsnc-v1/imageContent-57969-khu0zsnc-m1.png",Tara News
${base}/tplay/${username}/mpd/866|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/887
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts887" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-60927-kljn2znc-v1/imageContent-60927-kljn2znc-m1.png",Garv Gurbani
${base}/tplay/${username}/mpd/887|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/883
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts883" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-60933-kljn4c9c-v1/imageContent-60933-kljn4c9c-m1.png",Swar Shree
${base}/tplay/${username}/mpd/883|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1379
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1379" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BTNNews_Thumbnail-v1/BTNNews_Thumbnail.png",Bharat Times News
${base}/tplay/${username}/mpd/1379|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/910
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts910" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-62607-koxuikrs-v1/imageContent-62607-koxuikrs-m1.png",C News Bharat
${base}/tplay/${username}/mpd/910|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1380
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1380" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/News21_Thumbnail-v1/News21_Thumbnail.png",News 21
${base}/tplay/${username}/mpd/1380|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1371
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1371" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BVG_Thumbnail-v1/BVG_Thumbnail.png",BVG
${base}/tplay/${username}/mpd/1371|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1254
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1254" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NationalNewsLive_Thumbnail-v2/NationalNewsLive_Thumbnail.png",National News Live
${base}/tplay/${username}/mpd/1254|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1256
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1256" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/OYEMUS_Thumbnail-v3/OYEMUS_Thumbnail.png",Oye Music
${base}/tplay/${username}/mpd/1256|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1257
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1257" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SANGAMTV_Thumbnail-v1/SANGAMTV_Thumbnail.png",Sangam TV
${base}/tplay/${username}/mpd/1257|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1255
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1255" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/UpdateIndia_Thumbnail-v2/UpdateIndia_Thumbnail.png",Update India
${base}/tplay/${username}/mpd/1255|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/841
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts841" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/MAHAK_Thumbnail-v3/MAHAK_Thumbnail.png",Mahakaleshwar Temple, Ujjain
${base}/tplay/${username}/mpd/841|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1381
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1381" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ANDMTV_Thumbnail-v1/ANDMTV_Thumbnail.png",ANANDHAM TV
${base}/tplay/${username}/mpd/1381|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1382
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1382" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DHARSANTV_Thumbnail-v1/DHARSANTV_Thumbnail.png",DHARSAN TV
${base}/tplay/${username}/mpd/1382|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1336
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1336" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SHRESHTH_Thumbnail-v1/SHRESHTH_Thumbnail.png",Shresthbharat TV
${base}/tplay/${username}/mpd/1336|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/931
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts931" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-64523-krkg6p88-v1/imageContent-64523-krkg6p88-m1.png",Green Chillies TV
${base}/tplay/${username}/mpd/931|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1338
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1338" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TV45NE_Thumbnail-v1/TV45NE_Thumbnail.png",TV 45 News
${base}/tplay/${username}/mpd/1338|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/892
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts892" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-61629-kmlgw3yw-v2/imageContent-61629-kmlgw3yw-m5.png",Samara News
${base}/tplay/${username}/mpd/892|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1335
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1335" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SHIKHA_Thumbnail-v1/SHIKHA_Thumbnail.png",Shiksha TV
${base}/tplay/${username}/mpd/1335|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1332
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1332" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ABSTAR_Thumbnail-v1/ABSTAR_Thumbnail.png",AB STAR News
${base}/tplay/${username}/mpd/1332|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1334
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1334" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/KBCNE_Thumbnail-v1/KBCNE_Thumbnail.png",KBC News
${base}/tplay/${username}/mpd/1334|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1333
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1333" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ABCNE_Thumbnail-v1/ABCNE_Thumbnail.png",ABC News
${base}/tplay/${username}/mpd/1333|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/947
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts947" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65977-ku6g2hko-v3/imageContent-65977-ku6g2hko-m3.png",Live Patna Sahib Patna
${base}/tplay/${username}/mpd/947|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1337
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1337" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SHRISTI_Thumbnail-v1/SHRISTI_Thumbnail.png",Sristi TV
${base}/tplay/${username}/mpd/1337|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/949
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts949" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-65985-ku6gly6w-v3/imageContent-65985-ku6gly6w-m3.png",Live Sri Naga Sai Mandir Coimbatore
${base}/tplay/${username}/mpd/949|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/960
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts960" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67700-kwoeo240-v2/imageContent-67700-kwoeo240-m2.png",Atmadarshan
${base}/tplay/${username}/mpd/960|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1339
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1339" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TNPNEW_Thumbnail-v1/TNPNEW_Thumbnail.png",TNP News
${base}/tplay/${username}/mpd/1339|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/962
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts962" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Hindi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-67709-kwogo2pc-v1/imageContent-67709-kwogo2pc-m1.png",ANN News
${base}/tplay/${username}/mpd/962|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1002
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1002" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72161-l60vjz1c-v3/imageContent-72161-l60vjz1c-m3.png",Saileela TV
${base}/tplay/${username}/mpd/1002|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1004
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1004" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72303-l6hqin9k-v1/imageContent-72303-l6hqin9k-m2.png",Shri Ganga Aarti, Varanasi
${base}/tplay/${username}/mpd/1004|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1008
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1008" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72306-l6hr8log-v1/imageContent-72306-l6hr8log-m1.png",Shri ISKCON Girgaon, Mumbai
${base}/tplay/${username}/mpd/1008|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1007
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1007" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72309-l6hro3js-v1/imageContent-72309-l6hro3js-m2.png",Shri Ashtavinayak Mahaganpati, Ranjangaon
${base}/tplay/${username}/mpd/1007|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1006
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1006" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72312-l6hsvue8-v1/imageContent-72312-l6hsvue8-m2.png",Shri Mahalaxmi Temple, Mumbai
${base}/tplay/${username}/mpd/1006|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1005
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1005" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-72315-l6htmt2o-v1/imageContent-72315-l6htmt2o-m2.png",Shri Babulnaath Temple, Mumbai
${base}/tplay/${username}/mpd/1005|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1023
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1023" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Knowledge" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-73014-l8gzok74-v2/imageContent-73014-l8gzok74-m4.png",Daiji World TV
${base}/tplay/${username}/mpd/1023|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1018
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1018" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-73022-l8gzppv4-v1/imageContent-73022-l8gzppv4-m1.png",Real News Kerala
${base}/tplay/${username}/mpd/1018|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1019
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1019" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-73019-l8gzpnjs-v1/imageContent-73019-l8gzpnjs-m1.png",7x Music
${base}/tplay/${username}/mpd/1019|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1040
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1040" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/JANS_Thumbnail-v1/JANS_Thumbnail.png",Jansetu
${base}/tplay/${username}/mpd/1040|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1042
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1042" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BLSTV_Thumbnail-v1/BLSTV_Thumbnail.png",Bless TV
${base}/tplay/${username}/mpd/1042|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1043
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1043" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NAKD_Thumbnail-v1/NAKD_Thumbnail.png",Nakshatra Digital
${base}/tplay/${username}/mpd/1043|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1044
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1044" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/GBIN_Thumbnail-v1/GBIN_Thumbnail.png",Global India
${base}/tplay/${username}/mpd/1044|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1060
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1060" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/LIVPU_Thumbnail-v1/LIVPU_Thumbnail.png",Live Punjabi
${base}/tplay/${username}/mpd/1060|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1058
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1058" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/AAJKK_Thumbnail-v1/AAJKK_Thumbnail.png",Aaj Ki Khabar
${base}/tplay/${username}/mpd/1058|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1059
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1059" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/INDNWS_Thumbnail-v1/INDNWS_Thumbnail.png",Indian News
${base}/tplay/${username}/mpd/1059|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1386
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1386" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NTVPUT_Thumbnail-v1/NTVPUT_Thumbnail.png",NTV
${base}/tplay/${username}/mpd/1386|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1070
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1070" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/MEDI9_Thumbnail-v1/MEDI9_Thumbnail.png",MEDIA 9
${base}/tplay/${username}/mpd/1070|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1079
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1079" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TTN24_Thumbnail-v2/TTN24_Thumbnail.png",TTN 24
${base}/tplay/${username}/mpd/1079|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1080
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1080" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/UBANTV_Thumbnail-v1/UBANTV_Thumbnail.png",U Bangla TV
${base}/tplay/${username}/mpd/1080|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1171
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1171" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SIBM_Thumbnail-v4/SIBM_Thumbnail.png",Shree Ichchhapuran Balaji Mandir
${base}/tplay/${username}/mpd/1171|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1196
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1196" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMBHO_Thumbnail-v1/EKMBHO_Thumbnail.png",Ekamra Bharat Odia
${base}/tplay/${username}/mpd/1196|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1197
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1197" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMNIL_Thumbnail-v1/EKMNIL_Thumbnail.png",Ekamra Nilachakra
${base}/tplay/${username}/mpd/1197|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1198
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1198" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMCYN_Thumbnail-v1/EKMCYN_Thumbnail.png",Ekamra Cynema
${base}/tplay/${username}/mpd/1198|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1199
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1199" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMUS_Thumbnail-v1/EKMUS_Thumbnail.png",Ekamra  Music
${base}/tplay/${username}/mpd/1199|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1200
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1200" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMJAT_Thumbnail-v1/EKMJAT_Thumbnail.png",Ekamra Jatra
${base}/tplay/${username}/mpd/1200|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1201
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1201" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMPRM_Thumbnail-v1/EKMPRM_Thumbnail.png",Ekamra Paramatma
${base}/tplay/${username}/mpd/1201|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1202
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1202" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMOPS_Thumbnail-v1/EKMOPS_Thumbnail.jpg",Ekamra One paschima
${base}/tplay/${username}/mpd/1202|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1203
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1203" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/IN24X7_Thumbnail-v1/IN24X7_Thumbnail.png",India 24x7
${base}/tplay/${username}/mpd/1203|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1204
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1204" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/KALBHA_Thumbnail-v3/KALBHA_Thumbnail.png",Kalinga Bharat
${base}/tplay/${username}/mpd/1204|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1205
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1205" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/OMM_Thumbnail-v1/OMM_Thumbnail.png",Omm
${base}/tplay/${username}/mpd/1205|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1206
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1206" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMBCS_Thumbnail-v1/EKMBCS_Thumbnail.png",Ekamra Baiscope
${base}/tplay/${username}/mpd/1206|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1207
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1207" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMMNR_Thumbnail-v1/EKMMNR_Thumbnail.png",Ekamra Manoranjan
${base}/tplay/${username}/mpd/1207|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1208
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1208" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKMHCL_Thumbnail-v2/EKMHCL_Thumbnail.png",News 8 odia
${base}/tplay/${username}/mpd/1208|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1209
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1209" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Odia" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/EKSNWS_Thumbnail-v1/EKSNWS_Thumbnail.png",Ekamra snews
${base}/tplay/${username}/mpd/1209|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1245
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1245" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NATTODAY24X7_Thumbnail-v1/NATTODAY24X7_Thumbnail.png",National Today 24x7
${base}/tplay/${username}/mpd/1245|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1247
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1247" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/35MM_Thumbnail-v1/35MM_Thumbnail.png",35 MM
${base}/tplay/${username}/mpd/1247|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1242
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1242" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/IN24NEWS_Thumbnail-v1/IN24NEWS_Thumbnail.png",In24 News
${base}/tplay/${username}/mpd/1242|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1246
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1246" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/VANDEBHNEWS_Thumbnail-v1/VANDEBHNEWS_Thumbnail.png",Vande Bharat News
${base}/tplay/${username}/mpd/1246|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1252
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1252" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/HARBUZ_Thumbnail-v2/HARBUZ_Thumbnail.png",Haryana Buzz
${base}/tplay/${username}/mpd/1252|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1253
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1253" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/JEEWBHAKTI_Thumbnail-v2/JEEWBHAKTI_Thumbnail.png",Jeewan Bhakti
${base}/tplay/${username}/mpd/1253|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1383
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1383" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NIJAMTV_Thumbnail-v1/NIJAMTV_Thumbnail.png",NIJAM TV
${base}/tplay/${username}/mpd/1383|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1384
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1384" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SURIYANTV_Thumbnail-v1/SURIYANTV_Thumbnail.png",SURIYAN TV
${base}/tplay/${username}/mpd/1384|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1385
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1385" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SUBINTV_Thumbnail-v1/SUBINTV_Thumbnail.png",SUBIN TV
${base}/tplay/${username}/mpd/1385|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1388
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1388" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/UTVLOC_Thumbnail-v1/UTVLOC_Thumbnail.jpg",UTV
${base}/tplay/${username}/mpd/1388|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1392
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1392" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SADV_Thumbnail-v1/SADV_Thumbnail.png",Sadvidya
${base}/tplay/${username}/mpd/1392|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1391
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1391" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Music" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BHKTISRI_Thumbnail-v1/BHKTISRI_Thumbnail.png",Bhakthi Siri
${base}/tplay/${username}/mpd/1391|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1393
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1393" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/IN24LVNEWS_Thumbnail-v1/IN24LVNEWS_Thumbnail.png",In24 Live News
${base}/tplay/${username}/mpd/1393|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1415
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1415" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/VSTIND_Thumbnail-v1/VSTIND_Thumbnail.png",VST India
${base}/tplay/${username}/mpd/1415|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1414
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1414" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/DKPNEWS_Thumbnail-v1/DKPNEWS_Thumbnail.png",DKP News
${base}/tplay/${username}/mpd/1414|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1413
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1413" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/HIFFM_Thumbnail-v1/HIFFM_Thumbnail.png",HIFF Movies
${base}/tplay/${username}/mpd/1413|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1447
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1447" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/GGG_Thumbnail-v1/GGG_Thumbnail.png",Garvi Gujarat Gujarati
${base}/tplay/${username}/mpd/1447|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1446
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1446" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/SanmargTV_Thumbnail-v1/SanmargTV_Thumbnail.png",Sanmarg TV
${base}/tplay/${username}/mpd/1446|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1448
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1448" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/24HrsTV_Thumbnail-v1/24HrsTV_Thumbnail.png",24Hrs TV
${base}/tplay/${username}/mpd/1448|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1445
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1445" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/TarTV_Thumbnail-v1/TarTV_Thumbnail.png",Tar TV
${base}/tplay/${username}/mpd/1445|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1460
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1460" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/BHIChannel_Thumbnail-v1/BHIChannel_Thumbnail.png",BHI Channel
${base}/tplay/${username}/mpd/1460|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1461
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1461" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NewsGround24x7_Thumbnail-v1/NewsGround24x7_Thumbnail.png",News Ground 24x7
${base}/tplay/${username}/mpd/1461|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1462
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1462" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/22Scope_Thumbnail-v1/22Scope_Thumbnail.png",22 Scope
${base}/tplay/${username}/mpd/1462|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1463
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1463" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/ExpressBharat_Thumbnail-v1/ExpressBharat_Thumbnail.png",Express News Bharat
${base}/tplay/${username}/mpd/1463|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1468
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1468" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Gujarati" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NAVSAR_Thumbnail-v2/NAVSAR_Thumbnail.png",Navsarjan Sanskruti Gujarati
${base}/tplay/${username}/mpd/1468|

#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key/1470
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#EXTVLCOPT:http-user-agent=${defaultUA}
#EXTINF:-1 tvg-id="ts1470" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="News" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/NEW81_Thumbnail-v4/NEW81_Thumbnail.png",News Nation 81
${base}/tplay/${username}/mpd/1470|

© 24/7 Channels by @RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="24/7 Movies" group-logo="https://i.ibb.co/fdXcdgmg/24x7-Rio-Iptv.jpg" tvg-logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0X2xdLJX_4D-Fnwblbjx-PCPlV4IBpCUDw&usqp=CAU", Bollywood HD
${base}/tplay/${username}/live/BollywoodHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="24/7 Movies" group-logo="https://i.ibb.co/fdXcdgmg/24x7-Rio-Iptv.jpg" tvg-logo="https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN38000072R_20241211T020400SQUARE.png",The Movie Club
${base}/tplay/${username}/live/TheMovieClub|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="24/7 Movies" group-logo="https://i.ibb.co/fdXcdgmg/24x7-Rio-Iptv.jpg" tvg-logo="https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN3800008CX_20250205T004617SQUARE.png",South Station
${base}/tplay/${username}/live/SouthStation|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="24/7 Movies" group-logo="https://i.ibb.co/fdXcdgmg/24x7-Rio-Iptv.jpg" tvg-logo="https://dnuk7lvye3m03.cloudfront.net/runntv/platform/channels/BLYFLX/TV/thumbnail/15d93fe2-ee9a-4134-a6ce-a034f021f060.png",NH BollyFlix
${base}/tplay/${username}/live/BLYFLX|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="24/7 Movies" group-logo="https://i.ibb.co/fdXcdgmg/24x7-Rio-Iptv.jpg" tvg-logo="https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN3800010SH_20250122T004825SQUARE.png", Hollywood Desi
${base}/tplay/${username}/live/HollywoodDesi|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="24/7 LiveTV" group-logo="https://i.ibb.co/fdXcdgmg/24x7-Rio-Iptv.jpg" tvg-logo="https://i.ibb.co/MpCm303/20241021-142943.png",Doraemon
${base}/tplay/${username}/live/Doraemon|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="24/7 LiveTV" group-logo="https://i.ibb.co/fdXcdgmg/24x7-Rio-Iptv.jpg" tvg-logo="https://i.ibb.co/HYy5DTH/20241021-133946.png",Shinchan
${base}/tplay/${username}/live/Shinchan|User-Agent=RioIptv

© Extra Channels by @RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Lifestyle" group-logo="https://i.ibb.co/fdXcdgmg/24x7-Rio-Iptv.jpg" tvg-logo="https://i.ibb.co/HpgQBHY/image-Content-11544-j9ju5kvc-m3-1.png",Zee Zest HD
${base}/tplay/${username}/live/ZeeZestHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Entertainment" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/1ZQw69d/20240504-011023.png",Sony Kal
${base}/tplay/${username}/live/SonyKal|User-Agent=RioIptv

#EXTINF:-1 tvg-id="ts664" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-31405-jm2isen4-v1/imageContent-31405-jm2isen4-m1.png",Star Sports 3
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key1/1389
${base}/tplay/${username}/mpd1/1389

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/xDGSzJ4/20240721-152328.png",Star Sports 1 Tamil HD
${base}/tplay/${username}/live/SS1TamilHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/S3kkNrp/20240721-152237.png",Star Sports 1 Telugu HD
${base}/tplay/${username}/live/SS1TeluguHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/gZzcLhb9/SSKhel.png",Star Sports Khel
${base}/tplay/${username}/live/SSKhel|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/jPxgwcjT/SS2Tamil.png",Star Sports 2 Tamil
${base}/tplay/${username}/live/SS2Tamil|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/fzgmJ91f/SS2-Telugu.png",Star Sports 2 Telugu
${base}/tplay/${username}/live/SS2Telugu|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/pvvcXhXF/Star4k-Rioiptv.png",Star Sports 4K
${base}/tplay/${username}/live/Star4k|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/2kNNXSN/20240726-091917.png",Astro Cricket
${base}/tplay/${username}/live/AstroCricket|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/4nPm6d7q/Willow.png",Willow Cricket
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/Willow.key
#KODIPROP:inputstream.adaptive.manifest_type=mpd
${base}/tplay/${username}/Willow.mpd

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/ynYKScW/20240726-173658.png",SONY SPORTS TEN 4 HD
${base}/tplay/${username}/live/SonyTen4HD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/hCKs1bY/20240726-173939.png",SONY SPORTS TEN 4
${base}/tplay/${username}/live/SonyTen4SD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Sports" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/XLbYZMR/20240726-174919.png",SONY SPORTS TEN 5
${base}/tplay/${username}/live/SonyTen5SD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/SmZyrQ1/20240730-184127.png",Disney Channel HD
${base}/tplay/${username}/live/DisneyHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/pw4H2jt/CC-20221111-202941.png",Hungama
${base}/tplay/${username}/live/Hungama|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/nwWmVMV/20240619-154824.png",Wow Kidz
${base}/tplay/${username}/live/WowKidz|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/Pzjgd57/20240625-181553.png",Wow Kidz Action 
${base}/tplay/${username}/live/WowKidzAction|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/hV1txgw/20240818-000959.png" tvg-logo="https://i.ibb.co/hV1txgw/20240818-000959.png",Q Toonz
${base}/tplay/${username}/live/QToonz|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Kids" group-logo="https://i.ibb.co/hV1txgw/20240818-000959.png" tvg-logo="https://i.ibb.co/TD6Xbsbn/Animax.png",Animax
${base}/tplay/${username}/live/Animax|User-Agent=RioIptv

#EXTINF:-1 tvg-id="1125" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/wRZ0Fv1/20240405-144559.png",STAR GOLD
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/StarGold.key
${base}/tplay/${username}/StarGold.mpd

#EXTINF:-1 tvg-id="1155" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/KD32Z9p/20240504-002721.png",Star Gold 2 HD 
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/StarGold2HD.key
${base}/tplay/${username}/StarGold2HD.mpd

#EXTINF:-1 tvg-id="1154" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/3YHMpz9/20240405-151516.png",Star Gold 2
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/StarGold2.key
${base}/tplay/${username}/StarGold2.mpd

#EXTINF:-1 tvg-id="1113" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/RTbJD13/20240405-105314.png",Star Gold Select HD
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/StarGoldSelectHD.mpd
${base}/tplay/${username}/StarGoldSelectHD.mpd

#EXTINF:-1 tvg-id="1151" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/Q8CDcRf/20240503-234810.png",Star Gold Romance 
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/StarGoldRomance.key
${base}/tplay/${username}/StarGoldRomance.mpd

#EXTINF:-1 tvg-id="1153" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/1rn31dY/20240504-002318.png",Star Gold Thrills
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/StarGoldThrills.key
${base}/tplay/${username}/StarGoldThrills.mpd

#EXTINF:-1 tvg-id="1136" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/CnfdVQV/20240614-171818.png",Star Utsav Movies 
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/UtsavMovies.key
${base}/tplay/${username}/UtsavMovies.mpd

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/KxGgyBky/SonyMax1.png",Sony Max 1
${base}/tplay/${username}/live/SonyMax1|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/tw9k2knd/Colors-Cineplex-Superhits.png",Colors Cineplex Superhits
${base}/tplay/${username}/live/ColorsCineplexSuperhits|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/svD79n9s/Shemaroo-Bollywood.png",Shemaroo Bollywood
${base}/tplay/${username}/live/ShemarooBollywood|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Movies" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/bMFY6BSy/Goldmines2.png",Goldmines 2
${base}/tplay/${username}/live/Goldmines2|User-Agent=RioIptv

#EXTINF:-1 tvg-id="1104" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/mN81KDF/20240613-213551.png",STAR MOVIES HD
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/StarMoviesHD.key
${base}/tplay/${username}/StarMoviesHD.mpd

#EXTINF:-1 tvg-id="1115" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/v6k0nhS2/Star-Movies.png",STAR MOVIES
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/StarMovies.key
${base}/tplay/${username}/StarMovies.mpd

#EXTINF:-1 tvg-id="1110" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/sv7PDvFF/Star-Movies-Select-HD.png",STAR MOVIES SELECT HD
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/StarMoviesSelectHD.key
${base}/tplay/${username}/StarMoviesSelectHD.mpd

#EXTINF:-1 tvg-id="3276" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/BVXvZW17/Star-Movies-Select.png",STAR MOVIES SELECT 
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/StarMoviesSelect.key
${base}/tplay/${username}/StarMoviesSelect.mpd

#EXTINF:-1 tvg-id="1375" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/zNvd33z/20240725-174653.png",Disney International HD
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/DisneyInternationalHD.key
${base}/tplay/${username}/DisneyInternationalHD.mpd

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/G5cHmKM/Picsart-24-03-06-17-27-43-026.png",&Flix HD
${base}/tplay/${username}/live/&FlixHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/2nSyDfv/20240624-205307.png",&Prive HD
${base}/tplay/${username}/live/&PriveHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/wwjYcn0/20240721-201902.png",Zee Cafe HD
${base}/tplay/${username}/live/ZeeCafeHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/jPm9Gmgp/Colors-Infinity-Lite.png",Colors Infinity Lite
${base}/tplay/${username}/live/ColorsInfinityLite|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/VWqFFwZk/HBO.png",HBO
${base}/tplay/${username}/live/HBO|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/kg3XjMfz/WarnerTV.png",Warner TV
${base}/tplay/${username}/live/WarnerTV|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/k5sQCQ2/20240624-081245.png",AXN
${base}/tplay/${username}/live/AXN|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="English" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/0jykHjfg/Cinemax.png",Cinemax
${base}/tplay/${username}/live/Cinemax|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/sJpcm516/Dhoom-Music-Bangla.png",Dhoom Music Bangla 
${base}/tplay/${username}/live/DhoomMusicBangla|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/pK4FqxX/20240727-130529.png",Tata Play Bangla Cinema
${base}/tplay/${username}/live/TataPlayBanglaCinema|User-Agent=RioIptv

#EXTINF:-1 tvg-id="1120" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/GVbhj7q/20240503-191143.png",Jalsha Movies
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key1/1120
${base}/tplay/${username}/mpd1/1120

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/zb8R25C/20240625-215112.png",Sun Bangla HD
${base}/tplay/${username}/live/SunBanglaHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bengali" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/Z1KJ5qq7/Sun-Bangla.png",Sun Bangla
${base}/tplay/${username}/live/SunBangla|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/nchr847/20240916-112145.png",Tata Play Tamil Cinema
${base}/tplay/${username}/live/TataPlayTamilCinema|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/YX9rBTN/20240721-153638.png",Vijay Super HD
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key1/1176
${base}/tplay/${username}/mpd1/1176

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/jfmGSSt/20240912-000421.png",Vijay Super
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key1/1131
${base}/tplay/${username}/mpd1/1131

#EXTINF:-1 tvg-id="3269" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/Ldw3j4m4/Vijay-Takkar-Rioiptv.png",Vijay Takkar
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key1/3269
${base}/tplay/${username}/mpd1/3269

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/dLTPLqX/20240721-200950.png",Vijay Music
${base}/tplay/${username}/live/VijayMusic|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/6tL405W/20240721-164821.png",Sun Music HD
${base}/tplay/${username}/live/SunMusicHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/mqBzZQd/20240721-163720.png",Sun News 
${base}/tplay/${username}/live/SunNews|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Tamil" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/jZc9zzw/20240729-140822.png",Adithya TV
${base}/tplay/${username}/live/AdithyaTV|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/X8LNvJq/20240721-151627.png",Gemini Comedy
${base}/tplay/${username}/live/GeminiComedy|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Telugu" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/CptFxwZf/Maa-Music-Rioiptv.png",Star Maa Music 
${base}/tplay/${username}/live/StarMaaMusic|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/Wg8cJf4/20240721-152748.png",Pravah Pictures HD 
${base}/tplay/${username}/live/PravahPicturesHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/QvXjr1W0/Sun-Marathi-HD-Rioiptv.png",Sun Marathi HD
${base}/tplay/${username}/live/SunMarathiHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Marathi" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/TMzLLh8/20240729-234201.png",Zee Chitramandir
${base}/tplay/${username}/live/ZeeChitramandir|User-Agent=RioIptv

#EXTINF:-1 tvg-id="459" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11251-j9ixmaz4-v1/imageContent-11251-j9ixmaz4-m1.png",Asianet Movies HD 
#EXTVLCOPT:http-user-agent=RioIptv
#KODIPROP:inputstream.adaptive.license_type=clearkey
#KODIPROP:inputstream.adaptive.manifest_type=mpd
#KODIPROP:inputstream.adaptive.license_key=${base}/tplay/${username}/key1/459
${base}/tplay/${username}/mpd1/459

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/G4GJ8MHJ/SuryaHD.png",Surya HD
${base}/tplay/${username}/live/SuryaHD|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Malayalam" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/1fTnd5Tw/Surya-Music.png",Surya Music 
${base}/tplay/${username}/live/SuryaMusic|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/HD7NL462/Dabangg.png",Dabangg 
${base}/tplay/${username}/live/Dabangg|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Bhojpuri" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/tPswzQbY/Sangeet-Bhojpuri.png",Sangeet Bhojpuri 
${base}/tplay/${username}/live/SangeetBhojpuri|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/YBQ8BsYc/Peace-TVUrdu.png",Peace TV Urdu
${base}/tplay/${username}/live/PeaceTvUrdu|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/1tL8cSM0/Peace-TVEnglish.png",Peace TV English
${base}/tplay/${username}/live/PeaceTvEnglish|User-Agent=RioIptv

#EXTINF:-1 tvg-id="" catchup-type="append" catchup-days="8" catchup-source="&begin={utc}&end={utcend}" group-title="Devotional" group-logo="https://i.ibb.co/xqHNRzcB/TPlay-Rio-Iptv.png" tvg-logo="https://i.ibb.co/nNJd2LGz/Peace-TVBangla.png",Peace TV Bangla 
${base}/tplay/${username}/live/PeaceTvBangla|User-Agent=RioIptv
`);
}
