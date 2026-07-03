import React from 'react'

export interface TextProps {
  /** Typographic variant */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm' | 'caption' | 'label' | 'overline'
  /** Override the rendered HTML element */
  as?: keyof JSX.IntrinsicElements
  /** Text color token */
  color?: 'default' | 'muted' | 'blue' | 'light' | 'white'
  /** Text alignment */
  align?: 'left' | 'center' | 'right'
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

const variantStyles: Record<string, React.CSSProperties> = {
  h1: { fontFamily: 'var(--font-serif, "DM Serif Display", Georgia, serif)', fontSize: '48px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.5px', margin: 0 },
  h2: { fontFamily: 'var(--font-serif, "DM Serif Display", Georgia, serif)', fontSize: '36px', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.3px', margin: 0 },
  h3: { fontFamily: 'var(--font-serif, "DM Serif Display", Georgia, serif)', fontSize: '28px', fontWeight: 400, lineHeight: 1.2, margin: 0 },
  h4: { fontFamily: 'var(--font-sans, Inter, system-ui, sans-serif)', fontSize: '20px', fontWeight: 600, lineHeight: 1.3, margin: 0 },
  body: { fontFamily: 'var(--font-sans, Inter, system-ui, sans-serif)', fontSize: '16px', fontWeight: 400, lineHeight: 1.6, margin: 0 },
  'body-sm': { fontFamily: 'var(--font-sans, Inter, system-ui, sans-serif)', fontSize: '14px', fontWeight: 400, lineHeight: 1.5, margin: 0 },
  caption: { fontFamily: 'var(--font-sans, Inter, system-ui, sans-serif)', fontSize: '12px', fontWeight: 400, lineHeight: 1.4, margin: 0 },
  label: { fontFamily: 'var(--font-sans, Inter, system-ui, sans-serif)', fontSize: '14px', fontWeight: 600, lineHeight: 1.4, margin: 0 },
  overline: { fontFamily: 'var(--font-sans, Inter, system-ui, sans-serif)', fontSize: '11px', fontWeight: 700, lineHeight: 1.4, letterSpacing: '1.5px', textTransform: 'uppercase' as const, margin: 0 },
}

const colorMap: Record<string, string> = {
  default: 'var(--color-black-700, #28282B)',
  muted: 'var(--color-black-500, #6b6b70)',
  blue: 'var(--color-blue-900, #08428C)',
  light: 'var(--color-blue-300, #41C0F2)',
  white: '#ffffff',
}

const defaultTag: Record<string, keyof JSX.IntrinsicElements> = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4',
  body: 'p', 'body-sm': 'p', caption: 'span', label: 'span', overline: 'span',
}

export function Text({
  variant = 'body',
  as,
  color = 'default',
  align = 'left',
  children,
  style,
  className,
}: TextProps) {
  const Tag = (as ?? defaultTag[variant] ?? 'p') as React.ElementType
  return (
    <Tag
      className={className}
      style={{
        ...variantStyles[variant],
        color: colorMap[color],
        textAlign: align,
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}
