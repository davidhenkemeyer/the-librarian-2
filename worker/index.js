/** Cloudflare Worker entry point for the Sites-hosted static game. */
export default {
  async fetch(request, env) {
    let response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get('accept')?.includes('text/html');

    if (
      response.status === 404
      && acceptsHtml
      && ['GET', 'HEAD'].includes(request.method)
    ) {
      const indexUrl = new URL(request.url);
      indexUrl.pathname = '/index.html';
      indexUrl.search = '';
      response = await env.ASSETS.fetch(new Request(indexUrl, request));
    }

    const contentType = response.headers.get('content-type') || '';

    if (request.method !== 'GET' || !contentType.includes('text/html')) {
      return response;
    }

    const origin = new URL(request.url).origin;
    const html = (await response.text()).replaceAll('__SITE_ORIGIN__', origin);
    const headers = new Headers(response.headers);
    headers.delete('content-length');

    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
