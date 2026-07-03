import React from 'react'

export interface HeroProps {
  /** Title text */
  title: string
  /** Subtitle or description */
  subtitle?: string
  /** Background style */
  background?: 'blue' | 'dark' | 'light' | 'gradient'
  /** Alignment */
  align?: 'left' | 'center'
  /** CTA button label */
  ctaLabel?: string
  /** Secondary CTA label */
  secondaryCtaLabel?: string
  /** CTA click handler */
  onCtaClick?: () => void
  /** Overline text above the title */
  overline?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

const bgStyles: Record<string, React.CSSProperties> = {
  blue: { background: 'var(--color-blue-900, #08428C)', color: '#fff' },
  dark: { background: 'var(--color-black-700, #28282B)', color: '#fff' },
  light: { background: 'var(--color-white-100, #EAEDF0)', color: 'var(--color-black-700, #28282B)' },
  gradient: {
    background: 'linear-gradient(135deg, var(--color-blue-900, #08428C) 0%, var(--color-blue-700, #0B4FD9) 60%, var(--color-blue-300, #41C0F2) 100%)',
    color: '#fff',
  },
}

export function Hero({
  title,
  subtitle,
  background = 'gradient',
  align = 'center',
  ctaLabel,
  secondaryCtaLabel,
  onCtaClick,
  overline,
  children,
  style,
}: HeroProps) {
  const bg = bgStyles[background]
  const isDark = background !== 'light'

  return (
    <section style={{
      padding: '80px 40px',
      textAlign: align,
      ...bg,
      ...style,
    }}>
      <div style={{ maxWidth: '760px', margin: align === 'center' ? '0 auto' : undefined }}>
        {overline && (
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: isDark ? 'rgba(255,255,255,0.7)' : 'var(--color-blue-500, #5C6795)',
            marginBottom: '16px',
            marginTop: 0,
          }}>
            {overline}
          </p>
        )}
        <h1 style={{
          fontFamily: 'var(--font-serif, "DM Serif Display", Georgia, serif)',
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.5px',
          margin: '0 0 20px 0',
          color: 'inherit',
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '18px',
            lineHeight: 1.6,
            opacity: isDark ? 0.85 : 0.75,
            margin: '0 0 36px 0',
            color: 'inherit',
          }}>
            {subtitle}
          </p>
        )}
        {(ctaLabel || secondaryCtaLabel) && (
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: align === 'center' ? 'center' : 'flex-start',
            flexWrap: 'wrap',
          }}>
            {ctaLabel && (
              <button
                onClick={onCtaClick}
                style={{
                  padding: '12px 28px',
                  background: isDark ? '#fff' : 'var(--color-blue-900, #08428C)',
                  color: isDark ? 'var(--color-blue-900, #08428C)' : '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}>
                {ctaLabel}
              </button>
            )}
            {secondaryCtaLabel && (
              <button
                style={{
                  padding: '12px 28px',
                  background: 'transparent',
                  color: 'inherit',
                  border: `2px solid ${isDark ? 'rgba(255,255,255,0.5)' : 'var(--color-blue-900, #08428C)'}`,
                  borderRadius: '8px',
                  fontFamily: 'var(--font-sans, Inter, sans-serif)',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}>
                {secondaryCtaLabel}
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
