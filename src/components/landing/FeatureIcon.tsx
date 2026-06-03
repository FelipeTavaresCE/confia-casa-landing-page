import type { ReactElement, SVGProps } from 'react'

type IconName =
  | 'alert'
  | 'wallet'
  | 'clock'
  | 'star'
  | 'contract'
  | 'receipt'
  | 'shield'
  | 'briefcase'
  | 'user-check'
  | 'checklist'
  | 'chart'
  | 'sparkles'
  | 'search'
  | 'balance'
  | 'home'

const iconPaths: Record<IconName, ReactElement> = {
  alert: (
    <>
      <path d="M12 9v4m0 4h.01" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M10.29 3.86 1.82 18a2 2 0 0 0 1.73 3h16.9a2 2 0 0 0 1.73-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  wallet: (
    <>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 16.5v-9Z" />
      <path d="M15 12h3.5" strokeLinecap="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  star: (
    <path d="m12 3 2.78 5.63 6.22.9-4.5 4.38 1.06 6.19L12 17.2l-5.56 2.9 1.06-6.19L3 9.53l6.22-.9L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  contract: (
    <>
      <path d="M8 3.5h6l4 4V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5A1.5 1.5 0 0 1 7.5 3.5H8Z" />
      <path d="M14 3.5V8h4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12h6M9 15.5h4" strokeLinecap="round" />
    </>
  ),
  receipt: (
    <>
      <path d="M7 4.5h10V20l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5V4.5Z" strokeLinejoin="round" />
      <path d="M9.5 9h5M9.5 12h5M9.5 15h3" strokeLinecap="round" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5c2.5 2 5.6 2.22 7 2.28V11c0 4.45-2.95 7.8-7 9-4.05-1.2-7-4.55-7-9V5.78c1.4-.06 4.5-.28 7-2.28Z" strokeLinejoin="round" />
      <path d="m9.5 12 1.75 1.75L15 10" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  briefcase: (
    <>
      <path d="M8 6V4.75A1.75 1.75 0 0 1 9.75 3h4.5A1.75 1.75 0 0 1 16 4.75V6" />
      <path d="M4 8.5h16v8.75A1.75 1.75 0 0 1 18.25 19h-12.5A1.75 1.75 0 0 1 4 17.25V8.5Z" strokeLinejoin="round" />
      <path d="M10 12h4" strokeLinecap="round" />
    </>
  ),
  'user-check': (
    <>
      <path d="M16.5 19a4.5 4.5 0 0 0-9 0" strokeLinecap="round" />
      <circle cx="12" cy="8" r="3" />
      <path d="m17 9.5 1.5 1.5 2.5-3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  checklist: (
    <>
      <path d="M8.5 6.5h10M8.5 12h10M8.5 17.5h10" strokeLinecap="round" />
      <path d="m4.5 6.5 1 1 1.5-2m-2.5 6.5 1 1 1.5-2m-2.5 6.5 1 1 1.5-2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  chart: (
    <>
      <path d="M4.5 19.5h15" strokeLinecap="round" />
      <path d="M7.5 16V10M12 16V7M16.5 16v-4" strokeLinecap="round" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z" strokeLinejoin="round" />
      <path d="m18 14 .75 2.25L21 17l-2.25.75L18 20l-.75-2.25L15 17l2.25-.75L18 14Zm-12 1 .75 2.25L9 18l-2.25.75L6 21l-.75-2.25L3 18l2.25-.75L6 15Z" strokeLinejoin="round" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="5.5" />
      <path d="m19 19-3-3" strokeLinecap="round" />
    </>
  ),
  balance: (
    <>
      <path d="M12 4v14M7 7h10M5 19h14" strokeLinecap="round" />
      <path d="m7 7-3 5a3 3 0 0 0 6 0L7 7Zm10 0-3 5a3 3 0 0 0 6 0l-3-5Z" strokeLinejoin="round" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 9.5V19h11V9.5" strokeLinejoin="round" />
      <path d="M10 19v-4.5h4V19" strokeLinejoin="round" />
    </>
  ),
}

type FeatureIconProps = SVGProps<SVGSVGElement> & {
  name: IconName
}

export function FeatureIcon({ name, className, ...props }: FeatureIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  )
}
