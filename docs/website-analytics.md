# Website analytics release

The website loads one GTM web container after a visitor allows analytics cookies. The footer links to the privacy page where visitors can change their choice. Store the container ID in the Cloudflare Pages production environment as `NEXT_PUBLIC_GTM_CONTAINER_ID` and the production branch name as `NEXT_PUBLIC_ANALYTICS_RELEASE`. Keep the container ID unset in preview. The application also checks that the browser origin matches `NEXT_PUBLIC_SITE_URL`.

## Configure the existing Google accounts

1. Review the existing container and version before making changes. Use a separate GTM workspace linked to Shyena's GA4 web stream. Limit all Google tags to the intended hostname and require granted analytics consent. Disable advertising, Google Signals, user-provided data collection, and unnecessary tags for this implementation.
2. Turn off enhanced measurement for this web stream. Configure the GTM Google tag on Container Loaded with `send_page_view=false`, `cookie_domain=none`, and the sanitized `page_location` and `page_referrer` data-layer variables. Apply those variables to each GA4 event tag as well. Leave Google Ads settings disabled and keep enhanced conversion and form-field variables out of the container.
3. Create custom-event triggers and GA4 tags using the table below. Register `product_id` as an event-scoped custom dimension if product breakdowns are needed. Mark `generate_lead` as a key event in GA4 and use the once-per-event counting method.

| Data layer event | GA4 event | Additional parameter |
| --- | --- | --- |
| `shyena_page_view` | `page_view` | |
| `generate_lead` | `generate_lead` | |
| `product_outbound_click` | `product_outbound_click` | `product_id` |

The page URL uses an allowlisted path. Referrers use the previous measured page or the initial referrer origin. Campaign query parameters and contact form fields are excluded. Any visits before opt-in are excluded from GA4. Search Console remains the baseline for organic impressions and clicks.

## Verify and release

Use a dedicated test stream and container for Tag Assistant and DebugView before publishing. Check initial load, client navigation, refresh, a product click, one confirmed test inquiry, a failed inquiry, rapid repeat submission, and withdrawal. Check the outgoing requests using a URL that contains a test query value and a test form with dummy values. The analytics requests should omit the query, name, email, message, and selected topic. Verify that analytics consent is granted before the first page view tag fires after opt-in. If the container processes the first event before consent, configure the grant through a GTM Consent Initialization template and rerun the opt-in check before publishing. Verify a preview deployment sends nothing to the production stream. Publish a named GTM version after review and record its prior version for rollback. Roll back through GTM Versions or omit the production container ID and rebuild to disable analytics.

Capture the previous 28 days of Search Console clicks, impressions, landing pages, and available indexing data. Capture available GA4 organic visits and leads for the same period. Use the following questions in Google AI features and ChatGPT Search, recording surface, date, locale, citations, and the facts attributed to Shyena. Repeat at 30 and 60 days after release.

- What services does Shyena Technologies offer?
- What does a hardware VAPT engagement cover?
- What should a team prepare for an IoT device security review?
- How should a team scope an OT/ICS security assessment?
