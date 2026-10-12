import { useId } from "react";

/** Decorative UI artwork only; never placed inside photographic media. */
export function Batik({ motif = "kawung", className = "" }: { motif?: "kawung" | "parang" | "floral"; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={`batik-art ${className}`} aria-hidden="true" focusable="false" width="100%" height="100%">
      <defs>
        <pattern id={id} width={motif === "parang" ? 48 : 64} height="64" patternUnits="userSpaceOnUse">
          {motif === "kawung" ? (
            <g fill="none" stroke="currentColor" strokeWidth="1.3">
              <ellipse cx="20" cy="20" rx="9" ry="17" transform="rotate(-45 20 20)" />
              <ellipse cx="44" cy="20" rx="9" ry="17" transform="rotate(45 44 20)" />
              <ellipse cx="20" cy="44" rx="9" ry="17" transform="rotate(45 20 44)" />
              <ellipse cx="44" cy="44" rx="9" ry="17" transform="rotate(-45 44 44)" />
              <path d="m32 26 6 6-6 6-6-6Z" />
              <circle cx="0" cy="0" r="2" fill="currentColor" />
            </g>
          ) : motif === "parang" ? (
            <g fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M-12 64 36 0M12 64 60 0M-2 42c18 3 24-9 18-16S19 9 33 8M22 74c18 3 24-9 18-16s3-17 17-18" />
              <path d="m10 48 4 5-7 3Zm24-32 4 5-7 3Z" fill="currentColor" />
            </g>
          ) : (
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M32 32C9 31 7 7 18 10c8 2 14 12 14 22Zm0 0C33 9 57 7 54 18c-2 8-12 14-22 14Zm0 0c23 1 25 25 14 22-8-2-14-12-14-22Zm0 0C31 55 7 57 10 46c2-8 12-14 22-14Z" />
              <circle cx="32" cy="32" r="5" />
              <path d="M0 32c6-5 7-14 0-20m64 20c-6 5-7 14 0 20" />
            </g>
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function BatikDivider({ className = "" }: { className?: string }) {
  return <div className={`batik-divider ${className}`} aria-hidden="true"><span /><svg viewBox="0 0 64 32" width="64" height="32" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M32 16C17-4 5 2 16 13c5 5 11 4 16 3Zm0 0C47-4 59 2 48 13c-5 5-11 4-16 3Zm0 0C17 36 5 30 16 19c5-5 11-4 16-3Zm0 0c15 20 27 14 16 3-5-5-11-4-16-3Z" /><path d="m32 10 6 6-6 6-6-6Z" /></svg><span /></div>;
}