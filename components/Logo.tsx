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
      <rect x="4" y="4" width="56" height="56" rx="16" fill="#09090b" />
      <path
        d="M24 24.5c0-3.6 3.2-6.5 8.2-6.5 4.4 0 7.4 2.1 8.3 5.2"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M40 39.5c0 3.6-3.2 6.5-8.2 6.5-4.4 0-7.4-2.1-8.3-5.2"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path d="M22 32h20" stroke="#9FA8DA" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
