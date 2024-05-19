import { TriplitClient } from '@triplit/client';
import { schema } from './schema.js';
import { browser } from '$app/environment';

export const triplit = new TriplitClient({
  // storage: 'indexeddb',
  schema,
  serverUrl: import.meta.env.VITE_TRIPLIT_SERVER_URL,
  token: import.meta.env.VITE_TRIPLIT_TOKEN,
  autoConnect: browser,
});
