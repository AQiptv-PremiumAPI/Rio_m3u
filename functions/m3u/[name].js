export async function onRequest(context) {
  const { name } = context.params;
  const { request, env } = context;
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');

  const action = pathParts[4]; // 'key' or 'mpd'
  const id = pathParts[5];     // e.g., '3098'
  const ua = request.headers.get('user-agent')?.toLowerCase() || '';

  // ✅ Step 1: Check if USER_ID is saved in env
  if (!env.USER_ID) {
    return new Response("❌ Token expired or not configured", { status: 403 });
  }

  // ✅ Step 2: Check if requested token matches saved one
  if (name !== env.USER_ID) {
    return new Response("❌ Incorrect token provided", { status: 401 });
  }

  // ✅ Step 3: Validate user-agent (must be OTT/TiviMate/NSPlayer etc.)
  const allowedAgents = ['tivimate', 'ott', 'nsplayer'];
  const isValidUA = allowedAgents.some(agent => ua.includes(agent));

  if (!isValidUA) {
    return new Response("❌ Unauthorized access. Valid User-Agent required.", { status: 403 });
  }

  // ✅ Step 4: Validate action and build URL
  const destinations = {
    key: `https://tp.kliv.fun/tp8/key.php?id=${id}`,
    mpd: `http://103.168.18.108/tpo/manifest.mpd?id=${id}`
  };

  const destination = destinations[action];
  if (!destination) {
    return new Response("❌ Invalid request path", { status: 404 });
  }

  // ✅ Step 5: Redirect to final URL (or fetch and stream if needed)
  return Response.redirect(destination, 302);
}
