import React from 'react'

export type SocialNetwork = 'twitter' | 'github' | 'linkedin' | 'instagram' | 'facebook' | 'youtube' | 'email'

export interface SocialLink {
  network: SocialNetwork
  href: string
  label?: string
}

export interface SocialProps {
  /** Social links to display */
  links: SocialLink[]
  /** Display mode */
  variant?: 'icons' | 'pills' | 'links'
  /** Size */
  size?: 'sm' | 'md' | 'lg'
  /** Color scheme */
  color?: 'blue' | 'dark' | 'light' | 'brand'
  /** Orientation */
  direction?: 'row' | 'column'
  style?: React.CSSProperties
}

const networkLabels: Record<SocialNetwork, string> = {
  twitter: 'Twitter / X',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  facebook: 'Facebook',
  youtube: 'YouTube',
  email: 'Email',
}

const networkIcons: Record<SocialNetwork, string> = {
  twitter: '𝕏',
  github: '⌥',
  linkedin: 'in',
  instagram: '◎',
  facebook: 'f',
  youtube: '▶',
  email: '✉',
}

const networkBrandColors: Record<SocialNetwork, string> = {
  twitter: '#000000',
  github: '#24292e',
  linkedin: '#0077B5',
  instagram: '#E1306C',
  facebook: '#1877F2',
  youtube: '#FF0000',
  email: 'var(--color-blue-900, #08428C)',
}

const sizeMap: Record<string, { iconSize: string; fontSize: string; padding: string }> = {
  sm: { iconSize: '32px', fontSize: '12px', padding: '6px 12px' },
  md: { iconSize: '40px', fontSize: '14px', padding: '8px 16px' },
  lg: { iconSize: '48px', fontSize: '16px', padding: '10px 20px' },
}

export function Social({ links, variant = 'icons', size = 'md', color = 'blue', direction = 'row', style }: SocialProps) {
  const { iconSize, fontSize, padding } = sizeMap[size]

  const colorMap: Record<string, { bg: string; fg: string; border: string }> = {
    blue: { bg: 'var(--color-blue-900, #08428C)', fg: '#fff', border: 'var(--color-blue-900, #08428C)' },
    dark: { bg: 'var(--color-black-700, #28282B)', fg: '#fff', border: 'var(--color-black-700, #28282B)' },
    light: { bg: 'var(--color-white-100, #EAEDF0)', fg: 'var(--color-black-700, #28282B)', border: 'var(--color-white-100, #EAEDF0)' },
    brand: { bg: 'transparent', fg: '#fff', border: 'transparent' },
  }

  return (
    <div style={{ display: 'flex', flexDirection: direction, gap: '8px', flexWrap: 'wrap', ...style }}>
      {links.map((link, i) => {
        const icon = networkIcons[link.network]
        const label = link.label ?? networkLabels[link.network]
        const brandColor = color === 'brand' ? networkBrandColors[link.network] : undefined

        if (variant === 'icons') {
          return (
            <a
              key={i}
              href={link.href}
              aria-label={label}
              title={label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: iconSize,
                height: iconSize,
                borderRadius: '50%',
                background: brandColor ?? colorMap[color].bg,
                color: colorMap[color].fg,
                fontSize: fontSize,
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontWeight: 700,
                textDecoration: 'none',
                flexShrink: 0,
              }}
            >
              {icon}
            </a>
          )
        }

        if (variant === 'pills') {
          return (
            <a
              key={i}
              href={link.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding,
                borderRadius: '9999px',
                background: brandColor ?? colorMap[color].bg,
                color: colorMap[color].fg,
                fontSize,
                fontFamily: 'var(--font-sans, Inter, sans-serif)',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <span>{icon}</span>
              <span>{label}</span>
            </a>
          )
        }

        return (
          <a
            key={i}
            href={link.href}
            style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize,
              fontWeight: 500,
              color: brandColor ?? (color === 'light' ? colorMap[color].fg : colorMap[color].bg),
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </a>
        )
      })}
    </div>
  )
}
