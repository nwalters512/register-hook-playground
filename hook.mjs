import path from 'node:path';

export async function resolve(specifier, context, parentResolve) {
  const url = await parentResolve(specifier, context, parentResolve);

  if (url.url.endsWith('?foo=bar')) {
    return url;
  }

  url.url += '?foo=bar';
  url.shortCircuit = true;

  return url;
}

export async function load(url, context, parentLoad) {
  const iitmURL = new URL('lib/register.js', import.meta.url).toString();
  if (url === 'node:util?foo=bar') {
    return {
      shortCircuit: true,
      format: 'module',
      source: `import '${iitmURL}'; import util from 'node:util'; export * from 'node:util'; export default util;`
    }
  }
  return parentLoad(url, context, parentLoad);
}
