// https://twitter.com/mattpocockuk/status/1676162572095979522

// usage: const id = params.id ?? raise('id is required');
export function raise(err: string): never {
  throw new Error(err);
}
