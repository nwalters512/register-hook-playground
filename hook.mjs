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
  const iitmURL = new URL('lib/register.mjs', import.meta.url).toString();
  if (url === 'node:util?foo=bar') {
    console.log(iitmURL)
    return {
      shortCircuit: true,
      format: 'module',
      source: `import '${iitmURL}'; export * from 'node:util';`
    }
  }
  return parentLoad(url, context, parentLoad);
}
