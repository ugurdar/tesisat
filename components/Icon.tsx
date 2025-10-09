export default function Icon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export function IconDefs() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
      <symbol id="i-paint" viewBox="0 0 24 24">
        <path d="M3 3h14v8a3 3 0 0 1-3 3H9a4 4 0 0 0-4 4v1h6" fill="none" stroke="currentColor" strokeWidth="2"/>
      </symbol>
      <symbol id="i-bath" viewBox="0 0 24 24">
        <path d="M3 10h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-3zm5-3V4a2 2 0 1 1 4 0v3" fill="none" stroke="currentColor" strokeWidth="2"/>
      </symbol>
      <symbol id="i-tiles" viewBox="0 0 24 24">
        <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" fill="currentColor"/>
      </symbol>
      <symbol id="i-kitchen" viewBox="0 0 24 24">
        <path d="M4 3h16v4H4zM6 7v14m12-14v14M9 12h6" fill="none" stroke="currentColor" strokeWidth="2"/>
      </symbol>
      <symbol id="i-garden" viewBox="0 0 24 24">
        <path d="M12 2v20M5 13l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2"/>
      </symbol>
      <symbol id="i-water" viewBox="0 0 24 24">
        <path d="M12 2s7 8 7 12a7 7 0 0 1-14 0c0-4 7-12 7-12z" fill="currentColor"/>
      </symbol>
      <symbol id="i-electric" viewBox="0 0 24 24">
        <path d="M13 2L3 14h7l-1 8 10-12h-7z" fill="currentColor"/>
      </symbol>
      <symbol id="i-shower" viewBox="0 0 24 24">
        <path d="M7 4a5 5 0 0 1 10 0v3H7zM6 9h12M7 14h.01M12 14h.01M17 14h.01M9.5 17h.01M14.5 17h.01" fill="none" stroke="currentColor" strokeWidth="2"/>
      </symbol>
      <symbol id="i-turnkey" viewBox="0 0 24 24">
        <circle cx="7" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M11 12h10m-4-2v4m-3-3v2" stroke="currentColor" strokeWidth="2"/>
      </symbol>
      <symbol id="i-phone" viewBox="0 0 24 24">
        <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 6.18 2 2 0 0 1 5 4h4.09a1 1 0 0 1 1 .75l1.2 4.79a1 1 0 0 1-.27.95l-2.2 2.2a16 16 0 0 0 6.88 6.88l2.2-2.2a1 1 0 0 1 .95-.27l4.79 1.2a1 1 0 0 1 .75 1z" fill="none" stroke="currentColor" strokeWidth="2"/>
      </symbol>
      <symbol id="i-map" viewBox="0 0 24 24">
        <path d="M9 3l-6 3v15l6-3 6 3 6-3V3l-6 3-6-3z" fill="none" stroke="currentColor" strokeWidth="2"/>
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24">
        <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2"/>
      </symbol>
    </svg>
  );
}
