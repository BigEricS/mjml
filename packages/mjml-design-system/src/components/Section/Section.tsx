import React from 'react'

export interface SectionProps {
  /** Background color variant */
  background?: 'white' | 'light' | 'blue' | 'dark'
  /** Vertical padding */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  /** Max-width constraint */
  maxWidth?: number | 'none'
  /** Center content */
  centered?: boolean
  children: React.ReactNode
  style?: React.CSSProperties
  as?: 'section' | 'div' | 'article' | 'main'
}

const bgMap: Record<string, React.CSSProperties> = {
  white: { background: '#fff' },
  light: { background: 'var(--color-white-100, #EAEDF0)' },
  blue: { background: 'var(--color-blue-900, #08428C)', color: '#fff' },
  dark: { background: 'var(--color-black-700, #28282B)', color: '#fff' },
}

const paddingMap: Record<string, string> = {
  none: '0',
  sm: '24px',
  md: '48px',
  lg: '80px',
  xl: '120px',
}

export function Section({
  background = 'white',
  padding = 'lg',
  maxWidth = 1200,
  centered = true,
  children,
  style,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag style={{ ...bgMap[background], padding: `${paddingMap[padding]} 24px`, ...style }}>
      <div style={{
        maxWidth: maxWidth === 'none' ? undefined : `${maxWidth}px`,
        margin: centered ? '0 auto' : undefined,
      }}>
        {children}
      </div>
    </Tag>
  )
}
