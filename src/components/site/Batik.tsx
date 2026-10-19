import { useId } from "react";

/** Bold Kawung/Ceplok geometry shared by selected interface frames. */
function KawungUnit() {
  return <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round">
    <path d="M48 43C18 42 9 14 18 12c15-4 29 13 30 31Zm5 0c30-1 39-29 30-31-15-4-29 13-30 31ZM48 53c-30 1-39 29-30 31 15 4 29-13 30-31Zm5 0c30 1 39 29 30 31-15 4-29-13-30-31Z" />
    <path d="m50 40 10 8-10 8-10-8Z" fill="currentColor" strokeWidth="1" />
  </g>;
}

export function Batik({ motif = "kawung", className = "" }: { motif?: "kawung" | "ceplok"; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className={`batik-art ${className}`} aria-hidden="true" focusable="false" width="100%" height="100%">
      <defs>
        <pattern id={id} width="100" height="100" patternUnits="userSpaceOnUse" patternTransform={motif === "ceplok" ? "scale(.6)" : undefined}>
          <KawungUnit />
          {motif === "ceplok" ? <path d="m0 8 8-8L0-8-8 0Zm100 0 8 8-8 8-8-8Z" fill="currentColor" /> : null}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function BatikDivider({ className = "" }: { className?: string }) {
  return <div className={`batik-divider ${className}`} aria-hidden="true"><span /></div>;
}

export function BatikCorner({ className = "" }: { className?: string }) {
  return <svg className={`batik-corner ${className}`} viewBox="0 0 300 200" aria-hidden="true" focusable="false">
    <path d="M2 198V2h296M12 195V12h283" fill="none" stroke="currentColor" strokeWidth="3" />
    <g transform="translate(15 16)"><KawungUnit /></g>
    <g transform="translate(110 16)"><KawungUnit /></g>
    <g transform="translate(205 16)"><KawungUnit /></g>
    <g transform="translate(15 110)"><KawungUnit /></g>
    <path d="m161 132 12 12-12 12-12-12Z" fill="currentColor" />
  </svg>;
}