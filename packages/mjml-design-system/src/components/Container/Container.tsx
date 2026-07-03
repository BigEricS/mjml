import React from 'react'

export interface ContainerProps {
  /** Horizontal gap between columns */
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  /** Wrap columns */
  wrap?: boolean
  /** Vertical alignment */
  align?: 'start' | 'center' | 'end' | 'stretch'
  children: React.ReactNode
  style?: React.CSSProperties
}

const gapMap: Record<string, string> = {
  none: '0',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '40px',
}

const alignMap: Record<string, string> = {
  start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch',
}

export function Container({ gap = 'lg', wrap = true, align = 'start', children, style }: ContainerProps) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: wrap ? 'wrap' : 'nowrap',
      gap: gapMap[gap],
      alignItems: alignMap[align],
      width: '100%',
      ...style,
    }}>
      {children}
    </div>
  )
}
