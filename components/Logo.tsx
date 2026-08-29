export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="6" y="6" width="44" height="44" rx="14" fill="#fff" stroke="url(#g)" strokeWidth="2" style={{ filter: 'drop-shadow(0 4px 10px rgba(15,23,42,0.06))' }} />
      <path d="M36 20L26 34" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="rotate(12 30 27)" />
      <path d="M34 18L42 26" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="rotate(16 38 22)" />
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}
