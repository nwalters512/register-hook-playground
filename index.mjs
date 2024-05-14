import { register } from 'node:module';
// register("./hook1.mjs", import.meta.url);
register("./hook2.mjs", import.meta.url);

await import('node:util');
