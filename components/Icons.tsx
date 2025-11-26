// Handgezeichnete, organische Icons im "Mindful Mental Health" Stil
// Warm, nicht perfekt, verspielt

interface IconProps {
  className?: string
}

// Einzelsupervision - Eine Person mit Gedankenblase
export const IconEinzel = ({ className = "w-12 h-12" }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 20c4 0 7-3 7-7s-3-7-7-7-7 3-7 7 3 7 7 7z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M22 45c0-8 4-13 10-13s10 5 10 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M44 18c3-1 8-2 10 2s-2 8-6 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      strokeDasharray="2 2"
    />
    <circle cx="50" cy="15" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="54" cy="19" r="1" fill="currentColor" opacity="0.4"/>
  </svg>
)

// Führungskräfte - Stern/Kompass
export const IconFuehrung = ({ className = "w-12 h-12" }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 8l4 12h12l-10 7 4 13-10-8-10 8 4-13-10-7h12z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M32 52v6M26 54l6-2 6 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
)

// Team - Verbundene Menschen
export const IconTeam = ({ className = "w-12 h-12" }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="44" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="38" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path
      d="M24 22c4 4 8 8 4 12M40 22c-4 4-8 8-4 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="3 2"
      fill="none"
    />
    <path
      d="M12 56c0-6 3-10 8-10M52 56c0-6-3-10-8-10M26 56c0-4 2-6 6-6s6 2 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

// Organisation - Verzweigte Struktur/Baum
export const IconOrganisation = ({ className = "w-12 h-12" }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 56V36M32 36c-8-2-14-8-14-16M32 36c8-2 14-8 14-16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M18 20c-4-6 0-12 6-12s8 4 8 10M46 20c4-6 0-12-6-12s-8 4-8 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="14" cy="16" r="2" fill="currentColor" opacity="0.5"/>
    <circle cx="50" cy="16" r="2" fill="currentColor" opacity="0.5"/>
    <circle cx="32" cy="10" r="2" fill="currentColor" opacity="0.5"/>
    <path
      d="M28 58c0 0 4-2 4-2s4 2 4 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

// Systemisch - Verbundene Kreise
export const IconSystemisch = ({ className = "w-12 h-12" }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="48" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="16" cy="48" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="48" cy="48" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path
      d="M20 20l8 8M44 20l-8 8M20 44l8-8M44 44l-8-8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="2 2"
      fill="none"
    />
  </svg>
)

// Neue Autorität - Anker/Verwurzelung
export const IconAutorita = ({ className = "w-12 h-12" }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 8v40"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M32 8c0 0-3 4-3 6s1.5 3 3 3 3-1 3-3-3-6-3-6z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M20 32h24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M16 48c4-4 8-6 16-6s12 2 16 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M22 52c2-2 5-4 10-4s8 2 10 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="2 2"
      fill="none"
    />
  </svg>
)

// Aufstellung - Figuren im Raum
export const IconAufstellung = ({ className = "w-12 h-12" }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M16 28v12M12 40h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

    <circle cx="48" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M48 24v14M44 38h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

    <circle cx="32" cy="44" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M32 48v8M28 56h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

    <path
      d="M20 26l8 14M44 22l-8 18"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeDasharray="3 3"
      opacity="0.5"
      fill="none"
    />

    <rect x="6" y="10" width="52" height="48" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" fill="none" opacity="0.3"/>
  </svg>
)

// Fallberatung - Sprechblasen
export const IconFallberatung = ({ className = "w-12 h-12" }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 12h24c2 0 4 2 4 4v12c0 2-2 4-4 4H20l-6 6v-6h-2c-2 0-4-2-4-4V16c0-2 2-4 4-4z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M28 36h24c2 0 4 2 4 4v12c0 2-2 4-4 4h-2v6l-6-6H28c-2 0-4-2-4-4V40c0-2 2-4 4-4z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="18" cy="22" r="1.5" fill="currentColor"/>
    <circle cx="24" cy="22" r="1.5" fill="currentColor"/>
    <circle cx="30" cy="22" r="1.5" fill="currentColor"/>
    <circle cx="34" cy="46" r="1.5" fill="currentColor"/>
    <circle cx="40" cy="46" r="1.5" fill="currentColor"/>
    <circle cx="46" cy="46" r="1.5" fill="currentColor"/>
  </svg>
)

// Wertearbeit - Herz mit Kompass
export const IconWerte = ({ className = "w-12 h-12" }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 56s-18-12-18-26c0-8 6-14 14-14 4 0 8 2 10 5 2-3 6-5 10-5 8 0 14 6 14 14 0 14-18 26-18 26z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="32" cy="34" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path
      d="M32 30v8M28 34h8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

// Teamtraining - Dynamische Bewegung
export const IconTeamtraining = ({ className = "w-12 h-12" }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="16" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="44" cy="20" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path
      d="M24 21c0 0-4 8-2 16s8 12 8 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M44 25c0 0 2 8 0 14s-6 10-10 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M18 28l8-4M46 30l-6 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M10 36c4-2 10-2 14 2M54 38c-4-2-10-2-14 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="2 2"
      fill="none"
    />
  </svg>
)
