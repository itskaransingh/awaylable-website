const DEFAULT_SITE_URL = "https://www.awaylable.in";

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

function resolveSiteUrl(): string {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawUrl) {
    return DEFAULT_SITE_URL;
  }

  try {
    const parsed = new URL(rawUrl);
    return stripTrailingSlash(parsed.toString());
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = resolveSiteUrl();

export function absoluteUrl(path: string): string {
  return new URL(path, `${siteUrl}/`).toString();
}
