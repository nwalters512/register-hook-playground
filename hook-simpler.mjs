import path from 'node:path';

export async function resolve(specifier, context, parentResolve) {
  specifier = 'file:///dost-not-exist.mjs';
  context.parentURL = 'node:util';
  const url = await parentResolve(specifier, context, parentResolve);
}
