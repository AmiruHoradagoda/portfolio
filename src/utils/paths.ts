export function assetPath(path: string) {
  const base = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return encodeURI(`${base}${path.replace(/^\/+/, "")}`);
}
