export default function Logo({ className = "", showText = true }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-11 h-11 flex items-center justify-center">
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4C300" />
              <stop offset="100%" stopColor="#B91C1C" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="22" fill="url(#logoGrad)" />
          <circle
            cx="24"
            cy="24"
            r="18"
            fill="none"
            stroke="#111827"
            strokeWidth="1.5"
            opacity="0.3"
          />
          <path
            d="M24 10 C 18 18, 14 22, 14 28 C 14 34, 18 38, 24 38 C 30 38, 34 34, 34 28 C 34 22, 30 18, 24 10 Z"
            fill="#111827"
            opacity="0.9"
          />
          <circle cx="24" cy="28" r="3" fill="#F4C300" />
        </svg>
      </div>
      {showText && (
        <div className="leading-tight">
          <p className="font-display font-bold text-white text-lg tracking-wide">
            MALANCHA
          </p>
          <p className="text-[10px] font-semibold tracking-[0.3em] text-primary uppercase">
            Cultural Studioz | Kolkata
          </p>
        </div>
      )}
    </div>
  );
}
