import type { ReactNode } from "react";

const headingPattern = /^(#{2,3})\s+(.+)$/;
const bulletPattern = /^[-*]\s+(.+)$/;
const orderedPattern = /^\d+[.)]\s+(.+)$/;
const quotePattern = /^>\s?(.*)$/;
const inlinePattern =
  /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*/g;

export function Markdown({ source }: { source: string }) {
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let bullets: string[] = [];
  let ordered: string[] = [];
  let quote: string[] = [];

  const flush = () => {
    if (paragraph.length)
      blocks.push(
        <p key={`p-${blocks.length}`}>{inline(paragraph.join(" "))}</p>,
      );
    if (bullets.length)
      blocks.push(
        <ul key={`ul-${blocks.length}`}>
          {bullets.map((item) => (
            <li key={item}>{inline(item)}</li>
          ))}
        </ul>,
      );
    if (ordered.length)
      blocks.push(
        <ol key={`ol-${blocks.length}`}>
          {ordered.map((item) => (
            <li key={item}>{inline(item)}</li>
          ))}
        </ol>,
      );
    if (quote.length)
      blocks.push(
        <blockquote key={`quote-${blocks.length}`}>
          <p>{inline(quote.join(" "))}</p>
        </blockquote>,
      );
    paragraph = [];
    bullets = [];
    ordered = [];
    quote = [];
  };

  for (const line of source.split(/\r?\n/)) {
    const text = line.trim();
    if (!text) {
      flush();
      continue;
    }
    const heading = text.match(headingPattern);
    if (heading) {
      flush();
      blocks.push(
        heading[1].length === 2 ? (
          <h2 key={`h2-${blocks.length}`}>{inline(heading[2])}</h2>
        ) : (
          <h3 key={`h3-${blocks.length}`}>{inline(heading[2])}</h3>
        ),
      );
      continue;
    }
    const bullet = text.match(bulletPattern);
    const number = text.match(orderedPattern);
    const quoteLine = text.match(quotePattern);
    if (bullet) {
      if (paragraph.length) flush();
      bullets.push(bullet[1]);
      continue;
    }
    if (number) {
      if (paragraph.length) flush();
      ordered.push(number[1]);
      continue;
    }
    if (quoteLine) {
      if (paragraph.length) flush();
      quote.push(quoteLine[1]);
      continue;
    }
    if (bullets.length || ordered.length || quote.length) flush();
    paragraph.push(text);
  }
  flush();
  return <>{blocks}</>;
}

function inline(text: string): ReactNode[] {
  const result: ReactNode[] = [];
  let cursor = 0;
  for (const match of text.matchAll(inlinePattern)) {
    const index = match.index ?? 0;
    if (index > cursor) result.push(text.slice(cursor, index));
    if (match[1] && match[2])
      result.push(
        <a
          href={match[2]}
          key={`link-${index}`}
          rel="noreferrer"
          target="_blank"
        >
          {match[1]}
        </a>,
      );
    else if (match[3])
      result.push(<strong key={`bold-${index}`}>{match[3]}</strong>);
    else if (match[4])
      result.push(<code key={`code-${index}`}>{match[4]}</code>);
    else if (match[5]) result.push(<em key={`em-${index}`}>{match[5]}</em>);
    cursor = index + match[0].length;
  }
  if (cursor < text.length) result.push(text.slice(cursor));
  return result;
}
