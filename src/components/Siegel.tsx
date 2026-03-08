export default function Siegel() {
  return (
    <svg
      viewBox="0 0 200 100"
      className="h-12 w-auto -rotate-[25deg] shrink-0 sm:h-14"
      role="img"
      aria-label="Siegel: Das Original"
    >
      <defs>
        <linearGradient id="sheen" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#858585" />
          <stop offset="25%" stopColor="#a8a8a8" />
          <stop offset="45%" stopColor="#d0d0d0" />
          <stop offset="55%" stopColor="#e6e6e6" />
          <stop offset="65%" stopColor="#d0d0d0" />
          <stop offset="80%" stopColor="#a8a8a8" />
          <stop offset="100%" stopColor="#858585" />
        </linearGradient>
        <linearGradient id="goldSheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A89008" />
          <stop offset="30%" stopColor="#ECD048" />
          <stop offset="50%" stopColor="#D0B210" />
          <stop offset="70%" stopColor="#ECD048" />
          <stop offset="100%" stopColor="#A89008" />
        </linearGradient>
      </defs>

      {/* Füllung */}
      <ellipse cx="100" cy="50" rx="82" ry="40" fill="url(#sheen)" />

      {/* Gold-Akzent-Rand */}
      <ellipse
        cx="100"
        cy="50"
        rx="84"
        ry="42"
        fill="none"
        stroke="url(#goldSheen)"
        strokeWidth="1.5"
      />

      {/* Äußerer Ring */}
      <ellipse
        cx="100"
        cy="50"
        rx="82"
        ry="40"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2.5"
        opacity="0.6"
      />

      {/* Dezente Tick-Marks */}
      <ellipse
        cx="100"
        cy="50"
        rx="76"
        ry="34"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeDasharray="2 9"
        opacity="0.4"
      />

      {/* Innerer Ring */}
      <ellipse
        cx="100"
        cy="50"
        rx="71"
        ry="29"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="1"
        opacity="0.3"
      />

      <text
        x="100"
        y="36"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="21"
        fontWeight="700"
        fontFamily="var(--font-inter), Inter, sans-serif"
        letterSpacing="4"
        fill="#2a2a2a"
      >
        DAS
      </text>

      <text
        x="100"
        y="60"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="21"
        fontWeight="700"
        fontFamily="var(--font-inter), Inter, sans-serif"
        letterSpacing="2"
        fill="#2a2a2a"
      >
        ORIGINAL
      </text>
    </svg>
  );
}
