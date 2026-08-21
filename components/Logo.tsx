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
      <rect x="6" y="6" width="44" height="44" rx="14" fill="white" stroke="url(#g)" strokeWidth="2" />
      <path d="M40 18L30 32" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="rotate(10 34 25)" />
      <path d="M38 16L46 24" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="rotate(18 42 20)" />
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}
