import path from 'node:path';

export async function resolve(specifier, context, parentResolve) {
  const url = await parentResolve(specifier, context, parentResolve);
  console.trace(`hook1 resolved ${specifier} (from ${context.parentURL}) to ${url.url}`)
  return url;
}
