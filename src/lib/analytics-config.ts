const containerId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
const cloudflareBranch = process.env.CF_PAGES_BRANCH;
const isRelease =
  cloudflareBranch === undefined ||
  cloudflareBranch === process.env.NEXT_PUBLIC_ANALYTICS_RELEASE;

export const analyticsContainerId =
  isRelease && containerId && /^GTM-[A-Z0-9]+$/.test(containerId)
    ? containerId
    : undefined;
