import { register } from 'node:module';
register("./hook.mjs", import.meta.url);

await import('node:util');
