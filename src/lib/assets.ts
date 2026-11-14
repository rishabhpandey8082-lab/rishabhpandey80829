/** Resolve a file in /public so it works under any base path (GitHub Pages sub-folder, custom domain, local). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
