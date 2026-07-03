import React from 'react'

export interface NavItem {
  label: string
  href?: string
  active?: boolean
}

export interface NavbarProps {
  /** Brand name or logo text */
  brand: string
  /** Navigation items */
  items?: NavItem[]
  /** Color scheme */
  variant?: 'light' | 'blue' | 'dark'
  /** Show CTA button in navbar */
  ctaLabel?: string
  /** CTA click handler */
  onCtaClick?: () => void
  style?: React.CSSProperties
}

const variantStyles: Record<string, React.CSSProperties> = {
  light: { background: '#fff', borderBottom: '1px solid var(--color-white-100, #EAEDF0)', color: 'var(--color-black-700, #28282B)' },
  blue: { background: 'var(--color-blue-900, #08428C)', color: '#fff' },
  dark: { background: 'var(--color-black-700, #28282B)', color: '#fff' },
}

export function Navbar({ brand, items = [], variant = 'light', ctaLabel, onCtaClick, style }: NavbarProps) {
  const isDark = variant !== 'light'

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px',
      height: '64px',
      gap: '32px',
      ...variantStyles[variant],
      ...style,
    }}>
      <span style={{
        fontFamily: 'var(--font-serif, "DM Serif Display", Georgia, serif)',
        fontSize: '22px',
        fontWeight: 400,
        color: 'inherit',
        flexShrink: 0,
      }}>
        {brand}
      </span>

      <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
        {items.map((item, i) => (
          <a
            key={i}
            href={item.href ?? '#'}
            style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: '14px',
              fontWeight: item.active ? 600 : 500,
              color: item.active
                ? (isDark ? '#fff' : 'var(--color-blue-900, #08428C)')
                : (isDark ? 'rgba(255,255,255,0.75)' : 'var(--color-black-700, #28282B)'),
              textDecoration: 'none',
              padding: '8px 12px',
              borderRadius: '6px',
              background: item.active && !isDark ? 'var(--color-white-100, #EAEDF0)' : 'transparent',
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      {ctaLabel && (
        <button
          onClick={onCtaClick}
          style={{
            padding: '8px 20px',
            background: isDark ? '#fff' : 'var(--color-blue-900, #08428C)',
            color: isDark ? 'var(--color-blue-900, #08428C)' : '#fff',
            border: 'none',
            borderRadius: '8px',
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            flexShrink: 0,
          }}>
          {ctaLabel}
        </button>
      )}
    </nav>
  )
}
