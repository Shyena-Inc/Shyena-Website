# Publishing blog articles

The website stores posts in `content/posts/` as Markdown files with YAML frontmatter. The blog page, article pages, sitemap, and search metadata are generated from published files at build time.

## Edit with Pages CMS

1. Push this repository to the Shyena GitHub organization/account and connect it to [Pages CMS](https://pagescms.org/).
2. Install/authorize the Pages CMS GitHub app for that repository. The site repository includes `.pages.yml`, which defines the Blog collection and fields.
3. In Pages CMS, open **Blog**, then create or edit an article. Fill the URL slug, title, publication date, summary, topic, and body.
4. Leave **Publish this article** off while drafting. Turn it on only when the article is approved for publication.
5. Save through Pages CMS. Review its proposed Git commit or pull request, then merge it to the site's deployment branch. The next static build publishes the page and adds it to the sitemap.

Pages CMS edits the repository through GitHub. Shyena must connect the repository in Pages CMS; this project does not contain CMS credentials.

## Write a post directly in Git

Create `content/posts/<slug>.md` with this shape:

```md
---
slug: securing-iot-firmware
title: Reviewing an IoT firmware update path
date: 2026-11-02
 description: A concise summary used in article listings and search results.
 category: IoT security
 published: false
---

## Start with the update path

Write the article in Markdown. Keep examples general and do not include customer data, credentials, or claims that have not been approved.
```

Use lowercase hyphenated slugs. Supported body formatting includes paragraphs, level-two and level-three headings, lists, block quotes, bold, italics, inline code, and HTTPS links. Set `published: true` when ready. Unpublished posts are excluded from the blog, article routes, and sitemap.

## Before publishing

- Check technical claims and link to primary sources where useful.
- Confirm the post contains no customer-identifying or confidential information.
- Check the title and summary for clarity and search relevance.
- Preview the change on a branch or preview deployment.
- Get the required content and legal review for claims, regulated topics, or sensitive disclosures.
