import React from 'react'

export interface DividerProps {
  /** Thickness */
  thickness?: 1 | 2 | 4
  /** Color variant */
  color?: 'subtle' | 'default' | 'blue' | 'accent'
  /** Vertical spacing around the divider */
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  /** Decorative label in the middle */
  label?: string
  style?: React.CSSProperties
}

const colorMap: Record<string, string> = {
  subtle: 'var(--color-white-100, #EAEDF0)',
  default: 'var(--color-white-200, #E0E0E0)',
  blue: 'var(--color-blue-900, #08428C)',
  accent: 'var(--color-blue-300, #41C0F2)',
}

const spacingMap: Record<string, string> = {
  none: '0',
  sm: '8px',
  md: '16px',
  lg: '24px',
}

export function Divider({ thickness = 1, color = 'default', spacing = 'md', label, style }: DividerProps) {
  const borderColor = colorMap[color]
  const margin = spacingMap[spacing]

  if (label) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: `${margin} 0`, ...style }}>
        <div style={{ flex: 1, height: `${thickness}px`, background: borderColor }} />
        <span style={{
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: '12px',
          fontWeight: 600,
          color: 'var(--color-black-500, #6b6b70)',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          {label}
        </span>
        <div style={{ flex: 1, height: `${thickness}px`, background: borderColor }} />
      </div>
    )
  }

  return (
    <hr style={{
      border: 'none',
      borderTop: `${thickness}px solid ${borderColor}`,
      margin: `${margin} 0`,
      ...style,
    }} />
  )
}
