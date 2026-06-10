// Stubbed for static build — tar/fs not available in Turbopack bundle
export const BLOG_CONTENT_DIRNAME = 'blog';
export class BlogContentBranchNotFoundError extends Error {}
export class BlogContentConfigError extends Error {}
export class BlogContentFetchError extends Error {}
export const compareSnapshots = () => ({});
export const createSnapshotFileMap = () => ({});
export const hasLocalBlogContent = () => false;
export const readBlogSnapshotFromCdn = async () => ({});
export const readBlogSnapshotFromGitHubBranch = async () => ({});
export const readLocalBlogSnapshot = async () => ({});
export const resolveChangedPostSlugs = () => [];
export const writeBlogSnapshotToDirectory = async () => {};
