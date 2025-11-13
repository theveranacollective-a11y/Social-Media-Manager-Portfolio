export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* V icon with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      
      {/* Circular background */}
      <circle cx="25" cy="25" r="22" fill="url(#logoGradient)" opacity="0.1" />
      
      {/* V lettermark */}
      <path
        d="M15 15 L25 35 L35 15"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Decorative dots */}
      <circle cx="25" cy="38" r="1.5" fill="#9333ea" />
      
      {/* Text */}
      <text
        x="50"
        y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill="#1f2937"
      >
        The Verana Collective
      </text>
    </svg>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      
      {/* Circular background */}
      <circle cx="25" cy="25" r="22" fill="url(#iconGradient)" opacity="0.1" />
      
      {/* V lettermark */}
      <path
        d="M15 15 L25 35 L35 15"
        stroke="url(#iconGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Decorative dot */}
      <circle cx="25" cy="38" r="1.5" fill="#9333ea" />
    </svg>
  );
}
